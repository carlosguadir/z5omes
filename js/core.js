// -----------------------------
// ========== Lexical ==========
// -----------------------------

// * "fig" is a polygon/figure
// * "faces" are the division of a figure into triangles for 3D representation
// * "vertices", "point" or "vector" are just 3D point array [x, y, z]
// * "crown" is a circular distribution to avoid multiple creation of objects
// * "spiral" is a spiral of circular distribution, like a zome without the base
// * "base" is the last figure which close the zome
// * "vector" is a direction
// * "segment" is an array of two points

// ------------------------------------
// ========== Constants ==========
// ------------------------------------

const TAU = 2 * Math.PI;    // 360° in rad
const TAU_Q = Math.PI / 2;  // 90° in rad
const FLOAT_PRECISION = 7;
const FLOAT_2_STR_PRECISION = 2;

const CONNECTION_TYPES = ["GoodKarma", "Piped", "SemiCone"];


// -----------------------------------
// ========== 3D Operations ==========
// -----------------------------------

function add(p1, p2) {
    // Add two 3D points
    return [p1[0] + p2[0], p1[1] + p2[1], p1[2] + p2[2]];
}

function sub(p1, p2) {
    // Subtract two 3D points
    return [p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2]];
}

function mul(p1, k) {
    // Multiply a 3D point by k
    return [p1[0] * k, p1[1] * k, p1[2] * k];
}


function dot_product(vec1, vec2) {
    // The dot product or scalar product of two 3D vectors (or points
    // because a point can be represented as a position vector from the origin).
    return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
}


function cross_product(vec1, vec2) {
    return [
        vec1[1] * vec2[2] - vec1[2] * vec2[1],
        vec1[2] * vec2[0] - vec1[0] * vec2[2],
        vec1[0] * vec2[1] - vec1[1] * vec2[0]
    ];
}

function project(vec1, vec2) {
    // Project vec2 on vec1
    var square2 = squared_norm(vec2, vec2);
    return mul(vec2, dot_product(vec1, vec2) / square2);
}

function perpendicular(vec1, vec2) {
    return sub(vec1, project(vec1, vec2));
}

function squared_norm(vec) {
    // Compute the squared norm of the vector
    return dot_product(vec, vec);
}

function len(vec) {
    // Compute the length (magnitude) of vector
    return Math.sqrt(squared_norm(vec));
}

function dist(p1, p2) {
    // Compute the distance between two 3D points
    return len(sub(p2, p1));
}

function normalize(vec) {
    // Normalizing a vector consists of transforming it so that its norm (or magnitude)
    // becomes equal to 1 while preserving its direction.
    return mul(vec, 1 / len(vec));
}

function midpoint(p1, p2) {
    // Find the midpoint of a segment/line
    return mul(add(p1, p2), 0.5);
}

function point_at(p1, p2, d) {
    // Find point at distance d between two points (from p1 to p2)
    // ex : find_point([50, 0, 0], [100, 0, 0], 20)  =>  [70, 0, 0]
    const vec = sub(p2, p1)
    const normalized_vec = normalize(vec);

    const point = add(p1, mul(normalized_vec, d))
    return point;
}

function intersect(p, v, q, u) {
    // Find the intersection between two lines in 3D defined by
    // p = line1 point, v = line1 direction, q = line2 point, u = line2 direction
    const a = cross_product(v, u)
    const dot = dot_product(a, a)

    // if v and u are parallel (v x u = 0), then no intersection, return NaN point
    if (dot == 0) {
        return [NaN, NaN, NaN];
    }

    // b = (q-p) x u
    const b = cross_product(sub(q, p), u);

    // t = (b.a)/(a.a) = ((Q1-P1) x u) .(v x u) / (v x u) . (v x u)
    const t = dot_product(b, a) / dot;

    // find intersection point by substituting t to the line1 eq
    const point = add(p, mul(v, t))
    return point;
}

function angle(p1, p2, p3) {
    // Compute the angle of 3 points in radians
    const a = dist(p2, p3);
    const b = dist(p1, p2);
    const c = dist(p1, p3);
    return Math.acos((c * c - a * a - b * b) / (-2 * a * b)) || 0;
}

function rotate_2d(vec, theta, origin = [0, 0, 0]) {
    const sin_theta = Math.sin(theta);
    const cos_theta = Math.cos(theta);

    // Rotate an 2D vector [x, y, 0] around an origin
    let delta = sub(vec, origin);
    let x = delta[0] * cos_theta - delta[1] * sin_theta + origin[0];
    let y = delta[0] * sin_theta + delta[1] * cos_theta + origin[1];
    return [x, y, 0]
}

function dihedral_angle(a, b, c) {
    // Compute the dihedral angle from 3 angles
    // https://www.had2know.org/academics/dihedral-angle-calculator-polyhedron.html
    return Math.acos(
        (Math.cos(a) - (Math.cos(b) * Math.cos(c))) / (Math.sin(b) * Math.sin(c))
    )
}


// ---------------------------------
// ========== Conversions ==========
// ---------------------------------

function deg2rad(deg) {
    // Convert degrees to radians
    return deg * Math.PI / 180;
}

function rad2deg(rad) {
    // Convert radians to degrees
    return 180.0 * rad / Math.PI;
}

function to_decimal(x, num_digits = FLOAT_PRECISION) {
    return parseFloat(x.toFixed(num_digits));
}

function to_mm(v, unit) {
    // Helper to convert value to mm
    switch (unit) {
        case "m":
            return v * 1000;
        case "cm":
            return v * 10;
        case "mm":
        default:
            return v;
    }
}

function from_mm(v, unit) {
    // Helper to convert value from mm to other unit
    switch (unit) {
        case "m":
            return v / 1000;
        case "cm":
            return v / 10;
        case "mm":
        default:
            return v;
    }
}

function hsl2rgb(h, s, l) {
    // Convert HSL color to RGB color (0 to 1 value not 255)
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [f(0), f(8), f(4)];
};

function rgb2hex(rgb) {
    // Convert RGB color to HSL color
    return `#${_.reduce(rgb, (res, v) => res + parseInt(255 * v).toString(16).toUpperCase().padStart(2, '0'), "")}`;
}


// -----------------------------
// ========== Helpers ==========
// -----------------------------

function humanize_distance(d, num_digits = FLOAT_2_STR_PRECISION) {
    // Helper to display distances
    if (isNaN(d)) {
        return "";
    }
    // Distance are in milimeters
    if (d >= 1e6) {
        return to_decimal(d / 1e6, num_digits) + "km";
    } else if (d >= 1e3) {
        return to_decimal(d / 1e3, num_digits) + "m";
    } else if (d >= 10) {
        return to_decimal(d / 10, num_digits) + "cm";
    } else {
        return to_decimal(d, num_digits) + "mm";
    }
}

function humanize_area(d, num_digits = FLOAT_2_STR_PRECISION) {
    // Helper to display areas
    if (isNaN(d)) {
        return "";
    }

    // Area are in mm²
    if (d >= 1e12) {
        return to_decimal(d / 1e12, num_digits) + "km²";
    } else if (d >= 1e6) {
        return to_decimal(d / 1e6, num_digits) + "m²";
    } else if (d >= 100) {
        return to_decimal(d / 100, num_digits) + "cm²";
    } else {
        return to_decimal(d, num_digits) + "mm²";
    }
}

function humanize_angle(a, fractionDigits = 2) {
    // Helper to display angle in degrees
    return !isNaN(a) ? a.toFixed(fractionDigits) + "°" : "";
}

function humanize_arr(arr, unit = "") {
    // Helper to display array elements
    const res = _.join(_.map(arr, v => v + unit), " ");
    return `${res}`;
}

function unique_arr(arr) {
    // Set retains list order
    const s = new Set(arr);
    return [...s];
}


function angle2color(theta = 0, beta = 0) {
    const hue = Math.round(((4 + beta) % TAU) / TAU * 360);
    const rgb = hsl2rgb(hue, 80, Math.min(65 + Math.abs(rad2deg(theta) / 90) * 15, 80));
    return new Color(rgb);
}

function color_map(value, start = '#FFFFFF', end = '#000000') {
    const ratio = Math.max(0, Math.min(1, value));
    const r = Math.ceil(parseInt(end.substring(1, 3), 16) * ratio + parseInt(start.substring(1, 3), 16) * (1 - ratio));
    const g = Math.ceil(parseInt(end.substring(3, 5), 16) * ratio + parseInt(start.substring(3, 5), 16) * (1 - ratio));
    const b = Math.ceil(parseInt(end.substring(5, 7), 16) * ratio + parseInt(start.substring(5, 7), 16) * (1 - ratio));
    return rgb2hex(r, g, b);
}

function get_boundaries(points) {
    // Compute Boundaries
    let xMax = Number.MIN_VALUE, yMax = Number.MIN_VALUE,
        xMin = Number.MAX_VALUE, yMin = Number.MAX_VALUE;
    for (let i = 0; i < points.length; i++) {
        [x, y] = points[i];

        // Save Boundaries
        if (x < xMin) xMin = x;
        if (x > xMax) xMax = x;
        if (y < yMin) yMin = y;
        if (y > yMax) yMax = y;
    }
    const width = Math.abs(xMax - xMin);
    const height = Math.abs(yMax - yMin);
    return [xMin, xMax, yMin, yMax, width, height];
}

function download(filename, href) {
    const element = document.createElement("a");
    element.download = filename;
    element.href = href;
    element.click();
    element.remove();
}


// -----------------------------
// ========== Classes ==========
// -----------------------------

class Color {
    constructor(rgb) {
        // Consider that polygon is made by triangle,
        this.rgb = rgb;
        this.hex = rgb2hex(rgb);
    }
}

class CircularDistribution {
    // Also named "crown" in code

    constructor(fig, num) {
        // Define an crown of figure (triangle, kite, etc...) with N instances around the crown.
        this.fig = fig

        // Compute angles and colors
        this.angles = new Array(num);
        this.colors = new Array(num); // list of colors

        // Color depends on figure slope
        const slope = this.fig.slope;
        const incr_rad = TAU / num;
        for (let i = 0; i < num; i++) {
            const a = i * incr_rad;
            this.angles[i] = a;
            this.colors[i] = angle2color(slope, a);
        }
    }
}


class ConvexPolygon {
    constructor(points) {
        // Consider that polygon is made by triangle,
        const num_points = points.length;
        if (num_points < 3) {
            console.error("Not enough points to make a polygon");
            return;
        }

        // Init variables
        this.points = points;
        this.compute()
    }

    get O() {
        return this.points[0];
    }

    get slope() {
        return 0;
    }

    get diameter() {
        return 2 * dist(this.O, [0, this.O[1], 0]);
    }

    compute() {
        // Geometry
        this.num_points = this.points.length;
        this.angles = new Array(this.num_points);           // Array of angles in radians
        this.edge_distances = new Array(this.num_points);   // Edges distances
        this.perimeter = 0;                                 // Decl
        this.area = 0;                                      // Decl

        // 3D
        this.num_faces = 3 * (this.num_points - 2);         // Compute number of faces of a polygon for 3D visualization
        this.faces = new Array(this.num_faces);             // Array of THREE.Vector3 for 3D visualization

        // 2D
        this.planar_points = new Array(this.num_points);    // Array of planar points [x, y, z] for 2D visualization

        // Make a reference to planar 3D points to 2D, Take first point like origin
        const [O, B, C] = [this.points[0], this.points[1], this.points[this.num_points - 1]];
        const x_ref = normalize(sub(C, O));
        const y_ref = normalize(sub(sub(B, O), mul(x_ref, dot_product(sub(B, O), x_ref))));
        const ref_angle = Math.PI / 2 - angle(C, O, B) / 2;
        let x_min = Number.MAX_VALUE, x_max = Number.MIN_VALUE;
        let y_min = Number.MAX_VALUE, y_max = Number.MIN_VALUE;
        let x, y, z, ab, bd, ob, od;

        // Planar Polygon to Make 2D Representation, and compute parameters in one loop
        let iF = 0;
        _.forEach(this.points, (A, i) => {
            const C = this.points[(this.num_points + i - 1) % this.num_points];
            const B = this.points[(i + 1) % this.num_points];
            const D = this.points[(i + 2) % this.num_points];

            // Apply the transformation for planar point
            [x, y, z] = rotate_2d(
                [dot_product(sub(A, O), x_ref), dot_product(sub(A, O), y_ref), 0],
                ref_angle
            )
            this.planar_points[i] = [x, y, z];

            // Save Boundaries
            if (x < x_min) x_min = x;
            if (x > x_max) x_max = x;
            if (y < y_min) y_min = y;
            if (y > y_max) y_max = y;

            // Compute angle
            this.angles[i] = angle(C, A, B);

            // Compute edges distances, and perimeter
            ab = dist(A, B)
            this.edge_distances[i] = ab;
            this.perimeter += ab;

            // Compute triangles
            iF = i * 3;
            if (iF < this.num_faces) {
                // Faces for 3D from △ O, B, D
                this.faces[iF] = new THREE.Vector3(...O)
                this.faces[iF + 1] = new THREE.Vector3(...B)
                this.faces[iF + 2] = new THREE.Vector3(...D)

                // Heron formula to compute area of the triangle
                ob = dist(O, B);
                bd = dist(B, D);
                od = dist(O, D);
                const s = (ob + bd + od) / 2;
                this.area += Math.sqrt(s * (s - ob) * (s - bd) * (s - od));
            }
        });

        // Compute width and height from 2D boundaries
        this.width = Math.abs(x_max - x_min);
        this.height = Math.abs(y_max - y_min);

        // Compute color which depends on slope
        this.color = angle2color(this.slope);
    }
}


class PolygonWithHat extends ConvexPolygon {
    get A() {
        return this.points[0];
    }

    get B() {
        return this.points[1];
    }

    get C() {
        return this.points[this.num_points - 1];
    }

    get hat() {
        // The triangle at the top of polygon
        return [this.A, this.B, this.C];
    }

    get φ() {
        // The vertical ↓ angle
        return angle(this.C, this.A, this.B);
    }

    get ω() {
        // The horizontal → angle
        return angle(this.A, this.B, this.points[2]);
    }

    get diameter() {
        return 2 * dist(this.B, [0, this.B[1], 0]);
    }

    get slope() {
        // Compute the slope of the hat
        const I = midpoint(this.points[1], this.points[this.num_points - 1]);
        let a = angle(this.O, I, [0, I[1], 0]);
        if (a > TAU_Q) {
            a = Math.PI - a
        }
        return a
    }
}


class Triangle extends PolygonWithHat {
}

class Kite extends PolygonWithHat {
    //  Consider Kite like this       A
    //  points = [A, B, D, C]       B ◇ C
    //                                D

    // A, B, C Form the top_triangle
    // B, D, C Form the Base
}

class Rhombus extends Kite {
}


class TruncatedKite extends Kite {
    //  Consider this Trapezium            A
    //  points = [A, B, E, F, C]         B ◇ C
    //                                    E F
}


class ZomeBase extends ConvexPolygon {
}




