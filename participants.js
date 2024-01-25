// const _ = require("CMPT315_A2_SS");

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ];

function participants(obj){
    let Names = []; let bucket = []; let flag = false;
    for(let i = 0; i < obj.length; i++){
        bucket.push(obj[i].winner); 
        bucket.push(obj[i].loser); 
    };
    //console.log(bucket);
    for(let j = 0; j < bucket.length; j++){
        
        if(!(Names.includes(bucket[j]))){
           Names.push(bucket[j]); 
        };
    };
    return Names;
};

