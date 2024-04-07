#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,     // Base Currency
    EUR:0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277.54
};

let userInput = await inquirer.prompt([
    {
        name: "Currency1",
        type: "list",
        message: "Select currency you want to convert",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter your amount"
    },
    {
        name: "Currency2",
        type: "list",
        message: "Select currency you want to convert in",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]        
    }
]);

let currency1 = currency[userInput.Currency1];
let currency2 = currency[userInput.Currency2];
let amount = userInput.Amount;
let baseAmount = amount / currency1;
let convertedAmount = baseAmount * currency2;

console.log(convertedAmount.toFixed(2));