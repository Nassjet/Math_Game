Je commence par créer ma structure de dossiers, 
src/  
    -> components
    -> screens 
    -> navigation

ensuite je remets à 0 mon app.js pour faire quelque chose de propre, il faut que je configure la navigation entre les différents écrans, et pour ça il faut 
installer des dépendances, cf : https://reactnative.dev/docs/navigation 

Donc je configure mon app.js et j'y mets la balise navigationContainer, comme ça le plan de routes de mon app est fait pour y appeler mon appnavigator. 
Ce App navigator crée les routes et définit Home comme route par défaut avec : initialRouteName="Home". On oublie pas le export default pour pouvoir donner accès à ce fichier. 

