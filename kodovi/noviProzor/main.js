var myWindow; 
opn = document.getElementsByClassName("open")[0] 
opn.addEventListener('click', openWin); 

cls = document.getElementsByClassName("close")[0] 
cls.addEventListener('click', closeWin); 

function openWin() { 
    myWindow = window.open("", "myWindow", "width=200,height=100, top=100,left=500,"); 
   myWindow.document.write("<p>This is  'myWindow'</p>"); 
} 

function closeWin() {
   myWindow.close(); 
}
