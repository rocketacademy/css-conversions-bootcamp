export function kilometersToMiles(distanceInKm) {
  const distanceInMiles = Number(distanceInKm) * 0.62;
  return distanceInMiles;
}

export function celciusToFahrenheit(TemperatureinCelsius) {
  const TemperatureinFahrenheit = Number(TemperatureinCelsius * 1.8) + 32;
  return TemperatureinFahrenheit;
}

export function kilogramsToPounds(kilograms) {
  const KTP = kilograms * 2.20462;
  return KTP;
}
