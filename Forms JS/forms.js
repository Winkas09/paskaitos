const form = document.getElementById("student-form");
const studentsList = document.getElementById("students-list");
const knowledgeLevelInput = form.elements["knowledge-level"];
const knowledgeLevelOutput = document.getElementById("knowledge-level-output");

knowledgeLevelInput.addEventListener("input", () => {
  knowledgeLevelOutput.textContent = knowledgeLevelInput.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Create a new div element with the class "student-item"
  const studentItem = document.createElement("div");
  studentItem.classList.add("student-item");

  // Get form data
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

  // Create and display the notification span
  const notification = document.createElement("span");
  notification.textContent = `Student created -  (${name} ${surname})`;
  notification.classList.add("notification");
  form.append(notification); // Append the notification span after the submit button

  // Remove the notification after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);

  // Create and append elements to the student-item div with the student data
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
  phoneNumberParagraph.dataset.phoneNumber = phoneNumber; // Store the actual phone number
  studentItem.append(phoneNumberParagraph);

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = `Email: *********`;
  emailParagraph.dataset.email = email; // Store the actual email
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

  // Create and append the "Show Personal Data" button
  const showButton = document.createElement("button");
  showButton.textContent = "Show personal data";
  showButton.classList.add("show-hide");
  studentItem.append(showButton);

  // Create and append the "Hide Personal Data" button
  const hideButton = document.createElement("button");
  hideButton.textContent = "Hide Personal Data";
  hideButton.classList.add("show-hide");
  hideButton.style.display = "none"; // Initially hide the hide button
  studentItem.append(hideButton);

  // Add event listener to the show button to display personal data
  showButton.addEventListener("click", () => {
    phoneNumberParagraph.textContent = `Phone: ${phoneNumberParagraph.dataset.phoneNumber}`;
    emailParagraph.textContent = `Email: ${emailParagraph.dataset.email}`;
    showButton.style.display = "none";
    hideButton.style.display = "inline";
  });

  // Add event listener to the hide button to hide personal data
  hideButton.addEventListener("click", () => {
    phoneNumberParagraph.textContent = `Phone: *********`;
    emailParagraph.textContent = `Email: *********`;
    hideButton.style.display = "none";
    showButton.style.display = "inline";
  });

  // Create and append the "Delete Student" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove the student";
  deleteButton.classList.add("delete");
  studentItem.append(deleteButton);

  // Add event listener to the delete button to remove the student item
  deleteButton.addEventListener("click", () => {
    studentItem.remove();

    // Create and display the deletion notification span
    const deleteNotification = document.createElement("span");
    deleteNotification.textContent = `Student (${name} ${surname}) was succesfully removed.`;
    deleteNotification.classList.add("notification");
    form.append(deleteNotification);

    // Remove the deletion notification after 5 seconds
    setTimeout(() => {
      deleteNotification.remove();
    }, 5000);
  });

  // Add the new student-item div to the beginning of the students-list element
  studentsList.insertBefore(studentItem, studentsList.firstChild);

  // Reset the form
  form.reset();

  // Set the knowledge level to the default value of 5 and update the output
  knowledgeLevelInput.value = 5;
  knowledgeLevelOutput.textContent = 5;
});
