//TODO ESSA MERDAAAAAAAAAAAAAAAA   --- BRAVOOOOOOOO :D :D 
const getAllNames = (data, property) => {
    let result = []
    let x = [];
    for(i = 0; i < data.length; i++){
        if(property === `entertainments` || property === `newsCategories`){
            result.push(data[i][property].split(", ")); 
        }else if(property === `aboutYou`){
            result.push(data[i][property].split(" "));
        } else if(property === `bornDate`) {
            let year = Number(data[i][property].substr(data[i][property].length - 2))
            let age;
            if(year > 22){
                age = 2022 - (year+1900)
            } else {
                age = 2022 - (year+2000)
            }
            if(age >= 18 )
                result.push(age);
        }
        else{
            result.push(data[i][property]);
        }
    }
    return result;
}

const splitAndProccess = (data) => {
    data = data.split(",");
    for(let i = 0; i < data.length; i++){
        if(data[i][0] === " "){
            data[i] = data[i].replace(" ", "");
        }
    }
    return data;
}

const replaceNames = (data) => {
    //data[i].dateTime = data[i].xCarimbodedatahora;
    delete data[i].xCarimbodedatahora;

    //Fatec Related
    data[i].course = data[i].x1Qualoseucurso;
    delete data[i].x1Qualoseucurso;

    data[i].period = data[i].x2Qualoperíodoquecursa;
    delete data[i].x2Qualoperíodoquecursa;

    data[i].startYear = data[i].x21Qualoanodeingresso;
    delete data[i].x21Qualoanodeingresso;

    data[i].startSemester = data[i].x3Qualosemestredeingresso;
    delete data[i].x3Qualosemestredeingresso;

    data[i].howKnewFatec = data[i].x34EstamosquaseacabandoComoconheceuaFATECFranca;
    delete data[i].x34EstamosquaseacabandoComoconheceuaFATECFranca;

    data[i].whyThisCourse = data[i].x35Porquevocêescolheuestecurso;
    delete data[i].x35Porquevocêescolheuestecurso;

    data[i].courseExpectation = data[i].x36Qualsuamaiorexpectativaquantoaocurso;
    delete data[i].x36Qualsuamaiorexpectativaquantoaocurso;

    data[i].postDegreeExpectation = data[i].x37Qualsuaexpectativaapósseformar;
    delete data[i].x37Qualsuaexpectativaapósseformar;

    data[i].studiedHereAlready = data[i].x38VocêjáestudounestaFatec;
    delete data[i].x38VocêjáestudounestaFatec;

    data[i].locomotion = data[i].x40Qualomeiodetransportevocêusaparaviràescola;
    delete data[i].x40Qualomeiodetransportevocêusaparaviràescola;

    data[i].haveCourse = data[i].x39Vocêfezalgumcursotécnico;
    delete data[i].x39Vocêfezalgumcursotécnico;



    //About You
    data[i].bornDate = data[i].x7Qualasuadatadenascimento;
    delete data[i].x7Qualasuadatadenascimento;

    data[i].bornState = data[i].x4QualoestadodoBrasilquevocênasceu;
    delete data[i].x4QualoestadodoBrasilquevocênasceu;

    data[i].livingCity = data[i].x5Qualsuacidadederesidência;
    delete data[i].x5Qualsuacidadederesidência;

    data[i].gender = data[i].x6Comqualgêneroseidentifica;
    delete data[i].x6Comqualgêneroseidentifica;

    data[i].marital = data[i].x8Qualéoseuestadocivil;
    delete data[i].x8Qualéoseuestadocivil;

    data[i].deficit = data[i].x9Vocêéportadordealgumadeficiência;
    delete data[i].x9Vocêéportadordealgumadeficiência;

    data[i].childrenAmount = data[i].x10Quantosfilhosvocêtem;
    delete data[i].x10Quantosfilhosvocêtem;

    data[i].yearReading = data[i].x29Nãoconsiderandooslivrosescolaresquantoslivrosvocêlêporanoemmédia;
    delete data[i].x29Nãoconsiderandooslivrosescolaresquantoslivrosvocêlêporanoemmédia;

    data[i].favoriteReading = data[i].x30Sevocêlêlivrosliteráriosqualogêneropreferido;
    delete data[i].x30Sevocêlêlivrosliteráriosqualogêneropreferido;
    
    data[i].doesVolunteer = data[i].x31Vocêdedicapartedoseutempoparaatividadesvoluntárias;
    delete data[i].x31Vocêdedicapartedoseutempoparaatividadesvoluntárias;

    data[i].religion = data[i].x32Qualreligiãovocêprofessa;
    delete data[i].x32Qualreligiãovocêprofessa;

    data[i].entertainments = data[i].x33Quaisfontesdeentretenimentoculturalvocêusa;
    //data[i].entertainments = splitAndProccess(data[i].entertainments);
    delete data[i].x33Quaisfontesdeentretenimentoculturalvocêusa;

    data[i].paidHealthPlan = data[i].x19Vocêtemplanodesaúdeprivado;
    delete data[i].x19Vocêtemplanodesaúdeprivado;

    data[i].fatherDegree = data[i].x20Qualograudeescolaridadedoseupai;
    delete data[i].x20Qualograudeescolaridadedoseupai;

    data[i].schoolType = data[i].x21Nasuavidaescolarvocêestudou;
    delete data[i].x21Nasuavidaescolarvocêestudou;

    data[i].motherDegree = data[i].x201Qualograudeescolaridadedasuamãe;
    delete data[i].x201Qualograudeescolaridadedasuamãe;

        //Open Questions
        data[i].accessibilityOpinion = data[i].x91SevocêéumapessoacomdeficiênciaeouconhecealguémcomdificuldadedeacessonasuaopiniãoqualoníveldeacessibilidadeeinclusãodaFatec;
        delete data[i].x91SevocêéumapessoacomdeficiênciaeouconhecealguémcomdificuldadedeacessonasuaopiniãoqualoníveldeacessibilidadeeinclusãodaFatec;

        data[i].aboutYou = data[i].x41Escrevaalgumaslinhassobresuahistóriaeseussonhosdevida;
        delete data[i].x41Escrevaalgumaslinhassobresuahistóriaeseussonhosdevida;



    //About Your Living
    data[i].livingWith = data[i].x11Comquemvocêmoraatualmente;
    delete data[i].x11Comquemvocêmoraatualmente;

    data[i].livingAmount = data[i].x12Quantaspessoasincluindovocêmoramnoseudomicílio;
    delete data[i].x12Quantaspessoasincluindovocêmoramnoseudomicílio;

    data[i].livingSituation = data[i].x13Qualasituaçãododomicílioondemora;
    delete data[i].x13Qualasituaçãododomicílioondemora;

    data[i].livingTime = data[i].x14Tempodemoradianestedomicílio;
    delete data[i].x14Tempodemoradianestedomicílio;

    data[i].familySalary = data[i].x15QualafaixaderendamensaldasuafamíliaemSaláriosMínimosR$121200ano2022;
    delete data[i].x15QualafaixaderendamensaldasuafamíliaemSaláriosMínimosR$121200ano2022;



    //Object Amount
    data[i].autoAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioAutomóvel;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioAutomóvel;

    data[i].cellphoneAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioCelular;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioCelular;

    data[i].freezerAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioGeladeira;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioGeladeira;

    data[i].motoAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioMotocicleta;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioMotocicleta;

    data[i].washingMachineAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioMáquinadelavarroupaeouTanquinho;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioMáquinadelavarroupaeouTanquinho;

    data[i].computerAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioNotebookComputador;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioNotebookComputador;

    data[i].radioAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioRádio;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioRádio;
    
    data[i].televisionAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioTelevisor;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioTelevisor;

    data[i].dvdAmount = data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioVídeocasseteeouDVD;
    delete data[i].x16QuantosdecadaumdositensabaixoháemseudomicílioVídeocasseteeouDVD;
    
    data[i].haveMaid = data[i].x17NoseudomicíliovocêtemEmpregadamensalista;
    delete data[i].x17NoseudomicíliovocêtemEmpregadamensalista;

    data[i].haveInternet = data[i].x17NoseudomicíliovocêtemInternet;
    delete data[i].x17NoseudomicíliovocêtemInternet;

    data[i].havePaidTv = data[i].x17NoseudomicíliovocêtemTVporassinatura;
    delete data[i].x17NoseudomicíliovocêtemTVporassinatura;

    data[i].havePhone = data[i].x17NoseudomicíliovocêtemTelefonefixo;
    delete data[i].x17NoseudomicíliovocêtemTelefonefixo;



    //Knowledge
    data[i].computingKnowledge = data[i].x23Comovocêclassificaseuconhecimentoeminformática;
    delete data[i].x23Comovocêclassificaseuconhecimentoeminformática;

    data[i].powerpointKnowledge = data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirApresentadoresPowerpointImpressPrezzietc;
    delete data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirApresentadoresPowerpointImpressPrezzietc;

    data[i].wordKnowledge = data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirEditoresdetextosWordWriteretc;
    delete data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirEditoresdetextosWordWriteretc;

    data[i].linuxKnowledge = data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirLinux;
    delete data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirLinux;

    data[i].excelKnowledge = data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirPlanilhaseletrônicasExcelCalcetc;
    delete data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirPlanilhaseletrônicasExcelCalcetc;

    data[i].geKnowledge = data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirSistemasdeGestãoEmpresarial;
    delete data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirSistemasdeGestãoEmpresarial;

    data[i].windowsKnowledge = data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirWindows;
    delete data[i].x24QualoseuconhecimentoemrelaçãoaosaplicativosaseguirWindows;



    //Language Knowledge
    data[i].spanishKnowledge = data[i].x25AgoraconsidereseuconhecimentosobreidiomasEspanhol;
    delete data[i].x25AgoraconsidereseuconhecimentosobreidiomasEspanhol;

    data[i].englishKnowledge = data[i].x25AgoraconsidereseuconhecimentosobreidiomasInglês;
    delete data[i].x25AgoraconsidereseuconhecimentosobreidiomasInglês;

    data[i].languagesKnowledge = data[i].x25AgoraconsidereseuconhecimentosobreidiomasOutroidiomas;
    delete data[i].x25AgoraconsidereseuconhecimentosobreidiomasOutroidiomas;



    //Info gathering
    data[i].infoByFriends = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoConversascomAmigos;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoConversascomAmigos;

    data[i].infoByInternet = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoInternet;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoInternet;

    data[i].infoByNews = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoJornais;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoJornais;

    data[i].infoBySocialMedia = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoRedesSociais;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoRedesSociais;

    data[i].infoByMagazine = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoRevistas;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoRevistas;

    data[i].infoByRadio = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoRádio;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoRádio;

    data[i].infoByTelevision = data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoTV;
    delete data[i].x26ConsidereabuscaporinformaçãonosseguintesmeiosdecomunicaçãoTV;

    data[i].frequencyNews = data[i].x27Sevocêlêjornalqualafrequência;
    delete data[i].x27Sevocêlêjornalqualafrequência;

    data[i].newsCategories = data[i].x28Sevocêlêjornalquaisosassuntosquemaislê;
    //data[i].newsCategories = splitAndProccess(data[i].newsCategories);
    delete data[i].x28Sevocêlêjornalquaisosassuntosquemaislê;



    //Job
    data[i].doesWork = data[i].x18Vocêtrabalha;
    delete data[i].x18Vocêtrabalha;

    data[i].job = data[i].x181Qualoseuvínculocomoemprego;
    delete data[i].x181Qualoseuvínculocomoemprego;

    data[i].jobArea = data[i].x182Qualaáreadoseutrabalho;
    delete data[i].x182Qualaáreadoseutrabalho;

    data[i].jobTime = data[i].x183Qualseuhoráriodetrabalho;
    delete data[i].x183Qualseuhoráriodetrabalho;

    data[i].jobCompany = data[i].x184Qualaempresaquevocêestácontratadoagora;
    delete data[i].x184Qualaempresaquevocêestácontratadoagora;



    //Use electronics At
    data[i].electronicUsage = data[i].x22Comquefrequênciavocêutilizaeletrônicos;
    delete data[i].x22Comquefrequênciavocêutilizaeletrônicos;

    data[i].useElectronicsAtHome = data[i].x221OndevocêutilizaeletrônicosEmcasa;
    delete data[i].x221OndevocêutilizaeletrônicosEmcasa;

    data[i].useElectronicsAtOtherPlaces = data[i].x221OndevocêutilizaeletrônicosEmoutroslugares;
    delete data[i].x221OndevocêutilizaeletrônicosEmoutroslugares;

    data[i].useElectronicsAtWork = data[i].x221OndevocêutilizaeletrônicosNotrabalho;
    delete data[i].x221OndevocêutilizaeletrônicosNotrabalho;


    
    //Use Computer To
    data[i].useComputerToPurchaseOnline = data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParacompraseletrônicas;
    delete data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParacompraseletrônicas;

    data[i].useComputerToEmail = data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParacomunicaçãoporemail;
    delete data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParacomunicaçãoporemail;

    data[i].useComputerToEntertainment = data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParaentretenimentomúsicasvídeosredessociaisetc;
    delete data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParaentretenimentomúsicasvídeosredessociaisetc;

    data[i].useComputerToBanking = data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParaoperaçõesbancárias;
    delete data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParaoperaçõesbancárias;

    data[i].useComputerToSchool = data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParatrabalhosescolares;
    delete data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParatrabalhosescolares;

    data[i].useComputerToWork = data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParatrabalhosprofissionais;
    delete data[i].x222ComqualfinalidadevocêutilizamicrocomputadoresParatrabalhosprofissionais;
}