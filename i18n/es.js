const I18N_ES = {
    name: "Español",
    dictionary: {
        // Common Vocabulary / Words
        zome: "Zome",
        shape: "Forma",
        faces: "Caras",
        timbers: "Vigas (maderas)",
        framework: "Estructura",
        origami: "Origami",
        view_3D: "Vista 3D",
        vanishing_lines: "Líneas convergentes",
        axes: "Ejes",
        spin: "Girar",
        vertices: "Vértices",
        fullscreen: "Pantalla completa",
        keyboard_shortcuts: "Atajos de teclado",
        skeleton: "Esqueleto",
        outer: "Externo",
        inner: "Interno",
        outer_faces: "Caras externas",
        inner_faces: "Caras internas",
        outer_faces_on_the_ground: "Caras externas en la base",
        inner_faces_on_the_ground: "Caras internas en la base",
        timber_profiles: "Perfiles de viga",
        timbers_of_each_face: "Vigas de cada cara",
        profile: "Perfil",
        face: "Cara",
        spirals: "Espirales",
        flattened_zome: "Zome aplanado (Flattened)",
        flattened_faces: "Caras aplanadas (Flattened)",
        zome_made_with: "Este Zome fue echo con",
        framework_customizer: "Personalizador de estructura",
        dihedral_angle: "Ángulo Dihedral",
        wedge_angle: "Ángulo de cuña",
        face_angles: "Ángulos de caras",
        roof: "Roof",
        left: "izquierda",
        right: "derecha",
        top: "superior (arriba)",
        bottom: "inferior (abajo)",
        front: "enfrente",
        back: "atrás",
        not_allowed: "No permitido",
        valid: "Válido",
        print: "Imprimir",
        bevel: "Bisel",
        no_bevel: "Sin bevel",

        // Tooltips
        tooltip_display_help: "Mostrar ayuda",
        tooltip_close: "Cerrar",
        tooltip_randomize_shape: "Generar forma aleatoria",
        tooltip_reset_settings: "Restablecer ajustes",
        tooltip_save_settings: "Guardar ajustes",
        tooltip_copy_link: "Copiar enlace",
        tooltip_link_buymeacoffee: "¡Invítame a un café ☕ si te encanta Z5omes 🙏 !",
        tooltip_link_facebook: "Ven y chatea con la comunidad 'Zome Building Network' 📢",
        tooltip_link_youtube: "Visita el canal de YouTube 🎥 para aprender más acerca de z5omes",
        tooltip_link_github: "Ve a Github 🐈 si tienes alguna pregunta",
        tooltip_link_linkedin: "Visita mi perfil en Linkedin",
        tooltip_export_2_format: "Exportar al formato $1",
        tooltip_draw_face_colors: "Dibujar colores de cara",
        tooltip_draw_face_centroids: "Dibujar centroides de cara",
        tooltip_split_drawing: "Dividir el dibujo en varias hojas A4 para exportarlo a PDF",
        tooltip_customize_framework: "Personalizar estructura",
        tooltip_show_keyboard_shortcuts: "Mostrar atajos de teclado",
        tooltip_download_3D_view_in_png_format: "Capturar vista 3D y exportar a PNG",
        tooltip_inversion_Y_Z_axes: "Invertir los ejes Y y Z",
        tooltip_bindu_ratio: "Relación 'Bindu' para la corona seleccionada (Disponible solo si el rombo está dividido horizontalmente)",
        tooltip_illuminate_object: "Iluminar objeto 3D",
        tooltip_decrease_spiral_rotations: "Disminuir rotaciones spiral",
        tooltip_increase_spiral_rotations: "Incrementar rotaciones spiral",
        tooltip_add_floor: "Añadir piso",
        tooltip_draw_vanishing_lines: "Dibujar líneas convergentes",
        tooltip_add_zome_reflection: "Añadir reflejo de Zome",
        tooltip_draw_axes: "Dibujar Ejes 3D",
        tooltip_draw_labels: "Dibujar etiquetas",
        tooltip_spin: "Girar activar/desactivar",
        tooltip_selected_crown: "Corona seleccionada",

        // Keyboard shortcuts
        key_H_3D_view: "Restaurar vista de camara",
        key_left_3D_view: "Vista de lado izquierdo",
        key_up_3D_view: "Vista superior",
        key_right_3D_view: "Vista de lado derecho",
        key_down_3D_view: "Vista inferior",
        key_space_3D_view: "Girar activar/desactivar",
        key_mul_3D_view: "Incrementar velocidad de rotación",
        key_div_3D_view: "Disminuir velocidad de rotación",

        // Options
        opt_none: "Ninguno",
        opt_horizontal: "Horizontal",
        opt_vertical: "Vertical",
        opt_footing: "Base (piso)",

        // Help
        help_shape: "La forma de un Zome está determinada por:",
        help_n_param: "Número de rombos rotando alrededor del eje vertical",
        help_m_param: "Número de rombos desde arriba-abajo",
        help_f_param: "Ángulo de forma (Θ theta) | Número (F) que permite calcular la pendiente del zome. F = tan(Θ)",
        help_hr_param: "Proporción de la altura visible del zome respecto a su altura total (Establecer HR a 1 para un zome completo)",
        help_magnetize_param: "Magnetizar para completar el zome con un rombo completo",
        help_kr_param: "Proporción de la longitud de los bordes inferiores a la de los bordes superiores de un rombo",
        help_set_rhombus_param: "Establecer a rombo (equilátero)",
        help_painting_param: "Pintar espirales u otras piezas similares",
        help_zh_param: "Altura de la parte visible del zome",
        help_tw_param: "Ancho de las piezas de madera",
        help_tt_param: "Grosor de las piezas de madera",
        help_am_param: "De izquierda a derecha:",
        help_am_param_1: "Dirección de expansión: ↑ hacia afuera o ↓ hacia adentro",
        help_am_param_2: "Método de ensamblaje",
        help_am_param_3: "Dirección de ensamblaje: en sentido horario, en sentido antihorario o eje de simetría (SemiCone)",
        help_vp_param: "Altura del punto de convergencia (utilizado para construir métodos 'GoodKarma' y 'Beveled')",
        help_zc_param: "Colocar el punto de convergencia en el centroide de todo el zome",
        help_ft_param: "Agregar base según ancho de vigas (madera)",
        help_ro_param: "Desbordamiento del techo",

        // Measurements table
        measurements: "Mediciones",
        id: "Id",
        quantity: "Cantidad",
        width: "Ancho",
        height: "Altura",
        edges: "Bordes",
        angles: "Ángulos",
        slope_angle: "Ángulo de pendiente",
        area: "Área",
        radius: "Radio",
        actual_zome_height: "Altura zome actual",
        num_of_different_faces: "Número de caras diferentes",
        total_number_of_faces: "Número total de caras",
        widest_radius_of_faces: "Radio más amplio de las caras",
        total_area_of_faces: "Total área de las caras",
        num_of_different_timbers: "Número de vigas diferentes",
        total_number_of_timbers: "Número total de vigas (maderas)",
        timber_lengths: "Longitudes de vigas (maderas)",
        total_length_of_timbers: "Longitud total de las vigas (maderas)",
        floor_perimeter: "Perímetro del suelo",
        floor_diameter: "Diámetro del suelo",
        floor_area: "Área del suelo",

        // Toast message
        toast_settings_restored: "¡Los ajustes han sido restaurados!",
        toast_settings_save: "¡Los ajustes han sido guardados!",
        toast_link_copied: "¡Enlace copiado al portapapeles!",
        toast_error: "Ha ocurrido un error",
    },
};