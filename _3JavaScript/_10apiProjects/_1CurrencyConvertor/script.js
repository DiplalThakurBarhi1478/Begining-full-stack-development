const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const changeOf = document.querySelector(".amount input")


// Learning 1
for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";

            // Learning 2
        }else if(select.name === "to" && currCode === "NPR"){
            newOption.selected = "selected";
        }
    }

    // Learning 3
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target); // use pass the event target to pass the whatever is the change
    })

}


const updateFlag = (element) => {
    let currCode = element.value;
    // we will use API of flag 

    // Learning 4
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amt = document.querySelector(".amount input");
    let amtVal = amt.value;

    if(amtVal < 1 || amtVal === ""){
        amtVal = 1;
        amt.value = "1";
    }

    // Learning 5
    // console.log(fromCurrency.value);
    const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    let changedVal = changeOf.value * rate;
    updateMsg(changeOf.value, changedVal);
})


// Learning 6
const updateMsg = (fromCurrValue, toCurrValue) => {
    let msg = document.querySelector(".msg");
    msg.innerText = `${fromCurrValue} ${fromCurrency.value} = ${toCurrValue} ${toCurrency.value}`;
}   