import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { PURCHASE_COLLECTIONS } from "../api/endpoints/endpoints";

const generateRandomDate = () => {
  return faker.date
    .betweens("2023-01-01T00:00:00.000Z", "2023-04-01T00:00:00.000Z", 90)
    .map((el) => ({
      date: el,
      amount: faker.datatype.number({ min: 100, max: 1000 }),
      id: faker.datatype.uuid(),
    }));
};

export const fetchTasksIncompleteTaskResponse = rest.get(
  PURCHASE_COLLECTIONS,
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateRandomDate()));
  },
);

export const handlers = [fetchTasksIncompleteTaskResponse];
