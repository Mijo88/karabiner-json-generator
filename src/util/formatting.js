export function title(str) {
  return str
    .replace(/_/g, ' ')
    .split(' ')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(' ');
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).replace(/_/g, ' ');
}
