export function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return (Math.round(value * 100) / 100).toFixed(2); // máximo 2 decimales
  }
  return value; // si ya es string, lo devuelve tal cual
}
