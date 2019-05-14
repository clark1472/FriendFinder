// LOAD DATA
var friends = require("../data/friends.js");

// ROUTING
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
        console.log(user.scores);
        //The friend with the score closest to 0, (minimum difference) matches the user as best friend. If choices are 5-1=4 4*10 = 40 questions. That would be total opposite.
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        //compares user with
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }
        friends.push(user);
        res.json(friends[bestFriendIndex]);
        console.log(friends[bestFriendIndex]);

    });
};




