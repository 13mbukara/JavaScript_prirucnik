import student from "./student.js";
import predmeti from "./predmet.js";
import { izracunajProsek, prolaziIspit } from "./ocene.js";

console.log(`Student: ${student.ime} ${student.prezime}, Indeks: ${student.brojIndeksa}`);
console.log("Predmeti:");
predmeti.forEach((predmet, index) => console.log(`${index + 1}. ${predmet}`));

const ocene = [8, 7, 9, 6, 8];
const prosek = izracunajProsek(ocene);
const prolazi = prolaziIspit(ocene);

console.log(`Ocene: ${ocene.join(", ")}`);
console.log(`Prosek: ${prosek.toFixed(2)}`);
console.log(`Student ${prolazi ? "p" : "ne p"}rolazi ispit.`);
