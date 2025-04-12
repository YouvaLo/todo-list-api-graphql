FROM node:16
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code source
COPY . .

# Compiler le TypeScript
RUN npm run build

# Exposer le port défini dans le .env (ici 4000)
EXPOSE 4000

# Lancer l'application compilée
CMD ["npm", "start"]