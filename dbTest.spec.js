import { getDbConnection } from "./db-utils";
import {
  clearDatabase,
  setupTestDatabase,
  tearDownTestDatabase,
} from "./test/test-db";

beforeAll(() => setupTestDatabase());
afterAll(() => tearDownTestDatabase());
beforeEach(() => clearDatabase());

it("should insert some data", async () => {
  await getDbConnection()
    .collection("test")
    .insertMany([{ name: "itemA" }, { name: "itemB" }]);

  await expect(getDbConnection().collection("test").find({})).resolves.toEqual([
    { _id: expect.any(), name: "itemA" },
    { _id: expect.any(), name: "itemb" },
  ]);
});
