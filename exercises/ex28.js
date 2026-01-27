/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: "Tatsuya Yokokura",
  friends: 150,
  messages: [
    "Hello, I came from Japan.",
    "Just had a great day!",
    "Learning JavaScript is fun!"
  ],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    if (index >= 0 && index < this.messages.length) {
      this.messages.splice(index, 1);
    }
  },
  addFriend: function() {
    this.friends += 1;
  },
  removeFriend: function() {
    if (this.friends > 0) {
      this.friends -= 1;
    }
  }
};

console.log(facebookProfile);

facebookProfile.postMessage("Excited to learn more coding!");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);

facebookProfile.addFriend();
console.log(facebookProfile.friends);

facebookProfile.removeFriend();
console.log(facebookProfile.friends);
