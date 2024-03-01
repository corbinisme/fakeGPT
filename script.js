const chatName = "ChazGPT";

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    displayMessage(userInput, true);
    // Here you would typically send the user input to the backend (if applicable) and receive a response
    // For now, let's just display a mock response
    var mockResponse = "I'm just a mock ChatGPT and I don't have real functionality!";
    displayMessage(mockResponse, false);
    // Clear the input field after sending the message
    document.getElementById("user-input").value = "";
}

function displayMessage(message, isUser) {
    var chatArea = document.getElementById("chat-area");
    var messageElement = document.createElement("div");
    
    var name = isUser? "You": chatName;
    var icon = isUser? "https://s.gravatar.com/avatar/7232284f2fb702fb5112c9cd650a0de1?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png": "https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png";
    messageElement.textContent = message;
    messageElement.classList.add(isUser ? "user-message" : "bot-message");

    messageElement.innerHTML = `<div class="message-group">
    
    <div class="message d-flex  align-items-center">
        <div class="gravatar">
            <img src="${icon}" />
        </div>
        <div class="text response">${name}</div>
    </div>
    <div class="message d-flex  align-items-center">
    <div class="gravatar">
        
    </div>
    <div class="text response">${message}</div>
</div>
        
</div>`
    chatArea.appendChild(messageElement);
}