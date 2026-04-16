import { formatCurrency } from "../../../scripts/utils/money.js";


const price = formatCurrency(2095);

if (price === "20.95") {
  console.log("Test passed: formatCurrency correctly formats 2095 to 20.95");
} else {
  console.error(`Test failed: formatCurrency(2095) returned ${price} instead of "20.95"`);
}

if (formatCurrency(0) === "0.00") {
  console.log("Test passed: formatCurrency correctly formats 0 to 0.00");
} else {
  console.error(`Test failed: formatCurrency(0) returned ${formatCurrency(0)} instead of "0.00"`);
}

if (formatCurrency(2000.5) === "20.01") {
  console.log("Test passed: formatCurrency correctly formats 2000.5 to 20.01");
} else {
  console.error(`Test failed: formatCurrency(2000.5) returned ${formatCurrency(2000.5)} instead of "20.01"`);
}