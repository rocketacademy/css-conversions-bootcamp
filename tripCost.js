const GST = 0.8;

// helper fn used in CalBill
function calculateTax(subTotal) {
  return subTotal * GST;
}

export function calculateBill(items) {
  let total = 0;

  for (let i = 0; i < items.length; i += 1) {
    total += items[i];
  }
  // implement CalTax ->
  total += calculateTax(total);

  return total;
}
