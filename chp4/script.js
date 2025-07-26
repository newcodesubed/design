function sendMessage() {
  const input = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");
  const userText = input.value.trim();

  if (!userText) return;

  appendMessage("user", userText);
  input.value = "";

  setTimeout(() => {
    fakeBotReply(userText);
  }, 600);
}

function appendMessage(sender, text) {
  const chatWindow = document.getElementById("chat-window");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function fakeBotReply(userText) {
  const botResponse = getBotReply(userText);
  typeBotMessage(botResponse);
}
