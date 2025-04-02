export const CARD_NUMBER_REGEX = /^\d{4} \d{4} \d{4} \d{4}$/;
export const EXPIRY_DATE_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
export const CVC_REGEX = /^\d{3,4}$/;

const isEmpty = (value: string): boolean => !value || value.trim() === "";
const containsLetters = (value: string): boolean => /[a-zA-Z]/.test(value);

export function validateCardNumber(cardNumber: string): true | string {
  if (isEmpty(cardNumber)) {
    return "validation.cardEmpty";
  }

  if (cardNumber.replace(/\s/g, '').length !== 16) {
    return "validation.cardLength";
  }

  if (containsLetters(cardNumber)) {
    return "validation.cardDigitsOnly";
  }

  if (!CARD_NUMBER_REGEX.test(cardNumber)) {
    return "validation.cardInvalidFormat";
  }

  return true;
}

export function validateExpiryDate(expiryDate: string): true | string {
  if (isEmpty(expiryDate)) {
    return "validation.expiryEmpty";
  }

  const dateValues = expiryDate.split("/");

  if (dateValues.length !== 2) {
    return "validation.expiryTwoNumbers";
  }

  if (containsLetters(expiryDate)) {
    return "validation.expiryDigitsOnly";
  }

  if (+dateValues[0] > 12) {
    return "validation.expiryMonthLimit";
  }

  if (!EXPIRY_DATE_REGEX.test(expiryDate)) {
    return "validation.expiryInvalidFormat";
  }

  const [month, year] = expiryDate.split('/').map(Number);
  const expiryYear = 2000 + year;
  const expiryDateObj = new Date(expiryYear, month - 1);
  const currentDate = new Date();

  if (expiryDateObj < currentDate) {
    return "validation.cardExpired";
  }

  return true;
}

export function validateCVC(cvc: string): true | string {
  if (isEmpty(cvc)) {
    return "validation.cvcEmpty";
  }

  if (containsLetters(cvc)) {
    return "validation.cvcDigitsOnly";
  }

  if (cvc.length !== 3 && cvc.length !== 4) {
    return "validation.cvcLength";
  }

  if (!CVC_REGEX.test(cvc)) {
    return "validation.cvcInvalidFormat";
  }

  return true;
}
