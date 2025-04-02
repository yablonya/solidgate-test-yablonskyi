/**
 * Formats a credit card number by removing all non-digit characters
 * and inserting a space after every 4 digits if applicable.
 *
 * @param {string} cardNumber - The raw credit card number.
 * @returns {string} The formatted credit card number (e.g., "1234 5678 9012 3456").
 */
export function formatCardNumber(cardNumber: string): string {
  let value = cardNumber.replace(/\D/g, "");

  if (value.length > 4) {
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  return value;
}

/**
 * Formats an expiry date by removing all non-digit characters
 * and inserting a slash after the first two digits if applicable.
 *
 * @param {string} expiryDate - The raw expiry date.
 * @returns {string} The formatted expiry date (e.g., "12/34").
 */
export function formatExpiryDate(expiryDate: string): string {
  let value = expiryDate.replace(/\D/g, "");

  if (value.length > 2) {
    value = value.replace(/(\d{2})(?=\d)/, "$1/");
  }

  return value;
}

/**
 * Formats the CVC (Card Verification Code) by removing all non-digit characters.
 *
 * @param {string} cvc - The raw CVC input.
 * @returns {string} The formatted CVC containing only digits.
 */
export function formatCVC(cvc: string): string {
  return cvc.replace(/\D/g, "");
}
