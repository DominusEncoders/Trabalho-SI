generateDivBLock = (indice, nome) =>  `
    <div class="col-lg-5 mb-lg-0 mb-4" style="margin: 20px; width: 400px">
        <div class="card z-index-2">
            <div class="card-body p-3">
                <div class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
                    <div class="chart">
                        <canvas id="chart-bars-${indice}" class="chart-canvas" height="170" width="387" style="display: block; box-sizing: border-box; height: 170px; width: 387.5px;"></canvas>
                    </div>
                </div>
                <h6 id="chart-title" class="ms-2 mt-2 mb-0" style="text-align: center; font-size: 20px"> ${nome} </h6>
            </div>
        </div>      
    </div>
` 

pagina = ``
mapPage = (quantidade, nomes) => {
    for(let i = 0; i < quantidade; i++){
        pagina += generateDivBLock(i, nomes[i]);
    }
}

words = 
// 
cores = ['#9ADCFF', '#FFF89A', '#FFB2A6', '#FF8AAE', '#E6E6FA', '#B0E0E6', '#FFDAB9', '#ffff7a', '#8aed8a', '#D8BFD8', '#FF8C00', '#7662f5', `#A9A9A9`, `#87CEFA`, `#8FBC8F`, `#D2B48C`,
`#DDA0DD`, `#FFE4B5`, `#FFA07A`, `#DDA0DD`, `#9932CC`, `#D2B48C`, `#CD853F`, `#BDB76B`] // ACRESCENTAMOS CORES, POIS GRÁFICO LOCAL DE TRABALHO ESTAVA REPETINDO CORES (MAS AINDA FALTOU)

function atualizar(page){ //Botão - qd clica no início
    let container = document.querySelector("#mainContainer");
    let inicio = document.querySelector("#inicio");    
    let aquisicaoInfo = document.querySelector("#aquisicaoInfo");
    let aspectosPessoais = document.querySelector("#aspectosPessoais");
    let bens = document.querySelector("#bens");
    let computador = document.querySelector("#computador");
    let eletronicos = document.querySelector("#eletronicos");
    let fatec = document.querySelector("#fatec");
    let habilidadesConhecimentos = document.querySelector("#habilidadesConhecimentos");
    let trabalho = document.querySelector("#trabalho");

    container.innerHTML = ``
    if(page === `inicio`){
        pagina = ``
        let objetos = [
            //chartData.aboutYou,

            chartData.bornDate,
            chartData.infoByFriends,
            chartData.infoByInternet,
            chartData.infoByNews,
            chartData.infoBySocialMedia,
            chartData.infoByMagazine,
            chartData.infoByRadio,
            chartData.infoByTelevision,
            chartData.frequencyNews,
            chartData.newsCategories,
            chartData.electronicUsage,
            chartData.useElectronicsAtHome,
            chartData.useElectronicsAtOtherPlaces,
            chartData.useElectronicsAtWork,
            chartData.bornState,
            chartData.livingCity,
            chartData.gender,
            chartData.marital,
            chartData.deficit,
            chartData.childrenAmount,
            chartData.yearReading,
            chartData.favoriteReading,
            chartData.doesVolunteer,
            chartData.religion,
            chartData.entertainments,
            chartData.paidHealthPlan,
            chartData.fatherDegree,
            chartData.schoolType,
            chartData.motherDegree,
            chartData.accessibilityOpinion,
            
            chartData.livingWith,
            chartData.livingAmount,
            chartData.livingSituation,
            chartData.livingTime,
            chartData.familySalary,
            chartData.autoAmount,
            chartData.cellphoneAmount,
            chartData.freezerAmount,
            chartData.motoAmount,
            chartData.washingMachineAmount,
            chartData.computerAmount,
            chartData.radioAmount,
            chartData.televisionAmount,
            chartData.dvdAmount,
            chartData.haveMaid,
            chartData.haveInternet,
            chartData.havePaidTv,
            chartData.havePhone,
            chartData.useComputerToPurchaseOnline,
            chartData.useComputerToEmail,
            chartData.useComputerToEntertainment,
            chartData.useComputerToBanking,
            chartData.useComputerToSchool,
            chartData.useComputerToWork,
            chartData.course,
            chartData.period,
            chartData.startYear,
            chartData.startSemester,
            chartData.howKnewFatec,
            chartData.whyThisCourse,
            chartData.courseExpectation,
            chartData.postDegreeExpectation,
            chartData.studiedHereAlready,
            chartData.locomotion,
            chartData.haveCourse,
            chartData.computingKnowledge,
            chartData.powerpointKnowledge,
            chartData.wordKnowledge,
            chartData.linuxKnowledge,
            chartData.excelKnowledge,
            chartData.geKnowledge,
            chartData.windowsKnowledge,
            chartData.spanishKnowledge,
            chartData.englishKnowledge,
            chartData.languagesKnowledge,
            chartData.doesWork,
            chartData.job,
            chartData.jobArea,
            chartData.jobTime,
            chartData.jobCompany,
        ];
        
        let nomes = [
            //"Sua história e sonhos de vida",
            "Idade dos Alunos",
            "Busca por informações: Conversa com amigos",
            "Busca por informações: Internet",
            "Busca por informações: Jornais",
            "Busca por informações: Redes sociais",
            "Busca por informações: Revistas",
            "Busca por informações: Rádio",
            "Busca por informações: Televisão",
            "Frequência que lê jornal",
            "Assuntos mais lidos em jornal",
            "Frequência de uso de eletrônicos",
            "Usa eletrônicos em casa",
            "Usa em outros lugares",
            "Usa no trabalho",
            "Qual estado em que nasceu?",
            "Cidade de residência",
            "Gênero",
            "Estado civil",
            "Portador de alguma deficiência?",
            "Número de filhos",
            "Quantos livros lê por ano?",
            "Gênero literário preferido",
            "Realiza atividades voluntárias?",
            "Religião",
            "Fontes de entretenimento cultural",
            "Possui plano de saúde privado?",
            "Grau de escolaridade do pai",
            "Tipo de escola em que você estudou",
            "Grau de escolaridade da mãe",
            "Nível de acessibilidade e inclusão da Fatec - Franca",
            "Com quem mora atualmente?",
            "Quantas pessoas moram em seu domicílio?",
            "Situação do domicílio onde mora",
            "Tempo de moradia neste domicílio",
            "Renda mensal da família",
            "Automóvel",
            "Celular",
            "Geladeira",
            "Motocicleta",
            "Máquina de lavar roupa",
            "Computador",
            "Rádio",
            "Televisor",
            "Aparelho de DVD",
            "Empregada mensalista",
            "Internet",
            "TV por assinatura",
            "Telefone fixo",
            "Uso de computador para compras eletrônicas",
            "Uso de computador para comunicação por e-mail",
            "Uso de computador para entretenimento",
            "Uso de computador para operações bancárias",
            "Uso de computador para trabalhos escolares",
            "Uso de computador para trabalhos profissionais",
            "Curso",
            "Período de estudo",
            "Ano de ingresso no curso",
            "Semestre de ingresso no curso",
            "Como conheceu a Fatec?",
            "Por que escolheu este curso?",
            "Expectativas com o curso",
            "Expectativas após o fim do curso",
            "Já estudou na Fatec?",
            "Meio de locomoção até a Fatec",
            "Fez algum curso técnico?",
            "Conhecimento em informática",
            "Domínio de aplicativos de apresentação",
            "Domínio de editores de texto",
            "Conhecimento de Linux",
            "Domínio de planilhas eletrônicas",
            "Conhecimento de sistemas de gestão empresarial",
            "Conhecimento de Windows",
            "Conhecimento de espanhol",
            "Conhecimento de inglês",
            "Conhecimento de outros idiomas",
            "Você trabalha?",
            "Vínculo empregatício",
            "Área de atuação",
            "Horário de trabalho",
            "Empresa em que atua",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;

        removeAll();
        inicio.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
        document.querySelector("#wordChart").style.display = `block`
    }else if(page === `aquisicaoInfo`){ // são 9 gráficos
        pagina = ``
        let objetos = [
            chartData.infoByFriends,
            chartData.infoByInternet,
            chartData.infoByNews,
            chartData.infoBySocialMedia,
            chartData.infoByMagazine,
            chartData.infoByRadio,
            chartData.infoByTelevision,
            chartData.frequencyNews,
            chartData.newsCategories,
        ];
        let nomes = [
            "Busca por informações: Conversa com amigos",
            "Busca por informações: Internet",
            "Busca por informações: Jornais",
            "Busca por informações: Redes sociais",
            "Busca por informações: Revistas",
            "Busca por informações: Rádio",
            "Busca por informações: Televisão",
            "Frequência que lê jornal",
            "Assuntos mais lidos em jornal",
        ]
        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;
        
        removeAll();
        aquisicaoInfo.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }else if(page === `eletronicos`){ // são 4 gráficos
        pagina = ``
        let objetos = [
            chartData.electronicUsage,
            chartData.useElectronicsAtHome,
            chartData.useElectronicsAtOtherPlaces,
            chartData.useElectronicsAtWork
        ];
        let nomes = [
            "Frequência de uso de eletrônicos",
            "Usa eletrônicos em casa",
            "Usa em outros lugares",
            "Usa no trabalho",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;

        removeAll();
        eletronicos.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }else if(page === `aspectosPessoais`){ //sao 23 gráficos
        pagina = ``
        let objetos = [
            //chartData.aboutYou,

            chartData.bornDate,
            chartData.bornState,
            chartData.livingCity,
            chartData.gender,
            chartData.marital,
            chartData.deficit,
            chartData.childrenAmount,
            chartData.yearReading,
            chartData.favoriteReading,
            chartData.doesVolunteer,
            chartData.religion,
            chartData.entertainments,
            chartData.paidHealthPlan,
            chartData.fatherDegree,
            chartData.schoolType,
            chartData.motherDegree,
            chartData.accessibilityOpinion,
            
            chartData.livingWith,
            chartData.livingAmount,
            chartData.livingSituation,
            chartData.livingTime,
            chartData.familySalary,
        ];
        let nomes = [
            //"Sua história e sonhos de vida",

            "Idade dos Alunos",
            "Qual estado em que nasceu?",
            "Cidade de residência",
            "Gênero",
            "Estado civil",
            "Portador de alguma deficiência?",
            "Número de filhos",
            "Quantos livros lê por ano?",
            "Gênero literário preferido",
            "Realiza atividades voluntárias?",
            "Religião",
            "Fontes de entretenimento cultural",
            "Possui plano de saúde privado?",
            "Grau de escolaridade do pai",
            "Tipo de escola em que você estudou",
            "Grau de escolaridade da mãe",
            "Nível de acessibilidade e inclusão da Fatec - Franca",
            
            "Com quem mora atualmente?",
            "Quantas pessoas moram em seu domicílio?",
            "Situação do domicílio onde mora",
            "Tempo de moradia neste domicílio",
            "Renda mensal da família",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;

        removeAll();
        aspectosPessoais.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
        document.querySelector("#wordChart").style.display = `block`
    } else if(page === `bens`){ // são 13 gráficos
        pagina = ``
        let objetos = [
            chartData.autoAmount,
            chartData.cellphoneAmount,
            chartData.freezerAmount,
            chartData.motoAmount,
            chartData.washingMachineAmount,
            chartData.computerAmount,
            chartData.radioAmount,
            chartData.televisionAmount,
            chartData.dvdAmount,
            chartData.haveMaid,
            chartData.haveInternet,
            chartData.havePaidTv,
            chartData.havePhone,
        ];
        let nomes = [
            "Automóvel",
            "Celular",
            "Geladeira",
            "Motocicleta",
            "Máquina de lavar roupa",
            "Computador",
            "Rádio",
            "Televisor",
            "Aparelho de DVD",
            "Empregada mensalista",
            "Internet",
            "TV por assinatura",
            "Telefone fixo",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;
              
        removeAll();
        bens.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }else if(page === `computador`){ // sã0 6 gráficos
        pagina = ``
        let objetos = [
            chartData.useComputerToPurchaseOnline,
            chartData.useComputerToEmail,
            chartData.useComputerToEntertainment,
            chartData.useComputerToBanking,
            chartData.useComputerToSchool,
            chartData.useComputerToWork,
        ];
        let nomes = [
            "Uso de computador para compras eletrônicas",
            "Uso de computador para comunicação por e-mail",
            "Uso de computador para entretenimento",
            "Uso de computador para operações bancárias",
            "Uso de computador para trabalhos escolares",
            "Uso de computador para trabalhos profissionais",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;

        removeAll();
        computador.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }else if(page === `fatec`){ //são 11 gráficos
        pagina = ``
        let objetos = [
            chartData.course,
            chartData.period,
            chartData.startYear,
            chartData.startSemester,
            chartData.howKnewFatec,
            chartData.whyThisCourse,
            chartData.courseExpectation,
            chartData.postDegreeExpectation,
            chartData.studiedHereAlready,
            chartData.locomotion,
            chartData.haveCourse,
        ];
        let nomes = [
            "Curso",
            "Período de estudo",
            "Ano de ingresso no curso",
            "Semestre de ingresso no curso",
            "Como conheceu a Fatec?",
            "Por que escolheu este curso?",
            "Expectativas com o curso",
            "Expectativas após o fim do curso",
            "Já estudou na Fatec?",
            "Meio de locomoção até a Fatec",
            "Fez algum curso técnico?",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;

        removeAll();
        fatec.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }else if(page === `habilidadesConhecimentos`){ //são 10 gráficos
        pagina = ``
        let objetos = [
            chartData.computingKnowledge,
            chartData.powerpointKnowledge,
            chartData.wordKnowledge,
            chartData.linuxKnowledge,
            chartData.excelKnowledge,
            chartData.geKnowledge,
            chartData.windowsKnowledge,
            chartData.spanishKnowledge,
            chartData.englishKnowledge,
            chartData.languagesKnowledge,
        ];
        let nomes = [
            "Conhecimento em informática",
            "Domínio de aplicativos de apresentação",
            "Domínio de editores de texto",
            "Conhecimento de Linux",
            "Domínio de planilhas eletrônicas",
            "Conhecimento de sistemas de gestão empresarial",
            "Conhecimento de Windows",
            "Conhecimento de espanhol",
            "Conhecimento de inglês",
            "Conhecimento de outros idiomas",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;

        removeAll();
        habilidadesConhecimentos.classList.add("active");

        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }else if(page === `trabalho`){ //são 5 gráficos
        pagina = ``
        let objetos = [
            chartData.doesWork,
            chartData.job,
            chartData.jobArea,
            chartData.jobTime,
            chartData.jobCompany,
        ];
        let nomes = [
            "Você trabalha?",
            "Vínculo empregatício",
            "Área de atuação",
            "Horário de trabalho",
            "Empresa em que atua",
        ]

        mapPage(objetos.length, nomes);
        container.innerHTML = pagina;
            
        removeAll();
        trabalho.classList.add("active");
        
        for(let i = 0; i < objetos.length; i++){
            createGraph({
                name: "XD",
                type: "doughnut",
                data: objetos[i],
                target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
                colors: cores
            })
        }
    }
    window.scrollTo(0, 0)
}

removeAll = () => {
    inicio.classList.remove("active");       
    aquisicaoInfo.classList.remove("active");
    aspectosPessoais.classList.remove("active");
    bens.classList.remove("active");
    computador.classList.remove("active");
    eletronicos.classList.remove("active");
    fatec.classList.remove("active");
    habilidadesConhecimentos.classList.remove("active");
    trabalho.classList.remove("active");

    document.querySelector("#wordChart").style.display = `none`
}

generateChartBox = (object) => {
    return `
    <div class="card-body p-3">
        <div class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
            <div class="chart">
                <canvas id="${object.id}" class="chart-canvas" height="170" width="387" style="display: block; box-sizing: border-box; height: 170px; width: 387.5px;"></canvas>
            </div>
        </div>
        <h6 class="ms-2 mt-4 mb-0"> ${object.name} </h6>
    </div>
    `
}


main = () => {
    let container = document.querySelector("#mainContainer");
    let inicio = document.querySelector("#inicio");

    pagina = ``
    let objetos = [
        //chartData.aboutYou,

        chartData.bornDate,
        chartData.infoByFriends,
        chartData.infoByInternet,
        chartData.infoByNews,
        chartData.infoBySocialMedia,
        chartData.infoByMagazine,
        chartData.infoByRadio,
        chartData.infoByTelevision,
        chartData.frequencyNews,
        chartData.newsCategories,
        chartData.electronicUsage,
        chartData.useElectronicsAtHome,
        chartData.useElectronicsAtOtherPlaces,
        chartData.useElectronicsAtWork,
        chartData.bornState,
        chartData.livingCity,
        chartData.gender,
        chartData.marital,
        chartData.deficit,
        chartData.childrenAmount,
        chartData.yearReading,
        chartData.favoriteReading,
        chartData.doesVolunteer,
        chartData.religion,
        chartData.entertainments,
        chartData.paidHealthPlan,
        chartData.fatherDegree,
        chartData.schoolType,
        chartData.motherDegree,
        chartData.accessibilityOpinion,
        
        chartData.livingWith,
        chartData.livingAmount,
        chartData.livingSituation,
        chartData.livingTime,
        chartData.familySalary,
        chartData.autoAmount,
        chartData.cellphoneAmount,
        chartData.freezerAmount,
        chartData.motoAmount,
        chartData.washingMachineAmount,
        chartData.computerAmount,
        chartData.radioAmount,
        chartData.televisionAmount,
        chartData.dvdAmount,
        chartData.haveMaid,
        chartData.haveInternet,
        chartData.havePaidTv,
        chartData.havePhone,
        chartData.useComputerToPurchaseOnline,
        chartData.useComputerToEmail,
        chartData.useComputerToEntertainment,
        chartData.useComputerToBanking,
        chartData.useComputerToSchool,
        chartData.useComputerToWork,
        chartData.course,
        chartData.period,
        chartData.startYear,
        chartData.startSemester,
        chartData.howKnewFatec,
        chartData.whyThisCourse,
        chartData.courseExpectation,
        chartData.postDegreeExpectation,
        chartData.studiedHereAlready,
        chartData.locomotion,
        chartData.haveCourse,
        chartData.computingKnowledge,
        chartData.powerpointKnowledge,
        chartData.wordKnowledge,
        chartData.linuxKnowledge,
        chartData.excelKnowledge,
        chartData.geKnowledge,
        chartData.windowsKnowledge,
        chartData.spanishKnowledge,
        chartData.englishKnowledge,
        chartData.languagesKnowledge,
        chartData.doesWork,
        chartData.job,
        chartData.jobArea,
        chartData.jobTime,
        chartData.jobCompany,
    ];
    
    let nomes = [
        //"Sua história e sonhos de vida",
        "Idades dos Alunos",
        "Busca por informações: Conversa com amigos",
        "Busca por informações: Internet",
        "Busca por informações: Jornais",
        "Busca por informações: Redes sociais",
        "Busca por informações: Revistas",
        "Busca por informações: Rádio",
        "Busca por informações: Televisão",
        "Frequência que lê jornal",
        "Assuntos mais lidos em jornal",
        "Frequência de uso de eletrônicos",
        "Usa eletrônicos em casa",
        "Usa em outros lugares",
        "Usa no trabalho",
        "Qual estado em que nasceu?",
        "Cidade de residência",
        "Gênero",
        "Estado civil",
        "Portador de alguma deficiência?",
        "Número de filhos",
        "Quantos livros lê por ano?",
        "Gênero literário preferido",
        "Realiza atividades voluntárias?",
        "Religião",
        "Fontes de entretenimento cultural",
        "Possui plano de saúde privado?",
        "Grau de escolaridade do pai",
        "Tipo de escola em que você estudou",
        "Grau de escolaridade da mãe",
        "Nível de acessibilidade e inclusão da Fatec - Franca",

        "Com quem mora atualmente?",
        "Quantas pessoas moram em seu domicílio?",
        "Situação do domicílio onde mora",
        "Tempo de moradia neste domicílio",
        "Renda mensal da família",
        "Automóvel",
        "Celular",
        "Geladeira",
        "Motocicleta",
        "Máquina de lavar roupa",
        "Computador",
        "Rádio",
        "Televisor",
        "Aparelho de DVD",
        "Empregada mensalista",
        "Internet",
        "TV por assinatura",
        "Telefone fixo",
        "Uso de computador para compras eletrônicas",
        "Uso de computador para comunicação por e-mail",
        "Uso de computador para entretenimento",
        "Uso de computador para operações bancárias",
        "Uso de computador para trabalhos escolares",
        "Uso de computador para trabalhos profissionais",
        "Curso",
        "Período de estudo",
        "Ano de ingresso no curso",
        "Semestre de ingresso no curso",
        "Como conheceu a Fatec?",
        "Por que escolheu este curso?",
        "Expectativas com o curso",
        "Expectativas após o fim do curso",
        "Já estudou na Fatec?",
        "Meio de locomoção até a Fatec",
        "Fez algum curso técnico?",
        "Conhecimento em informática",
        "Domínio de aplicativos de apresentação",
        "Domínio de editores de texto",
        "Conhecimento de Linux",
        "Domínio de planilhas eletrônicas",
        "Conhecimento de sistemas de gestão empresarial",
        "Conhecimento de Windows",
        "Conhecimento de espanhol",
        "Conhecimento de inglês",
        "Conhecimento de outros idiomas",
        "Você trabalha?",
        "Vínculo empregatício",
        "Área de atuação",
        "Horário de trabalho",
        "Empresa em que atua",
    ]

    mapPage(chartProps.length-1, nomes);
    container.innerHTML = pagina;

    removeAll();
    inicio.classList.add("active");

    for(let i = 0; i < objetos.length; i++){
        createGraph({
            name: "XD",
            type: "doughnut",
            data: objetos[i],
            target: document.getElementById(`chart-bars-${i}`).getContext("2d"),
            colors: cores
        })
    }
    document.querySelector("#wordChart").style.display = `block`
}

main();
