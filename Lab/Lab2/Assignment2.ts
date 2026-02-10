type Status = "loading" | "success" | "error";

function calculateTax(price: number, taxRate?: number): number {
  const rate = taxRate ?? 0.1; 
  const tax = price * rate;
  
  console.log(
    `Price: $${price}, Tax Rate: ${rate * 100}%, Tax: $${tax}`
  );
  return price + tax;
}

function renderStatus(status: Status): string {
  switch (status) {
    case "loading":
      return "Your request is being processed.";
    case "success":
      return "Your request was successful!";
    case "error":
      return "There was an error processing your request.";
  }
}

console.log("Tax");
calculateTax(100);
calculateTax(100, 0.15);
calculateTax(50, 0.08);

console.log("\nStatus");
console.log(renderStatus("loading"));
console.log(renderStatus("success"));
console.log(renderStatus("error"));
