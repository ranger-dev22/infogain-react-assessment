import { render, screen } from "@testing-library/react";
import PointsListView from "./PointsListView";
import { STATUSES } from "../../hooks/useColletPoints/useCollectPoints";

let mockUseCollectPoints = {
  data: {
    data: [
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
    ],
    status: STATUSES.completed,
  },
};

jest.mock("../../hooks/useColletPoints/useCollectPoints", () => ({
  ...jest.requireActual("../../hooks/useColletPoints/useCollectPoints"),
  __esModule: true,
  default: () => mockUseCollectPoints,
}));

describe("PointsListView", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("renders the total points and points table", () => {
    render(<PointsListView />);
    const totalPointsElement = screen.getByText(/Total points for January:/);
    const pointsTableElement = screen.getByRole("table");
    expect(totalPointsElement).toBeInTheDocument();
    expect(pointsTableElement).toBeInTheDocument();
  });

  it("should display error message when fetching data fails", async () => {
    mockUseCollectPoints = {
      data: {
        status: STATUSES.error,
      },
    };
    render(<PointsListView />);
    expect(
      await screen.findByText(/Something went wrong/i),
    ).toBeInTheDocument();
  });

  it("should display loader", () => {
    mockUseCollectPoints = {
      data: {
        status: STATUSES.isLoading,
      },
    };
    render(<PointsListView />);
    const progressBar = screen.getAllByRole("progressbar");
    expect(progressBar.length).toBeGreaterThan(0);
  });
});
