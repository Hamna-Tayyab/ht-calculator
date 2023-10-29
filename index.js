#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold("Welcome to Calculator"));
let input = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter first number:",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter second number:",
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"]
    }
]);
if (input.operator === "Addition") {
    console.log("Addition of two numbers is", Number(input.num1) + Number(input.num2));
}
if (input.operator === "Subtraction") {
    console.log("Subtraction of two numbers is", Number(input.num1) - Number(input.num2));
}
if (input.operator === "Division") {
    console.log("Divsion of two numbers is", Number(input.num1) / Number(input.num2));
}
if (input.operator === "Multiplication") {
    console.log("Multiplicayion of two numbers is", Number(input.num1) * Number(input.num2));
}
