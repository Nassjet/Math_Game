import { StyleSheet } from 'react-native';

// Création d'un objet StyleSheet qui contient tous nos styles
export const styles = StyleSheet.create({
    container: {
        flex: 1,                    // Prend tout l'espace disponible
        justifyContent: 'center',   // Centre verticalement
        alignItems: 'center',       // Centre horizontalement
        backgroundColor: '#f5f5f5', // Couleur de fond légère
    },
    button: {
        width: '80%',              // Largeur de 80% de l'écran
        padding: 15,               // Espace intérieur
        marginVertical: 10,        // Espace vertical entre les boutons
        borderRadius: 8,           // Coins arrondis
        alignItems: 'center',      // Centre le texte horizontalement
    },
    easyButton: {
        backgroundColor: '#4CAF50', // Vert pour le mode facile
    },
    hardButton: {
        backgroundColor: '#f44336', // Rouge pour le mode difficile
    },
    buttonText: {
        color: 'white',            // Texte en blanc
        fontSize: 18,              // Taille de police
        fontWeight: 'bold',        // Texte en gras
    }
});