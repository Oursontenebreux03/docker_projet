# Fullstack App Dockerisée

Ce projet est une application fullstack conteneurisée avec Docker et orchestrée avec **Docker Compose**. Il comprend :

- Un **frontend** accessible sur le port 3000
- Un **backend** sur le port 5000
- Une base de données **PostgreSQL**  en accès dans le terminal

---

```bash
## Structure du projet


my-fullstack-app/
│
├── frontend/          # Code source du frontend
├── backend/           # Code source du backend
├── docker-compose.yml
└── README.md


## Prérequis 
Docker
Docker Compose
Git



## Démarrage

1. Cloner le repo :
```bash
git clone https://github.com/Oursontenebreux03/docker_projet
cd docker_projet

sudo docker compose up --build -d 

Accéder à l_application
Frontend : http://localhost:3000
Backend : http://localhost:5000
Postgres : sudo docker exec -it docker_projet-db-1 bash  / \q / Quitter le conteneur : exit


Un réseau Docker mynetwork est utilisé pour isoler et sécuriser la communication entre les services.

Le volume dbdata permet de conserver les données PostgreSQL même après un arrêt des conteneurs.


## Pour nettoyer les conteneurs et volumes
sudo docker-compose down -v
