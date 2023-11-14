var messages = []; // Store all messages in a central array

function sendMessage(name, message) {
  messages.push({
    name: name,
    message: message
  });

  // Broadcast the message to all connected clients
  updateChat();
}

function updateChat() {
  var messageList = document.getElementById("message-list");
  messageList.innerHTML = "";

  for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    var messageDiv = document.createElement("div");
    messageDiv.innerHTML = showName(message);
    messageList.appendChild(messageDiv);
  }
}

// Handle message submission
document.getElementById("submit").onclick = function() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  sendMessage(name, message);

  document.getElementById("message").value = "";
};

// Display initial messages
window.onload = function() {
  updateChat();
};
