# Configuration du Projet

Ce guide vous aidera à configurer et à exécuter le projet localement en utilisant Docker.

## Prérequis

- **Docker Desktop** : Assurez-vous d'avoir installé Docker Desktop sur votre machine. Vous pouvez le télécharger et l'installer depuis [le site officiel de Docker](https://www.docker.com/products/docker-desktop).

## Étapes d'installation

1. **Cloner le projet**

   Clonez le dépôt du projet sur votre machine locale en utilisant la commande suivante :

   ```bash
   git clone <URL_DU_DEPOT>
   ```

   Remplacez `<URL_DU_DEPOT>` par l'URL réelle du dépôt Git.

2. **Naviguer dans le répertoire du projet**

   Accédez au répertoire du projet cloné :

   ```bash
   cd <NOM_DU_REPERTOIRE>
   ```

   Remplacez `<NOM_DU_REPERTOIRE>` par le nom du répertoire du projet.

3. **Démarrer les services avec Docker Compose**

   Utilisez Docker Compose pour démarrer les services définis dans le fichier `docker-compose.yml` :

   ```bash
   docker-compose up -d
   ```

   Cette commande démarre les conteneurs en arrière-plan.

4. **Accéder à l'application**

   Ouvrez votre navigateur web et accédez à l'application à l'adresse suivante :

   ```
   http://localhost
   ```

   (Changer l'adresse si le port est déjà utilisé)

   Vous devriez voir l'application s'exécuter.

## Structure du projet

- **frontend/index.html** : Fichier HTML principal pour l'interface utilisateur.
- **frontend/script.js** : Contient la logique JavaScript pour charger et gérer les utilisateurs et les livres.
- **frontend/styles.css** : Fichier CSS pour le style de l'application.
- **db-init/init.sql** : Script SQL pour initialiser la base de données avec des tables et des données par défaut.
- **node-api/index.js** : Fichier principal pour l'API Node.js qui gère les requêtes HTTP.

## Configuration supplémentaire

- **API** : L'API est configurée pour fonctionner sur le port 3000 et est accessible via le chemin `/api/`.
- **Base de données** : Assurez-vous que les variables d'environnement pour la base de données sont correctement configurées dans votre fichier `.env` ou directement dans le fichier `docker-compose.yml`.

## Dépannage

- Si vous rencontrez des problèmes de connexion à la base de données, vérifiez que les informations d'identification dans `node-api/index.js` sont correctes.
- Pour voir les logs des conteneurs, utilisez la commande suivante :

  ```bash
  docker-compose logs
  ```

## Arrêter les services

Pour arrêter les services Docker, utilisez la commande suivante :

```bash
docker-compose down
```

## Remarques

- Assurez-vous que Docker est en cours d'exécution avant d'exécuter les commandes Docker Compose.
- Si vous rencontrez des problèmes, vérifiez les journaux des conteneurs Docker pour plus de détails.
- Assurez-vous que les ports requis ne sont pas utilisés par d'autres applications sur votre machine.
- Pour toute question ou problème, veuillez consulter la documentation du projet ou contacter l'équipe de développement.
