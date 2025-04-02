export function formatCardNumber(cardNumber: string): string {
  let value = cardNumber.replace(/\D/g, "");

  if (value.length > 4) {
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  return value;
}

export function formatExpiryDate(expiryDate: string): string {
  let value = expiryDate.replace(/\D/g, "");

  if (value.length > 2) {
    value = value.replace(/(\d{2})(?=\d)/, "$1/");
  }

  return value;
}

export function formatCVC(cvc: string): string {
  return cvc.replace(/\D/g, "");
}