const buttons = document.querySelectorAll(".btn");
const tip = document.querySelector(".tip-number");
const total = document.querySelector(".tip-total");
const custom = document.querySelector(".custom");

const resetButton = document.querySelector(".btn-reset");



buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        buttons.forEach(button => {             //Function to remove class "active" from button when we select a new one
            if(button.className === "btn active") {
                button.classList.remove("active");
            }
        })
        e.target.classList.add("active");
        resetButton.classList.add("active");
        let percent = parseInt(e.target.id);
        let numPeople = document.querySelector("#number-people").value;
        let price = document.querySelector("#price").value;
        let totalTip = getTotalTip(percent, price, numPeople);
        let tipPerson = tipPerPerson(percent, price, numPeople);
        total.textContent = totalTip.toFixed(2);
        tip.textContent = tipPerson.toFixed(2);
    })
})

custom.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        buttons.forEach(button => {             //Function to remove class "active" from button when we select a new one
            if(button.className === "btn active") {
                button.classList.remove("active");
            }
        })
        resetButton.classList.add("active");
        let percent = parseInt(e.target.value);
        let numPeople = document.querySelector("#number-people").value;
        let price = document.querySelector("#price").value;
        let totalTip = getTotalTip(percent, price, numPeople);
        let tipPerson = tipPerPerson(percent, price, numPeople);
        total.textContent = totalTip.toFixed(2);
        tip.textContent = tipPerson.toFixed(2);
    }
})

resetButton.addEventListener("click", () => {
    tip.textContent = "0.00";
    total.textContent = "0.00";
    resetButton.classList.remove("active");
    buttons.forEach(button => {             //Function to remove class "active" from button when we select a new one
        if(button.className === "btn active") {
            button.classList.remove("active");
        }
    })
    custom.value = "";
    document.querySelector("#number-people").value = "";
    document.querySelector("#price").value = "";
})

function getTotalTip(x, y, z) {
    let percent = (x / 100) * y; //Returns the percent total;
    let result = parseInt(y) + parseInt(percent);
    return result / z;
}

function tipPerPerson(x, y, z) {
    let percent = (x / 100) * y; //Returns the percent total;
    let result = percent / z;
    return result;
}
