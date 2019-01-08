export function formatNumber(number, digit) {
  if (number) {
    const formattedNumber = number.toFixed(digit);
    return formattedNumber;
  } else {
    return number
  }
}