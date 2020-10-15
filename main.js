var studentReportCard = {
  name: "Sabrina Spellman",
  class: "walter johnson hs",
  science: "D",
  math: "F+",
  "language-arts": "E",
  status: "barely passing",
  message: "We have serious concerns about your child's performance"
};

document.addEventListener('onload', onLoadStudentInfo() );

function setClassInfo() {
  document.querySelector(".hs").innerText = studentReportCard.class;
}

function setStudentName() {
  var studentNames = document.querySelectorAll(".student")
  for(var i = 0; i < studentNames.length; i++) {
    studentNames[i].innerText = studentReportCard.name;
  }  
}

function setReportCardMessage() {
  document.querySelector(".message").innerText = studentReportCard.message;
}

function setGrades() {
  var grades = document.querySelectorAll(".grade");
  grades[0].innerText = studentReportCard.science;
  grades[1].innerText = studentReportCard.math;
  grades[2].innerText = studentReportCard["language-arts"];
}

function setStudentStatus() {
  document.querySelector("#status").innerText = studentReportCard.status;
}

function onLoadStudentInfo() {
  setClassInfo();
  setStudentName();
  setReportCardMessage();
  setGrades();
};

// Looking for extra work?
// 1. onLoadStudentInfo is one big function being called on page load! Is there a way we can refactor so the onLoadStudentInfo is not as big?
// 2. Make a button that accepts a new student name from the user. Make a function that first updates the studentReportCard object and then resets the html on the report card with the new student name.
//3. Extra challenge! How could you change the data model to hold the class name and the grade (i.e. "Physics" and "D"). How could you loop through the class list and update both the class name and the grade. Hint: you'll need to use the ids of the li elements to access the corresponding studentReportCard properties. You'll also have to look up some ways to change elements inside elements.