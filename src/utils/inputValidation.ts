export const CARD_NUMBER_REGEX = /^\d{4} \d{4} \d{4} \d{4}$/;
export const EXPIRY_DATE_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
export const CVC_REGEX = /^\d{3,4}$/;

const isEmpty = (value: string): boolean => !value || value.trim() === "";
const containsLetters = (value: string): boolean => /[a-zA-Z]/.test(value);

export function validateCardNumber(cardNumber: string): true | string {
  if (isEmpty(cardNumber)) {
    return "Card number cannot be empty";
  }

  if (cardNumber.replace(/\s/g, '').length !== 16) {
    return "Card number must contain 16 characters";
  }

  if (containsLetters(cardNumber)) {
    return "Card number must contain digits only";
  }

  if (!CARD_NUMBER_REGEX.test(cardNumber)) {
    return "Invalid card number format";
  }

  return true;
}

export function validateExpiryDate(expiryDate: string): true | string {
  if (isEmpty(expiryDate)) {
    return "Expiry date cannot be empty";
  }

  const dateValues = expiryDate.split("/");

  if (dateValues.length !== 2) {
    return "Expiry date must contain two numbers(month and year)";
  }

  if (containsLetters(expiryDate)) {
    return "Expiry date must contain digits only";
  }

  if (+dateValues[0] > 12) {
    return "Month number cannot be more than 12";
  }

  if (!EXPIRY_DATE_REGEX.test(expiryDate)) {
    return "Invalid expiry date format (format MM/YY)";
  }

  const [month, year] = expiryDate.split('/').map(Number);
  const expiryYear = 2000 + year;
  const expiryDateObj = new Date(expiryYear, month - 1);
  const currentDate = new Date();

  if (expiryDateObj < currentDate) {
    return "Card is expired";
  }

  return true;
}

export function validateCVC(cvc: string): true | string {
  if (isEmpty(cvc)) {
    return "CVC cannot be empty";
  }

  if (containsLetters(cvc)) {
    return "CVC must contain digits only";
  }

  if (cvc.length !== 3 && cvc.length !== 4) {
    return "CVC must be 3 or 4 digits long";
  }

  if (!CVC_REGEX.test(cvc)) {
    return "Invalid CVC format";
  }

  return true;
}
