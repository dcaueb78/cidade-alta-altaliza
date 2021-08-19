const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

const formattedCurrency = (value:number): string => value.toLocaleString('pt-BR', format);

export default formattedCurrency;
