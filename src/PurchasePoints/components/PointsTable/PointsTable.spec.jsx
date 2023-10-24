import { render } from "@testing-library/react";
import PointsTable from "./PointsTable";
import { calculateRewardForGivenTransactions } from "../../logic/calculateRewardForGivenCollection/calculateRewardForGivenCollection";
import calculateRewardPoints from "../../logic/calculateRewardPoints/calculateRewardPoints";

const data = [
  {
    key: "2022-0",
    year: 2022,
    month: 0,
    fullMonthName: "January",
    transactions: [
      { id: "abcfge", amount: 100, day: 6 },
      { id: "abcfge1", amount: 200, day: 0 },
      { id: "abcfge2", amount: 300, day: 1 },
    ],
  },
];

describe("PointsTable", () => {
  it("should display total points for last month", () => {
    const { getByText } = render(<PointsTable points={data[0]} />);
    const totalPoints = calculateRewardForGivenTransactions(data[0]);
    expect(
      getByText(`Total points for January: ${totalPoints}`),
    ).toBeInTheDocument();
  });

  it("should display communcat if there is no data to make some calculations", () => {
    const { getByText } = render(<PointsTable points={{}} />);
    expect(
      getByText(/There is no transactions in provided month/i),
    ).toBeInTheDocument();
  });

  it("should display table headers", () => {
    const { getByText } = render(<PointsTable points={data[0]} />);
    expect(getByText("Id")).toBeInTheDocument();
    expect(getByText("Day")).toBeInTheDocument();
    expect(getByText("Money amount")).toBeInTheDocument();
    expect(getByText("Points")).toBeInTheDocument();
  });

  it("should display table rows with correct data", () => {
    const { getByText } = render(<PointsTable points={data[0]} />);
    data[0].transactions.forEach((transaction) => {
      expect(getByText(transaction.id.toString())).toBeInTheDocument();
      expect(getByText((transaction.day + 1).toString())).toBeInTheDocument();
      expect(getByText(transaction.amount.toString())).toBeInTheDocument();
      expect(
        getByText(calculateRewardPoints(transaction.amount).toString()),
      ).toBeInTheDocument();
    });
  });
});
