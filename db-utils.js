import mongodb from "mongodb";

const DB_URL = process.env.MONGO_URL;
const DB_NAME = process.env.MONGO_DB_NAME || "dev-db";

/** @type {import("mongodb").MongoClient} */
let client;
let dbName;

export async function connect(url = DB_URL, databaseName = DB_NAME) {
  client = new mongodb.MongoClient(url, {
    poolSize: parseInt(process.env.MONGO_POOL_SIZE || "5", 10),
    useUnifiedTopology: true,
  });
  dbName = databaseName;
  await client.connect();
}

export async function disconnect() {
  if (client?.isConnected()) {
    await client.close();
  }
}

export function getDbConnection() {
  if (client?.isConnected()) {
    return client.db(dbName);
  } else {
    throw new Error("Database not connected");
  }
}
