import { v4 as uuid } from "uuid";
import { connect, disconnect, getDbConnection } from "../db-utils.js";

export async function setupTestDatabase() {
  await connect(process.env.MONGO_URL, "test-db-" + uuid());
}

export async function tearDownTestDatabase() {
  await getDbConnection().dropDatabase();
  await disconnect();
}

export async function clearDatabase() {
  const connection = getDbConnection();
  const collections = await connection.collections();
  await Promise.all(
    collections.map((collection) =>
      connection.collection(collection.collectionName).deleteMany({})
    )
  );
}
