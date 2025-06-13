# Fullstack App Dockerisée

Ce projet est une application fullstack conteneurisée avec Docker et orchestrée avec **Docker Compose**. Il comprend :

- Un **frontend** accessible sur le port 3000
- Un **backend** sur le port 5000
- Une base de données **PostgreSQL** 

---
## Structure du projet

```bash
my-fullstack-app/
│
├── frontend/          # Code source du frontend
├── backend/           # Code source du backend
├── docker-compose.yml
└── README.md

## Démarrage

1. Cloner le repo :
```bash
git clone https://github.com/Oursontenebreux03/docker_projet
cd docker_projet


Accéder à l'application
Frontend : http://localhost:3000
Backend : http://localhost:5000
Postgre : docker exec -it my-fullstack-app-db-1 bash  / psql -U postgres -d mydb / \dt  (lister les tables) / \q / Quitter le conteneur : exit

