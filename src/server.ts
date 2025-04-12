import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs from './schemas';
import resolvers from './resolvers';
import sequelize from './config/sequelize';

dotenv.config();

const port = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("La base de données est synchronisée.");

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({
        
      })
    });

    const { url } = await server.listen({ port: Number(port) });
    console.log(`🚀 Serveur GraphQL prêt à l'adresse ${url}`);
  } catch (error) {
    console.error("Erreur lors de l'initialisation :", error);
  }
})();