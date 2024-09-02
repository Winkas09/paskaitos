const form = document.getElementById("student-form");
const studentsList = document.getElementById("students-list");
const knowledgeLevelInput = form.elements["knowledge-level"];
const knowledgeLevelOutput = document.createElement("span");

// function validateField(field) {
//   let isValid = true;
//   let errorMessageText = "";

//   if (field.value.trim() === "") {
//     isValid = false;
//     errorMessageText = "Šis laukelis yra privalomas";
//   } else if (field.name === "name" && field.value.trim().length < 3) {
//     isValid = false;
//     errorMessageText = "Vardas privalo būti bent 3 simbolių ilgumo";
//   } else if (field.name === "surname" && field.value.trim().length < 3) {
//     isValid = false;
//     errorMessageText = "Pavardė privalo būti bent 3 simbolių ilgumo";
//   } else if (field.name === "age") {
//     const age = parseInt(field.value.trim(), 10);
//     if (isNaN(age) || age < 1) {
//       isValid = false;
//       errorMessageText = "Amžius privalo būti teigiamas skaičius arba didesnis už 0";
//     } else if (age > 100) {
//       isValid = false;
//       errorMessageText = "Įvestas amžius yra per didelis";
//     }
//   } else if (field.name === "phone-number") {
//     const phoneNumberLength = field.value.trim().length;
//     if (phoneNumberLength < 9 || phoneNumberLength > 13) {
//       isValid = false;
//       errorMessageText = "Įvestas telefono numeris yra neteisingas";
//     }
//   } else if (field.name === "email") {
//     const email = field.value.trim();
//     if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
//       isValid = false;
//       errorMessageText = "Įvestas elektroninis paštas yra neteisingas";
//     }
//   }

//   if (isValid) {
//     clearError(field);
//   } else {
//     showError(field, errorMessageText);
//   }

//   return isValid;
// }

function validateField(field) {
  let isValid = true;
  let errorMessageText = "";

  const value = field.value.trim();

  if (value === "") {
    isValid = false;
    errorMessageText = "Šis laukelis yra privalomas";
  } else if (field.name === "name") {
    ({ isValid, errorMessageText } = validateName(value));
  } else if (field.name === "surname") {
    ({ isValid, errorMessageText } = validateSurname(value));
  } else if (field.name === "age") {
    ({ isValid, errorMessageText } = validateAge(value));
  } else if (field.name === "phone-number") {
    ({ isValid, errorMessageText } = validatePhoneNumber(value));
  } else if (field.name === "email") {
    ({ isValid, errorMessageText } = validateEmail(value));
  }

  if (isValid) {
    clearError(field);
  } else {
    showError(field, errorMessageText);
  }

  return isValid;
}

function validateName(name) {
  if (name.length < 3) {
    return { isValid: false, errorMessageText: "Vardas privalo būti bent 3 simbolių ilgumo" };
  }
  return { isValid: true, errorMessageText: "" };
}

function validateSurname(surname) {
  if (surname.length < 3) {
    return { isValid: false, errorMessageText: "Pavardė privalo būti bent 3 simbolių ilgumo" };
  }
  return { isValid: true, errorMessageText: "" };
}

function validateAge(age) {
  const ageNumber = parseInt(age, 10);
  if (isNaN(ageNumber) || ageNumber < 1) {
    return { isValid: false, errorMessageText: "Amžius privalo būti teigiamas skaičius arba didesnis už 0" };
  } else if (ageNumber > 100) {
    return { isValid: false, errorMessageText: "Įvestas amžius yra per didelis" };
  }
  return { isValid: true, errorMessageText: "" };
}

function validatePhoneNumber(phoneNumber) {
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 9 || phoneNumberLength > 13) {
    return { isValid: false, errorMessageText: "Įvestas telefono numeris yra neteisingas" };
  }
  return { isValid: true, errorMessageText: "" };
}

function validateEmail(email) {
  if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
    return { isValid: false, errorMessageText: "Įvestas elektroninis paštas yra neteisingas" };
  }
  return { isValid: true, errorMessageText: "" };
}

//studentu array i localStorage
function saveStudentsToLocalStorage(students) {
  localStorage.setItem("students", JSON.stringify(students));
}

// is local storage studentu arr
function loadStudentsFromLocalStorage() {
  const storedStudents = localStorage.getItem("students");
  return storedStudents ? JSON.parse(storedStudents) : [];
}

function displayStudents(students) {
  // Clear the existing list
  while (studentsList.firstChild) {
    studentsList.removeChild(studentsList.firstChild);
  }

  students.forEach((student) => {
    const studentItem = createStudentItem(student);
    studentsList.append(studentItem);
  });
}

function createStudentItem(student) {
  const studentItem = document.createElement("div");
  studentItem.classList.add("student-item");

  studentItem.append(createParagraph(`Name: ${student.name}`));
  studentItem.append(createParagraph(`Surname: ${student.surname}`));
  studentItem.append(createParagraph(`Age: ${student.age}`));
  studentItem.append(createPhoneNumberParagraph(student.phoneNumber));
  studentItem.append(createEmailParagraph(student.email));
  studentItem.append(createParagraph(`IT Knowledge: ${student.knowledgeLevel}`));
  studentItem.append(createParagraph(`Group: ${student.groupNumber}`));
  studentItem.append(createParagraph(`Programming Languages: ${student.programmingLanguages.join(", ")}`));

  const { showButton, hideButton } = createShowHideButtons(studentItem);
  studentItem.append(showButton);
  studentItem.append(hideButton);

  const deleteButton = createDeleteButton(student, studentItem);
  studentItem.append(deleteButton);

  return studentItem;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createPhoneNumberParagraph(phoneNumber) {
  const phoneNumberParagraph = createParagraph(`Phone: *********`);
  phoneNumberParagraph.dataset.phoneNumber = phoneNumber;
  return phoneNumberParagraph;
}

function createEmailParagraph(email) {
  const emailParagraph = createParagraph(`Email: *********`);
  emailParagraph.dataset.email = email;
  return emailParagraph;
}

function createShowHideButtons(studentItem) {
  const showButton = document.createElement("button");
  showButton.textContent = "Rodyti asmens duomenis";
  showButton.classList.add("show-hide");

  const hideButton = document.createElement("button");
  hideButton.textContent = "Slėpti asmens duomenis";
  hideButton.classList.add("show-hide");
  hideButton.style.display = "none";

  showButton.addEventListener("click", () => {
    const phoneNumberParagraph = studentItem.querySelector("[data-phone-number]");
    const emailParagraph = studentItem.querySelector("[data-email]");
    phoneNumberParagraph.textContent = `Phone: ${phoneNumberParagraph.dataset.phoneNumber}`;
    emailParagraph.textContent = `Email: ${emailParagraph.dataset.email}`;
    showButton.style.display = "none";
    hideButton.style.display = "inline";
  });

  hideButton.addEventListener("click", () => {
    const phoneNumberParagraph = studentItem.querySelector("[data-phone-number]");
    const emailParagraph = studentItem.querySelector("[data-email]");
    phoneNumberParagraph.textContent = `Phone: *********`;
    emailParagraph.textContent = `Email: *********`;
    hideButton.style.display = "none";
    showButton.style.display = "inline";
  });

  return { showButton, hideButton };
}

function createDeleteButton(student, studentItem) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove the student";
  deleteButton.classList.add("delete");

  deleteButton.addEventListener("click", () => {
    studentItem.remove();

    const deleteNotification = document.createElement("span");
    deleteNotification.textContent = `Student (${student.name} ${student.surname}) was successfully removed.`;
    deleteNotification.style.color = "red";
    deleteNotification.classList.add("notification");
    form.append(deleteNotification);

    setTimeout(() => {
      deleteNotification.remove();
    }, 5000);

    // Remove the student from local storage
    let students = loadStudentsFromLocalStorage();
    students = students.filter((s) => s.id !== student.id);
    saveStudentsToLocalStorage(students);
  });

  return deleteButton;
}

//   students.forEach((student) => {
//     const studentItem = document.createElement("div");
//     studentItem.classList.add("student-item");

//     const nameParagraph = document.createElement("p");
//     nameParagraph.textContent = `Name: ${student.name}`;
//     studentItem.append(nameParagraph);

//     const surnameParagraph = document.createElement("p");
//     surnameParagraph.textContent = `Surname: ${student.surname}`;
//     studentItem.append(surnameParagraph);

//     const ageParagraph = document.createElement("p");
//     ageParagraph.textContent = `Age: ${student.age}`;
//     studentItem.append(ageParagraph);

//     const phoneNumberParagraph = document.createElement("p");
//     phoneNumberParagraph.textContent = `Phone: *********`;
//     phoneNumberParagraph.dataset.phoneNumber = student.phoneNumber;
//     studentItem.append(phoneNumberParagraph);

//     const emailParagraph = document.createElement("p");
//     emailParagraph.textContent = `Email: *********`;
//     emailParagraph.dataset.email = student.email;
//     studentItem.append(emailParagraph);

//     const knowledgeLevelParagraph = document.createElement("p");
//     knowledgeLevelParagraph.textContent = `IT Knowledge: ${student.knowledgeLevel}`;
//     studentItem.append(knowledgeLevelParagraph);

//     const groupNumberParagraph = document.createElement("p");
//     groupNumberParagraph.textContent = `Group: ${student.groupNumber}`;
//     studentItem.append(groupNumberParagraph);

//     const programmingLanguagesParagraph = document.createElement("p");
//     programmingLanguagesParagraph.textContent = `Programming Languages: ${student.programmingLanguages.join(", ")}`;
//     studentItem.append(programmingLanguagesParagraph);

//     const showButton = document.createElement("button");
//     showButton.textContent = "Rodyti asmens duomenis";
//     showButton.classList.add("show-hide");
//     studentItem.append(showButton);

//     const hideButton = document.createElement("button");
//     hideButton.textContent = "Slėpti asmens duomenis";
//     hideButton.classList.add("show-hide");
//     hideButton.style.display = "none";
//     studentItem.append(hideButton);

//     showButton.addEventListener("click", () => {
//       phoneNumberParagraph.textContent = `Phone: ${phoneNumberParagraph.dataset.phoneNumber}`;
//       emailParagraph.textContent = `Email: ${emailParagraph.dataset.email}`;
//       showButton.style.display = "none";
//       hideButton.style.display = "inline";
//     });

//     hideButton.addEventListener("click", () => {
//       phoneNumberParagraph.textContent = `Phone: *********`;
//       emailParagraph.textContent = `Email: *********`;
//       hideButton.style.display = "none";
//       showButton.style.display = "inline";
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Remove the student";
//     deleteButton.classList.add("delete");
//     studentItem.append(deleteButton);

//     deleteButton.addEventListener("click", () => {
//       studentItem.remove();

//       const deleteNotification = document.createElement("span");
//       deleteNotification.textContent = `Student (${student.name} ${student.surname}) was successfully removed.`;
//       deleteNotification.style.color = "red";
//       deleteNotification.classList.add("notification");
//       form.append(deleteNotification);

//       setTimeout(() => {
//         deleteNotification.remove();
//       }, 5000);

//       // istrina studenta is local storage
//       let students = loadStudentsFromLocalStorage();
//       students = students.filter((s) => s.id !== student.id);
//       saveStudentsToLocalStorage(students);
//     });

//     studentsList.append(studentItem);
//   });
// }

// uzkrauna studs is local storage
const students = loadStudentsFromLocalStorage();
displayStudents(students);

function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearValidationErrors();

  if (!validateForm()) {
    showAlertMessage("Ne visi laukeliai yra užpildyti.");
    return;
  }

  const newStudent = createStudentFromForm();
  saveStudent(newStudent);
  displayStudents(loadStudentsFromLocalStorage());
  showNotification(`Sukurtas studentas (${newStudent.name} ${newStudent.surname})`);
  form.reset();
  updateKnowledgeLevelOutput();
});

function clearValidationErrors() {
  const errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());
  const errorFields = form.querySelectorAll(".error");
  errorFields.forEach((field) => field.classList.remove("error"));
}

function validateForm() {
  let isFormValid = true;
  const requiredFields = form.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });
  return isFormValid;
}

function showAlertMessage(message) {
  const existingAlert = form.querySelector(".alert-message");
  if (!existingAlert) {
    const alertMessage = document.createElement("div");
    alertMessage.textContent = message;
    alertMessage.classList.add("alert-message");
    alertMessage.style.color = "red";
    form.insertBefore(alertMessage, form.firstChild);

    setTimeout(() => {
      alertMessage.remove();
    }, 5000);
  }
}

function createStudentFromForm() {
  const name = form.elements["name"].value;
  const surname = form.elements["surname"].value;
  const age = form.elements["age"].value;
  const phoneNumber = form.elements["phone-number"].value;
  const email = form.elements["email"].value;
  const knowledgeLevel = form.elements["knowledge-level"].value;
  const groupNumber = form.elements["group-number"].value;
  const languages = form.querySelectorAll('[name="programming-languages"]:checked');
  const programmingLanguages = Array.from(languages).map((language) => language.value);

  return {
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
}

function saveStudent(student) {
  const students = loadStudentsFromLocalStorage();
  students.unshift(student);
  saveStudentsToLocalStorage(students);
}

function showNotification(message) {
  const notification = document.createElement("span");
  notification.textContent = message;
  notification.classList.add("notification");
  form.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // isvalo validationus buvusius
//   const errorMessages = form.querySelectorAll(".error-message");
//   errorMessages.forEach((message) => message.remove());
//   const errorFields = form.querySelectorAll(".error");
//   errorFields.forEach((field) => field.classList.remove("error"));

//   // validacija
//   let isFormValid = true;
//   const requiredFields = form.querySelectorAll("[required]");
//   requiredFields.forEach((field) => {
//     if (!validateField(field)) {
//       isFormValid = false;
//     }
//   });

//   if (!isFormValid) {
//     // jei ne valid
//     const existingAlert = form.querySelector(".alert-message");
//     if (!existingAlert) {
//       const alertMessage = document.createElement("div");
//       alertMessage.textContent = "Ne visi laukeliai yra užpildyti.";
//       alertMessage.classList.add("alert-message");
//       alertMessage.style.color = "red";
//       form.insertBefore(alertMessage, form.firstChild);

//       setTimeout(() => {
//         alertMessage.remove();
//       }, 5000);
//     }
//     return;
//   }

//   // data is formos
//   const name = form.elements["name"].value;
//   const surname = form.elements["surname"].value;
//   const age = form.elements["age"].value;
//   const phoneNumber = form.elements["phone-number"].value;
//   const email = form.elements["email"].value;
//   const knowledgeLevel = form.elements["knowledge-level"].value;
//   const groupNumber = form.elements["group-number"].value;
//   const languages = form.querySelectorAll('[name="programming-languages"]:checked');
//   const programmingLanguages = Array.from(languages).map((language) => language.value);

//   // sukuria nauja studenta objekta su duomenimis is formos
//   const newStudent = {
//     id: generateUniqueId(),
//     name,
//     surname,
//     age,
//     phoneNumber,
//     email,
//     knowledgeLevel,
//     groupNumber,
//     programmingLanguages,
//   };

//   const students = loadStudentsFromLocalStorage();

//   // i prieki imeta studenta array
//   students.unshift(newStudent);

//   saveStudentsToLocalStorage(students);

//   displayStudents(students);

//   const notification = document.createElement("span");
//   notification.textContent = `Sukurtas studentas (${name} ${surname})`;
//   notification.classList.add("notification");
//   form.append(notification); // Append notification span after submit button

//   setTimeout(() => {
//     notification.remove();
//   }, 5000);

//   form.reset();
//   updateKnowledgeLevelOutput();
// });

function updateKnowledgeLevelOutput() {
  knowledgeLevelOutput.textContent = knowledgeLevelInput.value;
}

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

updateKnowledgeLevelOutput();

knowledgeLevelInput.parentNode.insertBefore(knowledgeLevelOutput, knowledgeLevelInput.nextSibling);

knowledgeLevelInput.addEventListener("input", () => {
  updateKnowledgeLevelOutput();
});

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

function clearError(field) {
  field.classList.remove("error");
  field.style.border = "";
  const errorMessage = field.nextElementSibling;
  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.remove();
  }
}

const requiredFields = form.querySelectorAll("[required]");
requiredFields.forEach((field) => {
  field.addEventListener("input", () => validateField(field));
});

function saveToLocalStorage(id, event) {
  localStorage.setItem(id, event.target.value);
}

function fillFromLocalStorage(id) {
  if (localStorage.getItem(id)) {
    document.getElementById(id).value = localStorage.getItem(id);
  }
}

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

// uzpildo laukus is local storage
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
