let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
let answer = 0

// Your Code Here

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}

for(let i = 0; i < annualExpenseQuestions.length; i++){
    answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}