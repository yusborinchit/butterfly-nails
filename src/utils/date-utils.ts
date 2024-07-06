export function createCurrentDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

export function parseDate(date: Date) {
  return date.getUTCDate().toLocaleString("es-UY");
}
