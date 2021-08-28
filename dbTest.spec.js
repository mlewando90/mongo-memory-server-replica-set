import { getDbConnection } from "./db-utils.js";
import {
  clearDatabase,
  setupTestDatabase,
  tearDownTestDatabase,
} from "./test/test-db.js";

beforeAll(() => setupTestDatabase());
afterAll(() => tearDownTestDatabase());
beforeEach(() => clearDatabase());

it("should insert some data", async () => {
  await getDbConnection()
    .collection("test")
    .insertMany([{ name: "itemA" }, { name: "itemB" }]);

  await expect(
    getDbConnection().collection("test").find({}).toArray()
  ).resolves.toEqual([
    { _id: expect.anything(), name: "itemA" },
    { _id: expect.anything(), name: "itemB" },
  ]);
});
