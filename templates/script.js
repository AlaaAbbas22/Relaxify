const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value;
  userInput.value = "";

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/chat");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    const response = xhr.responseText;
    updateChat(message, response);
  };
  xhr.send(JSON.stringify({ message }));
}

function updateChat(userMessage, botMessage) {
  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat-bubble");

  const userText = document.createElement("p");
  userText.classList.add("user-text");
  userText.textContent = userMessage;

  const botText = document.createElement("p");
  botText.classList.add("bot-text");
  botText.textContent = botMessage;

  chatBubble.appendChild(userText);
  chatBubble.appendChild(botText);
  chatWindow.appendChild(chatBubble);
}

document.getElementById("send-btn").addEventListener("click", () => {
  sendMessage();
});

userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});