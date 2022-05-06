//Bloco executado quando o botão "Enviar" é clicado.
//Só é executado se o arquivo do usuário for válido.
//O parâmetro "data" corresponde a um Array dos objetos prontos para uso.


const processData = (data) => {
    props = Object.getOwnPropertyNames(data[0]);
    let result = {}
    props.forEach(i => {
        if(i !== `__rowNum__`){
            result[`${i}`] = countProperties(getAllNames(data, `${i}`));
        }
    });
    console.log(result);

    sessionStorage.setItem("chartData", JSON.stringify(result))
    window.location.href = `dashboard.html`;
}

