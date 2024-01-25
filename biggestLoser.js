const _ = require("CMPT315_A2_SS");

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ]

function biggestLoser(obj){
    let losers = {}; let sum = 0; 
    for(let i = 0; i < obj.length; i++){
        var key = obj[i].loser;
        losers[key] = 0;
       
    };

    for(let j = 0; j < obj.length; j++){
        sum = obj[j].loser_points;
        losers[obj[j].loser] += sum;
        
        if(losers[obj[j].winner]){
            losers[obj[j].winner] -= sum; 
        };
    };
    
    var keys = Object.keys(losers); 
    for(let k = 0; k < keys.length; k++){
        var val = losers[keys[0]];
        if(val < losers[keys[k]]){ val = losers[keys[k]]};
    };
    

    return Object.keys(losers).find(key => losers[key] === val);
};  

const results1 = _.biggestLoser(matches)