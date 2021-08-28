import { MongoClient } from "mongodb";

const DB_URL = process.env.MONGO_URL;
const DB_NAME = process.env.MONGO_DB_NAME || "dev-db";

/** @type {import("mongodb").MongoClient} */
let client;
let dbName;

export async function connect(url = DB_URL, databaseName = DB_NAME) {
  client = new MongoClient(url, { useUnifiedTopology: true });
  dbName = databaseName;
  await client.connect();
}

export async function disconnect() {
  await client?.close();
}

export function getDbConnection() {
  return client?.db(dbName);
}
