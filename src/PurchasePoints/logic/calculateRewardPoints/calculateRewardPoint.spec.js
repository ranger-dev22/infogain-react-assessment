import calculateRewardPoints from "./calculateRewardPoints";

describe("calculateRewardPoints", () => {
  it("returns 0 for transaction amount less than 50", () => {
    expect(calculateRewardPoints(40)).toEqual(0);
  });

  it("calculates reward points for transaction amount between 50 and 100", () => {
    expect(calculateRewardPoints(50)).toEqual(0);
    expect(calculateRewardPoints(70)).toEqual(20);
    expect(calculateRewardPoints(100)).toEqual(50);
  });

  it("calculates reward points for transaction amount greater than 100", () => {
    expect(calculateRewardPoints(120)).toEqual(90);
    expect(calculateRewardPoints(150)).toEqual(150);
  });
});
