//je déclare ma variable livres
    let livres =['livre1' , 'livre 2' , 'livre 3' , 'livre 4']
    //je rajoute prix de chaque livre dans mon tableau puis je l'affiche
    var prixlivres = livres.push('prixlivre1' , 'prixlivre 2' , 'prixlivre 3' , 'prixlivre 4');
    console.log(livres);
//je declare ma fonction
    function afficheRecommandations(){
        //je declare une variable qui vaut un nombres de livres classés dans le tableau
        var livresaleatoire=  livres.slice(0);        //je declare une variable qui vaut un nombres de livres classés dans le tableau
         // lorsqu'on clique sur une recommandation ca nous affiche un livre
        var livresaleatoire = document.getElementById("container");
        // je déclare une valeur qui va me permettre le retour de livres aléatoires du tableau
        var valeur= livresleatoire[Math.floor(Math.random()*livresaleatoire.length)];
        return valeur;
    }
    //j'affiche mes recommandations
    console.log(afficheRecommandations());
    console.log(afficheRecommandations());
    console.log(afficheRecommandations());
    
    // je déclare ma fonction
    function afficheLivres(prixMax) {
    var prixMax = 20;
    var prixlivres = livres ;
     // lorsqu'on clique sur un prix de livre ca nous affiche un prix
    var prixlivres = document.getElementById("img1");
    // le prix du livres  pour chque fonction de livre affiche le prix su livre si le prix du livre est inférieur ou égal au prixmax

    prixlivres.forEach(function (livres) { 
    })
    if (prixlivres <= prixMax) {
        console.log(prixlivres);
        
    }
        
    }