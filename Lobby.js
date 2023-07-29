var lobbies = [];

function addLobby(name) {
  lobbies.push({
    name: name,
    messages: []
  });
}

function joinLobby(name) {
  for (var i = 0; i < lobbies.length; i++) {
    if (lobbies[i].name == name) {
      document.getElementById("lobby-" + name).style.display = "block";
      break;
    }
  }
}

function sendMessage(lobby, name, message) {
  lobbies[lobby].messages.push({
    name: name,
    message: message
  });
}

function updateChat() {
  for (var i = 0; i < lobbies.length; i++) {
    var lobby = lobbies[i];
    var messages = lobby.messages;
    var messageList = document.getElementById("message-list-" + lobby.name);
    messageList.innerHTML = "";
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var messageDiv = document.createElement("div");
      messageDiv.innerHTML = "<strong>" + message.name + ":</strong> " + message.message;
      messageList.appendChild(messageDiv);
    }
  }
}

document.getElementById("submit").onclick = function() {
  var name = document.getElementById("name").value;
  var lobby = document.getElementById("lobby").value;
  sendMessage(lobby, name, document.getElementById("message").value);
};

window.onload = function() {
  addLobby("American");
  addLobby("Spanish");
  updateChat();
};
