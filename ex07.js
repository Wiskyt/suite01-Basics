/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

/*      Test 1
    Appel à la fonction "boostedAddition",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 15;
*/

// boostedAddition([4, 5, 6]);

/*      Test 1
    Appel à la fonction "boostedAddition",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 44;
*/

// boostedAddition([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire

function boostedAddition(nbArray) {
   var nb = 0;
   for (let i = 0; i < nbArray.length; i++) {
      nb += nbArray[i];
   }
   return nb;
}