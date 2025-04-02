export const CARD_NUMBER_REGEX = /^\d{4} \d{4} \d{4} \d{4}$/;
export const EXPIRY_DATE_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
export const CVC_REGEX = /^\d{3,4}$/;

/**
 * Checks whether a given string is empty or contains only whitespace.
 *
 * @param {string} value - The string to check.
 * @returns {boolean} Returns true if the string is empty or consists only of whitespace.
 */
const isEmpty = (value: string): boolean => !value || value.trim() === "";

/**
 * Determines if the provided string contains any alphabetical letters.
 *
 * @param {string} value - The string to check.
 * @returns {boolean} Returns true if the string contains at least one letter.
 */
const containsLetters = (value: string): boolean => /[a-zA-Z]/.test(value);

/**
 * Validates a credit card number.
 *
 * The card number must follow the format "XXXX XXXX XXXX XXXX", where each X is a digit.
 * The function returns true if the card number is valid; otherwise, it returns a string
 * key corresponding to the error type.
 *
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {true | string} Returns true if valid, or an error key string if invalid.
 */
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

/**
 * Validates an expiry date for a credit card.
 *
 * The expiry date must be in the format "MM/YY", where MM is the month (01-12) and YY is the two-digit year.
 * The function also checks if the date is not expired.
 * Returns true if the expiry date is valid and not expired; otherwise, returns a string key corresponding to the error.
 *
 * @param {string} expiryDate - The expiry date to validate.
 * @returns {true | string} Returns true if valid, or an error key string if invalid.
 */
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

/**
 * Validates a credit card CVC (Card Verification Code).
 *
 * The CVC must consist of 3 or 4 digits only. The function returns true if the CVC is valid;
 * otherwise, it returns a string key corresponding to the error type.
 *
 * @param {string} cvc - The CVC to validate.
 * @returns {true | string} Returns true if valid, or an error key string if invalid.
 */
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
