export const formatCartDays = (quantityOfDays: string):string => {
  switch (quantityOfDays) {
    case 'oneDayPrice':
      return '1 Dia';
    case 'sevenDaysPrice':
      return '7 Dias';
    case 'fifteenDaysPrice':
      return '15 Dias';
    default:
      return '1 Dia';
  }
};

export const formatCartPrice = (selectedRent: string, oneDayPrice: string,
  sevenDaysPrice: string, fifteenDaysPrice: string):string => {
  switch (selectedRent) {
    case 'oneDayPrice':
      return oneDayPrice;
    case 'sevenDaysPrice':
      return sevenDaysPrice;
    case 'fifteenDaysPrice':
      return fifteenDaysPrice;
    default:
      return oneDayPrice;
  }
};
