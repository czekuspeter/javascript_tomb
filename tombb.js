var nyelvek = ["HTML", "CSS", "JS"];
function elso() {
    document.getElementById("szoveg").innerHTML = nyelvek[0];
 }
 function masodik() {
    document.getElementById("szoveg").innerHTML = nyelvek[1];
 }

 function harmadik() {
    document.getElementById("szoveg").innerHTML = nyelvek[2];
 }

 function osszes()
 {
    document.getElementById("szoveg2").innerHTML = nyelvek;
 }
 function hozzaad()
 {
    nyelvek.push(document.getElementById("uj").value);
    document.getElementById("uj").value = " ";
 }

 function tombhossza()
 {
   document.getElementById("szoveg3").innerHTML = nyelvek.length;
 }

 function torol()
 {
   var index = document.getElementById("torol").value;
   console.log(index);
   nyelvek.splice(index, 1);

 }