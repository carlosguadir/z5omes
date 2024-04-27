const I18N_FR = {
    name: "Français",
    dictionary: {
        // Common Vocabulary / Words
        zome: "zome",
        shape: "Forme",
        framework: "Charpente",
        origami: "Origami",
        view_3D: "Vue 3D",
        vanishing_lines: "Lignes de fuite",
        axes: "Axes",
        spin: "Rotation",
        vertices: "Sommets",
        fullscreen: "Plein écran",
        keyboard_shortcuts: "Raccourcis clavier",
        skeleton: 'Squelette',
        outer: "Extérieur",
        inner: "Intérieur",
        outer_faces: "Faces extérieures",
        inner_faces: "Faces intérieures",
        outer_faces_on_the_ground: "Faces extérieures au sol",
        inner_faces_on_the_ground: "Faces intérieures au sol",
        timber_profiles: "Profils des montants",
        timbers_of_each_face: "Montants de chaque face",
        profile: "profil",
        spirals: 'Spirales',
        flattened_zome: "Zome aplati",
        flattened_faces: "Faces aplaties",
        zome_made_with: "Ce zome a été fabriqué avec",
        framework_customizer: "Personnalisation de la charpente",
        dihedral_angle: "Angle dièdre",
        roof: "Toit",
        left: "gauche",
        right: "droite",
        top: "dessus",
        bottom: "dessous",
        front: "devant",
        back: "derrière",

        // Tooltips
        tooltip_display_help: "Afficher l'aide",
        tooltip_close: "Fermer",
        tooltip_randomize_shape: "Générer une forme aléatoire",
        tooltip_reset_settings: "Restaurer les paramètres",
        tooltip_save_settings: "Sauvegarder les paramètres",
        tooltip_copy_link: "Copier le lien",
        tooltip_link_buymeacoffee: "Achetez moi un café ☕ si vous aimez Z5omes 🙏",
        tooltip_link_facebook: "Venez discuter 📢 avec la communauté 'Zome Network Building'",
        tooltip_link_youtube: "Visitez la chaîne YouTube 🎥 pour en savoir plus sur l'utilisation de z5omes.",
        tooltip_link_github: "Allez sur Github 🐈 si vous avez des questions",
        tooltip_link_linkedin: "Visitez mon profil Linkedin",
        tooltip_export_2_format: "Exporter au format $1",
        tooltip_draw_face_colors: "Dessine les couleurs des faces",
        tooltip_draw_face_centroids: "Dessine les centroïdes des faces",
        tooltip_split_drawing: "Diviser le dessin en plusieurs feuilles A4 pour l'export au format PDF",
        tooltip_customize_framework: "Personnaliser la charpente",
        tooltip_show_keyboard_shortcuts: "Afficher les raccourcis clavier",
        tooltip_download_3D_view_in_png_format: "Capturer la vue 3D et l'exporter au format PNG",
        tooltip_inversion_Y_Z_axes: "Inversion des axes Y et Z",
        tooltip_bindu_ratio: "Rapport 'Bindu' pour la couronne sélectionnée (disponible uniquement si le losange est divisé horizontalement)",
        tooltip_illuminate_object: "Illuminer l'objet 3D",
        tooltip_decrease_spiral_rotations: "Diminuer les rotations de spirales",
        tooltip_increase_spiral_rotations: "Augmenter les rotations de spirales",
        tooltip_add_floor: "Ajouter le sol",
        tooltip_draw_vanishing_lines: "Dessiner les lignes de fuite",
        tooltip_draw_axes: "Dessiner les axes 3D",
        tooltip_draw_labels: "Dessiner les étiquettes",
        tooltip_spin: "Rotation on/off",
        tooltip_selected_crown: "Couronne sélectionnée",

        // Keyboard shortcuts
        key_H_3D_view: "Réinitialiser la vue de la caméra",
        key_left_3D_view: "Vue de gauche",
        key_up_3D_view: "Vue de dessus",
        key_right_3D_view: "Vue de droite",
        key_down_3D_view: "Vue de dessous",
        key_space_3D_view: "Rotation on/off",
        key_mul_3D_view: "Augmenter la vitesse de rotation",
        key_div_3D_view: "Diminuer la vitesse de rotation",

        // Options
        opt_none: "Aucun",
        opt_horizontal: "Horizontal",
        opt_vertical: "Vertical",
        opt_footing: "Semelle",

        // Help
        help_shape: "La forme d'un zome est déterminée par :",
        help_n_param: "Nombre de losanges tournant autour de l'axe vertical, également appelé 'fréquence du zome'",
        help_m_param: "Nombre de couronnes de losanges de haut en bas",
        help_f_param: "Angle de forme(Θ) | Nombre(F) qui permet de calculer la pente du zome. F = tan(Θ)",
        help_hr_param: "Rapport de la hauteur visible du zome sur sa hauteur totale (Réglez HR sur 1 pour un zome entier)",
        help_magnetize_param: "Aimanter pour terminer le zome avec un losange entier",
        help_kr_param: "Rapport de la longueur des bords inférieurs sur celle des bords supérieurs d'un losange",
        help_set_rhombus_param: "Règler sur losange (équilatéral)",
        help_painting_param : "Peindre les faces avec les mêmes étiquettes ou peindre les spirales avec des couleurs différentes",
        help_zh_param : "Hauteur de la partie visible du zome avant expansion (vers l'extérieur/intérieur)",
        help_tw_param: "Largeur des montants",
        help_tt_param: "Profondeur des montants",
        help_am_param: "De gauche à droite :",
        help_am_param_1: "Direction de l'expansion : ↑ vers l'extérieur ou ↓ l'intérieur",
        help_am_param_2: "Méthode d'assemblage",
        help_am_param_3: "Direction de l'assemblage : Sens horaire, anti-horaire ou axe de symétrie (SemiCone)",
        help_vp_param: "Hauteur du point de fuite (utilisé pour construire les méthodes 'GoodKarma' et 'Beveled')",
        help_zc_param: "Mettre le point de fuite au centre de gravité du zome entier",
        help_ft_param : "Ajoute une semelle basée sur la moitié de la largeur des montants",
        help_ro_param : "Débordement du toit",

        // Measurements table
        measurements: "Mesures",
        id: "Id",
        quantity: "Quantité",
        width: "Largeur",
        height: "Hauteur",
        edges: "Longueur des arêtes",
        angles: "Angles",
        slope_angle: "Angle d'inclinaison",
        area: "Surface",
        diameter: "Diamètre",
        total_number_of_faces : "Nombre total de faces",
        widest_diameter_of_faces : "Diamètre le plus large des faces",
        total_area_of_faces : "Surface totale des faces",
        floor_perimeter: "Perimètre du sol",
        floor_diameter: "Diamètre du sol",
        floor_area: "Surface au sol",

        // Toast message
        toast_settings_restored: "Les paramètres ont été restaurés !",
        toast_settings_save: "Les paramètres ont été enregistrés !",
        toast_link_copied: "Le lien a été copié dans le presse-papier !",
        toast_error: "Une erreur est survenue",
    },
};