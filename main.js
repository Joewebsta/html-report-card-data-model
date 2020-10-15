var studentReportCard = {
  name: "Sabrina Spellman",
  class: "walter johnson hs",
  classes: {
    science: ['Physics',"D"],
    math: ['Calculus', "F+"],
    "language-arts": ['English Literature', "E"],
  },
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
  let classSubjects = document.querySelectorAll('.class-subject');

  classSubjects.forEach( classSubject => {
    let className = studentReportCard.classes[classSubject.id][0];
    let classGrade = studentReportCard.classes[classSubject.id][1];
    classSubject.innerText = `${className}, ${classGrade}`;
  });
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

function updateStudentName() {
  let nameInput = document.querySelector('.name-input');
  let updatedStudentName = nameInput.value;
  nameInput.value = '';
  studentReportCard.name = updatedStudentName;
  setStudentName();

}

document.addEventListener('click', updateStudentName);