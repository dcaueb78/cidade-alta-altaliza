export interface ICarInfos {
  name: string,
  category: string,
  imageURL: string,
  bagQuantity: number,
  slotsQuantity: number,
  oneDayPrice: number,
  sevenDaysPrice: number,
  fifteenDaysPrice: number,
  id: number,
  moneyType: string,
  selectedRent: string,
  stock: number,
}

const selectColor = (stock: number, moneyType: string) => {
  if (stock === 0) {
    return 'yellow';
  } if (moneyType === 'dollar') {
    return '#3CE368';
  }
  return undefined;
};

export default selectColor;
