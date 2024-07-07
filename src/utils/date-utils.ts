export function parseStringToDate(string: string) {
  const [day, month, year] = string.split("-");
  return `${year}/${month}/${day}`;
}

export function parseDateToString(date: Date) {
  return date.toLocaleDateString("es-UY", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
