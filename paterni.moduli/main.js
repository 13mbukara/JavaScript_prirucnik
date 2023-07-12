import student from "./student.js";
import predmeti from "./predmet.js";
import ocene from "./ocene.js";

//Ispisivanje informacija u konzoli
console.log("Informacije o studentu:");
console.log(`Ime: ${student.ime}`);
console.log(`Prezime: ${student.prezime}`);
console.log(`Broj indeksa: ${student.brojIndeksa}`);

console.log("Ocene:");
ocene.forEach((ocena, index) => {
  console.log(`${index + 1}. ${ocena}`);
});

console.log("Predmeti:");
predmeti.forEach((predmet, index) => {
  console.log(`${index + 1}. ${predmet}`);
});
