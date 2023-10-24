import groupElementsByDate from "./groupElementsByDate";

describe("groupElementsByDate", () => {
  let transactions = [
    {
      id: 1,
      date: new Date("2022-01-01"),
      amount: 100,
    },
    {
      id: 2,
      date: new Date("2022-01-02"),
      amount: 200,
    },
    {
      id: 3,
      date: new Date("2022-02-01"),
      amount: 300,
    },
    {
      id: 4,
      date: new Date("2022-02-02"),
      amount: 400,
    },
    {
      id: 5,
      date: new Date("2021-12-31"),
      amount: 500,
    },
  ];

  it("groups transactions by year and month", () => {
    const result = [
      {
        key: "2022-0",
        year: 2022,
        month: 0,
        fullMonthName: "January",
        transactions: [
          { id: 1, amount: 100, day: 6 },
          { id: 2, amount: 200, day: 0 },
        ],
      },
      {
        key: "2022-1",
        year: 2022,
        month: 1,
        fullMonthName: "February",
        transactions: [
          { id: 3, amount: 300, day: 2 },
          { id: 4, amount: 400, day: 3 },
        ],
      },
      {
        key: "2021-11",
        year: 2021,
        fullMonthName: "December",
        month: 11,
        transactions: [{ id: 5, amount: 500, day: 5 }],
      },
    ];
    expect(groupElementsByDate(transactions)).toEqual(result);
  });

  it("returns an empty array for empty input", () => {
    expect(groupElementsByDate([])).toEqual([]);
  });

  it("groups transactions with same year and month correctly", () => {
    transactions = [
      {
        id: 1,
        date: new Date("2022-01-01"),
        amount: 100,
      },
      {
        id: 2,
        date: new Date("2022-01-02"),
        amount: 200,
      },
      {
        id: 3,
        date: new Date("2022-01-03"),
        amount: 300,
      },
    ];
    const result = [
      {
        key: "2022-0",
        year: 2022,
        month: 0,
        fullMonthName: "January",
        transactions: [
          { id: 1, amount: 100, day: 6 },
          { id: 2, amount: 200, day: 0 },
          { id: 3, amount: 300, day: 1 },
        ],
      },
    ];
    expect(groupElementsByDate(transactions)).toEqual(result);
  });
});
