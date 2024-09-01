const form = document.getElementById("student-form");
const studentsList = document.getElementById("students-list");
const knowledgeLevelInput = form.elements["knowledge-level"];
const knowledgeLevelOutput = document.createElement("span");

// Load initial students from localStorage or use default data
let initialStudents = JSON.parse(localStorage.getItem("students")) || [
  {
    name: "John",
    surname: "Doe",
    age: 22,
    phoneNumber: "123456789",
    email: "john.doe@example.com",
    knowledgeLevel: 4,
    groupNumber: "FEU 1 Grupe",
    programmingLanguages: ["JavaScript", "Python"],
  },
  {
    name: "John",
    surname: "Doe",
    age: 21,
    phoneNumber: "123456789",
    email: "john.doe@example.com",
    knowledgeLevel: 5,
    groupNumber: "FEU 2 Grupe",
    programmingLanguages: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "John",
    surname: "Doe",
    age: 25,
    phoneNumber: "123456789",
    email: "john.doe@example.com",
    knowledgeLevel: 3,
    groupNumber: "FEU 3 Grupe",
    programmingLanguages: ["JavaScript", "CSS"],
  },
  {
    name: "John",
    surname: "Doe",
    age: 85,
    phoneNumber: "123456789",
    email: "john.doe@example.com",
    knowledgeLevel: 7,
    groupNumber: "FEU 4 Grupe",
    programmingLanguages: ["JavaScript", "React"],
  },
  {
    name: "John",
    surname: "Doe",
    age: 75,
    phoneNumber: "123456789",
    email: "john.doe@example.com",
    knowledgeLevel: 10,
    groupNumber: "FEU 2 Grupe",
    programmingLanguages: ["JavaScript", "CSS", "HTML", "React"],
  },
];

// Load form data from localStorage
function loadFormData() {
  const formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    for (const [key, value] of Object.entries(formData)) {
      const field = form.elements[key];
      if (field) {
        if (field.type === "checkbox" || field.type === "radio") {
          field.checked = value;
        } else {
          field.value = value;
        }
      }
    }
    updateKnowledgeLevelOutput();
  }
}

// Save form data to localStorage
function saveFormData() {
  const formData = {};
  for (const field of form.elements) {
    if (field.name) {
      if (field.type === "checkbox" || field.type === "radio") {
        formData[field.name] = field.checked;
      } else {
        formData[field.name] = field.value;
      }
    }
  }
  localStorage.setItem("formData", JSON.stringify(formData));
}

function updateKnowledgeLevelOutput() {
  knowledgeLevelOutput.textContent = knowledgeLevelInput.value;
}

// Function to save the knowledge level to localStorage
function saveKnowledgeLevelToLocalStorage() {
  localStorage.setItem("knowledge-level", knowledgeLevelInput.value);
}

function loadKnowledgeLevelFromLocalStorage() {
  const storedValue = localStorage.getItem("knowledge-level");
  if (storedValue !== null) {
    knowledgeLevelInput.value = storedValue;
    updateKnowledgeLevelOutput();
  }
}

loadKnowledgeLevelFromLocalStorage();
loadFormData(); // Load form data on page load

// Update the element with the initial value of the range input
updateKnowledgeLevelOutput();

// Insert the element next to the range input field
knowledgeLevelInput.parentNode.insertBefore(knowledgeLevelOutput, knowledgeLevelInput.nextSibling);

// Add an event listener to update the span element as the range input value changes
knowledgeLevelInput.addEventListener("input", () => {
  updateKnowledgeLevelOutput();
  saveKnowledgeLevelToLocalStorage();
});

// Function to display error message
function showError(field, message) {
  field.classList.add("error");
  field.style.border = "2px solid red";
  let errorMessage = field.nextElementSibling;
  if (!errorMessage || !errorMessage.classList.contains("error-message")) {
    errorMessage = document.createElement("span");
    errorMessage.textContent = message;
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    field.parentNode.insertBefore(errorMessage, field.nextSibling);
  }
}

// Function to clear error message
function clearError(field) {
  field.classList.remove("error");
  field.style.border = "";
  const errorMessage = field.nextElementSibling;
  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.remove();
  }
}

// Function to validate individual form fields
function validateField(field) {
  let isValid = true;
  let errorMessageText = "";

  if (field.value.trim() === "") {
    isValid = false;
    errorMessageText = "Šis laukelis yra privalomas";
  } else if (field.name === "name" && field.value.trim().length < 3) {
    isValid = false;
    errorMessageText = "Vardas privalo būti bent 3 simbolių ilgumo";
  } else if (field.name === "surname" && field.value.trim().length < 3) {
    isValid = false;
    errorMessageText = "Pavardė privalo būti bent 3 simbolių ilgumo";
  } else if (field.name === "age") {
    const age = parseInt(field.value.trim(), 10);
    if (isNaN(age) || age < 1) {
      isValid = false;
      errorMessageText = "Amžius privalo būti teigiamas skaičius arba didesnis už 0";
    } else if (age > 100) {
      isValid = false;
      errorMessageText = "Įvestas amžius yra per didelis";
    }
  } else if (field.name === "phone-number") {
    const phoneNumberLength = field.value.trim().length;
    if (phoneNumberLength < 9 || phoneNumberLength > 13) {
      isValid = false;
      errorMessageText = "Įvestas telefono numeris yra neteisingas";
    }
  } else if (field.name === "email") {
    const email = field.value.trim();
    if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
      isValid = false;
      errorMessageText = "Įvestas elektroninis paštas yra neteisingas";
    }
  }

  if (isValid) {
    clearError(field);
  } else {
    showError(field, errorMessageText);
  }

  return isValid;
}

// Add input event listeners to required fields for real-time validation
const requiredFields = form.querySelectorAll("[required]");
requiredFields.forEach((field) => {
  field.addEventListener("input", () => {
    validateField(field);
    saveFormData(); // Save form data on input change
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Clear previous validation messages and styles
  const errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());
  const errorFields = form.querySelectorAll(".error");
  errorFields.forEach((field) => field.classList.remove("error"));

  // Validate all required fields
  let isFormValid = true;
  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    // Display alert message if the form is not valid
    const existingAlert = form.querySelector(".alert-message");
    if (!existingAlert) {
      const alertMessage = document.createElement("div");
      alertMessage.textContent = "Ne visi laukeliai yra užpildyti.";
      alertMessage.classList.add("alert-message");
      alertMessage.style.color = "red";
      form.insertBefore(alertMessage, form.firstChild);

      // Remove the alert message after 5 seconds
      setTimeout(() => {
        alertMessage.remove();
      }, 5000);
    }
    return; // Stop the form from being processed further
  }

  const studentItem = document.createElement("div");
  studentItem.classList.add("student-item");

  // Extract form data
  const name = form.elements["name"].value;
  const surname = form.elements["surname"].value;
  const age = form.elements["age"].value;
  const phoneNumber = form.elements["phone-number"].value;
  const email = form.elements["email"].value;
  const knowledgeLevel = form.elements["knowledge-level"].value;
  const groupNumber = form.elements["group-number"].value;

  const languages = form.querySelectorAll('[name="programming-languages"]:checked');
  let programmingLanguages = [];
  languages.forEach((language) => {
    programmingLanguages.push(language.value);
  });
  programmingLanguages = programmingLanguages.join(", ");

  // Create and show notification
  const notification = document.createElement("span");
  notification.textContent = `Sukurtas studentas (${name} ${surname})`;
  notification.classList.add("notification");
  form.append(notification); // Append notification span after submit button

  // Remove the notification after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);

  // Create student data elements
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `Name: ${name}`;
  studentItem.append(nameParagraph);

  const surnameParagraph = document.createElement("p");
  surnameParagraph.textContent = `Surname: ${surname}`;
  studentItem.append(surnameParagraph);

  const ageParagraph = document.createElement("p");
  ageParagraph.textContent = `Age: ${age}`;
  studentItem.append(ageParagraph);

  const phoneNumberParagraph = document.createElement("p");
  phoneNumberParagraph.textContent = `Phone: *********`;
  phoneNumberParagraph.dataset.phoneNumber = phoneNumber; // Store number
  studentItem.append(phoneNumberParagraph);

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = `Email: *********`;
  emailParagraph.dataset.email = email; // Store email
  studentItem.append(emailParagraph);

  const knowledgeLevelParagraph = document.createElement("p");
  knowledgeLevelParagraph.textContent = `Knowledge Level: ${knowledgeLevel}`;
  studentItem.append(knowledgeLevelParagraph);

  const groupNumberParagraph = document.createElement("p");
  groupNumberParagraph.textContent = `Group Number: ${groupNumber}`;
  studentItem.append(groupNumberParagraph);

  const programmingLanguagesParagraph = document.createElement("p");
  programmingLanguagesParagraph.textContent = `Programming Languages: ${programmingLanguages}`;
  studentItem.append(programmingLanguagesParagraph);

  studentsList.append(studentItem); // Append new student data to the list

  // Save new student data to localStorage
  initialStudents.push({
    name,
    surname,
    age: parseInt(age, 10),
    phoneNumber,
    email,
    knowledgeLevel: parseInt(knowledgeLevel, 10),
    groupNumber,
    programmingLanguages: programmingLanguages.split(", "),
  });

  localStorage.setItem("students", JSON.stringify(initialStudents));

  // Clear form
  form.reset();
  saveFormData(); // Save form data when form is reset
});

// Display initial students on page load
initialStudents.forEach((student) => {
  const studentItem = document.createElement("div");
  studentItem.classList.add("student-item");

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `Name: ${student.name}`;
  studentItem.append(nameParagraph);

  const surnameParagraph = document.createElement("p");
  surnameParagraph.textContent = `Surname: ${student.surname}`;
  studentItem.append(surnameParagraph);

  const ageParagraph = document.createElement("p");
  ageParagraph.textContent = `Age: ${student.age}`;
  studentItem.append(ageParagraph);

  const phoneNumberParagraph = document.createElement("p");
  phoneNumberParagraph.textContent = `Phone: *********`;
  phoneNumberParagraph.dataset.phoneNumber = student.phoneNumber; // Store number
  studentItem.append(phoneNumberParagraph);

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = `Email: *********`;
  emailParagraph.dataset.email = student.email; // Store email
  studentItem.append(emailParagraph);

  const knowledgeLevelParagraph = document.createElement("p");
  knowledgeLevelParagraph.textContent = `Knowledge Level: ${student.knowledgeLevel}`;
  studentItem.append(knowledgeLevelParagraph);

  const groupNumberParagraph = document.createElement("p");
  groupNumberParagraph.textContent = `Group Number: ${student.groupNumber}`;
  studentItem.append(groupNumberParagraph);

  const programmingLanguagesParagraph = document.createElement("p");
  programmingLanguagesParagraph.textContent = `Programming Languages: ${student.programmingLanguages.join(", ")}`;
  studentItem.append(programmingLanguagesParagraph);

  studentsList.append(studentItem); // Append existing student data to the list
});
