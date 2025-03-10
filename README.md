
> Ouvrir cette page à [https://jotitan.github.io/microbit-tests-kata/](https://jotitan.github.io/microbit-tests-kata/)

## Exercices

Voici une liste de kata pour s'entrainer à utiliser une carte [microbit](https://makecode.microbit.org/)

## Fonctionnement

Toute la logique est déjà présente : 
* En appuyant sur le bouton A+B, vous changez le test
* En appuyant sur le bouton A, l'entrée du test est affichée
* En appuyant sur le bouton B, le test est lancé, le résultat affiché

### Connecter les tests

Pour les lancer les tests, vous devez ajouter ce dépot en extension : 
* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/jotitan/microbit-tests-kata** et importez

Ensuite : 
* Créer vos implémentations des tests
* Initialiser les tests en appelant la fonction **loadImplementations** et en mettant en paramètre un tableau de vos fonction

Exemple
```Javascript

function doTest1(inputs){
    // Votre code
}

function doTest2(inputs){
    // Votre code
}

loadImplementations([doTest1,doTest2])

``` 

### Exercice 1 : le miroir

#### Description

Vous recevez un tableau de 5 x 5 et devez renvoyer un tableau de même dimension mais symétrique verticalement.

#### Exemple

```
. . 1 . .     . . 1 . .   
1 . . . .     . . . . 1  
. . . 1 .   =>  . 1 . . .   
. . . 1 .     . 1 . . .  
. 1 . . .     . . . 1 . 
```

### Exercice 2 : la somme

#### Description

Calculer la somme de toutes les cases du tableau

### Exercice 3 : la puissance de 5

#### Description
Le tableau que vous recevez est une matrice où un nombre est codé en base 5
Le poids faible est à droite.

#### Exemple
```
0 0 1 0 0  
1 0 0 0 0  
0 0 0 1 0 => La somme est 1 x 5^2 + 2 x 5^4 + 3 x 5^1 + 5 x 5^3 = 25 + 1250 + 15 + 625 = 1915  
0 0 0 0 0  
0 1 0 0 0  
```

#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
