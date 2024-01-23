# CMPT315_A2_SS

## Purpose
To develop a JavaScript library that provides functions to manipulate arrays and objects as well as to develop JavaScript programming skills

**_BEWARE:_ This library was published for learning purposes. It is _not_ int
Describe the intended intent
## Usage
**Install it:**
`npm install @username/CMPT315_A2_SS`
**Require it:**
`const _ = require('@stojics/CMPT315_A2_SS');`
**Call it:**
`const results = _.findNANIndex([array])`

## Documentation
The following functions are currently implemented:
Array Functions:
    * `findNANIndex([array])`: find all the indexs where NaN is found in an array
    * `isArrayFactorChain([array])`: description
    * `countNumberOfArrays([array])`: description
Object Functions:
    * `participants()` : Returns an array of all of the players names
    * `winnersObject()`: Returns an Object of all of the players and who've they've beaten
    * `biggestLoser()` : Returns the name of the person who has the largest loser tally, if a player wins the winner tally is subtracted from the loser tally
