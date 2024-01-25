const _ = require("CMPT315_A2_SS");

function countNumberofArrays(list){
    return list.filter(i => i.length).length;
};

const results1 = _.countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]); // => 2
const results2 = _.countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]); // => 3