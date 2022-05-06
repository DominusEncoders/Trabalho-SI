const countProperties = (data) => {
    let compactData = [];
    if(Array.isArray(data[0])){
        for(let i = 0; i < data.length; i++){
            compactData = compactData.concat(data[i])
        }
    }else{
        compactData = data;
    }

    let labels = Array.from(new Set(compactData));
    let result = {labels: labels, values: []};

    for(let i = 0; i < labels.length; i++){
        result.values.push(0);
    }

    for(let i = 0; i < compactData.length; i++){
        for(let j = 0; j < labels.length; j++){
            if(labels[j] === compactData[i]){
                result.values[j] += 1;
            }
        }
    }

    return result;
}