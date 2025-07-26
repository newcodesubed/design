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

function typeBotMessage(message) {
  const chatWindow = document.getElementById("chat-window");
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  chatWindow.appendChild(botMsg);

  let index = 0;
  const interval = setInterval(() => {
    if (index < message.length) {
      botMsg.textContent += message.charAt(index);
      index++;
      chatWindow.scrollTop = chatWindow.scrollHeight;
    } else {
      clearInterval(interval);
    }
  }, 25);
}

function getBotReply(input) {
  // Simple mock reply logic (you can enhance this)
  const lower = input.toLowerCase();
  if (lower.includes("hello")) return "Hello! How can I assist you today?";
  if (lower.includes("your name")) return "I am a simple chatbot.";
  if (lower.includes("bye")) return "Goodbye! Have a great day!";
  return "I'm not sure how to respond to that.";
}
