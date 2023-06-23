function proveri(forma) {
   if (
     forma.email.value.indexOf("@") == -1 ||
     forma.usloviKoriscenja.checked == false
   ) {
     alert("Podaci nisu ispravno uneti");
     return false;
   }
   return true;
 }
 
