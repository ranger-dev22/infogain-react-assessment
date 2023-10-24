const getDatesComponents = (date) => ({
  month: date.getMonth(),
  fullMonthName: date.toLocaleString("en", { month: "long" }),
  year: date.getFullYear(),
  day: date.getDay(),
});

const groupElementsByDate = (arr) =>
  arr.reduce((acc, curr) => {
    const { month, fullMonthName, year, day } = getDatesComponents(curr.date);
    const key = `${year}-${month}`;
    const obj = acc.find((el) => el.key === key);
    if (obj) {
      obj.transactions.push({ id: curr.id, amount: curr.amount, day });
    } else {
      acc.push({
        key,
        year,
        month,
        fullMonthName,
        transactions: [{ id: curr.id, amount: curr.amount, day }],
      });
    }
    return acc;
  }, []);

export default groupElementsByDate;
