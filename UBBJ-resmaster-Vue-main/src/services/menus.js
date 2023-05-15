const carreras = [
  {
    Estado: "AGUASCALIENTES",
    Municipios: [
      {
        nombre: "ASIENTOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/agu_asientos_ipagroa_2.pdf",
        carrera: " INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "CALVILLO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/agu_calvillo_ias_2.pdf",
        carrera: " INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
      },
    ],
  },
  {
    Estado: "BAJA CALIFORNIA",
    Municipios: [
      {
        nombre: "ENSENADA, SAN QUINTIN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/bcn_san_quintin_iap_2.pdf",
        carrera: "INGENIERÍA EN ACUACULTURA Y PISCICULTURA",
      },
    ],
  },
  {
    Estado: "CAMPECHE",
    Municipios: [
      {
        nombre: "CALAKMUL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cam_calakmul_phcyn_2.pdf",
        carrera: "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
      },
      {
        nombre: "CALKINÍ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cam_calkini_cam_iaa_2.pdf",
        carrera: "INGENIERÍA EN AGRICULTURA Y AGRONOMÍA",
      },
      {
        nombre: "ESCÁRCEGA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cam_escarcega_iagro_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
    ],
  },
  {
    Estado: "CHIAPAS",
    Municipios: [
      {
        nombre: "BELLA VISTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: " LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA ",
      },
      {
        nombre: "CHENALHÓ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chp_chenalho_iagro_2.pdf",
        carrera: " INGENIERÍA AGROFORESTAL ",
      },
      {
        nombre: " CHILÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chp_chilon_ipagroa_2.pdf",
        carrera: " INGENIERÍA EN PROCESOS AGROALIMENTARIOS ",
      },
      {
        nombre: "ESCUINTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chp_escuintla_es_2.pdf",
        carrera: " LICENCIATURA EN ESTUDIOS SOCIALES ",
      },
      {
        nombre: "LAS MARGARITAS, NUEVO MOMÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaVeterinariaZootecnia.pdf",
        carrera: " LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA ",
      },
      {
        nombre: "LAS MARGARITAS, LA ESPERANZA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: " LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "OCOSINGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chp_ocosingo_eyo_2.pdf",
        carrera: " LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA ",
      },
      {
        nombre: "OCOTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaVeterinariaZootecnia.pdf",
        carrera: " LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA ",
      },
      {
        nombre: "OSTUACÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/OSTUACAN_CHIS_IAP_2.pdf",
        carrera: "INGENIERÍA EN ACUACULTURA Y PISCICULTURA",
      },
      {
        nombre: " PALENQUE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chp_palenque_phcyn_2.pdf",
        carrera: " LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL ",
      },
      {
        nombre: " PANTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/PANTEPEC_CHIS_IAGROF_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL ",
      },
      {
        nombre: " SALTO DEL AGUA, EJIDO SUCUMPLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: " LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA ",
      },
      {
        nombre: "TEOPISCA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/TEOPISCA_CHIS_IAGROF_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
      {
        nombre: " VENUSTIANO CARRANZA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chp_venustiano_carranza_misc_2.pdf",
        carrera: " LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
    ],
  },
  {
    Estado: "CHIHUAHUA",
    Municipios: [
      {
        nombre: "GUADALUPE Y CALVO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chh_guadalupe_y_calvo_immi_2.pdf",
        carrera: "INGENIERÍA EN MINAS Y RESTAURACIÓN AMBIENTAL",
      },
      {
        nombre: "SAN RAFAEL URIQUE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/chh_san_rafael_urique_ias_2.pdf",
        carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
      },
    ],
  },
  {
    Estado: "CIUDAD DE MÉXICO",
    Municipios: [
      {
        nombre: "ÁLVARO OBREGÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_alvaro_obregon_es_2.pdf",
        carrera: "LICENCIATURA EN ESTUDIOS SOCIALES",
      },
      {
        nombre: "AZCAPOTZALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_azcapotzalco_ecap_2.pdf",
        carrera: "LICENCIATURA EN CONTABILIDAD Y ADMINISTRACIÓN PÚBLICA",
      },
      {
        nombre: "CUAUHTÉMOC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_cuauhtemoc_der_2.pdf",
        carrera: "LICENCIATURA EN DERECHO",
      },
      {
        nombre: "IZTACALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_iztacalco_phivyt_2.pdf",
        carrera:
          "LICENCIATURA EN PATRIMONIO HISTÓRICO, INDUSTRIA DE VIAJES Y TURISMO",
      },
      {
        nombre: "IZTAPALAPA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_iztapalapa_igia_2.pdf",
        carrera: "INGENIERÍA EN GESTIÓN INTEGRADA DEL AGUA",
      },
      {
        nombre: "MAGDALENA CONTRERAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_magdalena_contreras_iagro_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
      {
        nombre: "MILPA ALTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_milpa_alta_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "TLÁHUAC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_tlahuac_elec_2.pdf",
        carrera: "INGENIERÍA ELECTROMECÁNICA",
      },
      {
        nombre: "TLALPAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_tlalpan_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "XOCHIMILCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/cdmx_xochimilco_fdeb_phcm_2.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
    ],
  },
  {
    Estado: "COAHUILA DE ZARAGOZA",
    Municipios: [
      {
        nombre: "FRANCISCO I. MADERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/coa_francisco_i._madero_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "PIEDRAS NEGRAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/coa_piedras_negras_es_2.pdf",
        carrera: "LICENCIATURA EN ESTUDIOS SOCIALES",
      },
      {
        nombre: "SAN JUAN VILLANUEVA, VIESCA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
    ],
  },
  {
    Estado: "COLIMA",
    Municipios: [
      {
        nombre: "ARMERÍA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ARMER%C3%8DA_COL_IAP_2.pdf",
        carrera: " INGENIERÍA EN ACUACULTURA Y PISCICULTURA",
      },
    ],
  },
  {
    Estado: "DURANGO",
    Municipios: [
      {
        nombre: "CUENCAMÉ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/dur_cuencame_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: "TEPEHUANES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/dur_tepehuanes_ifc_2.pdf",
        carrera: "INGENIERÍA FORESTAL COMUNITARIA",
      },
      {
        nombre: "TLAHUALILO, EJIDO ZARAGOZA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ingenierias/IngenieriaAdministracionAgropecuariaT.pdf",
        carrera: "INGENIERÍA EN ADMINISTRACIÓN AGROPECUARIA",
      },
    ],
  },
  {
    Estado: "ESTADO DE MÉXICO",
    Municipios: [
      {
        nombre: "JUCHITEPEC, CUATZOZONGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/JUCHITEPEC_EDOMEX_IPAGROA_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "TEXCOCO DE MORA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/edomex_texcoco_de_la_mora_ic_2.pdf",
        carrera: "INGENIERÍA CIVIL",
      },
      {
        nombre: "VILLA DE ALLENDE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/edomex_villa_de_allende_igia_2.pdf",
        carrera: "INGENIERÍA EN GESTIÓN INTEGRADA DEL AGUA",
      },
      {
        nombre: "VILLA DEL CARBÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/edomex_villa_del_carbon_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "XONACATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "SAN JOSÉ DEL RINCÓN, SAN ANTONIO PUEBLO NUEVO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
    ],
  },
  {
    Estado: "GUANAJUATO",
    Municipios: [
      {
        nombre: "CUERÁMARO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/gua_cueramaro_mvyz_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
      },
      {
        nombre: "SAN DIEGO DE LA UNIÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/gua_san_diego_de_la_union_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "SAN JOSÉ ITURBIDE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
    ],
  },
  {
    Estado: "GUERRERO",
    Municipios: [
      {
        nombre: "ALCOZAUCA DE GUERRERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "ATLAMAJALCINGO DEL MONTE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "ATOYAC DE ÁLVAREZ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/gro_atoyac_de_alvarez_iagro_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
      {
        nombre: "JUAN R. ESCUDERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/gro_juan_r._escudero_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "METLATÓNOC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/gro_metlatonoc_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "TIXTLA DE GUERRERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "XOCHISTLAHUACA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/gro_xochistlahuaca_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: " MALINALTEPEC, PARAJE MONTERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
    ],
  },
  {
    Estado: "HIDALGO",
    Municipios: [
      {
        nombre: "AJACUBA, SAN NICOLÁS TECOMATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "CHILCUAUTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/hid_chilcuautla_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "FRANCISCO I. MADERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/hid_francisco_i._madero_fdeb_phcm_2.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "HUASCA DE OCAMPO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/hid_huasca_de_ocampo_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "JACALA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/Jacala_HGO_FDBPHyCM.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "SAN FELIPE ORIZATLÁN, HUITZIZILINGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "TLALCHINOL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/TLALCHINOL_HIDALGO_IAGROF_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
      {
        nombre: "YAHUALICA, MECATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/YAHUALICA_HIDALGO_IPAGROA_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
    ],
  },
  {
    Estado: "JALISCO",
    Municipios: [
      {
        nombre: "AYOTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/jal_ayotlan_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "TECOLOTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/jal_tecolotlan_ias_2.pdf",
        carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
      },
      {
        nombre: "TOMATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/jal_tomatlan_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
    ],
  },
  {
    Estado: "MICHOACÁN DE OCAMPO",
    Municipios: [
      {
        nombre: "ÁPORO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_aporo_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "CHILCHOTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_chilchota_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "PAJACUARÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_pajacuaran_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
      },
      {
        nombre: "TACÁMBARO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_tacambaro_fdeb_phcm_2.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "VILLAMAR",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/VILLAMAR_MICHOACAN_IPAGROA_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "  ZACAPU",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_zacapu_cya_2.pdf",
        carrera: "CONTABILIDAD Y ADMINISTRACIÓN PÚBLICA",
      },
      {
        nombre: "  ZACAPU",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_zacapu_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: "  ZACAPU",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_zacapu_iiye_2.pdf",
        carrera: "INGENIERÍA INDUSTRIAL",
      },
      {
        nombre: "  ZACAPU",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mic_zacapu_dya_2.pdf",
        carrera: "LICENCIATURA EN DERECHO Y ADMINISTRACIÓN PÚBLICA",
      },
    ],
  },
  {
    Estado: "MORELOS",
    Municipios: [
      {
        nombre: "AYALA, MOYOTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mor_ayala_mvyz_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
      },
      {
        nombre: "TEPOZTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mor_tepoztlan_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "TLALTIZAPÁN DE ZAPATA, TICUMAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/mor_tlaltizapan_de_zapata_phcyn_2.pdf",
        carrera: "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
      },
    ],
  },
  {
    Estado: "NAYARIT",
    Municipios: [
      {
        nombre: "LA YESCA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/nay_la_yesca_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
    ],
  },
  {
    Estado: "NUEVO LEÓN",
    Municipios: [
      {
        nombre: "ANÁHUAC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/nle_anahuac_iaa_2.pdf",
        carrera: "INGENIERÍA EN ADMINISTRACIÓN AGROPECUARIA",
      },
    ],
  },
  {
    Estado: "OAXACA",
    Municipios: [
      {
        nombre: "ASUNCIÓN NOCHIXTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_asuncion_de_nochixtlan_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "CIUDAD IXTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_ixtepec_exprpa_2.pdf",
        carrera: "LICENCIATURA EN EXPRESIÓN Y PRODUCCIÓN ARTÍSTICA",
      },
      {
        nombre: "HEROICA CIUDAD DE TLAXIACO DEL ESTADO DE OAXACA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/Tlaxiaco_OAX_MyA.pdf",
        carrera: "LICENCIATURA EN MÚSICA Y ARTES",
      },
      {
        nombre: "HUAUTLA DE JIMÉNEZ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_huautla_de_jimenez_iaa_2.pdf",
        carrera: "INGENIERÍA EN ADMINISTRACIÓN AGROPECUARIA",
      },
      {
        nombre: "PUTLA VILLA DE GUERRERO, SAN ANDRÉS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaVeterinariaZootecnia.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOT",
      },
      {
        nombre: "SAN CRISTÓBAL AMATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "SAN FRANCISCO TELIXTLAHUACA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "SAN ILDEFONSO VILLA ALTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "SAN MIGUEL AMATITLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/San_Miguel_Amatitl%C3%A1n_OAX_FDEBPHyCM.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "SAN FELIPE JALAPA DE DÍAZ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_san_felipe_jalapa_de_diaz_ampp_2.pdf",
        carrera:
          "LICENCIATURA EN ADMINISTRACIÓN MUNICIPAL Y POLÍTICAS PÚBLICAS",
      },
      {
        nombre: "SAN JUAN BAUTISTA CUICATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_san_juan_bautista_cuicatlan_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "SAN JUAN BAUTISTA VALLE NACIONAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_valle_nacional_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "SAN PEDRO POCHUTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_san_pedro_pochutla_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "SANTA MARÍA JALAPA DEL MARQUÉS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_jalapa_del_marques_eyo_2.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "SANTIAGO YOLOMÉCATL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "TLACOLULA DE MATAMOROS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_tlacolula_de_matamoros_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: "VILLA DE TUTUTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_tututepec_sbt_2.pdf",
        carrera: "INGENIERÍA EN BIODIVERSIDAD TROPICAL",
      },
      {
        nombre: "VILLA DE ZAACHILA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/oax_villa_de_zaachila_iaa_2.pdf",
        carrera: "INGENIERÍA EN AGRONOMÍA Y AGRICULTURA",
      },
    ],
  },
  {
    Estado: "PUEBLA",
    Municipios: [
      {
        nombre: "CHIAUTZINGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/pue_chiautzingo_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "CHIGNAUTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/CHIGNAUTLA_PUEBLA_IAGROF_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
      {
        nombre: "CUETZALAN DEL PROGRESO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/pue_cuetzalan_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: "JOPALA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/pue_jopala_igia_2.pdf",
        carrera: "INGENIERÍA EN GESTIÓN INTEGRADA DEL AGUA",
      },
      {
        nombre: "ZINACATEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/pue_zinacatepec_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
    ],
  },
  {
    Estado: "QUERÉTARO",
    Municipios: [
      {
        nombre: "EZEQUIEL MONTES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/que_ezequiel_montes_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "SAN JOAQUÍN DEL ESTADO DE QUERÉTARO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/San%20Joaqu%C3%ADn_QRoo_PHIVyT.pdf",
        carrera:
          "LICENCIATURA EN PATRIMONIO HISTÓRICO, INDUSTRIA DE VIAJES Y TURISMO",
      },
    ],
  },
  {
    Estado: "QUINTANA ROO",
    Municipios: [
      {
        nombre: "FELIPE CARRILLO PUERTO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/qroo_tihosuco_phcyn_2.pdf",
        carrera:
          "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL DE MÉXICO",
      },
      {
        nombre: "LÁZARO CÁRDENAS, KANTUNILKIN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/qroo_laz_card__kantunilkin_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "OTHÓN P. BLANCO, EJIDO PUCTÉ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/OTHON_P_BLANCO_QROO_IPAGROA_2.pdf",
        carrera: " INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "SOLIDARIDAD, PLAYA DEL CARMEN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/Solidaridad_PC_QRoo_PHIVyT.pdf",
        carrera:
          "LICENCIATURA EN PATRIMONIO HISTÓRICO, INDUSTRIA DE VIAJES Y TURISMO",
      },
      {
        nombre: "CHAN SANTA CRUZ",
        pdf: "",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA BILINGÜE (MAYA - ESPAÑOL): PATRIMONIO HISTÓRICO",
      },
    ],
  },
  {
    Estado: "SAN LUIS POTOSÍ",
    Municipios: [
      {
        nombre: "AQUISMÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/slp_aquismon_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "RAYÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/slp_rayon_iagro_2.pdf",
        carrera: "INGENIERÍA AGROFORESTAL",
      },
    ],
  },
  {
    Estado: "SINALOA",
    Municipios: [
      {
        nombre: "BADIRAGUATO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/sin_badiraguato_ifc_2.pdf",
        carrera: "INGENIERÍA FORESTAL COMUNITARIA",
      },
      {
        nombre: "COSALÁ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/sin_cosala_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
    ],
  },
  {
    Estado: "SONORA",
    Municipios: [
      {
        nombre: "AGUA PRIETA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/son_agua_prieta_es_2.pdf",
        carrera: "LICENCIATURA EN ESTUDIOS SOCIALES",
      },
      {
        nombre: "ETCHOJOA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/son_etchojoa_iap_2.pdf",
        carrera: "INGENIERÍA EN ACUACULTURA Y PISCICULTURA",
      },
      {
        nombre: "GENERAL PLUTARCO ELÍAS CALLES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/son_gral_plutarco_elias_calles_ampp_2.pdf",
        carrera:
          "LICENCIATURA EN ADMINISTRACIÓN MUNICIPAL Y POLÍTICAS PÚBLICAS",
      },
      {
        nombre: "MASIACA, NAVOJOA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/NAVOJOA_SON_IPAGROA_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "QUIRIEGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaVeterinariaZootecnia.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
      },
    ],
  },
  {
    Estado: "TABASCO",
    Municipios: [
      {
        nombre: "CÁRDENAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tab_cardenas_iqdip_2.pdf",
        carrera: "INGENIERÍA QUÍMICA EN DESARROLLO DE LA INDUSTRIA PETROLERA",
      },
      {
        nombre: "COMALCALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tab_comalcalco_der_2.pdf",
        carrera: "LICENCIATURA EN DERECHO",
      },
      {
        nombre: "BALANCÁN, VILLA EL TRIUNFO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaVeterinariaZootecnia.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
      },
    ],
  },
  {
    Estado: "TAMAULIPAS",
    Municipios: [
      {
        nombre: "ALDAMA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tam_aldama_mvyz_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
      },
      {
        nombre: "HIDALGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tam_hidalgo_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "SAN FERNANDO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tam_san_fernando_ias_2.pdf",
        carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
      },
    ],
  },
  {
    Estado: "TLAXCALA",
    Municipios: [
      {
        nombre: "CUAPIAXTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tla_cuapiaxtla_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "XALTOCAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/tla_xaltocan_ias_2.pdf",
        carrera: "INGENIERÍA AMBIENTAL PARA SUSTENTABILIDAD",
      },
      {
        nombre: "ZITLALTÉPEC DE TRINIDAD SÁNCHEZ SANTOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
    ],
  },
  {
    Estado: "VERACRUZ",
    Municipios: [
      {
        nombre: "ATLAHUILCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_atlahuilco_fdeb_phcm_2.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "COATZACOALCOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_ignacio_de_la_llave_coatz_iqdip_2.pdf",
        carrera: "INGENIERÍA QUÍMICA DE LA INDUSTRIA PETROLERA",
      },
      {
        nombre: "HUAYACOCOTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_huayacocotla_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: "JÁLTIPAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_jaltipan_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
      {
        nombre: "MINATITLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_narciso_b._trejo_minatitlan_iaie_2.pdf",
        carrera: "INGENIERÍA Y ADMINISTRACIÓN DE LA INDUSTRIA ENERGÉTICA",
      },
      {
        nombre: "PLAYA VICENTE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_playa_vicente_ml_2.pdf",
        carrera: "LICENCIATURA EN MÚSICA Y LAUDERÍA",
      },
      {
        nombre: "PAPANTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/Papantla_Ver_PHCyN.pdf",
        carrera: "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
      },
      {
        nombre: "POZA RICA DE HIDALGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_poza_rica_ipp_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS PETROLEROS",
      },
      {
        nombre: "RÍO BLANCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/ver_rio_blanco_ier_2.pdf",
        carrera: "INGENIERÍA EN ENERGÍAS RENOVABLES",
      },
      {
        nombre: "SANTIAGO SOCHIAPAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaMedicinaIntegralSaludComunitaria.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
    ],
  },
  {
    Estado: "YUCATÁN",
    Municipios: [
      {
        nombre: "IZAMAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/licenciaturas/LicenciaturaEnfermeriaObstetricia.pdf",
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
      },
      {
        nombre: "TEKAX",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/Tekax_YUC_FDEBPHyCM.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "TICUL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/yuc_ticul_misc_2.pdf",
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
      },
      {
        nombre: "TINÚM, PISTÉ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/Tin%C3%BAm_Pist%C3%A9_YUC_PHCyN.pdf",
        carrera: "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
      },
      {
        nombre: "VALLADOLID",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/yuc_valladolid_fdeb_phcm_2.pdf",
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO",
      },
      {
        nombre: "YAXCABÁ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/yuc_yaxcaba_idrs_2.pdf",
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
      },
    ],
  },
  {
    Estado: "ZACATECAS",
    Municipios: [
      {
        nombre: "GENERAL PÁNFILO NATERA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/zac_gral._panfilo_natera_ipagroa_2.pdf",
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
      },
      {
        nombre: "MAZAPIL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/zac_mazapil_immi_2.pdf",
        carrera: "INGENIERÍA EN MINAS Y MANTENIMIENTO INDUSTRIAL",
      },
      {
        nombre: "PINOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/mallas/zac_pinos_ias_2.pdf",
        carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
      },
    ],
  },
];

const sedes_DGP = [{
  Estado: "AGUASCALIENTES",
  Sede: [{
    Sede: "ASIENTOS",
    Carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
    Clave_institucion: "575304",
    Calve_direccion_general_de_profesiones: "010129 ",
  },
  {
    Sede: "CALVILLO",
    Carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
    Clave_institucion: "575303",
    Calve_direccion_general_de_profesiones: " 010130",
  },
  ],
},
{
  Estado: "BAJA CALIFORNIA",
  Sede: [{
    Sede: "ENSENADA, SAN QUINTIN",
    Carrera: "INGENIERÍA EN ACUACULTURA Y PISCICULTURA",
    Clave_institucion: "128314",
    Calve_direccion_general_de_profesiones: "020243 ",
  },],
},
{
  Estado: "CAMPECHE",
  Sede: [{
    Sede: "CALAKMUL",
    Carrera: "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
    Clave_institucion: "671341",
    Calve_direccion_general_de_profesiones: "040100 ",
  },
  {
    Sede: "CALKINÍ",
    Carrera: "INGENIERÍA EN AGRICULTURA Y AGRONOMÍA",
    Clave_institucion: "574306",
    Calve_direccion_general_de_profesiones: "040101 ",
  },
  {
    Sede: "ESCÁRCEGA",
    Carrera: "INGENIERÍA AGROFORESTAL",
    Clave_institucion: "302313",
    Calve_direccion_general_de_profesiones: "040102 ",
  },
  ],
},
{
  Estado: "CHIAPAS",
  Sede: [{
    Sede: "Bella Vista",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Chenalhó",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: 302313,
    Calve_direccion_general_de_profesiones: "070384",
  },
  {
    Sede: "Chilón",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: "070383",
  },
  {
    Sede: "Escuintla",
    Carrera: "Licenciatura en Estudios Sociales",
    Clave_institucion: 671342,
    Calve_direccion_general_de_profesiones: "070382",
  },
  {
    Sede: "Las Margaritas, La Esperanza",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Las Margaritas, Nuevo Momón",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Ocosingo",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Ocotepec",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Ostuacán",
    Carrera: "Ingeniería en Acuacultura y Piscicultura",
    Clave_institucion: "128314",
    Calve_direccion_general_de_profesiones: "070395",
  },
  {
    Sede: "Palenque",
    Carrera: "Licenciatura en Patrimonio Histórico, Cultural y Natural",
    Clave_institucion: 671341,
    Calve_direccion_general_de_profesiones: "070381",
  },
  {
    Sede: "Pantepec",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: 302313,
    Calve_direccion_general_de_profesiones: "070396",
  },
  {
    Sede: "Salto de Agua, Suclumpa",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Teopisca",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: 302313,
    Calve_direccion_general_de_profesiones: "070394",
  },
  {
    Sede: "Venustiano Carranza",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "CHIHUAHUA",
  Sede: [{
    Sede: "GUADALUPE Y CALVO",
    Carrera: "INGENIERÍA EN MINAS Y RESTAURACIÓN AMBIENTAL",
    Clave_institucion: " 574316",
    Calve_direccion_general_de_profesiones: "080295 ",
  },
  {
    Sede: "SAN RAFAEL, URIQUE",
    Carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
    Clave_institucion: " 575303",
    Calve_direccion_general_de_profesiones: "080293 ",
  },
  ],
},
{
  Estado: "CIUDAD DE MÉXICO",
  Sede: [{
    Sede: "Álvaro Obregón",
    Carrera: "Licenciatura en Estudios Sociales",
    Clave_institucion: 671342,
    Calve_direccion_general_de_profesiones: "090879",
  },
  {
    Sede: "Azcapotzalco",
    Carrera: "Licenciatura en Contabilidad y Administración Pública",
    Clave_institucion: 290347,
    Calve_direccion_general_de_profesiones: "090887",
  },
  {
    Sede: "Cuauhtémoc",
    Carrera: "Licenciatura en Derecho",
    Clave_institucion: 612301,
    Calve_direccion_general_de_profesiones: "090886",
  },
  {
    Sede: "Iztacalco",
    Carrera: "Licenciatura en Patrimonio Histórico, Industria de Viajes y Turismo",
    Clave_institucion: 290345,
    Calve_direccion_general_de_profesiones: "090883",
  },
  {
    Sede: "Iztapalapa",
    Carrera: "Ingeniería en Gestión Integrada del Agua",
    Clave_institucion: 342336,
    Calve_direccion_general_de_profesiones: "090884",
  },
  {
    Sede: "Magdalena Contreras",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: 302313,
    Calve_direccion_general_de_profesiones: "090885",
  },
  {
    Sede: "Milpa Alta",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: "090880",
  },
  {
    Sede: "Tláhuac",
    Carrera: "Ingeniería Electromecánica",
    Clave_institucion: 505345,
    Calve_direccion_general_de_profesiones: "090878",
  },
  {
    Sede: "Tlalpan",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Xochimilco",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: 290344,
    Calve_direccion_general_de_profesiones: "090888",
  },
  ],
},
{
  Estado: "COAHUILA DE ZARAGOZA",
  Sede: [{
    Sede: "Francisco I. Madero Hidalgo",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: "050281",
  },
  {
    Sede: "Piedras Negras",
    Carrera: "Licenciatura en Estudios Sociales",
    Clave_institucion: 671342,
    Calve_direccion_general_de_profesiones: "050278",
  },
  {
    Sede: "Viesca, San Juan Villanueva ",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "COLIMA",
  Sede: [{
    Sede: "Armería",
    Carrera: "Ingeniería en Acuacultura y Piscicultura",
    Clave_institucion: 128314,
    Calve_direccion_general_de_profesiones: "060086",
  },],
},
{
  Estado: "DURANGO",
  Sede: [{
    Sede: "Cuencamé",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 100167,
  },
  {
    Sede: "Tepehuanes",
    Carrera: "Ingeniería Forestal Comunitaria",
    Clave_institucion: 331338,
    Calve_direccion_general_de_profesiones: 100168,
  },
  {
    Sede: "Tlahualilo",
    Carrera: "Ingeniería en Administración Agropecuaria",
    Clave_institucion: "EN PROCESO REGISTRO",
    Calve_direccion_general_de_profesiones: "EN PROCESO REGISTRO",
  },
  ],
},
{
  Estado: "ESTADO DE MÉXICO",
  Sede: [{
    Sede: "Juchitepec",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: "575304",
    Calve_direccion_general_de_profesiones: "151007",
  },
  {
    Sede: "Texcoco de Mora",
    Carrera: "Ingeniería Civil",
    Clave_institucion: 511301,
    Calve_direccion_general_de_profesiones: 150966,
  },
  {
    Sede: "San José del Rincón ",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "EN PROCESO REGISTRO",
    Calve_direccion_general_de_profesiones: "EN PROCESO REGISTRO",
  },
  {
    Sede: "Villa de Allende",
    Carrera: "Ingeniería en Gestión Integrada del Agua",
    Clave_institucion: 342336,
    Calve_direccion_general_de_profesiones: "150968",
  },
  {
    Sede: "Villa del Carbón",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 150967,
  },
  {
    Sede: "Xonacatlán",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "GUANAJUATO",
  Sede: [{
    Sede: "Cuerámaro",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "San Diego de la Unión",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 110445,
  },
  {
    Sede: "San José Iturbide",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "GUERRERO",
  Sede: [{
    Sede: "Alcozauca",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Atlamajalcingo del Monte ",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Atoyac",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: 302313,
    Calve_direccion_general_de_profesiones: 120231,
  },
  {
    Sede: "Juan R. Escudero",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Malinaltepec",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "EN PROCESO REGISTRO",
    Calve_direccion_general_de_profesiones: "EN PROCESO REGISTRO",
  },
  {
    Sede: "Metlatónoc",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 120229,
  },
  {
    Sede: "Tixtla",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Xochistlahuaca",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 120228,
  },
  ],
},
{
  Estado: "HIDALGO",
  Sede: [{
    Sede: "Ajacuba",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Chilcuautla",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 130229,
  },
  {
    Sede: "Francisco I. Madero",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: 290344,
    Calve_direccion_general_de_profesiones: 130227,
  },
  {
    Sede: "Huasca de Ocampo",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 130228,
  },
  {
    Sede: "Jacala",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: "290344",
    Calve_direccion_general_de_profesiones: "130240",
  },
  {
    Sede: "Orizatlán",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Tlanchinol",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: "302313",
    Calve_direccion_general_de_profesiones: "130239",
  },
  {
    Sede: "Yahualica",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: "575304",
    Calve_direccion_general_de_profesiones: "130241",
  },
  ],
},
{
  Estado: "JALISCO",
  Sede: [{
    Sede: "Ayotlán",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 140482,
  },
  {
    Sede: "Tecolotlán",
    Carrera: "Ingeniería Ambiental para la Sustentabilidad ",
    Clave_institucion: 575303,
    Calve_direccion_general_de_profesiones: 140481,
  },
  {
    Sede: "Tomatlán",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 140480,
  },
  ],
},
{
  Estado: "MICHOACÁN DE OCAMPO",
  Sede: [{
    Sede: "Áporo",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 160329,
  },
  {
    Sede: "Chilchota",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Pajacuarán",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Tacámbaro",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: 290344,
    Calve_direccion_general_de_profesiones: 160327,
  },
  {
    Sede: "Villamar",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: "575304",
    Calve_direccion_general_de_profesiones: "160334",
  },
  {
    Sede: "Zacapu",
    Carrera: "Licenciatura en Contabilidad y Administración Pública",
    Clave_institucion: 290347,
    Calve_direccion_general_de_profesiones: 160331,
  },
  {
    Sede: "Zacapu",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 508301,
    Calve_direccion_general_de_profesiones: 160331,
  },
  {
    Sede: "Zacapu",
    Carrera: "Ingeniería Industrial y Electromecánica",
    Clave_institucion: 574310,
    Calve_direccion_general_de_profesiones: 160331,
  },
  {
    Sede: "Zacapu",
    Carrera: "Licenciatura en Derecho y Administración Pública",
    Clave_institucion: 620382,
    Calve_direccion_general_de_profesiones: 160331,
  },
  ],
},
{
  Estado: "MORELOS",
  Sede: [{
    Sede: "Ayala",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Tepoztlán",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 170238,
  },
  {
    Sede: "Tlaltizapán de Zapata",
    Carrera: "Licenciatura en Patrimonio Histórico, Cultural y Natural",
    Clave_institucion: 671341,
    Calve_direccion_general_de_profesiones: 170237,
  },
  ],
},
{
  Estado: "NAYARIT",
  Sede: [{
    Sede: "La Yesca",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 180139,
  },],
},
{
  Estado: "NUEVO LEÓN",
  Sede: [{
    Sede: "Anáhuac",
    Carrera: "Ingeniería en Administración Agropecuaria",
    Clave_institucion: 311360,
    Calve_direccion_general_de_profesiones: 190320,
  },],
},
{
  Estado: "OAXACA",
  Sede: [{
    Sede: "Asunción de Nochixtlán",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: "200256",
  },
  {
    Sede: "Huautla de Jiménez",
    Carrera: "Ingeniería en Administración Agropecuaria",
    Clave_institucion: 311360,
    Calve_direccion_general_de_profesiones: 200259,
  },
  {
    Sede: "Ixtepec",
    Carrera: "Licenciatura en Expresión y Producción Artística",
    Clave_institucion: 290346,
    Calve_direccion_general_de_profesiones: 200261,
  },
  {
    Sede: "Jalapa de Díaz",
    Carrera: "Licenciatura en Administración Municipal y Políticas Públicas",
    Clave_institucion: 671343,
    Calve_direccion_general_de_profesiones: 200225,
  },
  {
    Sede: "Jalapa del Marqués",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Putla",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "San Cristóbal Amatlán",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "San Juan Bautista Cuicatlán",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 200258,
  },
  {
    Sede: "San Juan Bautista Valle Nacional",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "San Miguel Amatitlán",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: "290344",
    Calve_direccion_general_de_profesiones: "200281",
  },
  {
    Sede: "San Pedro Pochutla",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Santiago Yolomécatl",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Telixtlahuaca",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Tlacolula de Matamoros",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 200257,
  },
  {
    Sede: "Tlaxiaco",
    Carrera: "Licenciatura en Música y Artes",
    Clave_institucion: "774365",
    Calve_direccion_general_de_profesiones: "200279",
  },
  {
    Sede: "Tututepec",
    Carrera: "Ingeniería de Sistemas de Biodiversidad Tropical",
    Clave_institucion: 571343,
    Calve_direccion_general_de_profesiones: 200262,
  },
  {
    Sede: "Villa Alta",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Villa de Zaachila",
    Carrera: "Ingeniería en Agronomía y Agricultura",
    Clave_institucion: 311360,
    Calve_direccion_general_de_profesiones: 200260,
  },
  ],
},
{
  Estado: "PUEBLA",
  Sede: [{
    Sede: "Chiautzingo",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 210556,
  },
  {
    Sede: "Chignautla",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: "302313",
    Calve_direccion_general_de_profesiones: "210576",
  },
  {
    Sede: "Cuetzalan",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 210555,
  },
  {
    Sede: "Jopala",
    Carrera: "Ingeniería en Gestión Integrada del Agua",
    Clave_institucion: 342336,
    Calve_direccion_general_de_profesiones: 210557,
  },
  {
    Sede: "Zinacatepec",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "QUERÉTARO",
  Sede: [{
    Sede: "Ezequiel Montes",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "San Joaquín",
    Carrera: "Licenciatura en Patrimonio Histórico, Industria de Viajes y Turismo",
    Clave_institucion: "290345",
    Calve_direccion_general_de_profesiones: "220167",
  },
  ],
},
{
  Estado: "QUINTANA ROO",
  Sede: [{
    Sede: "Chan Santa Cruz",
    Carrera: "Licenciatura en Formación Docente en Educación Básica (Maya - Español): Patrimonio Histórico Y Cultural De México",
    Clave_institucion: "EN PROCESO REGISTRO",
    Calve_direccion_general_de_profesiones: "EN PROCESO REGISTRO",
  },
  {
    Sede: "Felipe Carrillo Puerto, Tihosuco",
    Carrera: "Licenciatura en Patrimonio Histórico, Cultural y Natural",
    Clave_institucion: 671341,
    Calve_direccion_general_de_profesiones: 230139,
  },
  {
    Sede: "Lázaro Cárdenas, Kantunilkín",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 230140,
  },
  {
    Sede: "Othón P. Blanco, Pucté",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: "575304",
    Calve_direccion_general_de_profesiones: "230157",
  },
  {
    Sede: "Solidaridad, Playa del Carmen",
    Carrera: "Licenciatura en Patrimonio Histórico, Industria de Viajes y Turismo",
    Clave_institucion: "290345",
    Calve_direccion_general_de_profesiones: "230156",
  },
  ],
},
{
  Estado: "SAN LUIS POTOSÍ",
  Sede: [{
    Sede: "Aquismón",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 240201,
  },
  {
    Sede: "Rayón",
    Carrera: "Ingeniería Agroforestal",
    Clave_institucion: 302313,
    Calve_direccion_general_de_profesiones: 240200,
  },
  ],
},
{
  Estado: "SINALOA",
  Sede: [{
    Sede: "Badiraguato",
    Carrera: "Ingeniería Forestal Comunitaria",
    Clave_institucion: 331338,
    Calve_direccion_general_de_profesiones: 250196,
  },
  {
    Sede: "Cosalá",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 250195,
  },
  ],
},
{
  Estado: "SONORA",
  Sede: [{
    Sede: "Agua Prieta",
    Carrera: "Licenciatura en Estudios Sociales",
    Clave_institucion: 671342,
    Calve_direccion_general_de_profesiones: 260205,
  },
  {
    Sede: "Etchojoa",
    Carrera: "Ingeniería en Acuacultura y Piscicultura",
    Clave_institucion: 128314,
    Calve_direccion_general_de_profesiones: 260207,
  },
  {
    Sede: "General Plutarco Elías Calles, Sonoyta",
    Carrera: "Licenciatura en Administración Municipal y Políticas Públicas",
    Clave_institucion: 671343,
    Calve_direccion_general_de_profesiones: 260208,
  },
  {
    Sede: "Masiaca",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: "260211",
  },
  {
    Sede: "Quiriego",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "TABASCO",
  Sede: [{
    Sede: "Balancán",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "EN PROCESO REGISTRO",
    Calve_direccion_general_de_profesiones: "EN PROCESO REGISTRO",
  },
  {
    Sede: "Cárdenas",
    Carrera: "Ingeniería Química en Desarrollo de la Industria Petrolera",
    Clave_institucion: 556310,
    Calve_direccion_general_de_profesiones: 270169,
  },
  {
    Sede: "Comalcalco",
    Carrera: "Licenciatura en Derecho",
    Clave_institucion: 612301,
    Calve_direccion_general_de_profesiones: "270170",
  },
  ],
},
{
  Estado: "TAMAULIPAS",
  Sede: [{
    Sede: "Aldama",
    Carrera: "Licenciatura en Medicina Veterinaria y Zootecnia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Hidalgo",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: "280281",
  },
  {
    Sede: "San Fernando",
    Carrera: "Ingeniería Ambiental para la Sustentabilidad ",
    Clave_institucion: 575303,
    Calve_direccion_general_de_profesiones: 280277,
  },
  ],
},
{
  Estado: "TLAXCALA",
  Sede: [{
    Sede: "Cuapiaxtla",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 290130,
  },
  {
    Sede: "Xaltocan",
    Carrera: "Ingeniería Ambiental para la Sustentabilidad ",
    Clave_institucion: 575303,
    Calve_direccion_general_de_profesiones: 290131,
  },
  {
    Sede: "Zitlaltépec",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "VERACRUZ",
  Sede: [{
    Sede: "Atlahuilco",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: 290344,
    Calve_direccion_general_de_profesiones: 300552,
  },
  {
    Sede: "Coatzacoalcos",
    Carrera: "Ingeniería Química de la Industria Petrolera",
    Clave_institucion: 556310,
    Calve_direccion_general_de_profesiones: "300546",
  },
  {
    Sede: "Huayacocotla",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 300551,
  },
  {
    Sede: "Jáltipan",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 300550,
  },
  {
    Sede: "Minatitlán",
    Carrera: "Ingeniería y Administración de la Industria Energética",
    Clave_institucion: 574308,
    Calve_direccion_general_de_profesiones: 300553,
  },
  {
    Sede: "Papantla",
    Carrera: "Licenciatura en Patrimonio Histórico, Cultural y Natural",
    Clave_institucion: "EN PROCESO DE REGISTRO ",
    Calve_direccion_general_de_profesiones: "EN PROCESO DE REGISTRO ",
  },
  {
    Sede: "Playa Vicente",
    Carrera: "Licenciatura en Música y Laudería",
    Clave_institucion: 774362,
    Calve_direccion_general_de_profesiones: 300549,
  },
  {
    Sede: "Poza Rica",
    Carrera: "Ingeniería en Procesos Petroleros",
    Clave_institucion: 574304,
    Calve_direccion_general_de_profesiones: 300547,
  },
  {
    Sede: "Río Blanco",
    Carrera: "Ingeniería en Energías Renovables",
    Clave_institucion: 120302,
    Calve_direccion_general_de_profesiones: 300548,
  },
  {
    Sede: "Santiago Sochiapan",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  ],
},
{
  Estado: "YUCATÁN",
  Sede: [{
    Sede: "Izamal",
    Carrera: "Licenciatura en Enfermería y Obstetricia",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Tekax",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: "EN PROCESO DE REGISTRO",
    Calve_direccion_general_de_profesiones: "EN PROCESO DE REGISTRO",
  },
  {
    Sede: "Ticul",
    Carrera: "Licenciatura Medicina Integral y Salud Comunitaria",
    Clave_institucion: "DICTAMEN CIFRHS",
    Calve_direccion_general_de_profesiones: "DICTAMEN CIFRHS",
  },
  {
    Sede: "Tinúm, Pisté",
    Carrera: "Licenciatura en Patrimonio Histórico, Cultural y Natural",
    Clave_institucion: "EN PROCESO DE REGISTRO ",
    Calve_direccion_general_de_profesiones: "EN PROCESO DE REGISTRO ",
  },
  {
    Sede: "Valladolid",
    Carrera: "Licenciatura en Formación Docente en Educación Básica. Patrimonio Histórico y Cultural de México",
    Clave_institucion: 290344,
    Calve_direccion_general_de_profesiones: 310205,
  },
  {
    Sede: "Yaxcabá",
    Carrera: "Ingeniería en Desarrollo Regional Sustentable",
    Clave_institucion: 130306,
    Calve_direccion_general_de_profesiones: 310204,
  },
  ],
},
{
  Estado: "ZACATECAS",
  Sede: [{
    Sede: "General Pánfilo Natera",
    Carrera: "Ingeniería en Procesos Agroalimentarios",
    Clave_institucion: 575304,
    Calve_direccion_general_de_profesiones: 320103,
  },
  {
    Sede: "Mazapil",
    Carrera: "Ingeniería en Minas y Mantenimiento Industrial",
    Clave_institucion: 574307,
    Calve_direccion_general_de_profesiones: 320106,
  },
  {
    Sede: "Pinos",
    Carrera: "Ingeniería Ambiental para la Sustentabilidad ",
    Clave_institucion: 575303,
    Calve_direccion_general_de_profesiones: "320105",
  },
  ],
},
];

const planes_de_estudio = [
  {
    area: "DESARROLLO REGIONAL SUSTENTABLE",
    carreras: [
      {
        carrera: "INGENIERÍA EN DESARROLLO REGIONAL SUSTENTABLE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/DRS-Ing.%20en%20Desarrollo%20regional%20sustentable-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA AMBIENTAL PARA LA SUSTENTABILIDAD",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/DRS-Ing.%20Ambiental%20para%20la%20sustentabilidad-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN GESTIÓN INTEGRADA DEL AGUA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/DRS-Ing.%20Gesti%C3%B3n%20integrada%20del%20agua-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA FORESTAL COMUNITARIA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/DRS-Ing.%20Forestal%20comunitaria-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA DE SISTEMAS DE BIODIVERSIDAD TROPICAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/DRS-Ing.%20Sist.%20Biodiversidad%20Tropical-PLAN.pdf",
      },
    ],
  },
  {
    area: "PROCESOS AGROALIMENTARIOS",
    carreras: [
      {
        carrera: "INGENIERÍA EN ADMINISTRACIÓN AGROPECUARIA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PA-Ing.%20Administraci%C3%B3n%20agropecuaria-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN AGRONOMÍA Y AGRICULTURA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PA-Ing.%20Agricultura%20y%20Agronomia-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN AGRICULTURA Y AGRONOMÍA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PA-Ing.%20Agricultura%20y%20Agronomia-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN ACUACULTURA Y PISCICULTURA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PA-Ing.%20Acuacultura%20y%20piscicultura-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA AGROFORESTAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PA-Ing.%20agroforestal-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN PROCESOS AGROALIMENTARIOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PA-Ing.%20Procesos%20agroalimentarios-PLAN.pdf",
      },
    ],
  },
  {
    area: "PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
    carreras: [
      {
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO -  SEDE ATLAHUILCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHCM_%20Sede%20Atlahuilco,%20%20Ver-PLAN.pdf",
      },
      {
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO -  SEDE TACÁMBARO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHCM_%20Sede%20Tac%C3%A1mbaro,%20Mich-PLAN.pdf",
      },
      {
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO -  SEDE VALLADOLID",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHCM_%20Sede%20Valladolid,%20Yuc-PLAN.pdf",
      },
      {
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO -  SEDE FRANCISCO I. MADERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHCM_Sede%20Francisco%20I.%20Madero,%20Hgo-PLAN.pdf",
      },
      {
        carrera:
          "LICENCIATURA EN FORMACIÓN DOCENTE EN EDUCACIÓN BÁSICA: PATRIMONIO HISTÓRICO Y CULTURAL DE MÉXICO -  SEDE XOCHIMILCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHCM_%20Xochimilco,%20CDMX-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN MÚSICA Y LAUDERÍA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHC-Lic.%20M%C3%BAsica%20y%20lauder%C3%ADa%20-%20Playa%20Vicente-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN MÚSICA Y ARTES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHC-Lic.%20M%C3%BAsica%20y%20Artes-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN PATRIMONIO HISTÓRICO, CULTURAL Y NATURAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHC-Lic.%20Patrimonio%20hist%C3%B3rico,%20cultural%20y%20natural-PLAN.pdf",
      },
      {
        carrera:
          "LICENCIATURA EN PATRIMONIO HISTÓRICO, INDUSTRIA DE VIAJES Y TURISMO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHC-Lic.%20Patrimonio%20Hist%C3%B3rico,%20Industria%20de%20Viajes%20y%20Turismo-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN EXPRESIÓN Y PRODUCCIÓN ARTÍSTICA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/PHC-Lic.%20Expresi%C3%B3n%20y%20producci%C3%B3n%20art%C3%ADstica-PLAN.pdf",
      },
    ],
  },
  {
    area: "ENERGÍA",
    carreras: [
      {
        carrera: "INGENIERÍA Y ADMINISTRACIÓN DE LA INDUSTRIA ENERGÉTICA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20y%20administraci%C3%B3n%20de%20la%20industria%20energetica-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA QUÍMICA EN DESARROLLO DE LA INDUSTRIA PETROLERA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20Qu%C3%ADmica%20en%20desarrollo%20de%20la%20industr%C3%ADa%20petrolera-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN PROCESOS PETROLEROS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20en%20Procesos%20Petroleros-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA CIVIL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20Civil-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA ELECTROMECÁNICA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing%20en%20Electromec%C3%A1nica-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA INDUSTRIAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.Industrial-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA ENERGÍAS RENOVABLES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20Energ%C3%ADas%20renovables-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN MINAS Y RESTAURACIÓN AMBIENTAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20Minas%20y%20restauraci%C3%B3n%20ambiental-PLAN.pdf",
      },
      {
        carrera: "INGENIERÍA EN MINAS Y MANTENIMIENTO INDUSTRIAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/EN-Ing.%20%20en%20Minas%20y%20mantenimiento%20industrial-PLAN.pdf",
      },
    ],
  },
  {
    area: "ESTUDIOS SOCIALES",
    carreras: [
      {
        carrera: "LICENCIATURA EN CONTABILIDAD Y ADMINISTRACIÓN PÚBLICA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/ES-Lic.%20Contabilidad%20y%20admnistraci%C3%B3n%20%20p%C3%BAblica-PLAN.pdf",
      },
      {
        carrera:
          "LICENCIATURA EN ADMINISTRACIÓN MUNICIPAL Y POLÍTICAS PÚBLICAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/ES-Lic.%20Admnistraci%C3%B3n%20municipal%20%20y%20pol%C3%ADticas%20p%C3%BAblicas-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN DERECHO - SEDE CUAUHTÉMOC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/ES-Derecho%20SEDE%20CUAUHT%C3%89MOC-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN DERECHO - SEDE COMALCALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/ES-Derecho%20SEDE%20COMALCALCO-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN DERECHO Y ADMINISTRACIÓN PÚBLICA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/ES-Lic.%20Derecho%20y%20Administraci%C3%B3n-P%C3%BAblica-PLAN.pdf",
      },
      {
        carrera: "LICENCIATURA EN ESTUDIOS SOCIALES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/ES-Lic.%20Estudios%20sociales-PLAN.pdf",
      },
    ],
  },
  {
    area: "SALUD",
    carreras: [
      {
        carrera: "LICENCIATURA EN MEDICINA INTEGRAL Y SALUD COMUNITARIA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/SD-Lic.%20Medicina%20Integral%20Y%20Salud%20Comunitaria.pdf",
      },
      {
        carrera: "LICENCIATURA EN ENFERMERÍA Y OBSTETRICIA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/SD-Lic.%20Enfermer%C3%ADa%20y%20Obstetricia.pdf",
      },
      {
        carrera: "LICENCIATURA EN MEDICINA VETERINARIA Y ZOOTECNIA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/planes_estudio/SD-Lic.%20Medicina%20veterinaria%20y%20zootecnia.pdf",
      },
    ],
  },
];

const Instalaciones = [
  {
    Estado: "AGUASCALIENTES",
    Municipios: [
      {
        nombre: "ASIENTOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Aguascalientes_Asientos.pdf",
      },
      {
        nombre: "CALVILLO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Aguascalientes_Calvillo.pdf ",
      },
    ],
  },
  {
    Estado: "BAJA CALIFORNIA",
    Municipios: [
      {
        nombre: "ENSENADA, SAN QUINTÍN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Baja_California_San_Quintín.pdf",
      },
    ],
  },
  {
    Estado: "CAMPECHE",
    Municipios: [
      {
        nombre: "CALAKMUL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Campeche_Calakmul.pdf",
      },
      {
        nombre: "CALKINÍ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Campeche_Calkiní.pdf",
      },
      {
        nombre: "ESCÁRCEGA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Campeche_Escárcega.pdf",
      },
    ],
  },
  {
    Estado: "CDMX",
    Municipios: [
      {
        nombre: "ÁLVARO OBREGÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Álvaro_Obregón.pdf",
      },
      {
        nombre: "AZCAPOTZALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Azcapotzalco.pdf",
      },
      {
        nombre: "CUAUHTÉMOC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Cuauhtémoc.pdf",
      },
      {
        nombre: "IZTACALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Iztacalco.pdf",
      },
      {
        nombre: "IZTAPALAPA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Iztapalapa.pdf",
      },
      {
        nombre: "MAGDALENA CONTRERAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Magdalena_Contreras.pdf",
      },
      {
        nombre: "MILPA ALTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_MilpaAlta.pdf",
      },
      {
        nombre: "TLÁHUAC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Tláhuac.pdf",
      },
      {
        nombre: "TLALPAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Tlalpan.pdf",
      },
      {
        nombre: "XOCHIMILCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Ciudad_De_México_Xochimilco.pdf",
      },
    ],
  },
  {
    Estado: "CHIAPAS",
    Municipios: [
      {
        nombre: "BELLA VISTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Bella_Vista.pdf",
      },
      {
        nombre: "CHENALHÓ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Chenalhó.pdf",
      },
      {
        nombre: "CHILÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Chilón.pdf",
      },
      {
        nombre: "ESCUINTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Escuintla.pdf",
      },
      {
        nombre: "LAS MARGARITAS, LA ESPERANZA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_LasMargaritas_LaEsperanza.pdf",
      },
      {
        nombre: "LAS MARGARITAS, NUEVO MOMÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_LasMargaritas_NuevoMomón.pdf",
      },
      {
        nombre: "OCOSINGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Ocosingo.pdf",
      },
      {
        nombre: "OCOTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Ocotepec.pdf",
      },
      {
        nombre: "OSTUACÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Ostuacán.pdf",
      },
      {
        nombre: "PALENQUE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Palenque.pdf",
      },
      {
        nombre: "PANTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Pantepec.pdf",
      },
      {
        nombre: "SALTO DE AGUA, EJIDO SUCLUMPA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Salto_De_Agua_Ejido_Suclumpa.pdf",
      },
      {
        nombre: "TEOPISCA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Teopisca.pdf",
      },
      {
        nombre: "VENUSTIANO CARRANZA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chiapas_Venustiano_Carranza.pdf",
      },
    ],
  },
  {
    Estado: "CHIHUAHUA",
    Municipios: [
      {
        nombre: "GUADALUPE Y CALVO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chihuahua_Guadalupe_Y_Calvo.pdf",
      },
      {
        nombre: "URIQUE, SAN RAFAEL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Chihuahua_Urique_San_Rafael.pdf",
      },
    ],
  },
  {
    Estado: "COAHUILA",
    Municipios: [
      {
        nombre: "FRANCISCO I. MADERO, HIDALGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Coahuila_Francisco_I_Madero_Hidalgo.pdf",
      },
      {
        nombre: "PIEDRAS NEGRAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Coahuila_Piedras_Negras.pdf",
      },
      {
        nombre: "SAN JUAN VILLANUEVA, VIESCA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Coahuila_Viesca_San_Juan_Villanueva.pdf",
      },
    ],
  },
  {
    Estado: "COLIMA",
    Municipios: [
      {
        nombre: "ARMERÍA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Colima_Armería.pdf",
      },
    ],
  },
  {
    Estado: "DURANGO",
    Municipios: [
      {
        nombre: "CUENCAMÉ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Durango_Cuencamé.pdf",
      },
      {
        nombre: "TEPEHUANES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Durango_Tepehuanes.pdf",
      },
      {
        nombre: "TLAHUALILO, EJIDO ZARAGOZA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Durango_Tlahualilo_Ejido_Zaragoza.pdf",
      },
    ],
  },
  {
    Estado: "ESTADO DE MÉXICO",
    Municipios: [
      {
        nombre: "JUCHITEPEC, CUATZOZONGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Estado_De_México_Juchitepec_Cuatzozongo.pdf",
      },
      {
        nombre: "SAN JOSÉ DEL RINCÓN, EJIDO SAN ANTONIO PUEBLO NUEVO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Estado_De_México_San_José_Del_Rincón_Ejido_San_Antonio_Pueblo_Nuevo.pdf",
      },
      {
        nombre: "TEXCOCO DE MORA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Estado_De_México_Texcoco_De_Mora.pdf",
      },
      {
        nombre: "VILLA DE ALLENDE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Estado_De_México_Villa_De_Allende.pdf",
      },
      {
        nombre: "VILLA DEL CARBÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Estado_De_México_Villa_Del_Carbón.pdf",
      },
      {
        nombre: "XONACATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Estado_De_México_Xonacatlán.pdf",
      },
    ],
  },
  {
    Estado: "GUANAJUATO",
    Municipios: [
      {
        nombre: "CUERÁMARO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guanajuato_Cuerámaro.pdf",
      },
      {
        nombre: "SAN DIEGO DE LA UNIÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guanajuato_San_Diego_De_La_Unión.pdf",
      },
      {
        nombre: "SAN JOSÉ ITURBIDE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guanajuato_San_José_Iturbide.pdf",
      },
    ],
  },
  {
    Estado: "GUERRERO",
    Municipios: [
      {
        nombre: "ALCOZAUCA DE GUERRERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Alcozauca_De_Guerrero.pdf",
      },
      {
        nombre: "ATOYAC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Atoyac.pdf",
      },
      {
        nombre: "JUAN R. ESCUDERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Juan_R_Escudero.pdf",
      },
      {
        nombre: "MALINALTEPEC, PARAJE MONTERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Malinaltepec_Paraje_Montero.pdf",
      },
      {
        nombre: "METLATÓNOC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Metlatónoc.pdf",
      },
      {
        nombre: "TIXTLA DE GUERRERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Tixtla_De_Guerrero.pdf",
      },
      {
        nombre: "XOCHISTLAHUACA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Xochistlahuaca.pdf",
      },
      {
        nombre: "ATLAMAJALCINGO DEL MONTE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Guerrero_Atlamajalcingo_Del_Monte.pdf",
      },
    ],
  },
  {
    Estado: "HIDALGO",
    Municipios: [
      {
        nombre: "AJACUBA, SAN NICOLÁS TECOMATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Ajacuba_SanNicolásTecomatlán.pdf",
      },
      {
        nombre: "CHILCUAUTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Chilcuautla.pdf",
      },
      {
        nombre: "FRANCISCO I. MADERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Francisco_I_Madero.pdf",
      },
      {
        nombre: "HUASCA DE OCAMPO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Huasca_De_Ocampo.pdf",
      },
      {
        nombre: "JACALA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Jacala.pdf",
      },
      {
        nombre: "SAN FELIPE ORIZATLÁN, HUITZIZILINGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_San_Felipe_Orizatlán_Huitzizilingo.pdf",
      },
      {
        nombre: "TLANCHINOL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Tlanchinol.pdf",
      },
      {
        nombre: "YAHUALICA, MECATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Hidalgo_Yahualica.pdf",
      },
    ],
  },
  {
    Estado: "JALISCO",
    Municipios: [
      {
        nombre: "AYOTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Jalisco_Ayotlán.pdf",
      },
      {
        nombre: "TECOLOTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Jalisco_Tecolotlán.pdf",
      },
      {
        nombre: "TOMATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Jalisco_Tomatlán.pdf",
      },
    ],
  },
  {
    Estado: "MICHOACÁN",
    Municipios: [
      {
        nombre: "VILLAMAR",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Michoacán_Villamar.pdf",
      },
      {
        nombre: "ÁPORO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Michoacán_Áporo.pdf",
      },
      {
        nombre: "CHILCHOTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Michoacán_Chilchota.pdf",
      },
      {
        nombre: "PAJACUARÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Michoacán_Pajacuarán.pdf",
      },
      {
        nombre: "TACÁMBARO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Michoacán_Tacámbaro.pdf",
      },
      {
        nombre: "ZACAPU",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Michoacán_Zacapu.pdf",
      },
    ],
  },
  {
    Estado: "MORELOS",
    Municipios: [
      {
        nombre: "AYALA, MOYOTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Morelos_Ayala_Moyotepec.pdf",
      },
      {
        nombre: "TEPOZTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Morelos_Tepoztlán.pdf",
      },
      {
        nombre: "TLALTIZAPÁN DE ZAPATA, TICUMAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Morelos_Tlaltizapán_De_Zapata_Ticuman.pdf",
      },
    ],
  },
  {
    Estado: "NAYARIT",
    Municipios: [
      {
        nombre: "GUADALUPE OCOTÁN, LA YESCA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Nayarit_Guadalupe_Ocotán_La_Yesca.pdf",
      },
    ],
  },
  {
    Estado: "NUEVO LEÓN",
    Municipios: [
      {
        nombre: "ANÁHUAC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Nuevo_León_Anáhuac.pdf",
      },
    ],
  },
  {
    Estado: "OAXACA",
    Municipios: [
      {
        nombre: "ASUNCIÓN DE NOCHIXTLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_Asunción_De_Nochixtlán.pdf",
      },
      {
        nombre: "CIUDAD IXTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_Ciudad_Ixtepec.pdf",
      },
      {
        nombre: "HEROICA CIUDAD DE TLAXIACO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_Heroica_CiudadDeTlaxiaco.pdf",
      },
      {
        nombre: "HUAUTLA DE JIMÉNEZ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_HuautlaDeJiménez.pdf",
      },
      {
        nombre: "PUTLA VILLA DE GUERRERO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_PutlaVillaDeGuerrero.pdf",
      },
      {
        nombre: "SAN CRISTÓBAL AMATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanCristóbalAmatlán.pdf",
      },
      {
        nombre: "SAN FELIPE JALAPA DE DÍAZ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanFelipeJalapaDeDíaz.pdf",
      },
      {
        nombre: "SAN FRANCISCO TELIXTLAHUACA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanFranciscoTelixtlahuaca.pdf",
      },
      {
        nombre: "SAN ILDEFONSO VILLA ALTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanIldefonsoVillaAlta.pdf",
      },
      {
        nombre: "SAN JUAN BAUTISTA CUICATLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanJuanBautistaCuicatlán.pdf",
      },
      {
        nombre: "SAN JUAN BAUTISTA VALLE NACIONAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanJuanBautistaValleNacional.pdf",
      },
      {
        nombre: "SAN MIGUEL AMATITLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanMiguelAmatitlán.pdf",
      },
      {
        nombre: "SAN PEDRO POCHUTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SanPedroPochutla.pdf",
      },
      {
        nombre: "SANTA MARÍA JALAPA DEL MARQUÉS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SantaMaríaJalapaDelMarqués.pdf",
      },
      {
        nombre: "SANTIAGO YOLOMÉCATL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_SantiagoYolomécatl.pdf",
      },
      {
        nombre: "TLACOLULA DE MATAMOROS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_TlacolulaDeMatamoros.pdf",
      },
      {
        nombre: "VILLA DE TUTUTEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_VillaDeTututepec.pdf",
      },
      {
        nombre: "VILLA DE ZAACHILA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Oaxaca_VillaDeZaachila.pdf",
      },
    ],
  },
  {
    Estado: "PUEBLA",
    Municipios: [
      {
        nombre: "CHIAUTZINGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Puebla_Chiautzingo.pdf",
      },
      {
        nombre: "CHIGNAUTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Puebla_Chignautla.pdf",
      },
      {
        nombre: "CUETZALAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Puebla_Cuetzalan.pdf",
      },
      {
        nombre: "JOPALA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Puebla_Jopala.pdf",
      },
      {
        nombre: "ZINACATEPEC",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Puebla_Zinacatepec.pdf",
      },
    ],
  },
  {
    Estado: "QUERÉTARO",
    Municipios: [
      {
        nombre: "EZEQUIEL MONTES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Querétaro_EzequielMontes.pdf",
      },
      {
        nombre: "SAN JOAQUÍN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Querétaro_SanJoaquín.pdf",
      },
    ],
  },
  {
    Estado: "QUINTANA ROO",
    Municipios: [
      {
        nombre: "CHAN SANTA CRUZ, FELIPE CARRILLO PUERTO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/QuintanaRoo_ChanSantaCruzFelipeCarrilloPuerto.pdf",
      },
      {
        nombre: "FELIPE CARRILLO PUERTO, TIHOSUCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/QuintanaRoo_FelipeCarrilloPuertoTihosuco.pdf",
      },
      {
        nombre: "LÁZARO CÁRDENAS, KANTUNILKÍN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/QuintanaRoo_LázaroCárdenasKantunilkín.pdf",
      },
      {
        nombre: "OTHÓN P. BLANCO, EJIDO PUCTÉ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/QuintanaRoo_OthónPBlancoEjidoPucté.pdf",
      },
      {
        nombre: "SOLIDARIDAD, PLAYA DEL CARMEN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Quintana Roo_SolidaridadPlayaDelCarmen.pdf",
      },
    ],
  },
  {
    Estado: "SAN LUIS POTOSÍ",
    Municipios: [
      {
        nombre: "AQUISMÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/SanLuisPotosí_Aquismón.pdf",
      },
      {
        nombre: "RAYÓN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/SanLuisPotosí_Rayón.pdf",
      },
    ],
  },
  {
    Estado: "SINALOA",
    Municipios: [
      {
        nombre: "BADIRAGUATO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sinaloa_Badiraguato.pdf",
      },
      {
        nombre: "COSALÁ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sinaloa_Cosalá.pdf",
      },
    ],
  },
  {
    Estado: "SONORA",
    Municipios: [
      {
        nombre: "AGUA PRIETA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sonora_AguaPrieta.pdf",
      },
      {
        nombre: "ETCHOJOA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sonora_Etchojoa.pdf",
      },
      {
        nombre: "NAVOJOA, MASIACA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sonora_NavojoaMasiaca.pdf",
      },
      {
        nombre: "PLUTARCO ELÍAS CALLES, SONOYTA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sonora_PlutarcoElíasCallesSonoyta.pdf",
      },
      {
        nombre: "QUIRIEGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Sonora_Quiriego.pdf",
      },
    ],
  },
  {
    Estado: "TABASCO",
    Municipios: [
      {
        nombre: "BALANCAN, VILLA EL TRIUNFO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tabasco_BalancanVillaElTriunfo.pdf",
      },
      {
        nombre: "CÁRDENAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tabasco_Cárdenas.pdf",
      },
      {
        nombre: "COMALCALCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tabasco_Comalcalco.pdf",
      },
    ],
  },
  {
    Estado: "TAMAULIPAS",
    Municipios: [
      {
        nombre: "ALDAMA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tamaulipas_Aldama.pdf",
      },
      {
        nombre: "HIDALGO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tamaulipas_Hidalgo.pdf",
      },
      {
        nombre: "SAN FERNANDO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tamaulipas_SanFernando.pdf",
      },
    ],
  },
  {
    Estado: "TLAXCALA",
    Municipios: [
      {
        nombre: "CUAPIAXTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tlaxcala_Cuapiaxtla.pdf",
      },
      {
        nombre: "XALTOCAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tlaxcala_Xaltocan.pdf",
      },
      {
        nombre: "ZITLALTÉPEC DE TRINIDAD SÁNCHEZ SANTOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Tlaxcala_ZitlaltépecDeTrinidadSánchezSantos.pdf",
      },
    ],
  },
  {
    Estado: "VERACRUZ",
    Municipios: [
      {
        nombre: "ATLAHUILCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_Atlahuilco.pdf",
      },
      {
        nombre: "COATZACOALCOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_Coatzacoalcos.pdf",
      },
      {
        nombre: "HUAYACOCOTLA, CARBONERO JACALES",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_HuayacocotlaCarboneroJacales.pdf",
      },
      {
        nombre: "JÁLTIPAN, LOMAS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_JáltipanLomas.pdf",
      },
      {
        nombre: "MINATITLÁN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_Minatitlán.pdf",
      },
      {
        nombre: "PAPANTLA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_Papantla.pdf",
      },
      {
        nombre: "PLAYA VICENTE",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_PlayaVicente.pdf",
      },
      {
        nombre: "POZA RICA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_PozaRica.pdf",
      },
      {
        nombre: "RÍO BLANCO",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_RíoBlanco.pdf",
      },
      {
        nombre: "SANTIAGO SOCHIAPAN",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Veracruz_SantiagoSochiapan.pdf",
      },
    ],
  },
  {
    Estado: "YUCATÁN",
    Municipios: [
      {
        nombre: "IZAMAL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Yucatán_Izamal.pdf",
      },
      {
        nombre: "TEKAX",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Yucatán_Tekax.pdf",
      },
      {
        nombre: "TICUL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Yucatán_Ticul.pdf",
      },
      {
        nombre: "TINÚM, PISTÉ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Yucatán_TinúmPisté.pdf",
      },
      {
        nombre: "VALLADOLID",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Yucatán_Valladolid.pdf",
      },
      {
        nombre: "YAXCABÁ",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Yucatán_Yaxcabá.pdf",
      },
    ],
  },
  {
    Estado: "ZACATECAS",
    Municipios: [
      {
        nombre: "GRAL. PÁNFILO NATERA",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Zacatecas_GeneralPánfiloNatera.pdf",
      },
      {
        nombre: "MAZAPIL",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Zacatecas_Mazapil.pdf",
      },
      {
        nombre: "PINOS",
        pdf: "https://framework-gb.cdn.gob.mx/applications/ubbj/instalaciones/Zacatecas_Pinos.pdf",
      },
    ],
  },
];

const getCarrerasMenu = () => {
  return carreras;
};

const getSedesDGPMenu = () => {
  return sedes_DGP;
};

const getPlanesDeEstudio = () => {
  return planes_de_estudio;
};

const getInstalaciones = () => {
  return Instalaciones;
};

export default {
  getCarrerasMenu,
  getSedesDGPMenu,
  getPlanesDeEstudio,
  getInstalaciones,
};
