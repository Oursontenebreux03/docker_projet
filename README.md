# docker_projet

Application Full Stack minimaliste pour démonstration de la conteneurisation, l’orchestration, la persistance et la communication entre services Docker (frontend, backend, PostgreSQL).

---

## Structure du projet

docker_projet/
│
├── frontend/ # Frontend statique (formulaire HTML)
├── backend/ # Backend Express.js (API + logique BDD)
├── docker-compose.yml # Orchestration Docker Compose
└── README.md # Ce fichier


---

## Prérequis

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

---

## Installation & Démarrage

Clonez le repo, placez-vous dans le dossier et lancez la stack :

```bash
git clone https://github.com/Oursontenebreux03/docker_projet
cd docker_projet
sudo docker compose up --build -d

Voir l’état des conteneurs
sudo docker compose ps

Accéder à l_application
Frontend : http://localhost:3000
→ Formulaire simple pour saisir nom, âge, email.

Backend : http://localhost:5000
→ API REST qui reçoit les données du front, les stocke en BDD, et les expose (GET/POST).

PostgreSQL :
Accès direct au conteneur pour requêtes :

sudo docker exec -it docker_projet-db-1 bash
psql -U postgres -d mydb
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
select * from utilisateurs;
# Quitter psql : \q
# Quitter le conteneur : exit

Fonctionnement et Architecture
3 services Dockerisés :

frontend : sert un formulaire HTML (via Nginx)
backend : Express.js connecte et gère la BDD (création auto de la table utilisateurs)
db : PostgreSQL 15, avec volume persistant

Réseau Docker :
Un réseau personnalisé mynetwork isole et sécurise les échanges entre services (le backend n’est accessible que par le frontend et la base).

Persistance des données :
Le volume dbdata conserve toutes les données PostgreSQL, même après arrêt/redémarrage de la stack.

Arrêt & Nettoyage complet
Pour tout arrêter et supprimer les volumes (effacer toutes les données PostgreSQL) :


sudo docker compose down --volumes --remove-orphans
Mise à jour des images (Docker Hub)

Le projet utilise les images suivantes :

Backend : grosourstenebreux03/backend:latest
Frontend : grosourstenebreux03/frontend:latest
Base de données : image officielle postgres:15

Après chaque modification du code source :

# (Re)builder puis pousser les images sur Docker Hub
docker build -t grosourstenebreux03/backend:latest ./backend
docker build -t grosourstenebreux03/frontend:latest ./frontend
docker push grosourstenebreux03/backend:latest
docker push grosourstenebreux03/frontend:latest

# Récupérer les images à jour
docker compose pull
docker compose up -d
Démonstration & Tests
Rendez-vous sur http://localhost:3000

Remplissez le formulaire, validez.

Les utilisateurs apparaissent dans la liste.

Arrêtez/redémarrez la stack : les données sont toujours là

Vous pouvez vérifier le contenu de la base via :

sudo docker exec -it docker_projet-db-1 bash
psql -U postgres -d mydb
select * from utilisateurs;

Documentation technique
docker-compose.yml : orchestration, réseau personnalisé, volume persistant.

backend : Express.js, connecte PostgreSQL, gère la création automatique de la table utilisateurs, expose les routes POST/GET.

frontend : HTML/JS simple, communication via fetch API.

db : PostgreSQL 15 officiel, données persistées dans dbdata.

Liens à fournir pour l’évaluation

Repository GitHub public (ce projet)

Repository Docker Hub (mes images publiées)


Auteurs
Aziz Koné
Antiki Djibaba
Kevin Sureshe

Projet pédagogique ESGI 2024-2025
Encadrant : Romain Lenoir
