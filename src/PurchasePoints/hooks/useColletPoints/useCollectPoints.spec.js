import { renderHook, act, waitFor } from "@testing-library/react";
import useCollectPoints, { STATUSES } from "./useCollectPoints";
import { fetchPointsCollection } from "../../api/services/services";
import groupElementsByDate from "../../logic/groupElementsByDate/groupElementsByDate";

jest.mock("../../api/services/services");
jest.mock("../../logic/groupElementsByDate/groupElementsByDate");

describe("useCollectPoints", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should set the initial status to loading", async () => {
    const { result } = renderHook(() => useCollectPoints());
    await waitFor(() => {
      expect(result.current.data).toEqual({ status: STATUSES.isLoading });
    });
  });

  it("should set the status to completed and group the data by date on successful API call", async () => {
    const mockData = [
      { id: 1, date: "2022-01-01" },
      { id: 2, date: "2022-01-01" },
    ];
    let render;

    fetchPointsCollection.mockResolvedValue(mockData);
    groupElementsByDate.mockReturnValue({ "2022-01-01": mockData });
    await act(() => {
      render = renderHook(() => useCollectPoints());
    });
    const { result } = render;

    expect(result.current.data).toEqual({
      status: STATUSES.completed,
      data: { "2022-01-01": mockData },
    });
  });

  it("should set the status to error on failed API call", async () => {
    let render;

    const mockError = new Error("Something went wrong");
    fetchPointsCollection.mockRejectedValue(mockError);
    await act(() => {
      render = renderHook(() => useCollectPoints());
    });
    const { result } = render;

    expect(result.current.data).toEqual({
      status: STATUSES.error,
      data: mockError,
    });
  });
});
