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

function winnersObject(obj){
    let winners = {};
   

    for(let i = 0; i < obj.length; i++){
        var key = obj[i].winner;
        var list = [];

        winners[key] = list;    
    };
    
    var keys = Object.keys(winners);
    console.log(keys[1]);
    for(let j = 0; j < keys.length; j++){
        let list = [];

        for(let i = 0; i < obj.length; i++){
        
            if(keys[j] == obj[i].winner){
        
                list.push(obj[i].loser);
                winners[keys[j]] = list;

           };

        };   
    };   
    return winners;
};

const results1 = _.winnersObject(matches)