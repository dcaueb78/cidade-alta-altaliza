const formatExpirationDate = (quantityOfDays: string) => {
  switch (quantityOfDays) {
    case 'oneDayPrice': {
      const today = new Date(Date.now() + (3600 * 1000 * 24));
      return today.toLocaleDateString();
    }
    case 'sevenDaysPrice': {
      const today = new Date(Date.now() + (3600 * 1000 * (24 * 7)));
      return today.toLocaleDateString();
    }
    case 'fifteenDaysPrice': {
      const today = new Date(Date.now() + (3600 * 1000 * (24 * 15)));
      return today.toLocaleDateString();
    }
    default: {
      const today = new Date(Date.now() + (3600 * 1000 * 24));
      return today.toLocaleDateString();
    }
  }
};

export default formatExpirationDate;
