function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'flex';  // Show icons
    } else {
        section.style.display = 'none';  // Hide icons
    }
}
const data = {
    ssc: {
        title: "Master Public High School",
        location: "Nandyal, Andhra Pradesh",
        duration: "2017 - 2019",
        percentage: "85%",
        image: "images/school.png"
    },
    class12: {
        title: "Rao's jr. College",
        location: "Nandyal, Andhra Pradesh",
        duration: "2019 - 2021",
        percentage: "54.7%",
        image: "images/college.png"
    },
    college: {
        title: "Santhiram Engineering College",
        location: "Nandyal, Andhra Pradesh",
        duration: "2022 - 2026",
        percentage: "70%",
        image: "images/srec.jpg"
    }
};

function openPopup(type) {
    document.getElementById("popup-title").innerText = data[type].title;
    document.getElementById("popup-location").innerText = data[type].location;
    document.getElementById("popup-duration").innerText = data[type].duration;
    document.getElementById("popup-percentage").innerText = data[type].percentage;
    document.getElementById("popup-image").src = data[type].image;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// Chatbot functionality
document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.getElementById("chat-container");
    const chatBox = document.getElementById("chat-box");
    const userInputField = document.getElementById("user-input");
    const assistiveBall = document.getElementById("assistive-ball");

    let isChatOpen = false;

    // Toggle chat visibility
    function toggleChat() {
        isChatOpen = !isChatOpen;
        chatContainer.style.display = isChatOpen ? "flex" : "none";
    }

    assistiveBall.addEventListener("click", toggleChat);

    // Send message on Enter key press
    userInputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            chatbot();
        }
    });
});
function chatbot() {
    const userInputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    let userInput = userInputField.value.trim().toLowerCase();
    userInputField.value = "";

    if (userInput === "") return; // Prevent empty input

    appendMessage("user", `You: ${userInput}`);

    let response = "I'm not sure how to respond. Can you rephrase?";

    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Hello! How can I help you?";
    } else if (userInput.includes("bye")) {
        response = "Goodbye! Have a great day!";
    } else if (userInput.includes("name")) {
        response = "Hi, I'm a chatbot! How can I help you?";
    } else if (userInput.includes("introduce yourself") || userInput.includes("about")) {
        response = "Hi, I'm K Tharun Kumar. I hail from Nandyal, a district in Andhra Pradesh, and I'm currently pursuing my Bachelor's degree in Computer Science and Engineering at Santhiram Engineering College, Nandyal.";
    } else if (userInput.includes("skills")) {
        response = "My technical skills include HTML, CSS, Java, Python, and SQL.";
    } else if (userInput.includes("education")) {
        response = "I completed my SSC at Master Public School, Nandyal, and my intermediate education at Rao's Junior College, Nandyal. Currently, I'm pursuing a B.Tech in Computer Science and Engineering at Santhiram Engineering College, Nandyal.";
    } else if (userInput.includes("college name") || userInput.includes("intermediate college")) {
        response = "Rao's Junior College.";
    } else if (userInput.includes("btech") || userInput.includes("undergraduation") || userInput.includes("b-tech")) {
        response = "Santhiram Engineering College.";
    } else if (userInput.includes("branch") || userInput.includes("course")) {
        response = "Computer Science and Engineering.";
    }

    console.log(response);
    setTimeout(() => appendMessage("bot", `Chatbot: ${response}`), 500);
}



function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
//to hide acheivements info staring and when click it opens
document.querySelectorAll('.parent').forEach((parent, index) => {
    parent.addEventListener('click', () => {
        let child = parent.nextElementSibling;
        if (child.classList.contains('child')) {
            child.classList.toggle('active');
        }
    });
});
