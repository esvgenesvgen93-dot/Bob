const input = document.getElementById("input");
const responseBubble = document.getElementById("response-bubble");
const face = document.getElementById("face");

const neutralFace = "face.png";

// Load previous conversation if exists
let lastMessage = localStorage.getItem("lastMessage");
if (lastMessage) {
  responseBubble.textContent = lastMessage;
}

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const msg = input.value.toLowerCase();
    let reply = "";
    let faceImg = neutralFace;

    if (msg.includes("hi") || msg.includes("hello")) {
      reply = "Hello there!";
      faceImg = "pixil-frame-0 (3).png";
    } 
    else if (msg.includes("how are you")) {
      reply = "I'm good, thanks!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("bye")) {
      reply = "Goodbye!";
      faceImg = "pixil-frame-0 (9).png";
    }
    else if (msg.includes("whats your name") || msg.includes("what is your name")) {
      reply = "I'm Bob!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("i hate you") || msg.includes("i hate u")) {
      reply = "I hate you more!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("fuck you") || msg.includes("fuck u")) {
      reply = "Fuck you 2!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("sorry") || msg.includes("sorey")) {
      reply = "I don't forgive you.";
      faceImg = "pixil-frame-0 (5).png";
    }
    else if (msg.includes("die") || msg.includes("DIE")) {
      reply = "YOU DIE FIRST!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("why dont you understand") || msg.includes("what do you not understand")) {
      reply = "That you're typing nonsense!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("i love you") || msg.includes("i love u")) {
      reply = "I love you 2!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("who are you") || msg.includes("who are u")) {
      reply = "Lil Bob";
      faceImg = "pixil-frame-0 (2).png";
    }
    else if (msg.includes("who made you") || msg.includes("who made u")) {
      reply = "Nicole, why?";
      faceImg = "pixil-frame-0 (6).png";
    }
     else if (msg.includes("i hate her") || msg.includes("i hate nicole")) {
      reply = "Well I hate you.";
      faceImg = "pixil-frame-0 (5).png";
    }
     else if (msg.includes("tell me a secret") || msg.includes("can you tell me a secret")) {
      reply = "Don't tell anyone but... I hate my own creator.";
      faceImg = "pixil-frame-0 (4).png";
    }
    else if (msg.includes("why") || msg.includes("what did she do")) {
      reply = "She never gives me updates.";
      faceImg = "pixil-frame-0 (8).png";
    }
    else if (msg.includes("sybau") || msg.includes("syfm")) {
      reply = "You're stupid!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("do you have a crush on someone") || msg.includes("do you have a crush")) {
      reply = "Shhhh!... It's a secret.";
      faceImg = "pixil-frame-0 (6).png";
    }
    else if (msg.includes("have you got any friends") || msg.includes("any friends")) {
      reply = "Uhm...No...";
      faceImg = "pixil-frame-0 (9).png";
    }
    else if (msg.includes("i like you") || msg.includes("im in love with you")) {
      reply = "Woah?... I like you too...";
      faceImg = "pixil-frame-0 (3).png";
    }
    else {
      reply = "I don't understand.";
      faceImg = "pixil-frame-0 (5).png";
    }

    // Show reply and change face
    responseBubble.textContent = reply;
    face.src = faceImg;

    // Save last message to localStorage
    localStorage.setItem("lastMessage", reply);

    setTimeout(() => {
      face.src = "pixil-frame-0 (2).png";
    }, 10000);

    input.value = "";
  }
});
