export const mapPurchaseDateStringToDate = (collection) =>
  collection.map((el) => ({ ...el, date: new Date(el.date) }));
