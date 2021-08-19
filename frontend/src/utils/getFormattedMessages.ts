import formattedCurrency from './getFormattedCurrency';

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

export const formatCartPrice = (selectedRent: string, oneDayPrice: number,
  sevenDaysPrice: number, fifteenDaysPrice: number):string => {
  switch (selectedRent) {
    case 'oneDayPrice':
      return formattedCurrency(oneDayPrice);
    case 'sevenDaysPrice':
      return formattedCurrency(sevenDaysPrice);
    case 'fifteenDaysPrice':
      return formattedCurrency(fifteenDaysPrice);
    default:
      return formattedCurrency(oneDayPrice);
  }
};
