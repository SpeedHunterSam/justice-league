// console.log("Req: " + req.user);
// //console.log(res);
// //console.log("req.user.id: " + req.user.id);

// //check to see if current user (user1) says yes to anyone
// const idOfUser1 = req.user.id;
// const user1 = await db.Matches.findAll({
//     where: { user1: req.user.id }
// });
// //console.log(user1);

// //take user1 match data and see if the other users feel the same way about user1
// const user2 = await db.Matches.findAll({ where: { user2: idOfUser1 } });
// //res.json(user2);
// //console.log(user2);

// console.log(
//     "User with the ID of " + idOfUser1 + " said yes to users with ID of "
// );
// const array = user2;

// for (i = 0; i < array.length; i++) {
//     console.log(array[i].user1 + ", ");
// }

// const user1matches = await db.Matches.findAll({
//     where: {
//         user1: idOfUser1,
//         yes_or_no: true
//     }
// });

// console.log("These people also like this person: ");
// const array2 = user1matches;
// let myMatchesIDs = []; //create an empty array to store matches

// for (i = 0; i < array2.length; i++) {
//     //console.log(array2[i].user2 + ", ");
//     myMatchesIDs.push(array2[i].user2);
// }
// console.log(myMatchesIDs); //display array of ids for users matches

// let myMatches = [];
// for (i = 0; i < myMatchesIDs.length; i++) {
//     const oneMatch = await db.User.findAll({
//         where: { id: myMatchesIDs[i] }
//     });

//     console.log("User Data of Match: " + oneMatch);
//     myMatches.push(oneMatch);
// }

// res.json(myMatches); //send json data of all matches
