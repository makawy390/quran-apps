       const numbers = `٠١٢٣٤٥٦٧٨٩`;
export const convert = (num) => {
    let res = "";
    const str = num.toString();
    for (let c of str) {
      res += numbers.charAt(c);
    }
    return res;
  };