var friendsArray = require("./friend.js")


module.exports = function(app, path) {
	app.post("/api/friendsArray", function(req, res) {

    var newFriend = friendsArray[Math.floor(Math.random() * friendsArray.length)];
 
   friendsArray.push(req.body)
   console.log(friendsArray);
   res.json(newFriend)
  });
  
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray)
  });


	// app.get("/survey", function(req, res) {
	//   res.sendFile(path.join(__dirname, "survey.html"));
	// });
}