const form = document.getElementById("student-form");
const studentsList = document.getElementById("students-list");
const knowledgeLevelInput = form.elements["knowledge-level"];
const knowledgeLevelOutput = document.createElement("span");

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

// Function to save the student array to localStorage
function saveStudentsToLocalStorage(students) {
  localStorage.setItem("students", JSON.stringify(students));
}

// Function to load the student array from localStorage
function loadStudentsFromLocalStorage() {
  const storedStudents = localStorage.getItem("students");
  return storedStudents ? JSON.parse(storedStudents) : [];
}

// Function to display students
function displayStudents(students) {
  // Clear the existing list
  while (studentsList.firstChild) {
    studentsList.removeChild(studentsList.firstChild);
  }

  students.forEach((student) => {
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
    phoneNumberParagraph.dataset.phoneNumber = student.phoneNumber;
    studentItem.append(phoneNumberParagraph);

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: *********`;
    emailParagraph.dataset.email = student.email;
    studentItem.append(emailParagraph);

    const knowledgeLevelParagraph = document.createElement("p");
    knowledgeLevelParagraph.textContent = `IT Knowledge: ${student.knowledgeLevel}`;
    studentItem.append(knowledgeLevelParagraph);

    const groupNumberParagraph = document.createElement("p");
    groupNumberParagraph.textContent = `Group: ${student.groupNumber}`;
    studentItem.append(groupNumberParagraph);

    const programmingLanguagesParagraph = document.createElement("p");
    programmingLanguagesParagraph.textContent = `Programming Languages: ${student.programmingLanguages.join(", ")}`;
    studentItem.append(programmingLanguagesParagraph);

    const showButton = document.createElement("button");
    showButton.textContent = "Rodyti asmens duomenis";
    showButton.classList.add("show-hide");
    studentItem.append(showButton);

    const hideButton = document.createElement("button");
    hideButton.textContent = "Slėpti asmens duomenis";
    hideButton.classList.add("show-hide");
    hideButton.style.display = "none";
    studentItem.append(hideButton);

    // Listener for show button
    showButton.addEventListener("click", () => {
      phoneNumberParagraph.textContent = `Phone: ${phoneNumberParagraph.dataset.phoneNumber}`;
      emailParagraph.textContent = `Email: ${emailParagraph.dataset.email}`;
      showButton.style.display = "none";
      hideButton.style.display = "inline";
    });

    // Listener for hide button
    hideButton.addEventListener("click", () => {
      phoneNumberParagraph.textContent = `Phone: *********`;
      emailParagraph.textContent = `Email: *********`;
      hideButton.style.display = "none";
      showButton.style.display = "inline";
    });

    // Create and add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove the student";
    deleteButton.classList.add("delete");
    studentItem.append(deleteButton);

    // Listener for delete button
    deleteButton.addEventListener("click", () => {
      studentItem.remove();

      // Show deletion notification
      const deleteNotification = document.createElement("span");
      deleteNotification.textContent = `Student (${student.name} ${student.surname}) was successfully removed.`;
      deleteNotification.style.color = "red";
      deleteNotification.classList.add("notification");
      form.append(deleteNotification);

      // Remove the deletion notification after 5 seconds
      setTimeout(() => {
        deleteNotification.remove();
      }, 5000);

      // Remove the student from the array and update localStorage
      let students = loadStudentsFromLocalStorage();
      students = students.filter((s) => s.id !== student.id);
      saveStudentsToLocalStorage(students);
    });

    studentsList.append(studentItem);
  });
}

// Load students from localStorage on page load
const students = loadStudentsFromLocalStorage();
displayStudents(students);

function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Clear previous validation messages and styles
  const errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());
  const errorFields = form.querySelectorAll(".error");
  errorFields.forEach((field) => field.classList.remove("error"));

  // Validate all required fields
  let isFormValid = true;
  const requiredFields = form.querySelectorAll("[required]");
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

  // Extract form data
  const name = form.elements["name"].value;
  const surname = form.elements["surname"].value;
  const age = form.elements["age"].value;
  const phoneNumber = form.elements["phone-number"].value;
  const email = form.elements["email"].value;
  const knowledgeLevel = form.elements["knowledge-level"].value;
  const groupNumber = form.elements["group-number"].value;
  const languages = form.querySelectorAll('[name="programming-languages"]:checked');
  const programmingLanguages = Array.from(languages).map((language) => language.value);

  // Create a new student object with a unique ID
  const newStudent = {
    id: generateUniqueId(),
    name,
    surname,
    age,
    phoneNumber,
    email,
    knowledgeLevel,
    groupNumber,
    programmingLanguages,
  };

  // Load existing students from localStorage
  const students = loadStudentsFromLocalStorage();

  // Add the new student to the beginning of the students array
  students.unshift(newStudent);

  // Save the updated students array to localStorage
  saveStudentsToLocalStorage(students);

  // Update the student list
  displayStudents(students);

  // Create and show notification
  const notification = document.createElement("span");
  notification.textContent = `Sukurtas studentas (${name} ${surname})`;
  notification.classList.add("notification");
  form.append(notification); // Append notification span after submit button

  // Remove the notification after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);

  // Reset the form
  form.reset();
  updateKnowledgeLevelOutput();
});

// Function to update the span showing the knowledge level
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

// Update the element with the initial value of the range input
updateKnowledgeLevelOutput();

// Insert the element next to the range input field
knowledgeLevelInput.parentNode.insertBefore(knowledgeLevelOutput, knowledgeLevelInput.nextSibling);

// Add an event listener to update the span element as the range input value changes
knowledgeLevelInput.addEventListener("input", () => {
  updateKnowledgeLevelOutput();
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

// Add input event listeners to required fields for real-time validation
const requiredFields = form.querySelectorAll("[required]");
requiredFields.forEach((field) => {
  field.addEventListener("input", () => validateField(field));
});

// Function to save input values to localStorage
function saveToLocalStorage(id, event) {
  localStorage.setItem(id, event.target.value);
}

// Function to fill input elements with localStorage values
function fillFromLocalStorage(id) {
  if (localStorage.getItem(id)) {
    document.getElementById(id).value = localStorage.getItem(id);
  }
}

// Add event listeners to input elements
document.getElementById("name").addEventListener("input", (event) => saveToLocalStorage("name", event));
document.getElementById("surname").addEventListener("input", (event) => saveToLocalStorage("surname", event));
document.getElementById("age").addEventListener("input", (event) => saveToLocalStorage("age", event));
document.getElementById("phone-number").addEventListener("input", (event) => saveToLocalStorage("phone-number", event));
document.getElementById("email").addEventListener("input", (event) => saveToLocalStorage("email", event));
document.getElementById("knowledge-level").addEventListener("input", (event) => saveToLocalStorage("knowledge-level", event));

document.querySelectorAll('input[name="group-number"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    if (event.target.checked) {
      localStorage.setItem("group-number", event.target.value);
    }
  });
});

document.querySelectorAll('input[name="programming-languages"]').forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const selectedLanguages = Array.from(document.querySelectorAll('input[name="programming-languages"]:checked')).map((cb) => cb.value);
    localStorage.setItem("programming-languages", JSON.stringify(selectedLanguages));
  });
});

// Fill input elements with localStorage values on page load
fillFromLocalStorage("name");
fillFromLocalStorage("surname");
fillFromLocalStorage("age");
fillFromLocalStorage("phone-number");
fillFromLocalStorage("email");
fillFromLocalStorage("knowledge-level");

if (localStorage.getItem("group-number")) {
  document.querySelector(`input[name="group-number"][value="${localStorage.getItem("group-number")}"]`).checked = true;
}

if (localStorage.getItem("programming-languages")) {
  const selectedLanguages = JSON.parse(localStorage.getItem("programming-languages"));
  selectedLanguages.forEach((language) => {
    document.querySelector(`input[name="programming-languages"][value="${language}"]`).checked = true;
  });
}
