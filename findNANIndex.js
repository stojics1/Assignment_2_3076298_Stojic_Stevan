// const _ = require("CMPT315_A2_SS");


function findNANIndex(list){
    let NaN_Index = [];
    
    let lLen = list.length;

    for (let i = 0; i < lLen; i++){
        if (isNaN(list[i])){
            NaN_Index.push(i);
        };
    };
    // console.log(NaN_Index);
    return NaN_Index;
};
