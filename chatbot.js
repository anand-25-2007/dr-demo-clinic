document.addEventListener("DOMContentLoaded", () => {


const chatToggle =
document.querySelector(".chat-toggle");

const chatContainer =
document.querySelector(".chat-container");

const closeChat =
document.querySelector(".close-chat");

const sendBtn =
document.getElementById("sendBtn");

const chatInput =
document.getElementById("chatInput");

const chatBody =
document.querySelector(".chat-body");

const quickButtons =
document.querySelectorAll(".quick-btn");

if(
    !chatToggle ||
    !chatContainer ||
    !closeChat ||
    !sendBtn ||
    !chatInput ||
    !chatBody
){
    console.log("Chatbot HTML not found");
    return;
}

/* OPEN CHAT */

chatToggle.addEventListener("click", () => {

    chatContainer.classList.toggle("active");

});

/* CLOSE CHAT */

closeChat.addEventListener("click", () => {

    chatContainer.classList.remove("active");

});

/* SEND BUTTON */

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const message =
    chatInput.value.trim();

    if(message === "") return;

    const userMessage =
    document.createElement("div");

    userMessage.className =
    "user-message";

    userMessage.textContent =
    message;

    chatBody.appendChild(userMessage);

    const reply =
getBotReply(message.toLowerCase());

const typing =
document.createElement("div");

typing.className =
"bot-message typing";

typing.innerHTML =
"Typing...";

chatBody.appendChild(typing);

chatBody.scrollTop =
chatBody.scrollHeight;

setTimeout(() => {

    typing.remove();

    const botMessage =
    document.createElement("div");

    botMessage.className =
    "bot-message";

    botMessage.innerHTML =
    reply;

    chatBody.appendChild(botMessage);

    chatBody.scrollTop =
    chatBody.scrollHeight;

}, 1200);

    chatInput.value = "";

}

/* =========================
   QUICK BUTTONS
========================= */

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        const question =
        button.innerText;

        const userMessage =
        document.createElement("div");

        userMessage.className =
        "user-message";

        userMessage.textContent =
        question;

        chatBody.appendChild(userMessage);

        const reply =
        getBotReply(
            question.toLowerCase()
        );

        const typing =
        document.createElement("div");

        typing.className =
        "bot-message typing";

        typing.innerHTML =
        "Typing...";

        chatBody.appendChild(typing);

        chatBody.scrollTop =
        chatBody.scrollHeight;

        setTimeout(() => {

            typing.remove();

            const botMessage =
            document.createElement("div");

            botMessage.className =
            "bot-message";

            botMessage.innerHTML =
            reply;

            chatBody.appendChild(botMessage);

            chatBody.scrollTop =
            chatBody.scrollHeight;

        }, 1000);

    });

});

function getBotReply(msg){

    if(msg.includes("timing")){

        return "🕒 Clinic Timings:<br>Mon - Sat: 9 AM - 7 PM";

    }

    if(msg.includes("service")){

        return "🏥 Services:<br>General Consultation<br>Heart Care<br>Vaccination<br>Health Checkups";

    }

    if(msg.includes("location")){

        return "📍 Shivam Health Centre, Near City Care Complex, Civil Lines, Ayodhya";

    }

    if(
        msg.includes("phone") ||
        msg.includes("contact")
    ){

        return "📞 +91 98765 43210";

    }

    if(msg.includes("appointment")){

return `
📅 Appointment Booking

Please call:

📞 +91 XXXXXXXXXX

OR

Fill the appointment form available on this website.

Clinic Hours:

🕒 Mon-Sat
9 AM - 7 PM
`;

}

    if(
        msg.includes("hello") ||
        msg.includes("hi")
    ){

        return "👋 Hello! How can I help you today?";

    }

    return "🤖 Sorry, I didn't understand that. Try asking about clinic timings, services, location, contact, or appointments.";

}


});
