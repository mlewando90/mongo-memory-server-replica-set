import { MongoMemoryReplSet } from "mongodb-memory-server";

export default async function globalSetup() {
  const mongoServer = await MongoMemoryReplSet.create({
    replSet: { count: 3, storageEngine: "wiredTiger" },
  });
  const mongoUri = mongoServer.getUri();
  process.env.MONGO_URL = mongoUri.slice(0, mongoUri.lastIndexOf("/"));
  console.log("\nmongo started", { mongoUri });
  global.__MONGOD__ = mongoServer;
}
