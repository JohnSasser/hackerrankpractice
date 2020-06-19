"use strict";
// PRACTICE # 2 HACKER-RANK

console.log("meal percentages");

let meal_cost = 12.0;
let tip_percent = 20;
let tax_percent = 8;

function solve(meal_cost, tip_percent, tax_percent) {
  let tipPercent = (meal_cost * tip_percent) / 100;
  console.log(tipPercent);
  let taxPercent = (meal_cost * tax_percent) / 100;
  console.log(taxPercent);
  let totalCost = meal_cost + tipPercent + taxPercent;

  Math.round(totalCost);

  console.log(`total cost: ${Math.round(totalCost)}`);
  return Math.round(totalCost);
}

solve(meal_cost, tip_percent, tax_percent);
