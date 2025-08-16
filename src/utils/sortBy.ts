export default (arr: any[], order: any[], key: string) => {
  return arr.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));
};
