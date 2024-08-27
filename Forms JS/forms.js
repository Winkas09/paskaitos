const form = document.getElementById("student-form");
const studentsList = document.getElementById("students-list");
const knowledgeLevelInput = form.elements["knowledge-level"];
const knowledgeLevelOutput = document.createElement("span"); // Create a span element for displaying the range value

// Update the  element with the initial value of the range input
knowledgeLevelOutput.textContent = knowledgeLevelInput.value;

// Insert the  element next to the range input field
knowledgeLevelInput.parentNode.insertBefore(knowledgeLevelOutput, knowledgeLevelInput.nextSibling);

// Add an event listener to update the span element as the range input value changes
knowledgeLevelInput.addEventListener("input", () => {
  knowledgeLevelOutput.textContent = knowledgeLevelInput.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // preventina perkrovima

  const studentItem = document.createElement("div");
  studentItem.classList.add("student-item");

  // data is formos
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

  // notification spanas
  const notification = document.createElement("span");
  notification.textContent = `Sukurtas studentas (${name} ${surname})`;
  notification.classList.add("notification");
  form.append(notification); // Appendina notification spana po submit button

  // istrina po 5 sekundziu
  setTimeout(() => {
    notification.remove();
  }, 5000);

  // sukuria studento duomenis ir prideda i student-item diva
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
  phoneNumberParagraph.dataset.phoneNumber = phoneNumber; // isaugo numeri
  studentItem.append(phoneNumberParagraph);

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = `Email: *********`;
  emailParagraph.dataset.email = email; // isaugo emaila
  studentItem.append(emailParagraph);

  const knowledgeLevelParagraph = document.createElement("p");
  knowledgeLevelParagraph.textContent = `IT Knowledge: ${knowledgeLevel}`;
  studentItem.append(knowledgeLevelParagraph);

  const groupNumberParagraph = document.createElement("p");
  groupNumberParagraph.textContent = `Group: ${groupNumber}`;
  studentItem.append(groupNumberParagraph);

  const programmingLanguagesParagraph = document.createElement("p");
  programmingLanguagesParagraph.textContent = `Programming Languages: ${programmingLanguages}`;
  studentItem.append(programmingLanguagesParagraph);

  // rodyti duomenis
  const showButton = document.createElement("button");
  showButton.textContent = "Rodyti asmens duomenis";
  showButton.classList.add("show-hide");
  studentItem.append(showButton);

  // slepti duomenis
  const hideButton = document.createElement("button");
  hideButton.textContent = "Slėpti asmens duomenis";
  hideButton.classList.add("show-hide");
  hideButton.style.display = "none";
  studentItem.append(hideButton);

  // listeneris kai paspaudziam show button
  showButton.addEventListener("click", () => {
    phoneNumberParagraph.textContent = `Phone: ${phoneNumberParagraph.dataset.phoneNumber}`;
    emailParagraph.textContent = `Email: ${emailParagraph.dataset.email}`;
    showButton.style.display = "none";
    hideButton.style.display = "inline";
  });

  // listeneris kai paspaudziam hide button
  hideButton.addEventListener("click", () => {
    phoneNumberParagraph.textContent = `Phone: *********`;
    emailParagraph.textContent = `Email: *********`;
    hideButton.style.display = "none";
    showButton.style.display = "inline";
  });

  // delete student
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove the student";
  deleteButton.classList.add("delete");
  studentItem.append(deleteButton);

  // listeneris kai paspaudziam delete button
  deleteButton.addEventListener("click", () => {
    studentItem.remove();

    // istrinimo notification spanas
    const deleteNotification = document.createElement("span");
    deleteNotification.textContent = `Student (${name} ${surname}) was succesfully removed.`;
    deleteNotification.classList.add("notification");
    form.append(deleteNotification);

    // istrina po 5 sekundziu
    setTimeout(() => {
      deleteNotification.remove();
    }, 5000);
  });

  // pridejimas i student list diva pirmas studentas bus pirmas listo vietoje ir t.t.
  studentsList.insertBefore(studentItem, studentsList.firstChild);

  form.reset();
});
