window.onload = function () {
  console.log("Stranica je učitana.");
};

window.onunload = function () {
  console.log("Stranica se zatvara.");
};

var student = document.getElementById("student");
student.onmouseover = function () {
  student.style.backgroundColor = "red";
};

var student = document.getElementById("student");
student.onmouseout = function () {
  student.style.backgroundColor = "white";
};

var btn = document.getElementById("btn");
btn.onclick = function () {
  alert("Kliknuli ste na " + btn.innerHTML);
};

var btn2 = document.getElementById("btn2");
btn2.onfocus = function () {
  btn2.style.backgroundColor = "red";
};

var student = document.getElementById("student");
student.onblur = function () {
  student.style.backgroundColor = "white";
};

var input = document.getElementById("ocena");
input.onselect = function () {
  alert("Označili ste tekst: " + input.value);
};

var listaInformacija = [];

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var studentName = document.getElementById("student-name").value;
  var subject = document.getElementById("subject").value;
  var grade = document.getElementById("grade").value;

  var informacija = {
    studentName: studentName,
    subject: subject,
    grade: grade,
  };

  listaInformacija.push(informacija);

  document.getElementById("student-name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("grade").value = "";

  console.log(listaInformacija);
});
