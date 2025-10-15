/* ========================
  SCRIPT PARA TUTORIAL Y PRÁCTICA
======================== */

/* ===== Tutorial Interactivo ===== */
let tutorialData = {
  vocales: ["A - a", "E - e", "I - i", "O - o", "U - u"],
  numeros: ["1 - Pete", "2 - Mokõi", "3 - Mbohapy", "4 - Irundy", "5 - Po"],
  abecedario: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
               "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

let currentCategory = "";
let currentStep = 0;

/* Seleccionar categoría del tutorial */
function selectCategory(category) {
  currentCategory = category;
  currentStep = 0;
  showStep();
}

/* Mostrar paso actual del tutorial */
function showStep() {
  let contentDiv = document.getElementById("tutorial-content");
  if (!currentCategory || !tutorialData[currentCategory]) {
    contentDiv.innerHTML = "Selecciona una categoría para empezar el tutorial.";
    return;
  }

  contentDiv.innerHTML = `<p>${tutorialData[currentCategory][currentStep]}</p>`;
}

/* Siguiente paso */
function nextStep() {
  if (!currentCategory) return;
  if (currentStep < tutorialData[currentCategory].length - 1) {
    currentStep++;
    showStep();
  } else {
    alert("¡Has llegado al final de esta categoría!");
  }
}

/* Paso anterior */
function prevStep() {
  if (!currentCategory) return;
  if (currentStep > 0) {
    currentStep--;
    showStep();
  } else {
    alert("Estás en el primer paso.");
  }
}

/* ===== Práctica de Guaraní ===== */
let practiceData = [
  {
    question: "Selecciona la traducción correcta de 'Perro':",
    options: ["Jagua", "Mbopi", "Kure"],
    answer: "Jagua"
  },
  {
    question: "Selecciona la traducción correcta de 'Gato':",
    options: ["Kure", "Mbopi", "Jagua"],
    answer: "Mbopi"
  }
];

let practiceIndex = 0;

/* Cargar práctica */
function loadPractice() {
  let container = document.getElementById("practice-section");
  let message = document.getElementById("practice-message");
  container.innerHTML = "";
  message.innerHTML = "";

  if (practiceIndex >= practiceData.length) {
    container.innerHTML = "<p>¡Has completado la práctica! 🎉</p>";
    return;
  }

  let item = practiceData[practiceIndex];
  let html = `<p>${item.question}</p>`;
  item.options.forEach(option => {
    html += `<button onclick="checkAnswer('${option}')">${option}</button>`;
  });
  container.innerHTML = html;
}

/* Verificar respuesta */
function checkAnswer(selected) {
  let message = document.getElementById("practice-message");
  let correct = practiceData[practiceIndex].answer;

  if (selected === correct) {
    message.style.color = "green";
    message.innerHTML = "¡Correcto! ✅";
  } else {
    message.style.color = "red";
    message.innerHTML = `Incorrecto ❌. La respuesta correcta es: ${correct}`;
  }

  practiceIndex++;
  setTimeout(loadPractice, 1500);
}

/* ===== Inicialización ===== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("practice-section")) {
    loadPractice();
  }
});

