const express = require("express");
const friendController = require("../controllers/friendController");
const friends = require('../models/friends')
const router = express.Router();


// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating


// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R


router.get('/filter', friendController.filterFriends)
   /* let filterLetter = req.query.letter;

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }

    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: "No friends matching gender "+filterGender + " and letter " + filterLetter})
    }  
})*/

router.get('/info', friendController.getFriendInfo)
/*router.get('/info', (req, res) => {
    console.log(req.headers)

    
    res.json(req.headers)  
    res.status(200).json({
        "user-agent": req.headers['user-agent'],
        "content-type": req.headers['content-type'],
        "accept": req.headers['accept']
    })
})
*/
// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', friendController.getFriendById)
/*
router.get('/:id', (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path


    
    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    let friend = friends.find(f => f.id == friendId);

    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({error: "Friend not found"});
    }
})
*/
// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', friendController.addFriend)
/*
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
})
*/
// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', friendController.updateFriend)
/*
router.put('/:id', (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    // Replace the old friend data for friendId with the new data from updatedFriend

    let index = friends.findIndex(f => f.id == friendId);
    if (index !== -1) {
        friends[index] = {...friends[index], ...updatedFriend}; // merge existing friend data with updated data
    // Modify this response with the updated friend, or a 404 if not found
    res.json({result: 'Updated friend with ID ' + friendId, data: updatedFriend})
    } else {
        res.status(404).json({error: "Friend not found"});
    }
})
*/
module.exports = router;