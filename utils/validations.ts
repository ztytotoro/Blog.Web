export function validateEmail(value: string) {
  return /[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.(com|cn|net|org)/.test(value)
    ? ''
    : 'Incorrect email format';
}
