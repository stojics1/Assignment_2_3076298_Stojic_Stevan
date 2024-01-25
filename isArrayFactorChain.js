const _ = require("CMPT315_A2_SS");

function isArrayFactorChain(list){
    let len = list.length;
    let bool = false;        
    for(let i = 0; i < len - 1 ; i++){ //interats through the list
    
        if(list[i + 1] % list[i] == 0){ // checks if the next element is a factor, sets bool to true if yes else false
            bool = true;
        }
        else{
            bool = false;
        };
    };
    return bool;
};

const results1 = _.isArrayFactorChain([2, 4, 8, 16, 32]); // => true
const results2 = _.isArrayFactorChain([2, 4, 8, 16, 32, 68]); // => false