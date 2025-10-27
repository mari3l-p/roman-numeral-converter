const numberInput = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

convertBtn.addEventListener('click', () => {
    output.classList.remove("hidden")

    if (!numberInput.value) {
        output.innerText = "Please enter a valid number";
        return;
    } 
    if (numberInput.value <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1"
        return;
    } 
    if (numberInput.value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999"
        return;
    }

    let x = numberInput.value;
    
    const romans = [
        {number: 1000, letter: "M"},
        {number: 900, letter: "CM"},
        {number: 500, letter: "D"},
        {number: 400, letter: "CD"},
        {number: 100, letter: "C"},
        {number: 90, letter: "XC"},
        {number: 50, letter: "L"},
        {number: 40, letter: "XL"},
        {number: 10, letter: "X"},
        {number: 9, letter: "IX"},
        {number: 5, letter: "V"},
        {number: 4, letter: "IV"},
        {number: 1, letter: "I"},

    ]

    output.innerText = ""

    for (const num of romans) {
         if (x >= num.number) {
            let resultOfDiv = Math.floor(x / num.number)
            while (resultOfDiv > 0) {
                output.innerText += num.letter
                x -= num.number
                resultOfDiv--
            }
        }
    }
})