const _ = require("CMPT315_A2_SS");


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

const results1 = _.findNaNIndex([2, NaN, 8, 16, 32]); // => [1]
const results2 = _.findNaNIndex([2, 4, NaN, 16, 32, NaN]); // => [2,5]
const results3 = _.findNaNIndex([2, 4, 16, 32]); // => []
