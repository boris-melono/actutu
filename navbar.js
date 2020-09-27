//Bascule entre l'affichage et le masquage des liens du menu de navigation lorsque l'utilisateur clique sur l'icône menu barre de hamburgers
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
   


