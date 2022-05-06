const upload = (renamedFile) => {
    myInput = document.querySelector("#myInput");
    regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;

    if(regex.test(myInput.value.toLowerCase().replaceAll("(", "").replaceAll(")", ""))){
        if(typeof (FileReader) != "undefined"){
            reader = new FileReader();
            if(reader.readAsBinaryString){
                reader.onload = (e) => {
                    getTableData(e.target.result);
                }
                reader.readAsBinaryString(renamedFile);
            } else {
                reader.onload = (e) => {
                    data = "";
                    bytes = new Uint8Array(e.target.result);
                    for(i = 0; i < bytes.byteLength; i++){
                        data += String.fromCharCode(bytes[i]);
                    }
                    getTableData(data);
                }
            }
        }else{
            window.alert("html :(");
            
        }
    }else{
        window.alert(`Arquivo inválido, insira uma planilha com o formato ".xlsx".`);
    }
}

const getTableData = (data) => {
    workBook = XLSX.read(data, {
        type: 'binary'
    });
    result = XLSX.utils.sheet_to_row_object_array(workBook.Sheets[workBook.SheetNames[0]]);

    resultData = polishData(result);
    processData(resultData);
}

const polishData = (data) => {
    for(i = 0; i < data.length; i++){
        replaceChar(data[i]);
        replaceNames(data);
    }
    
    return data;
}

const replaceChar = (object) => {
    Object.keys(object).forEach((key) => {
        let newKey = "x";
        newKey += key.replace(/\s+/g,'');
        newKey = newKey.replaceAll(".", "");
        newKey = newKey.replace("/", "");
        newKey = newKey.replaceAll("-", "");

        newKey = newKey.replace(";", "");
        newKey = newKey.replaceAll(":", "");
        newKey = newKey.replace("?", "");
        
        newKey = newKey.replace("[", "");
        newKey = newKey.replaceAll("]", "");
        newKey = newKey.replaceAll("(", "");
        newKey = newKey.replaceAll(")", "");
        
        newKey = newKey.replaceAll(",", "");

        if (object[key] && typeof object[key] === 'object') {
            replaceChar(object[key]);
        }
        if (key !== newKey) {
            object[newKey] = object[key];
            delete object[key];
        }
    });
}
