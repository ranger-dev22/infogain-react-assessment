/* eslint-disable no-param-reassign */
import calculateRewardPoints from "../calculateRewardPoints/calculateRewardPoints";

export const calculateRewardForGivenTransactions = (collection) =>
  collection?.transactions.length > 0
    ? collection.transactions.reduce((points, purchase) => {
        points += calculateRewardPoints(purchase.amount);
        return points;
      }, 0)
    : 0;

export const calculateRewardForGivenCollection = (collection) =>
  collection?.length > 0
    ? collection.reduce((acc, el) => {
        acc += calculateRewardForGivenTransactions(el);
        return acc;
      }, 0)
    : 0;
