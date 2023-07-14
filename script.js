const initialText = "Hey! I'm Pavan. I am a ";
const dashes = "---------";
const texts = [
  "CS Undergrad",
  "Web-D Enthusiast",
  "Full Stack Developer",
  "Competitive Coder"
];

const typingTextElement = document.getElementById("typing-text");

let index = 0;
let subIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[index];
  if (!isDeleting) {
    typingTextElement.textContent = initialText + currentText.substring(0, subIndex);
    subIndex++;
    if (subIndex > currentText.length) {
      isDeleting = true;
      subIndex = currentText.length;
      setTimeout(typeEffect, 1500); // Delay before deleting text
    } else {
      setTimeout(typeEffect, 100); // Typing speed
    }
  } else {
    typingTextElement.textContent = initialText + currentText.substring(0, subIndex);
    subIndex--;
    if (subIndex < 0) {
      isDeleting = false;
      subIndex = 0;
      index++;
      if (index >= texts.length) {
        index = 0;
      }
    }
    setTimeout(typeEffect, 150); // Deleting speed
  }
}

// Start typing effect
typeEffect();
