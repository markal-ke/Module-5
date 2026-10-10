

//Filter
const filterFriends = (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let matchingFriends = [...friends];

    let filterLetter = req.query.letter;

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
}


//info
const getFriendInfo = (req, res) => {
    console.log(req.headers)

    res.json(req.headers)  
    res.status(200).json({
        "user-agent": req.headers['user-agent'],
        "content-type": req.headers['content-type'],
        "accept": req.headers['accept']
    })
}

//getfriendbyid
const getFriendById = (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path


    
    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    let friend = friends.find(f => f.id == friendId);

    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({error: "Friend not found"});
    }
}

//addfriend
const addFriend = (req, res) => {
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
}

//update
const updateFriend = (req, res) => {
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
}


module.exports = {
    filterFriends,
    getFriendInfo,
    getFriendById,
    addFriend,
    updateFriend
}