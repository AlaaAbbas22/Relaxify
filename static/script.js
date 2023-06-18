

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