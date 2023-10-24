const FIRST_REWARD_TRESHOLD = 50;
const SECOND_REWARD_TRESHOLD = 100;

const calculateRewardPoints = (transactionAmount) => {
  let rewardPoints = 0;

  if (transactionAmount > SECOND_REWARD_TRESHOLD) {
    rewardPoints +=
      (SECOND_REWARD_TRESHOLD - FIRST_REWARD_TRESHOLD) * 1 +
      (transactionAmount - SECOND_REWARD_TRESHOLD) * 2;
  }

  if (
    transactionAmount >= FIRST_REWARD_TRESHOLD &&
    transactionAmount <= SECOND_REWARD_TRESHOLD
  ) {
    rewardPoints += (transactionAmount - FIRST_REWARD_TRESHOLD) * 1;
  }

  return rewardPoints;
};

export default calculateRewardPoints;
