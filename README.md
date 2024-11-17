
> Ouvrir cette page à [https://jotitan.github.io/microbit-tests-kata/](https://jotitan.github.io/microbit-tests-kata/)

## Exercices

Voici une liste de kata pour s'entrainer à utiliser une carte [microbit](https://makecode.microbit.org/)

### Exercice préliminaire

L'objectif est de configurer la carte pour lancer les tests par la suite : 
* Ajouter une fonction pour incrémenter un compteur (tournant) de 1 à 9 lorsqu'on appuie sur le logo
La valeur du compteur est affichée sur l'écran
* Lors de l'appuie sur le bouton A, afficher OK {compteur}
* Lors de l'appuie sur le bouton B, afficher Test {compteur}

### Connecter les tests

Pour les lancer les tests, vous devez ajouter ce dépot en extension : 
* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/jotitan/microbit-tests-kata** et importez

Ensuite : 
* Le logo permet toujours de choisir un des tests, de 1 à 9
* Le bouton A permet de lancer votre fonction à partir des données de test
* Le bouton B permet de valider votre fonction

Exemple pour le **bouton A**
```Javascript

function getTest(counter){
    switch (counter){
        case 1 : return new Test1();
    }
}

function display(data: int16[][]){
    /* Convert data in the good format : 1 is turn on, 0 is turn off */
    basic.showLeds("")
}
const test = getTest(counter)
const myData = myFunction(test.getInput());
display(myData);
```

Exemple pour le **bouton B**
```Javascript
const test = getTest(counter)
checkTest(test, myFunction(test.getInput()))
``` 

### Fonctionnement

### Exercice 1 : le miroir

#### Description

Vous recevez un tableau de 5 x 5 et devez renvoyer un tableau de même dimension mais symétrique verticalement.

#### Exemple
. . 1 . .   =>  . . 1 . .   
1 . . . .   =>  . . . . 1  
. . . 1 .   =>  . 1 . . .   
. . . 1 .   =>  . 1 . . .  
. 1 . . .   =>  . . . 1 .  

### Exercice 2 : la somme

#### Description

Calculer la somme de toutes les cases du tableau

### Exercice 3 : la puissance de 5

#### Description
Le tableau que vous recevez est une matrice où un nombre est codé en base 5
Le poids faible est à droite.

#### Exemple

0 0 1 0 0  
1 0 0 0 0  
0 0 0 1 0 => La somme est 1 x 5^2 + 2 x 5^4 + 3 x 5^1 + 5 x 5^3 = 25 + 1250 + 15 + 625 = 1915  
0 0 0 0 0  
0 1 0 0 0  


#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
