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

// GRANICA DOBROG I LOŠEG

var select = document.getElementById("predmeti");
select.onchange = function () {
  alert("Odabrali ste predmet: " + select.value);
};

var form = document.getElementById("forma");
form.onsubmit = function () {
  alert("Forma je poslata!");
};

targetElement.addEventListener("scroll", (event) => {
  // handle the scroll event
});

function evidencijaSaZakasnjenjem() {
  console.log("Evidentirani ste!");
}
setTimeout(evidencijaSaZakasnjenjem, 3000); // Evidencija će biti ispisana nakon 3 sekunde (3000 milisekundi).

function odbrojavanjeDoRezultata() {
  console.log("Još jedna sekunda je prošla.");
}
setInterval(odbrojavanjeDoRezultata, 1000); // Odbrojavanje će se ispisivati svake sekunde.

function pretraziStudenta() {
  console.log("Pretraga izvršena.");
}
function debouncing(fn, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
}
const pretraziDebounced = debouncing(pretraziStudenta, 300); // Pretraga će se pokrenuti 300ms nakon poslednjeg poziva.

/*
function changeColor() {
  var heading = document.querySelector("h1");
  heading.style.color = "GREEN";
}

function revertColor() {
  var heading = document.querySelector("h1");
  heading.style.color = "blue";
}

var button = document.getElementById("btn");
button.onmouseover = changeColor;
button.onmouseout = revertColor;

button.onclick = function () {
  alert("Kliknuli ste dugme!");
};

var inputField = document.createElement("input");
inputField.onfocus = function () {
  console.log("Input polje je fokusirano.");
};

inputField.onblur = function () {
  console.log("Input polje je izgubilo fokus.");
};

document.body.appendChild(inputField);

inputField.onchange = function () {
  console.log("Vrednost input polja se promenila.");
};

inputField.onselect = function () {
  console.log("Tekst u input polju je selektovan.");
};

var form = document.createElement("form");
form.onsubmit = function (event) {
  event.preventDefault();
  console.log("Forma je submitovana.");
};

document.body.appendChild(form);

button.addEventListener("click", function () {
  console.log("Kliknuli ste dugme (addEventListener).");
});

setTimeout(function () {
  console.log("Ovo će se prikazati posle 3 sekunde.");
}, 3000);

var interval = setInterval(function () {
  console.log("Ovo će se prikazivati svake 2 sekunde.");
}, 2000);

function debounce(func, delay) {
  var timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

var debouncedFunc = debounce(function () {
  console.log("Ovo će se prikazivati nakon završetka unosa u input polje.");
}, 500);

inputField.addEventListener("input", debouncedFunc);
*/
