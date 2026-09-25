/**
 * i18n.js - Spanish / English Internationalization Module
 * Centro Clínico de la Dra. Belisa Medina
 * Dominican Spanish (default) & English
 */

(function () {
  const translations = {
    es: {
      // Document metadata
      page_title: "Centro Clínico de la Dra. Belisa Medina | Dermatología Clínica y Estética en Santo Domingo",
      meta_description: "Centro Clínico de la Dra. Belisa Medina en Naco, Santo Domingo. Atención dermatológica clínica y estética basada en evidencia, tecnología avanzada y rutinas personalizadas.",

      // Top Announcement Banner
      banner_announcement: "CENTRO CLÍNICO DE LA DRA. BELISA MEDINA • Dermatóloga • Naco, Santo Domingo",
      banner_cta: "Reservar Cita",
      banner_disclaimer: "Consultas presenciales y virtuales.",
      banner_view_protocols: "Ver Protocolos",

      // Navigation Bar
      brand_name: "Dra. Belisa Medina",
      brand_subtext: "Dermatología Clínica y Estética",
      nav_modalities: "MODALIDADES",
      nav_tools: "HERRAMIENTAS",
      nav_cellular: "CIENCIA CELULAR",
      nav_system: "SISTEMA DE CUIDADO",
      nav_protocols: "PROTOCOLOS",
      nav_routine: "MI RUTINA",
      nav_cta: "Agendar Cita",

      // Hero Section
      hero_badge: "Dermatóloga • Miembro de la Sociedad Dominicana de Dermatología • Atención basada en evidencia",
      hero_h1_prefix: "Centro Clínico de la Dra. Belisa Medina",
      hero_h1_highlight: "Dermatología Clínica y Estética",
      hero_description: "Atención dermatológica médica y estética de excelencia en Santo Domingo. Unimos diagnóstico avanzado, farmacología personalizada y aparatología de vanguardia para la salud y belleza de su piel.",
      hero_indicator_badge: "Lienzo interactivo",
      hero_indicator_text: "Arrastre los nodos para explorar la secuencia de atención",
      canvas_drag_hint: "Nodos interactivos: Clic y arrastre",

      // Hero Connected Nodes
      node1_category: "01. Diagnóstico",
      node1_tag: "Análisis Facial",
      node1_strong: "Análisis facial digital:",
      node1_text: "Mapeo detallado de la superficie cutánea y textura para personalizar su tratamiento.",

      node2_category: "02. Evaluación",
      node2_tag: "Luz Polarizada",
      node2_strong: "Evaluación de pigmento y rojeces:",
      node2_text: "Luz polarizada para detectar manchas solares y áreas vasculares profundas.",

      node3_category: "03. Formulación",
      node3_tag: "Fórmula Magistral",
      node3_strong: "Fórmula tópica personalizada:",
      node3_text: "Tratamiento magistral adaptado a su tipo de piel y necesidades clínicas.",

      node4_category: "04. Seguridad",
      node4_tag: "Protocolo Médico",
      node4_code_comment: "// Calibración personalizada por fototipo",
      node4_code_line1: "Evaluación de fototipo cutáneo",
      node4_code_line2: "Parámetros médicos adaptados",
      node4_code_line3: "Protección y confort de la piel",
      node4_strong: "Seguridad para cada piel:",
      node4_text: "Ajuste de parámetros según su fototipo para máxima eficacia y cuidado.",

      node5_category: "05. Procedimiento",
      node5_tag: "Morpheus8®",
      node5_strong: "Radiofrecuencia fraccionada:",
      node5_text: "Estimula la producción natural de colágeno y tensa los tejidos profundos.",

      node6_category: "06. Resultado",
      node6_tag: "Salud Cutánea",
      node6_overlay: "● Resultado clínico progresivo",
      node6_strong: "Bienestar y armonía cutánea:",
      node6_text: "Piel renovada, equilibrada y con textura visiblemente más suave y luminosa.",

      // Modalities Section
      modalities_badge: "Tecnología Médica de Vanguardia",
      modalities_title: "Tratamientos dermatológicos avanzados, adaptados a su piel.",
      modalities_desc: "Combinamos tecnología médica de referencia mundial con fórmulas dermatológicas personalizadas. Abordamos cada necesidad con rigor científico y criterio médico, sin soluciones genéricas.",
      modalities_chip1: "Atención Médica Especializada",
      modalities_chip2: "Protocolos Personalizados",
      modalities_chip3: "Seguridad para Cada Fototipo",
      modalities_chip4: "Recuperación Confortable",

      // 12 Modalities
      modality_0_title: "Candela GentleMax Pro®",
      modality_0_spec: "Láser Alexandrite y Nd:YAG para lesiones pigmentadas y depilación médica",
      modality_1_title: "Morpheus8®: Radiofrecuencia Fraccionada",
      modality_1_spec: "Remodelación profunda del colágeno y tensado tisular",
      modality_2_title: "Sciton BBL HERO™",
      modality_2_spec: "Fototerapia avanzada para manchas solares y luminosidad facial",
      modality_3_title: "Fraxel® DUAL",
      modality_3_spec: "Láser fraccionado no ablativo para renovación y textura cutánea",
      modality_4_title: "HydraFacial® Syndeo",
      modality_4_spec: "Limpieza profunda, exfoliación suave e infusión de antioxidantes",
      modality_5_title: "Sofwave™: Ultrasonido Sincrónico",
      modality_5_spec: "Lifting facial y de cuello no invasivo mediante neocolagénesis",
      modality_6_title: "Vbeam® Prima: Láser Vascular",
      modality_6_spec: "Tratamiento específico de rojeces, rosácea y lesiones vasculares",
      modality_7_title: "SkinCeuticals®: Fórmulas Clínicas",
      modality_7_spec: "Antioxidantes médicos y protección celular avanzada",
      modality_8_title: "Retinoides Magistrales Personalizados",
      modality_8_spec: "Formulaciones tópicas adaptadas a la tolerancia de su piel",
      modality_9_title: "Exosomas y Factores de Crecimiento",
      modality_9_spec: "Biotecnología regenerativa para acelerar la recuperación cutánea",
      modality_10_title: "Rellenos de Ácido Hialurónico",
      modality_10_spec: "Restauración armónica de volúmenes con Restylane® y Juvéderm®",
      modality_11_title: "Toxina Botulínica",
      modality_11_spec: "Suavizado natural de líneas de expresión preservando su gesto",

      // Clinical Tools Section
      tools_title: "Herramientas clínicas de precisión para cada etapa de su cuidado",
      tools_subtitle: "Desde el diagnóstico microscópico hasta la restauración dérmica avanzada",
      tools_default_label: "Evaluación dermatológica integral en consulta",
      tool_chip_dermoscopy: "Dermatoscopia",
      tool_chip_dermoscopy_label: "Dermatoscopia digital para evaluación y seguimiento de lunares",
      tool_chip_visia: "Análisis facial VISIA®",
      tool_chip_visia_label: "Análisis facial VISIA® para valoración de pigmento, poros y textura",
      tool_chip_fractional: "Láser fraccionado",
      tool_chip_fractional_label: "Láser fraccionado para renovación de textura y cicatrices",
      tool_chip_subcision: "Subcisión y PRP",
      tool_chip_subcision_label: "Subcisión y PRP (plasma rico en plaquetas) para cicatrices",
      tool_chip_cryo: "Crioterapia",
      tool_chip_cryo_label: "Crioterapia focalizada para lesiones benignas de la piel",
      tool_chip_ultrasound: "Lifting con ultrasonido",
      tool_chip_ultrasound_label: "Lifting con ultrasonido Sofwave™ para tensado facial y de cuello",
      tool_chip_barrier: "Barrera cutánea",
      tool_chip_barrier_label: "Reparación intensiva de la barrera cutánea con lípidos biomiméticos",
      tool_chip_vectors: "Mapeo de expresión",
      tool_chip_vectors_label: "Mapeo anatómico para aplicación armónica de toxina botulínica",
      tool_chip_vascular: "Láser vascular 595 nm",
      tool_chip_vascular_label: "Láser vascular 595 nm para rosácea, rojeces y telangiectasias",
      tool_chip_peels: "Peeling químico",
      tool_chip_peels_label: "Peeling químico médico adaptado al fototipo y necesidad de la piel",
      tool_chip_led: "Terapia LED",
      tool_chip_led_label: "Terapia fotodinámica LED para calmar la piel y bioestimulación",

      // Cellular Outcome Section
      outcome_title: "Cuidado Integral de Cada Capa de la Piel",
      outcome_subtitle: "La epidermis, la unión dermoepidérmica y la dermis profunda reciben el estímulo adecuado para recuperar su vitalidad natural.",
      layer1_title: "Capa 01: Estrato córneo y manto ácido",
      layer1_desc: "Protección de la barrera cutánea, equilibrio del microbioma y retención de humedad.",
      layer1_badge: "Superficie cutánea",
      layer2_title: "Capa 02: Capa basal y melanocitos",
      layer2_desc: "Regulación de la pigmentación para un tono más uniforme y luminoso.",
      layer2_badge: "Epidermis profunda",
      layer3_title: "Capa 03: Dermis papilar y microvasculatura",
      layer3_desc: "Oxigenación de los tejidos, soporte capilar y disminución de la inflamación.",
      layer3_badge: "Soporte dérmico",
      layer4_title: "Capa 04: Dermis reticular y fibras de colágeno",
      layer4_desc: "Estimulación de colágeno y elastina para mayor firmeza y elasticidad duradera.",
      layer4_badge: "Estructura y firmeza",

      hud_title: "SEGUIMIENTO CLÍNICO PERSONALIZADO",
      hud_status: "ATENCIÓN CONTINUA",
      hud_metric1_val: "Barrera Fortalecida",
      hud_metric1_label: "Protección contra agresores externos y pérdida de hidratación",
      hud_metric2_val: "Tono Uniforme",
      hud_metric2_label: "Atenuación progresiva de manchas solares y rojeces",
      hud_metric3_val: "Textura Suave",
      hud_metric3_label: "Renovación de la superficie cutánea y poros menos visibles",
      hud_metric4_val: "Piel Protegida",
      hud_metric4_label: "Hábitos y fotoprotección diaria para prevenir el fotoenvejecimiento",
      hud_footer_note: "Plan médico supervisado por la Dra. Belisa Medina",
      hud_footer_btn: "Consultar mi caso",

      // Workflow to Patient App Section
      w2a_eyebrow: "Continuidad en Su Cuidado Dermatológico",
      w2a_left_label: "Tratamiento en Clínica",
      w2a_right_label: "Su Rutina en Casa (App)",
      w2a_subtitle: "Su tratamiento en cabina se complementa con su rutina guiada en el hogar a través de nuestra aplicación para pacientes.",
      w2a_step1_badge: "Paso 01 • Consulta y Diagnóstico",
      w2a_step2_badge: "Paso 02 • Procedimiento en Cabina",
      w2a_step3_badge: "Paso 03 • Plan de Cuidado Continuo",

      // Protocols Carousel Section
      protocols_title: "Protocolos Dermatológicos Integrales",
      protocols_subtitle: "Planes médicos estructurados para tratar afecciones complejas con seguimiento continuo.",
      proto1_category: "Cicatrices de Acné y Textura",
      proto1_heading: "Tratamiento Integral de Cicatrices",
      proto1_benefit: "Piel más lisa y uniforme",
      proto1_combo: "Subcisión + Morpheus8® + PRP",
      proto1_btn: "Solicitar Cita",

      proto2_category: "Pigmentación y Manchas",
      proto2_heading: "Control de Melasma y Manchas",
      proto2_benefit: "Tono homogéneo y luminoso",
      proto2_combo: "Sciton BBL HERO™ + Retinoides magistrales",
      proto2_btn: "Solicitar Cita",

      proto3_category: "Firmeza y Definición",
      proto3_heading: "Bioestimulación y Tensado Facial",
      proto3_benefit: "Efecto tensor sin cirugía",
      proto3_combo: "Sofwave™ + Bioestimuladores de colágeno",
      proto3_btn: "Solicitar Cita",

      proto4_category: "Salud Vascular Facial",
      proto4_heading: "Control de Rosácea y Enrojecimiento",
      proto4_benefit: "Calma el enrojecimiento y la congestión",
      proto4_combo: "Vbeam® Prima + Sueros calmantes",
      proto4_btn: "Solicitar Cita",

      proto5_category: "Cuidado Antiedad Preventivo",
      proto5_heading: "Renovación Celular con Retinoides",
      proto5_benefit: "Renovación celular continua",
      proto5_combo: "Retinoides magistrales + Hidratación de barrera",
      proto5_btn: "Solicitar Cita",

      proto6_category: "Área Periorbital",
      proto6_heading: "Rejuvenecimiento de la Mirada",
      proto6_benefit: "Mirada descansada y firme",
      proto6_combo: "Láser fraccionado + PRP en ojeras",
      proto6_btn: "Solicitar Cita",

      // Footer
      footer_cta_btn: "Agendar Cita",
      footer_top_left: "Ciencia Médica Dermatológica",
      footer_top_right: "Cuidado Personalizado y Cercano",
      footer_col1_title: "Atención Clínica",
      footer_link_modalities: "Modalidades Médicas",
      footer_link_tools: "Herramientas Clínicas",
      footer_link_protocols: "Protocolos de Cuidado",
      footer_link_virtual: "Consultas Virtuales",

      footer_col2_title: "Centro Médico",
      footer_link_doctor: "Sobre la Dra. Medina",
      footer_link_hours: "Horario y Ubicación",

      footer_col3_title: "Pacientes",
      footer_link_routine: "Mi Rutina",
      footer_link_book: "Reservar Cita",
      footer_link_whatsapp: "WhatsApp Directo",
      footer_link_instagram: "Instagram",

      footer_col4_title: "Contacto y Ubicación",
      footer_address: "Naco, Santo Domingo, República Dominicana",
      footer_phone: "Teléfono: 849-875-4464",
      footer_whatsapp: "WhatsApp: 849-875-4464",
      footer_email: "Correo: info@centrodramedina.com",
      footer_hours: "Horario: 8:00 a. m. – 6:00 p. m.",
      footer_consult_types: "Consultas presenciales y virtuales",

      footer_badge1: "Médica egresada de UNIBE",
      footer_badge2: "Residencia en Dermatología — Instituto Dermatológico Dominicano y Cirugía de Piel (IDCP)",
      footer_badge3: "Miembro de la Sociedad Dominicana de Dermatología",
      footer_badge4: "Máster en Toxina Botulínica — México",

      footer_disclaimer: "La información de este sitio es educativa y no reemplaza una consulta médica.",
      footer_copyright: "© 2026 Centro Clínico de la Dra. Belisa Medina. Todos los derechos reservados.",

      // Booking Modal
      modal_book_title: "Solicitar Consulta Dermatológica",
      modal_book_desc: "Diligencie sus datos y le abriremos WhatsApp para confirmar su cita con el equipo de la Dra. Belisa Medina.",
      form_name_label: "Nombre Completo",
      form_name_placeholder: "Ej. Ana Pérez",
      form_phone_label: "Teléfono / WhatsApp",
      form_phone_placeholder: "849-000-0000",
      form_email_label: "Correo Electrónico (opcional)",
      form_email_placeholder: "nombre@ejemplo.com",
      form_treatment_label: "Motivo de Consulta o Tratamiento",
      form_date_label: "Fecha Preferida y Modalidad",
      form_format_presencial: "Presencial (Naco, Santo Domingo)",
      form_format_virtual: "Virtual (Tele-Dermatología)",
      form_submit_btn: "Continuar por WhatsApp",
      form_confirmation_msg: "Le abrimos WhatsApp para confirmar su cita. Horario de atención: 8:00 a. m. – 6:00 p. m.",

      // Treatment Select Options
      opt_general: "Consulta Dermatológica General",
      opt_acne: "Cicatrices de Acné y Textura",
      opt_melasma: "Melasma y Manchas Solares",
      opt_morpheus: "Morpheus8®: Radiofrecuencia Fraccionada",
      opt_fraxel: "Fraxel® DUAL: Renovación Cutánea",
      opt_sofwave: "Sofwave™: Ultrasonido y Tensado Facial",
      opt_rosacea: "Rosácea y Láser Vascular Vbeam®",
      opt_moles: "Dermatoscopia y Revisión de Lunares",
      opt_fillers: "Rellenos de Ácido Hialurónico",
      opt_botox: "Toxina Botulínica",

      // About Doctor Modal
      modal_doctor_title: "Dra. Belisa Medina",
      modal_doctor_subtitle: "Dermatología Clínica y Estética",
      modal_doctor_p1: "La Dra. Belisa Medina es médica especialista en dermatología, dedicada al diagnóstico y tratamiento integral de afecciones de la piel, pelo y uñas, así como al rejuvenecimiento estético armónico.",
      modal_doctor_cred1: "Médica egresada de la Universidad Iberoamericana (UNIBE).",
      modal_doctor_cred2: "Especialidad y Residencia en Dermatología en el Instituto Dermatológico Dominicano y Cirugía de Piel «Dr. Huberto Bogaert Díaz» (IDCP).",
      modal_doctor_cred3: "Miembro activo de la Sociedad Dominicana de Dermatología.",
      modal_doctor_cred4: "Máster en Toxina Botulínica — México.",
      modal_doctor_loc_title: "Consultorio y Horarios",
      modal_doctor_loc: "Naco, Santo Domingo, República Dominicana",
      modal_doctor_hours: "Horario: Lunes a viernes, 8:00 a. m. – 6:00 p. m.",
      modal_doctor_formats: "Modalidades: Consultas presenciales y virtuales",
      modal_doctor_btn: "Reservar Cita con la Dra. Medina",

      // Routine Modal
      modal_routine_title: "Su Rutina Personalizada",
      modal_routine_subtitle: "Acceso exclusivo para pacientes de la Dra. Belisa Medina",
      modal_routine_p1: "Al concluir su consulta médica (presencial o virtual), le enviamos a su WhatsApp un enlace personal con su rutina de cuidado facial.",
      modal_routine_p2: "En su app personal podrá ver sus productos de día y de noche, notas médicas de la doctora, fotos de referencia y el conteo de días restantes de cada tratamiento.",
      modal_routine_p3: "¿Perdió o no encuentra el enlace de su rutina? Escríbanos por WhatsApp y con gusto se lo reenviamos a la brevedad.",
      modal_routine_btn: "Solicitar Enlace por WhatsApp",
      modal_routine_close: "Cerrar"
    },

    en: {
      // Document metadata
      page_title: "Centro Clínico de la Dra. Belisa Medina | Clinical & Aesthetic Dermatology in Santo Domingo",
      meta_description: "Dr. Belisa Medina Clinical Center in Naco, Santo Domingo. Evidence-based clinical and aesthetic dermatology, advanced technology, and personalized skincare routines.",

      // Top Announcement Banner
      banner_announcement: "DRA. BELISA MEDINA CLINICAL CENTER • Dermatologist • Naco, Santo Domingo",
      banner_cta: "Book Appointment",
      banner_disclaimer: "In-person & virtual consultations.",
      banner_view_protocols: "View Protocols",

      // Navigation Bar
      brand_name: "Dr. Belisa Medina",
      brand_subtext: "Clinical & Aesthetic Dermatology",
      nav_modalities: "MODALITIES",
      nav_tools: "CLINICAL TOOLS",
      nav_cellular: "CELLULAR SCIENCE",
      nav_system: "CARE SYSTEM",
      nav_protocols: "PROTOCOLS",
      nav_routine: "MY ROUTINE",
      nav_cta: "Book Appointment",

      // Hero Section
      hero_badge: "Dermatologist • Member of the Dominican Society of Dermatology • Evidence-based care",
      hero_h1_prefix: "Dr. Belisa Medina Clinical Center",
      hero_h1_highlight: "Clinical & Aesthetic Dermatology",
      hero_description: "Premier medical and aesthetic dermatology care in Santo Domingo. We unite advanced diagnosis, personalized pharmacology, and state-of-the-art technology for the health and beauty of your skin.",
      hero_indicator_badge: "Interactive canvas",
      hero_indicator_text: "Drag the nodes below to explore the care sequence",
      canvas_drag_hint: "Interactive nodes: Click & drag",

      // Hero Connected Nodes
      node1_category: "01. Diagnostic",
      node1_tag: "Facial Analysis",
      node1_strong: "Digital facial analysis:",
      node1_text: "Detailed skin surface and texture mapping to tailor your personalized treatment.",

      node2_category: "02. Evaluation",
      node2_tag: "Polarized Light",
      node2_strong: "Pigment & redness evaluation:",
      node2_text: "Cross-polarized light detects sun spots and deeper vascular congestion.",

      node3_category: "03. Formulation",
      node3_tag: "Custom Rx",
      node3_strong: "Custom topical formulation:",
      node3_text: "Compounded active ingredients tailored specifically to your skin tolerance.",

      node4_category: "04. Safety",
      node4_tag: "Medical Protocol",
      node4_code_comment: "// Phototype customized calibration",
      node4_code_line1: "Skin phototype evaluation",
      node4_code_line2: "Tailored clinical parameters",
      node4_code_line3: "Skin protection & comfort",
      node4_strong: "Safety for every skin type:",
      node4_text: "Parameters adjusted to your phototype for optimal efficacy and skin safety.",

      node5_category: "05. Procedure",
      node5_tag: "Morpheus8®",
      node5_strong: "Fractional radiofrequency:",
      node5_text: "Stimulates natural collagen production and firms deeper dermal tissues.",

      node6_category: "06. Outcome",
      node6_tag: "Skin Vitality",
      node6_overlay: "● Progressive clinical result",
      node6_strong: "Skin wellness & harmony:",
      node6_text: "Refreshed, balanced skin with visibly smoother texture and natural glow.",

      // Modalities Section
      modalities_badge: "State-of-the-Art Medical Technology",
      modalities_title: "Advanced dermatological treatments, tailored to your skin.",
      modalities_desc: "We combine world-class medical technologies with personalized dermatological formulations. Every concern is treated with clinical rigor, without generic one-size-fits-all solutions.",
      modalities_chip1: "Specialized Medical Care",
      modalities_chip2: "Custom Protocols",
      modalities_chip3: "Safe for Every Phototype",
      modalities_chip4: "Comfortable Recovery",

      // 12 Modalities
      modality_0_title: "Candela GentleMax Pro®",
      modality_0_spec: "Alexandrite & Nd:YAG laser for pigmented lesions and medical hair removal",
      modality_1_title: "Morpheus8®: Fractional Radiofrequency",
      modality_1_spec: "Deep collagen remodeling and non-surgical tissue tightening",
      modality_2_title: "Sciton BBL HERO™",
      modality_2_spec: "Advanced phototherapy for sun spots, redness, and facial radiance",
      modality_3_title: "Fraxel® DUAL",
      modality_3_spec: "Non-ablative fractional laser for cellular renewal and skin smoothing",
      modality_4_title: "HydraFacial® Syndeo",
      modality_4_spec: "Deep vortex cleansing, gentle exfoliation, and antioxidant infusion",
      modality_5_title: "Sofwave™: Synchronous Ultrasound",
      modality_5_spec: "Non-invasive face and neck lifting through synchronous ultrasound",
      modality_6_title: "Vbeam® Prima: Vascular Laser",
      modality_6_spec: "Targeted vascular laser for facial redness, rosacea, and spider veins",
      modality_7_title: "SkinCeuticals®: Clinical Formulas",
      modality_7_spec: "Physician-dispensed antioxidants and advanced cellular protection",
      modality_8_title: "Custom Compounded Retinoids",
      modality_8_spec: "Compounded prescription retinoids calibrated to your skin tolerance",
      modality_9_title: "Exosomes & Growth Factors",
      modality_9_spec: "Regenerative biotechnology to support natural healing and repair",
      modality_10_title: "Hyaluronic Acid Fillers",
      modality_10_spec: "Harmonious facial volume restoration with Restylane® and Juvéderm®",
      modality_11_title: "Botulinum Toxin",
      modality_11_spec: "Natural smoothing of expression lines while preserving your unique facial gesture",

      // Clinical Tools Section
      tools_title: "Precision clinical tools for every step of your care",
      tools_subtitle: "From microscopic diagnosis to advanced dermal restoration",
      tools_default_label: "Comprehensive dermatological clinical evaluation",
      tool_chip_dermoscopy: "Dermoscopy",
      tool_chip_dermoscopy_label: "Digital dermoscopy for mole evaluation and skin surveillance",
      tool_chip_visia: "VISIA® Facial Analysis",
      tool_chip_visia_label: "VISIA® facial analysis for subsurface pigment, pore, and texture evaluation",
      tool_chip_fractional: "Fractional Laser",
      tool_chip_fractional_label: "Fractional laser for skin texture renewal and scar smoothing",
      tool_chip_subcision: "Subcision & PRP",
      tool_chip_subcision_label: "Precision subcision and PRP (platelet-rich plasma) for scar release",
      tool_chip_cryo: "Cryotherapy",
      tool_chip_cryo_label: "Targeted cryotherapy for benign epidermal skin lesions",
      tool_chip_ultrasound: "Ultrasound Lift",
      tool_chip_ultrasound_label: "Sofwave™ synchronous ultrasound for face and neck skin tightening",
      tool_chip_barrier: "Skin Barrier",
      tool_chip_barrier_label: "Intensive skin barrier recovery with biomimetic lipid emulsions",
      tool_chip_vectors: "Expression Mapping",
      tool_chip_vectors_label: "Anatomical mapping for natural, balanced botulinum toxin treatment",
      tool_chip_vascular: "595nm Vascular Laser",
      tool_chip_vascular_label: "595nm vascular laser for rosacea, facial redness, and spider veins",
      tool_chip_peels: "Chemical Peel",
      tool_chip_peels_label: "Medical-grade chemical peel customized to your skin phototype",
      tool_chip_led: "LED Therapy",
      tool_chip_led_label: "Photodynamic LED therapy to calm inflammation and boost cellular energy",

      // Cellular Outcome Section
      outcome_title: "Comprehensive Care for Every Skin Layer",
      outcome_subtitle: "The epidermis, dermo-epidermal junction, and deep dermis receive targeted care to restore natural skin vitality.",
      layer1_title: "Layer 01: Stratum Corneum & Acid Mantle",
      layer1_desc: "Skin barrier defense, microbiome balance, and optimal moisture retention.",
      layer1_badge: "Skin Surface",
      layer2_title: "Layer 02: Basal Layer & Melanocytes",
      layer2_desc: "Pigmentation regulation for a more even, naturally luminous skin tone.",
      layer2_badge: "Deep Epidermis",
      layer3_title: "Layer 03: Papillary Dermis & Microvasculature",
      layer3_desc: "Tissue oxygenation, capillary support, and reduction of chronic inflammation.",
      layer3_badge: "Dermal Support",
      layer4_title: "Layer 04: Reticular Dermis & Collagen Matrix",
      layer4_desc: "Stimulation of collagen and elastin fibers for lasting firmness and elasticity.",
      layer4_badge: "Firmness & Structure",

      hud_title: "PERSONALIZED CLINICAL FOLLOW-UP",
      hud_status: "CONTINUOUS CARE",
      hud_metric1_val: "Strengthened Barrier",
      hud_metric1_label: "Defense against environmental stressors and moisture loss",
      hud_metric2_val: "Even Tone",
      hud_metric2_label: "Progressive softening of sun spots and persistent redness",
      hud_metric3_val: "Smooth Texture",
      hud_metric3_label: "Refined skin surface with visibly minimized pore appearance",
      hud_metric4_val: "Protected Skin",
      hud_metric4_label: "Daily habits and sun protection to prevent photoaging",
      hud_footer_note: "Medical plan supervised by Dr. Belisa Medina",
      hud_footer_btn: "Consult my case",

      // Workflow to Patient App Section
      w2a_eyebrow: "Continuous Dermatological Care",
      w2a_left_label: "In-Clinic Care",
      w2a_right_label: "At-Home Routine (App)",
      w2a_subtitle: "Your in-office clinical treatment is paired with a guided at-home routine through our patient app.",
      w2a_step1_badge: "Step 01 • Consultation & Diagnosis",
      w2a_step2_badge: "Step 02 • In-Office Procedure",
      w2a_step3_badge: "Step 03 • Continuous Care Plan",

      // Protocols Carousel Section
      protocols_title: "Comprehensive Dermatological Protocols",
      protocols_subtitle: "Structured medical care plans designed for complex conditions with ongoing follow-up.",
      proto1_category: "Acne Scars & Texture",
      proto1_heading: "Comprehensive Acne Scar Protocol",
      proto1_benefit: "Smoother, more even skin",
      proto1_combo: "Subcision + Morpheus8® + PRP",
      proto1_btn: "Request Appointment",

      proto2_category: "Pigmentation & Spots",
      proto2_heading: "Melasma & Sun Spot Protocol",
      proto2_benefit: "Even, luminous skin tone",
      proto2_combo: "Sciton BBL HERO™ + Custom retinoids",
      proto2_btn: "Request Appointment",

      proto3_category: "Firmness & Contour",
      proto3_heading: "Biostimulation & Skin Tightening",
      proto3_benefit: "Non-surgical skin tightening",
      proto3_combo: "Sofwave™ + Collagen biostimulators",
      proto3_btn: "Request Appointment",

      proto4_category: "Facial Vascular Health",
      proto4_heading: "Rosacea & Redness Protocol",
      proto4_benefit: "Calms redness and facial flushing",
      proto4_combo: "Vbeam® Prima + Calming serums",
      proto4_btn: "Request Appointment",

      proto5_category: "Preventive Anti-Aging",
      proto5_heading: "Cellular Renewal & Retinoids",
      proto5_benefit: "Continuous cellular renewal",
      proto5_combo: "Custom retinoids + Barrier hydration",
      proto5_btn: "Request Appointment",

      proto6_category: "Periorbital Area",
      proto6_heading: "Under-Eye Rejuvenation Protocol",
      proto6_benefit: "Refreshed, firmer under-eye area",
      proto6_combo: "Fractional laser + PRP for under-eye circles",
      proto6_btn: "Request Appointment",

      // Footer
      footer_cta_btn: "Book Appointment",
      footer_top_left: "Medical Dermatological Science",
      footer_top_right: "Personalized & Compassionate Care",
      footer_col1_title: "Clinical Care",
      footer_link_modalities: "Medical Modalities",
      footer_link_tools: "Clinical Tools",
      footer_link_protocols: "Care Protocols",
      footer_link_virtual: "Virtual Consultations",

      footer_col2_title: "Medical Center",
      footer_link_doctor: "About Dr. Medina",
      footer_link_hours: "Hours & Location",

      footer_col3_title: "Patients",
      footer_link_routine: "My Routine",
      footer_link_book: "Book Appointment",
      footer_link_whatsapp: "Direct WhatsApp",
      footer_link_instagram: "Instagram",

      footer_col4_title: "Contact & Location",
      footer_address: "Naco, Santo Domingo, Dominican Republic",
      footer_phone: "Phone: 849-875-4464",
      footer_whatsapp: "WhatsApp: 849-875-4464",
      footer_email: "Email: info@centrodramedina.com",
      footer_hours: "Hours: 8:00 a.m. – 6:00 p.m.",
      footer_consult_types: "In-person & virtual consultations",

      footer_badge1: "Medical degree, UNIBE",
      footer_badge2: "Dermatology residency — Dominican Institute of Dermatology and Skin Surgery (IDCP)",
      footer_badge3: "Member, Dominican Society of Dermatology",
      footer_badge4: "Master's in Botulinum Toxin — Mexico",

      footer_disclaimer: "The information on this site is educational and does not replace medical consultation.",
      footer_copyright: "© 2026 Centro Clínico de la Dra. Belisa Medina. All rights reserved.",

      // Booking Modal
      modal_book_title: "Request Dermatological Consultation",
      modal_book_desc: "Fill in your details and we will open WhatsApp to confirm your appointment with Dr. Belisa Medina's team.",
      form_name_label: "Full Name",
      form_name_placeholder: "E.g. Jane Doe",
      form_phone_label: "Phone / WhatsApp",
      form_phone_placeholder: "849-000-0000",
      form_email_label: "Email Address (optional)",
      form_email_placeholder: "name@example.com",
      form_treatment_label: "Reason for Consultation or Treatment",
      form_date_label: "Preferred Date & Format",
      form_format_presencial: "In-Person (Naco, Santo Domingo)",
      form_format_virtual: "Virtual (Tele-Dermatology)",
      form_submit_btn: "Continue via WhatsApp",
      form_confirmation_msg: "WhatsApp opened to confirm your appointment. Office hours: 8:00 a.m. – 6:00 p.m.",

      // Treatment Select Options
      opt_general: "General Dermatological Consultation",
      opt_acne: "Acne Scars & Texture",
      opt_melasma: "Melasma & Sun Spots",
      opt_morpheus: "Morpheus8®: Fractional Radiofrequency",
      opt_fraxel: "Fraxel® DUAL: Skin Renewal",
      opt_sofwave: "Sofwave™: Ultrasound Skin Tightening",
      opt_rosacea: "Rosacea & Vbeam® Vascular Laser",
      opt_moles: "Dermoscopy & Mole Check",
      opt_fillers: "Hyaluronic Acid Fillers",
      opt_botox: "Botulinum Toxin",

      // About Doctor Modal
      modal_doctor_title: "Dr. Belisa Medina",
      modal_doctor_subtitle: "Clinical & Aesthetic Dermatology",
      modal_doctor_p1: "Dr. Belisa Medina is a dermatologist dedicated to the comprehensive diagnosis and medical management of skin, hair, and nail conditions, as well as harmonious aesthetic rejuvenation.",
      modal_doctor_cred1: "Medical degree from Universidad Iberoamericana (UNIBE).",
      modal_doctor_cred2: "Specialty and Residency in Dermatology at the Dominican Institute of Dermatology and Skin Surgery «Dr. Huberto Bogaert Díaz» (IDCP).",
      modal_doctor_cred3: "Active member of the Dominican Society of Dermatology.",
      modal_doctor_cred4: "Master's in Botulinum Toxin — Mexico.",
      modal_doctor_loc_title: "Office & Hours",
      modal_doctor_loc: "Naco, Santo Domingo, Dominican Republic",
      modal_doctor_hours: "Hours: Monday to Friday, 8:00 a.m. – 6:00 p.m.",
      modal_doctor_formats: "Formats: In-person and virtual consultations",
      modal_doctor_btn: "Book Appointment with Dr. Medina",

      // Routine Modal
      modal_routine_title: "Your Personalized Routine",
      modal_routine_subtitle: "Exclusive access for Dr. Belisa Medina's patients",
      modal_routine_p1: "After your medical consultation (in-person or virtual), we send a private link to your WhatsApp with your daily skincare routine.",
      modal_routine_p2: "In your personal app, you can view your morning and evening products, doctor's notes, reference photos, and remaining days for each treatment.",
      modal_routine_p3: "Lost or can't find your routine link? Message us on WhatsApp and we will gladly resend it to you right away.",
      modal_routine_btn: "Request Link via WhatsApp",
      modal_routine_close: "Close"
    }
  };

  let currentLang = 'es';

  function getLanguage() {
    return currentLang;
  }

  function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
      return translations[currentLang][key];
    }
    if (translations.es && translations.es[key]) {
      return translations.es[key];
    }
    return key;
  }

  function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') {
      lang = 'es';
    }
    currentLang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('dramedina_lang', lang);
    } catch (e) {}

    // Update document title & meta description
    if (translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].meta_description) {
      metaDesc.setAttribute('content', translations[lang].meta_description);
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        // If element has no child elements, use textContent; if it contains HTML or sub-spans, check
        if (el.children.length === 0) {
          el.textContent = translations[lang][key];
        } else {
          // If it has children with their own data-i18n, do not overwrite innerHTML
          // Only overwrite if it's meant to be replaced
          const hasChildI18n = el.querySelector('[data-i18n]');
          if (!hasChildI18n) {
            el.innerHTML = translations[lang][key];
          }
        }
      }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update alt text
    const alts = document.querySelectorAll('[data-i18n-alt]');
    alts.forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('alt', translations[lang][key]);
      }
    });

    // Update aria labels
    const arias = document.querySelectorAll('[data-i18n-aria]');
    arias.forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    // Update toggle buttons active state across navbar and footer
    const toggleBtns = document.querySelectorAll('[data-lang-btn]');
    toggleBtns.forEach((btn) => {
      if (btn.getAttribute('data-lang-btn') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Notify app.js of language change for dynamic items (e.g. tools label, in-clinic toggle)
    if (window.onAppLanguageChange && typeof window.onAppLanguageChange === 'function') {
      window.onAppLanguageChange(lang);
    }
  }

  // Initialize on script load or DOM load
  function init() {
    let saved = 'es';
    try {
      saved = localStorage.getItem('dramedina_lang') || 'es';
    } catch (e) {}
    setLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global i18n object
  window.i18n = {
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    translations: translations,
    t: t
  };
})();
