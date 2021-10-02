export function add(a, b) {

  return (Number(a) + Number(b));
}

// export function kilometersToMiles(kilometers) {
//   // ...
// }

// export function celciusToFahrenheit(temperatureCelcius) {
//   // ...
// }

// export function kilogramsToPounds(kilograms) {
//   // ...
// }

// Omit curly braces for default imports. Each module can only have 1 default export, and default exports do not need to be imported with any specific name. Default exports are typically used when a module only needs to export 1 function. In other situations we prefer named exports for clarity of what is exported and imported.

export const fruits = ['banana', 'payaya'];

// Import All (*)
// If there are a lot of named exports to import, sometimes we can use * to import all named exports from a given module. This is not recommended because it reduces clarity on what we are importing and what specific imported variables we plan to use.

