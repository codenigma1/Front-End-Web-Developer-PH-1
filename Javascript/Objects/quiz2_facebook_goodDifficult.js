/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Naruto",
    friends: 50,
    messages: ["let's play dojo", "Kyubi vs ugly sharingan(sasuke :-P)"],
    addText: function postMessage(message) {
        facebookProfile.messages.push(message);
        return facebookProfile.messages;

    },
    deleteText: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
        return facebookProfile.messages; 
    },
    addBuddy: function addFriend(append) {
        facebookProfile.friends += append;
        return facebookProfile.friends;
    },
    kickAss: function removeFriend(append) {
        facebookProfile.friends -= append;
        return facebookProfile.friends;
    },

};    

console.log(facebookProfile.addText("Eventually ugly got rinnegan"));
console.log(facebookProfile.deleteText());
console.log(facebookProfile.addBuddy(1));
console.log(facebookProfile.kickAss(1));
/*removeText: function deleteMessage(index) {
    name
}*/


                    OR
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
/*var facebookProfile = {
    name: "Naruto",
    friends: 50,
    messages: ["let's play dojo", "Kyubi vs ugly sharingan(sasuke :-P)"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
        return facebookProfile.messages;

    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
        return facebookProfile.messages; 
    },
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
        return facebookProfile.friends;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
        return facebookProfile.friends;
    },

};    

console.log(facebookProfile.postMessage("Eventually ugly got rinnegan"));
console.log(facebookProfile.deleteMessage());
console.log(facebookProfile.addFriend(1));
console.log(facebookProfile.removeFriend(1));*/
