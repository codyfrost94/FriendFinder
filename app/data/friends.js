// JSON
// =============================================================

var friendsArray = [{
        "name": "Omar2",
        "photo": "https://lh5.googleusercontent.com/-JceZsHGh-QM/AAAAAAAAAAI/AAAAAAAAABc/ofh-ghWN8iA/photo.jpg",
        "scores": [
            4,
            3,
            3,
            3,
            3,
            3,
            2,
            3,
            3,
            3
        ]
    },
    {
        "name": "Omar",
        "photo": "https://lh5.googleusercontent.com/-JceZsHGh-QM/AAAAAAAAAAI/AAAAAAAAABc/ofh-ghWN8iA/photo.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        "name": "Clayton",
        "photo": "https://www.famousbirthdays.com/headshots/zach-clayton-2.jpg",
        "scores": [
            1,
            5,
            1,
            5,
            4,
            2,
            1,
            1,
            1,
            5
        ]
    }
];
// need for loop to run through friend array
//inside, need if loop to check that chosenFriend.name != friendsArray[i].name
//inside of that, run the following
//if totalDifference < new total difference, update totalDifference and bestFriend variables



// var totalDifference = 0;
// var firstFriend = process.argv[2];
// var secondFriend = process.argv[3];
// var firstScores = friendsArray[firstFriend].scores;
// var secondScores = friendsArray[secondFriend].scores
// var j = 0;

// for (i = 0; i < firstScores.length; i++) {

//         var currentPair = [firstScores[i], secondScores[j]]
//         // console.log(currentPair);
//         currentPair.sort(function(a, b) {
//             return a - b;

//         });
//         console.log("SORTED PAIR " + (i+1) + ":" + currentPair);
//         var diff = Math.abs(parseInt(currentPair[0]) - parseInt(currentPair[1]));
//         console.log(diff);
//         totalDifference += diff;

//         j++;

// }
// console.log(totalDifference);

// var totalDifference = 0;
var chosenFriend = friendsArray[0];
var differenceValues = [];



differenceValues.length = 0
for (i = 0; i < friendsArray.length; i++) {
    
    
        function findDiff(array1, array2) {
            return array2.map(function(element, i) {
                return Math.abs(element - array1[i]);
            });
        }

        var diff = findDiff(friendsArray[i].scores, chosenFriend.scores);
        var result = diff.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });

        friendsArray[i].difference = result;

        differenceValues.push(friendsArray[i]);

};

differenceValues.sort(function(a, b) {
  return a.difference - b.difference;
});

var bestfriend = differenceValues[0].name
console.log(bestfriend);
// for (i = 0; i < friendsArray.length; i++) {
//     if friendsArray[i].
// }

// console.log(totalDifference);



module.exports = friendsArray;