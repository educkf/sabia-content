export default {
    fontSize: 19, // number
    fontsOptions: [
        {
            label: 'Libre Franklin',
            name: '"Libre Franklin", sans-serif;',
            link: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
            defaultTextFont: true
        },
        {
            label: 'Inter',
            name: '"Inter", sans-serif',
            link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
            defaultBaseFont: true
        },
        {
            label: 'Open Dyslexic',
            name: '"Open-Dyslexic", sans-serif',
            link: 'https://fonts.cdnfonts.com/css/open-dyslexic'
        },
        {
            label: 'Atkinson Hyperlegible',
            name: 'Atkinson Hyperlegible',
            link: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
    ],

    cssString: `
        main#rootComponent  {
            transition: background-color 200ms linear;
        }

        .capa.columns-double,
        .capa.columns-single {
            background-color: rgb(24, 64, 151);
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-size: cover;
        }

        .capa.columns-double .columnsArea,
        .capa.columns-single .columnsArea {
            column-count: initial !important;
        }

        #rootComponent.capa .viewer-nav {
            color: #fff !important
        }

        #rootComponent.capa .slider-target {
            display: none;
        }

        .estudos-decoloniais.columns-double.currentPage-1,
        .estudos-decoloniais.columns-single.currentPage-1,
        .estudos-decoloniais.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

        .estudos-culturais-do-design.columns-double.currentPage-1,
        .estudos-culturais-do-design.columns-single.currentPage-1,
        .estudos-culturais-do-design.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

        .design-decolonial.columns-double.currentPage-1,
        .design-decolonial.columns-single.currentPage-1,
        .design-decolonial.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }
    `,

    references: [
        {
            "cit": "GAMA, 2019",
            "ref": "GAMA, Mara. <strong>As três rotas que trouxeram a centenária Bauhaus ao Brasil</strong>. Folha de São Paulo, São Paulo, 1 abr. 2019. Disponível em: https://www1.folha.uol.com.br/ilustrissima/2019/03/as-tres-rotas-que-trouxeram-a-centenaria-bauhaus-ao-brasil.shtml. Acesso em: 4 abr. 2019"
        },
        {
            "cit": "LEON, 2006",
            "ref": "LEON, Ethel. <strong>O Instituto de Arte Contemporânea do Museu de Arte Moderna (MAM) de São Paulo dos anos 1950</strong>. São Paulo, 2006."
        },
        {
            "cit": "LUGONES, 1978",
            "ref": "LUGONES, Maria. <strong>Colonialidad y género</strong>. Tábula Rasa, Bogotá, Colômbia, n. 9, p. 73-101, julho-dezembro de 1978."
        },
        {
            "cit": "OCAD, 2017",
            "ref": "Ontario College of Arts and Design University. <strong>OCAD University Academic Plan: TRANSFORMING STUDENT EXPERIENCE 2017-2022</strong>. Canadá, 2017. Disponível em: https://www.ocadu.ca/Assets/content/governance/Academic-Plan-2017.pdf?_ga=2.3898422.729932804.1559359442-570091336.1559263063. Acesso em 29 de maio de 2019."
        },
        {
            "cit": "KRENAK, 1999",
            "ref": "KRENAK, Ailton. O eterno retorno do encontro. In: NOVAES, Adauto (org.), <strong>A Outra Margem do Ocidente</strong>, Minc-Funarte/Companhia Das Letras, 1999."
        },
        {
            "cit": "ANI, 1994",
            "ref": "ANI, Marimba. <strong>Yurugu: An Afrikan-Centered Critique of European Cultural Thought and Behaviour</strong>. 1. ed. Trenton: Africa World Press, 1994. 636 p."
        },
        {
            "cit": "SVAMPA, 2011",
            "ref": "SVAMPA, Maristella. Extrativismo neodesenvolvimentista e movimentos sociais. Um giro ecoterritorial rumo a novas alternativas?. In: Grupo permanente de trabajo sobre alternativas al desarrollo. <strong>Más Allá del Desarrollo</strong>. Quito: Fundação Rosa Luxemburgo, 2011."
        },
        {
            "cit": "KHANDWALA, 2019",
            "ref": "KHANDWALA, Anoushka. <strong>What does it mean to decolonize design?: Dismantling Design History 101</strong>. [S. l.]: Aiga Eye on Design, 5 jun. 2019. Disponível em: https://eyeondesign.aiga.org/what-does-it-mean-to-decolonize-design/ Acesso em: 12 out. 2019"
        },
        {
            "cit": "ESCOBAR, 2016",
            "ref": "ESCOBAR, Arturo. <strong>Autonomía y Diseño: la realización del comunal</strong>, Colômbia: Editorial Universidad del Cauca, 2016"
        },
        {
            "cit": "COUTO, 2008",
            "ref": "COUTO, Rita Maria de Souza. <strong>Escritos sobre Ensino de Design no Brasil</strong>. 1ª ed, Rio de Janeiro, 2008."
        },
        {
            "cit": "ESCOBAR, 2007",
            "ref": "ESCOBAR, Arturo. <strong>La invención del Tercer Mundo</strong>. Caracas: Fundación Editorial el perro y la rana, 2007."
        },
        {
            "cit": "FEENBERG, 2010",
            "ref": "FEENBERG, Andrew. O que é Filosofia da Tecnologia? In: NEDER, Ricardo T. <strong>A Teoria Crítica de Andrew Feenberg: racionalização democrática, poder e tecnologia</strong>. Brasília – DF: Observatório pela Tecnologia Social na América Latina / CDS / UNB / Capes, 2010"
        },
        {
            "cit": "DOWBOR, 2017",
            "ref": "DOWBOR, Ladislau. <strong>A era do capital improdutivo: Por que oito famílias tem mais riqueza do que a metade da população do mundo?</strong>. São Paulo: Autonomia Literária, 2017."
        },
        {
            "cit": "MALDONADO, 1991",
            "ref": "MALDONADO, Tomás. <strong>Disegno indutriale: un riesame</strong>. Itália: Giangiacomo Feltrinelli Editore, 1991."
        },
        {
            "cit": "ACOSTA, 2011",
            "ref": "ACOSTA, Alberto. Extrativismo e neoextrativismo: Duas faces da mesma maldição. In: <strong>Grupo permanente de trabajo sobre alternativas al desarrollo. Más Allá del Desarrollo</strong>. Quito: Fundação Rosa Luxemburgo, 2011"
        },
        {
            "cit": "BONSIEPE, 1978b",
            "ref": "BONSIEPE, Gui. <strong>Teoria y practica del diseno industrial: Elementos para una manualística crítica</strong>. Barcelona: Gustavo Gili, 1978b"
        },
        {
            "cit": "PAPANEK, 1984",
            "ref": "PAPANEK, Victor. <strong>Design for the Real World: Human Ecology and Social Change</strong>, 2ª ed. 1984."
        },
        {
            "cit": "CHAUÍ, 2000",
            "ref": "CHAUÍ, Marilena. <strong>Brasil. Mito fundador e sociedade autoritária</strong>. São Paulo: Fundação Perseu Abramo, 2000."
        },
        {
            "cit": "NASCIMENTO, 1978",
            "ref": "NASCIMENTO, Abdias do. <strong>O genocídio do negro brasileiro: Processo de racismo mascarado</strong>. Rio de Janeiro: Paz e Terra S/A, 1978."
        },
        {
            "cit": "BALLESTRIN, 2013",
            "ref": "BALLESTRIN, Luciana. América Latina e o giro decolonial. <strong>Revista Brasileira de Ciência Política</strong>, nº 11. Brasília, maio/agosto de 2013, pp. 89-117."
        },
        {
            "cit": "BONSIEPE, 1978",
            "ref": "BONSIEPE, Gui. <strong>Diseño Industrial, Tecnología y Dependencia</strong>. Coleção Mixcoac Insurgentes. México: Editorial Edicol S.A., 1978."
        },
        {
            "cit": "BONSIEPE, 1983",
            "ref": "BONSIEPE, Gui. <strong>A  “tecnologia” da tecnologia</strong>. São Paulo, Edgard Blucher, 1983."
        },
        {
            "cit": "United Nations, 1949",
            "ref": "United Nations. <strong>World Economic Report 1948-1949</strong>, 1949."
        },
        {
            "cit": "FEDERICI, 2004",
            "ref": "FEDERICI, Silvia. <strong>Calibã e a Bruxa: Mulheres, corpo e acumulação primitiva</strong>, Brooklyn, Autonomedia, 2004,"
        },
        {
            "cit": "AGUINAGA et al., 2011",
            "ref": "AGUINAGA, et al. Pensar a partir do feminismo: Críticas e alternativas ao desenvolvimento. In: <strong>Grupo permanente de trabajo sobre alternativas al desarrollo. Más Allá del Desarrollo</strong>. Quito: Fundação Rosa Luxemburgo, 2011."
        },
        {
            "cit": "RODNEY, 1975",
            "ref": "RODNEY, Walter. <strong>Como a Europa subdesenvolveu a África</strong>. Lisboa: Seara Nova, 1975."
        },
        {
            "cit": "ANSARI, 2018",
            "ref": "ANSARI, Ahmed. <strong>What a Decolonisation of Design Involves: Two Programmes for Emancipation. Beyond Change: Questioning the role of design in times of global transformations</strong>, 2018. Disponível em: https://www.decolonisingdesign.com/actions-and-interventions/publications/2018/what-a-decolonisation-of-design-involves-by-ahmed-ansari. Acesso em 12 de outubro de 2019."
        },
        {
            "cit": "SOARES, 2019b",
            "ref": "SOARES, Horrana Porfírio. <strong>A história do “Cadê os Pretos no Design?” - Parte 2</strong>. 2019. Disponível em: https://medium.com/@hon.porfirio/a-hist%C3%B3ria-do-cad%C3%AA-os-pretos-no-design-5e55f75e7137. Acesso em 27 de outubro de 2019."
        },
        {
            "cit": "LANG, 2016",
            "ref": "LANG, Miriam. Alternativas al Desarrollo. <strong>Descolonizar o Imaginário, debates sobre prós extrativismo e alternativas ao desenvolvimento</strong>. Fundação Rosa Luxemburgo, 2016, pp. 25-44."
        },
        {
            "cit": "FANON, 1961",
            "ref": "FANON, Frantz. <strong>Os condenados da terra</strong>. Rio de Janeiro: Civilização Brasileira, 1961."
        },
        {
            "cit": "DUSSEL, 1993",
            "ref": "DUSSEL, Enrique. <strong>Eurocentrism and Modernity: Introduction to the Frankfurt Lectures</strong>. The Postmodernism Debate in Latin America, Durham, v. 20-3, ed. 2, p. 65-76, 1993."
        },
        {
            "cit": "MACHADO, 2018",
            "ref": "MACHADO, Carlos Eduardo Dias. <strong>A construção da raça branca e a suposta incapacidade intelectual negra para a ciência, tecnologia e inovação/</strong>. Revista da ABPN: Caderno Temático: Letramentos de Reexistência, [s. l.], v. 10, ed. Especial, p. 12-29, 2018."
        },
        {
            "cit": "BARDI, 1994",
            "ref": "BARDI, Lina Bo. <strong>Tempos de Grossura: O design no impasse</strong>. São Paulo: Instituto Lina Bo e PM Bardi, 1994."
        },
        {
            "cit": "DAGNINO, 2004",
            "ref": "DAGNINO, Renato; BRANDÃO, Flávio Cruvinel; NOVAES, Henrique Tahan. Sobre o Marco Analítico-conceitual da Tecnologia Social. In: LASSANCE JR, Antonio E. <strong>Tecnologia Social: uma estratégia para o desenvolvimento</strong>. Fundação Banco do Brasil: Rio de Janeiro – RJ, 2004"
        },
        {
            "cit": "SANTOS, 2009",
            "ref": "SANTOS, Boaventura de Sousa. Para além do pensamento abissal: das linhas globais a uma ecologia de saberes. In: SANTOS, Boaventura de Sousa; MENESES, Maria Paula. <strong>Epistemologias do Sul</strong>. Coimbra: Edições Almedina, S.A., 2009."
        },
        {
            "cit": "SOARES, 2019",
            "ref": "SOARES, Horrana Porfírio. <strong>A história do “Cadê os Pretos no Design?” - Parte 1</strong>. 2019 Disponível em: https://medium.com/@hon.porfirio/a-hist%C3%B3ria-do-cad%C3%AA-os-pretos-no-design-4213c484ba1f. Acesso em 16 de novembro de 2019."
        },
        {
            "cit": "FRANK, 1980",
            "ref": "FRANK, Andre Gunder. <strong>Acumulação dependente e subdesenvolvimento: repensando a teoria da dependência</strong>. Brasília: Editora Brasiliense, 1980"
        },
        {
            "cit": "United Nations, 1951",
            "ref": "United Nations. <strong>World Economic Report 1950-1951</strong>, 1951."
        },
        {
            "cit": "SANTOS, 2002",
            "ref": "SANTOS, Boaventura de Sousa. <strong>Para uma sociologia das ausências e uma sociologia das emergências</strong>. Revista Crítica de Ciências Sociais, nº 63. Centro de Estudos Sociais da Universidade de Coimbra, Coimbra, outubro de 2002: pp. 237-280. Disponível em: http://journals.openedition.org/rccs/1285"
        },
        {
            "cit": "MIGNOLO, 2016",
            "ref": "MIGNOLO, Walter. <strong>COLONIALIDADE: O lado mais escuro da modernidade. Revista brasileira de ciências sociais</strong>, v. 32, n° 94. 2016."
        },
        {
            "cit": "TUNSTALL, 2017",
            "ref": "TUNSTALL, Elizabeth Dori. <strong>Intersectional Perspectives on Design, Politics and Power</strong>. Decolonising design: Decolonising design, 2017. Podcast. Disponível em: https://www.mixcloud.com/decolonisingdesign/intersectional-perspectives-on-design-politics-and-power-elizabeth-dori-tunstall/. Acesso em 28 de maio de 2019."
        },
        {
            "cit": "MANZINI, 2008",
            "ref": "MANZINI, Ezio. <strong>Design para inovação social e sustentabilidade</strong>, 2008, pp. 19-59."
        },
        {
            "cit": "TONKINWISE, 2015",
            "ref": "TONKINWISE, Cameron. <strong>Design for transitions - from what to what?</strong>. Design Philosophy Papers. Estados Unidos, 2015."
        },
        {
            "cit": "DIAS, 2015",
            "ref": "DIAS, Dora. Breve histórico da Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo. In: DIAS, Dora. <strong>O ensino de Comunicação Visual na FAU-USP: história, implementação e características</strong>. 2015. Dissertação (Mestrado em Arquitetura e Urbanismo) - Faculdade de Arquitetura e Urbanismo, Universidade de São Paulo, São Paulo, 2015"
        },
        {
            "cit": "GONZALEZ, 1988",
            "ref": "GONZALEZ, Lélia. <strong>A categoria político-cultural de amefricanidade</strong>. In: Tempo Brasileiro. Rio de Janeiro, Nº. 92/93 (jan./jun.). 1988, p. 69-82."
        },
        {
            "cit": "DUBOIS, 2016",
            "ref": "DUBOIS, Laurent. <strong>Why Haiti should be at the centre of the Age of Revolution</strong>. Aeon, 7 de novembro de 2016. Disponível em : https://aeon.co/essays/why-haiti-should-be-at-the-centre-of-the-age-of-revolution. Acesso em 11 de maio de 2021."
        },
        {
            "cit": "PRADO, 2015",
            "ref": "PRADO, Fernando Correa. <strong>A ideologia do desenvolvimento e a controvérsia da dependência no Brasil contemporâneo</strong>. Orientador: Prof. Dr. José Luís da Costa Fiori. 2015. Tese (Doutorado em Economia Política Internacional) - Instituto de Economia da Universidade Federal do Rio de Janeiro, Rio de Janeiro, 2015."
        },
        {
            "cit": "ROCHA, 2018",
            "ref": "ROCHA, Ciro Fico Vieira da. <strong>Visualização de dados sociais</strong>. 2018. Trabalho de Conclusão de Curso (Bacharelado em Design) - Faculdade de Arquitetura e Urbanismo, Universidade de São Paulo, São Paulo, 2018."
        },
        {
            "cit": "SOUZA, 2001",
            "ref": "SOUZA, Francisco Raul Cornejo de. <strong>As formas da forma: o design brasileiro entre o modernismo e a modernização</strong>. 2001. Tese (Doutorado em Sociologia) - Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo, São Paulo, 2001."
        },
        {
            "cit": "SANTOS, 2001",
            "ref": "SANTOS, Maria Cecília Loschiavo dos. Repensando a Pesquisa e a Pós-graduação em design. In: <strong>Perspectivas do ensino e da pesquisa em design na pós-graduação</strong>, 2001, Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo. Anais [...]. São Paulo: Conselho Nacional de Desenvolvimento Tecnológico (CNPq), 2001."
        },
        {
            "cit": "GUDYNAS, 2009",
            "ref": "GUDYNAS, Eduardo. <strong>La dimensión ecológica del buen vivir: entre el fantasma de la Modernidad y el desafío biocéntrico</strong>. Uruguay. Revista Obets, nº 4, p. 49-53. Centro de Investigación y Promoción Franciscano y Ecológico (CIPFE), 2009"
        },
        {
            "cit": "COCHINOV, 2009",
            "ref": "COCHINOV, Allan. Foreword. In: PILLOTON, Emily. <strong>Design Revolution: 100 products that empower people</strong>. [S. l.]: Metropolis Books, 2009."
        },
        {
            "cit": "MAGALHÃES, 1998",
            "ref": "MAGALHÃES, Aloísio. <strong>O que o desenho industrial pode fazer pelo país?</strong> Por uma nova conceituação e uma ética do desenho industrial no Brasil. Rio de Janeiro. Arcos, Volume 1, 1998."
        },
        {
            "cit": "QUIJANO, 2005",
            "ref": "QUIJANO, Aníbal. <strong>Colonialidade do poder, Eurocentrismo e América Latina. A colonialidade do saber: eurocentrismo e ciências sociais</strong>. Perspectivas latino-americanas. CLACSO, Consejo Latinoamericano de Ciencias Sociales, 2005."
        },
        {
            "cit": "Museum of Modern Art, s/d",
            "ref": "Museum of Modern Art. <strong>Good Design Quotes (1941- 1959)</strong>. Disponível em https://www.moma.org/d/pdfs/W1siZiIsIjIwMTkvMDIvMjgvOHNnY2VzZWV2NV9WR0RfUXVvdGVzLnBkZiJdXQ/VGD%20Quotes.pdf?sha=14ab2a43e9963ee0. Acesso em 29 de maio de 2019."
        },
        {
            "cit": "SANTOS, 1993",
            "ref": "SANTOS, Maria Cecília Loschiavo dos; ARANTES, Otilia Beatriz Fiori. <strong>Tradição e modernidade no móvel brasileiro: visões da utopia na obra de Carrera, Tenreno, Zanine e Sergio Rodrigues</strong>. 1993.Universidade de São Paulo, São Paulo, 1993."
        },
        {
            "cit": "FURTADO, 1961",
            "ref": "FURTADO, Celso. <strong>Desenvolvimento e subdesenvolvimento</strong>, Rio de Janeiro: Editora Fundo de Cultura, 1961"
        },
        {
            "cit": "CUNHA JR, 2010",
            "ref": "CUNHA JR, Henrique. <strong>Tecnologia Africana na Formação Brasileira</strong>. 1. ed. Rio de Janeiro: Centro de articulação de Populações Marginalizadas - CeaP, 2010"
        },
        {
            "cit": "Ministério da Economia, 2019",
            "ref": "Ministério da Economia. <strong>Comex Vis: Continentes e Blocos - Mercado Comum do Sul</strong>, Mercosul. Disponível em: http://www.mdic.gov.br/comercio-exterior/estatisticas-de-comercio-exterior/comex-vis/frame-bloco?bloco=mercosul. Acesso em 1 de junho de 2019."
        },
        {
            "cit": "GROSFOGUEL, 2016",
            "ref": "GROSFOGUEL, Ramón. <strong>A estrutura do conhecimento nas universidades ocidentalizadas: racismo/sexismo epistêmico e os quatro genocídios/epistemicídios do longo século XVI</strong>. Revista Sociedade e Estado, [S. l.], janeiro/abril 2016."
        },
        {
            "cit": "TUCK e YANG, 2012",
            "ref": "TUCK, Eve; YANG, K. Wayne. <strong>Decolonization is not a metaphor</strong>. Decolonization: Indigeneity, Education & Society, [S. l.], 2012."
        },
        {
            "cit": "LIMA, 2018",
            "ref": "LIMA, Verena Ferreira Tidei de. <strong>Ensino superior em design de moda no Brasil: práxis e (in)sustentabilidade</strong>. 2018. Tese (Doutorado em Arquitetura e Urbanismo) - Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo, São Paulo, 2018."
        }
    ],

    footnotes: [
        {
            "id": "footnote1",
            "text": "Este trecho é uma fala da historiadora aymara Silvia Rivera Cusicanqui, citada por Escobar (2016)"
        },
        {
            "id": "footnote2",
            "text": "Devo essa reflexão ao meu pai, Koji Okabayashi, em comunicação pessoal no ano de 2019."
        },
        {
            "id": "footnote3",
            "text": "O neodesenvolvimentismo é comumente utilizado para descrever as políticas econômicas dos governos progressistas latino americanos dos anos 2000-2010, que “apostaram, na prática, no neodesenvolvimentismo e aprofundaram o modelo extrativista – argumentando com a necessidade de financiar o investimento social com os royalties obtidos com a exportação de commodities.” (ACOSTA, 2011, p. 34). Maristella Svampa, aponta para a contradição deste modelo, que, por um lado utiliza da retórica do desenvolvimento econômico e social numa chave “positiva”, de “soberania nacional” e popular, e por outro valem-se de práticas que expulsam populações para a implementação da infraestrutura que a atividade extrativista intensiva exige e levam à destruição ambiental e das dinâmicas sociais locais (SVAMPA, 2011)."
        },
        {
            "id": "footnote4",
            "text": "Mais sobre o caráter ontológico do design será elaborado com maior profundidade adiante."
        },
        {
            "id": "footnote5",
            "text": "Definição extraída do glossário presente no livro <em>Yurugu: An Afrikan Centered Critique on European Cultural Thought and Behaviour</em>."
        },
        {
            "id": "footnote6",
            "text": "Esse ponto central é o que Ani chama de asili da cultura europeia, complementado por outros dois conceitos: utamaroho, ou a forma como a asili se desdobra na subjetividade dos europeus; e utamawazo, a forma como a asili se manifesta através da epistemologia europeia. Em outras palavras utamaroho é o comportamento culturalmente estruturado e utamawazo o pensamento culturalmente estruturado (ANI, 1994)."
        },
        {
            "id": "footnote7",
            "text": "Para um compilado de textos que explicitam a visão eurocêntrica sobre os povos não-europeus ver O genocídio do negro brasileiro, de Abdias do Nascimento (1968); <em>Yurugu: An Afrikan- Centered Critique on European Thought and Behaviour</em>, de Marimba Ani; e o artigo A construção da raça branca e a suposta incapacidade intelectual negra para a ciência, tecnologia e inovação, de Carlos Eduardo Dias Machado."
        },
        {
            "id": "footnote8",
            "text": "<em>Abya-Yala</em> é uma das formas como os povos originários da América latina se referem ao continente americano num esforço em deixar de utilizar o nome dado pelos colonizadores europeus. Significa \"continente vida\" no idioma do povo gunaduna da Colômbia e Panamá (ESCOBAR, 2016)."
        },
        {
            "id": "footnote9",
            "text": "<em>Maafa</em> é uma expressão do idioma Swahili que significa “grande Desastre”. Usá-la para se referir ao período que compreende o tráfico transatlântico de africanos escravizadas faz parte do esforço de intelectuais afrocentradas de criar seus próprios termos para se referir à história de seu povo no continente e na diáspora."
        },
        {
            "id": "footnote10",
            "text": "Essa noção me foi apresentada em uma fala da colega pesquisadora Horrana Porfírio em um seminário interno do Grupo de Estudos em Tecnologia Social (Tecsol) no dia 5 de outubro de 2019, após visita à exposição Design e tecnologia no tempo da escravidão, do Museu Afro-Brasil."
        },
        {
            "id": "footnote11",
            "text": "Aqui, por trabalho reprodutivo entende-se todo o trabalho relacionado ao cuidado, físico e emocional, fundamental para a manutenção da vida. (FEDERICI, 2004)."
        },
        {
            "id": "footnote12",
            "text": "As questões concernentes à relação entre o design e o sistema capitalista terão papel secundário nas análises presentes nesse trabalho, embora sejam indissociáveis. Aqui, trago uma perspectiva epistemológica/cultural sobre o design, sem focar tanto nos aspectos econômicos e materiais. No futuro, sem dúvidas, essas são questões a serem incorporadas neste olhar, principalmente no que diz respeito à relação do design com o “desenvolvimento”."
        },
        {
            "id": "footnote13",
            "text": "É interessante explicitar o caráter contraditório deste processo. Para que a modernidade prevaleça enquanto projeto universal, os elementos que denunciam suas bases coloniais devem ser apagados. Entretanto, o próprio processo de apagamento configura o processo colonial de destruição do outro."
        },
        {
            "id": "footnote14",
            "text": "Tive contato com essa informação durante uma visita guiada pelo centro histórico de São Paulo promovida pelas pesquisadoras integrantes do NEPEN (Núcleo de Estudantes e Pesquisadores Negros) do Departamento de Geografia da USP. De acordo com as pesquisadoras, embora a demolição da capela tenha ocorrido em 1904, o letreiro da Casa Mathilde (famosa doceria portuguesa na Praça Antônio Prado) “desde 1850” dá a entender que a confeitaria “sempre esteve ali”, contribuindo para o apagamento histórico da presença de africanos escravizados e livres na formação urbana da cidade de São Paulo. A Casa Mathilde está construída sobre o cemitério da capela."
        },
        {
            "id": "footnote15",
            "text": "Digo isso partindo da noção de que a expulsão de populações indígenas de seus territórios ancestrais ignora a indissociabilidade entre seus modos de vida e sua cultura ao território e tomando como base aa definição do crime de genocídio estabelecida no artigo 6 da Convenção de Genebra de 1949."
        },
        {
            "id": "footnote16",
            "text": "Aqui, ironicamente o desenvolvimento (capitalista) é colocado como um processo incômodo..."
        },
        {
            "id": "footnote17",
            "text": "Comex Vis: Continentes e Blocos - Mercado Comum do Sul, Mercosul. Disponível em: <a href=\"http: //www.mdic.gov.br/comercioexterior/estatisticas-de-comercioexterior/comex-vis/framebloco?bloco=mercosul\">http://www.mdic.gov.br/comercioexterior/estatisticas-de-comercioexterior/comex-vis/framebloco?bloco=mercosul</a>. Acesso em 1 de junho de 2019."
        },
        {
            "id": "footnote18",
            "text": "Devo essa reflexão a uma fala de Ailton Krenak no episódio sobre as Guerras de Conquista na série documental <em>Guerras do Brasil</em>."
        },
        {
            "id": "footnote19",
            "text": "Aqui, associo o design ao termo “sociobiocêntrico” utilizado por Alberto Acosta  para caracterizar as transições inspiradas pelo conceito do Bem Viver em seu artigo <em>Extrativismo e neoextrativismo: Duas faces da mesma maldição</em>, presente no livro <em>Descolonizar o Imaginário: Debates sobre pós-extrativismo e alternativas ao desenvolvimento</em> (ACOSTA, 2011)."
        }

    ]
}
