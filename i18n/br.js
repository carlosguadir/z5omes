const I18N_BR = {
    name: "PT Brazil",
    dictionary: {
        // Common Vocabulary / Words
        zome: "Zome",
        shape: "Forma",
        faces: "Lados (Faces)",
        timbers: "Madeiras (Lenhas)",
        framework: "Estrutura (Armação)",
        origami: "Origami",
        view_3D: "Vista 3D",
        vanishing_lines: "Linhas de fuga",
        axes: "Eixos",
        spin: "Girar",
        vertices: "Vértices",
        fullscreen: "Tela cheia",
        keyboard_shortcuts: "Atalhos de teclado",
        skeleton: "Esqueleto",
        outer: "Exterior",
        inner: "Interior",
        outer_faces: "Lados exteriores",
        inner_faces: "Lados interiores",
        outer_faces_on_the_ground: "Lados exteriores posicionados ao solo",
        inner_faces_on_the_ground: "Lados interiores posicionados ao solo",
        timber_profiles: "Perfis das madeiras",
        timbers_of_each_face: "Madeiras de cada lado",
        profile: "Perfil",
        face: "Lado",
        spirals: "Espirais",
        flattened_zome: "Zome achatado",
        flattened_faces: "Lados achatados",
        zome_made_with: "Este zome foi fabricado com",
        framework_customizer: "Personalização da estrutura",
        dihedral_angle: "Ângulo diedro",
        wedge_angle: "Ângulo do calço",
        face_angles: "Ângulos dos lados",
        roof: "Telhado",
        left: "esquerda",
        right: "direita",
        top: "acima",
        bottom: "baixo",
        front: "frente",
        back: "trás",
        not_allowed: "Proibido",
        valid: "Válido",
        print: "Imprimir",
        bevel: "Bisel",
        no_bevel: "Sem bisel",

        // Tooltips
        tooltip_display_help: "Pedir ajuda",
        tooltip_close: "Fechar",
        tooltip_randomize_shape: "Gerar uma forma aleatória",
        tooltip_reset_settings: "Restaurar as configurações",
        tooltip_save_settings: "Salvar as configurações",
        tooltip_copy_link: "Copiar o link",
        tooltip_link_buymeacoffee: "Apoie o Z5omes 🙏 Doe o que puder",
        tooltip_link_facebook: "Participe da comunidade facebook 'Zome Building Network' 📢",
        tooltip_link_youtube: "Visite o nosso canal YouTube 🎥 para saber mais sobre a utilização de z5omes.",
        tooltip_link_github: "Acesse o Github 🐈 se você tiver alguma dúvida",
        tooltip_link_linkedin: "Visite o meu perfil Linkedin",
        tooltip_export_2_format: "Exportar para o formato $1",
        tooltip_draw_face_colors: "Desenhar as cores dos lados",
        tooltip_draw_face_centroids: "Desenhar o baricentro dos lados",
        tooltip_split_drawing: "Dividir o desenho em vários folhas A4 para exportá-lo em formato PDF",
        tooltip_customize_framework: "Personalizar a estrutura",
        tooltip_show_keyboard_shortcuts: "Mostrar os atalhos do teclado",
        tooltip_download_3D_view_in_png_format: "Capturar a vista 3D e exportá-la no formato PNG",
        tooltip_inversion_Y_Z_axes: "Invertir os eixos Y e Z",
        tooltip_bindu_ratio: "Proporção 'Bindu' para a coroa selecionada (disponível unicamente se o losanglo é dividido horizontalmente ou verticalmente)",
        tooltip_illuminate_object: "Iluminar o objeto 3D",
        tooltip_decrease_spiral_rotations: "Diminuir as rotações das espirais",
        tooltip_increase_spiral_rotations: "Aumentar as rotações das espirais",
        tooltip_add_floor: "Acrescentar o solo",
        tooltip_draw_vanishing_lines: "Desenhar as linhas de fuga",
        tooltip_add_zome_reflection: "Acrescentar o reflexo do Zome",
        tooltip_draw_axes: "Desenhar os eixos 3D",
        tooltip_draw_labels: "Desenhar os labéis",
        tooltip_spin: "Rotação ligada/desligada",
        tooltip_selected_crown: "Coroa selecionada",

        // Keyboard shortcuts
        key_H_3D_view: "Reinicializar a vista da câmera",
        key_left_3D_view: "Vista da esquerda",
        key_up_3D_view: "Vista de cima",
        key_right_3D_view: "Vista da direita",
        key_down_3D_view: "Vue de baixo",
        key_space_3D_view: "Rotação ligada/desligada",
        key_mul_3D_view: "Aumentar a velocidade da rotação",
        key_div_3D_view: "Diminuir a velocidade da rotação",

        // Options
        opt_none: "Nenhum",
        opt_horizontal: "Horizontal",
        opt_vertical: "Vertical",
        opt_footing: "Palmilha",

        // Help
        help_shape: "A forma de um zome é determinada pelo :",
        help_n_param: "Número de losanglos girando entorno do eixo vertical, igualmente chamado de 'frequência do zome'",
        help_m_param: "Número de coroas dos losanglos de cima até embaixo",
        help_f_param: "Ângulo de forma(Θ) | Número(F) que permite de calcular a inclinação do zome. F = tan(Θ)",
        help_hr_param: "Proporção da altura visível do zome em relação a sua altura total (Colocar o HR no valor de 1 para o zome inteiro)",
        help_magnetize_param: "Juntar a ponta do último losanglo ao chäo",
        help_kr_param: " Proporção do comprimento dos lados inferiores em relação aos lados superiores de um losanglo",
        help_set_rhombus_param: "Ajustar no formato losanglo (equilateral)",
        help_painting_param: "Colorir os lados em função do label ou colorir as espirais com cores diferentes",
        help_zh_param: "Altura da parte visível do zome antes da criação da estrutura (armação)",
        help_tw_param: "Largura das madeiras",
        help_tt_param: "Espessura das madeiras",
        help_am_param: "Da esquerda para a direita :",
        help_am_param_1: "Direcionamento da criação da estrutura : ↑ para fora ou ↓ para dentro",
        help_am_param_2: "Método de definição do corte da madeira e do regrupamento das lenhas",
        help_am_param_3: "Direção do regrupamentos das lenhas : Sentido horário, anti-horário ou sem nenhum sentido (SemiCone)",
        help_vp_param: "Altura do ponto de fuga (utilizados com os métódos 'GoodKarma' et 'Beveled')",
        help_zc_param: "Definir o ponto de fuga no centro de gravidade do zome na sua integralidade",
        help_ft_param: "Incluir uma palmilha basada na espessura da estrutura",
        help_ro_param: "Sobreposição do telhado",

        // Measurements table
        measurements: "Medidas",
        id: "Id",
        quantity: "Quantidade",
        width: "Largura",
        height: "Altura",
        edges: "Comprimento das linhas",
        angles: "Ângulos",
        slope_angle: "Ângulo de inclinação",
        area: "Área",
        radius: "Raio",
        actual_zome_height: "Tamanho real do zome",
        num_of_different_faces: "Número dos lados das diferentes formas",
        total_number_of_faces: "Número total dos lados",
        widest_radius_of_faces: "Raio máximo dos lados",
        total_area_of_faces: "Área total dos lados",
        num_of_different_timbers: "Número de cada madeira",
        total_number_of_timbers: "Número total das madeiras",
        timber_lengths: "Comprimento mínimo e máximo das madeiras",
        total_length_of_timbers: "Comprimento total das madeiras",
        floor_perimeter: "Perímetro do solo",
        floor_radius: "Raio do solo",
        floor_area: "Área do solo",

        // Toast message
        toast_settings_restored: "As configurações foram restauradas!",
        toast_settings_save: "As configurações foram salvas!",
        toast_link_copied: "O link foi copiado para a área de transferência!",
        toast_error: "Erro!",
    },
};