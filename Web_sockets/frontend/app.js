const ws = new WebSocket('ws://localhost:3000');

const chatContainer = document.getElementById('chatContainer');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');
const status = document.getElementById('status');
const newChatBtn = document.getElementById('newChatBtn');

let isFirstMessage = true;

ws.onopen = () => {
    status.innerText = 'Connected';
};

ws.onerror = () => {
    status.innerText = 'Connection Error';
};

ws.onclose = () => {
    status.innerText = 'Disconnected';
};

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function createMessage(content, sender) {

    const wrapper = document.createElement('div');

    wrapper.classList.add('message-wrapper', sender);

    const message = document.createElement('div');

    message.classList.add('message', sender);

    message.innerHTML = marked.parse(content);

    wrapper.appendChild(message);

    chatContainer.appendChild(wrapper);

    document.querySelectorAll('pre code')
.forEach((el) => {
    hljs.highlightElement(el);
});

    scrollToBottom();

    return message;
}

function removeWelcome() {

    if (isFirstMessage) {

        const welcome = document.querySelector('.welcome');

        if (welcome) {
            welcome.remove();
        }

        isFirstMessage = false;
    }
}

function sendMessage() {

    const text = input.value.trim();

    if (!text) return;

    removeWelcome();

    // Add user message
    createMessage(text, 'user');

    // Clear input
    input.value = '';

    // Reset textarea height
    input.style.height = 'auto';

    // Typing indicator
    const typing = createMessage(
        'AI is typing...',
        'ai'
    );

    typing.classList.add('typing');

    // Send to backend
    ws.send(text);
}

ws.onmessage = (event) => {

    // Remove typing indicator
    const typing =
        document.querySelector('.typing');

    if (typing) {
        typing.parentElement.remove();
    }

    // Add AI response
    createMessage(event.data, 'ai');
};

sendBtn.addEventListener('click', sendMessage);

input.addEventListener('keydown', (e) => {

    if (e.key === 'Enter' && !e.shiftKey) {

        e.preventDefault();

        sendMessage();
    }
});

input.addEventListener('input', () => {

    input.style.height = 'auto';

    input.style.height =
        input.scrollHeight + 'px';
});