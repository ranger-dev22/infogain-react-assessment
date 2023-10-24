import { calculateRewardForGivenCollection } from "./calculateRewardForGivenCollection";

describe("calculateRewardForGivenCollection", () => {
  test("should return 0 for an empty array", () => {
    expect(calculateRewardForGivenCollection([])).toBe(0);
  });

  test("should return the correct reward points for a single transaction", () => {
    const collection = [
      {
        key: "2022-0",
        year: 2022,
        month: 0,
        transactions: [{ id: 1, amount: 150 }],
      },
    ];
    expect(calculateRewardForGivenCollection(collection)).toBe(150);
  });

  test("should return the correct reward points for now transactions", () => {
    const collection = [
      {
        key: "2022-0",
        year: 2022,
        month: 0,
        transactions: [],
      },
    ];
    expect(calculateRewardForGivenCollection(collection)).toBe(0);
  });

  test("should return the correct reward points for multiple transactions in one month", () => {
    const collection = [
      {
        key: "2022-0",
        year: 2022,
        month: 0,
        transactions: [
          { id: 1, amount: 100 },
          { id: 2, amount: 200 },
        ],
      },
    ];
    expect(calculateRewardForGivenCollection(collection)).toBe(300);
  });

  test("should return the correct reward points for multiple transactions in multiple months", () => {
    const collection = [
      {
        key: "2022-0",
        year: 2022,
        month: 0,
        transactions: [
          { id: 1, amount: 100 },
          { id: 2, amount: 200 },
        ],
      },
      {
        key: "2022-1",
        year: 2022,
        month: 1,
        transactions: [
          { id: 3, amount: 300 },
          { id: 4, amount: 400 },
        ],
      },
      {
        key: "2021-11",
        year: 2021,
        month: 11,
        transactions: [{ id: 5, amount: 500 }],
      },
    ];
    expect(calculateRewardForGivenCollection(collection)).toBe(2250);
  });
});
