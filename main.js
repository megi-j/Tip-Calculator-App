let billAmount = document.querySelector("#bill")
let billAmountValue = parseInt(billAmount.value)

let buttons = document.querySelectorAll(".tip-box button");

let numberOfPeople = document.querySelector("#people")
let numberOfPeopleValue = parseInt(numberOfPeople.value)

let customInput = document.querySelector("#custom")
let customInputValue = parseInt(customInput.value)
let peopleBox = document.querySelector(".people-box")
let tipAmountPerPerson = document.querySelector(".tip-amount h2")
let totalAmountPerPerson = document.querySelector(".total h2")
let resetButton = document.querySelector(".result-info button")
let totalTip;
let tipPerPerson;
let totalBill;
let totalPerPerson;
let billBox = document.querySelector(".bill-box");
let hideLabel = document.querySelector(".hide-label");
let hideLabelCustom = document.querySelector(".hide-label-custom");
let hideLabelPeople = document.querySelector(".hide-label-people")
let buttonClicked = false;
let clickedButton;
//აქ ინფუთებზე როცა დაეკლილება , მნიშვნელობა გახდება სიცარიელე და მოწმდება სხვა ინფუთების მნიშვნელობები თუ 0-ზე მეტია მაშინ წითელი ვალიდაციის წარწერები ქრება, თუ არადა ჩნდება
billAmount.addEventListener("focus", function(){
    billAmount.value = "";
    resetButton.style.backgroundColor = "#26C2AE"

    hideLabel.style.display = "block"
    if(numberOfPeople.value > 0){
        hideLabelPeople.style.display = "none"
    }else{
        hideLabelPeople.style.display = "block"
    }
    if(customInput.value > 0 || buttonClicked){
        hideLabelCustom.style.display = "none"
    }else{
        hideLabelCustom.style.display = "block"
    }
})
    

numberOfPeople.addEventListener("focus", function(){
    numberOfPeople.value = "";
    
    hideLabelPeople.style.display = "block"
    if(billAmount.value > 0){
        hideLabel.style.display = "none"
    }else{
        hideLabel.style.display = "block"
    }
    if(customInput.value > 0 || buttonClicked){
        hideLabelCustom.style.display = "none"
    }else{
        hideLabelCustom.style.display = "block"
    }
})
customInput.addEventListener("focus", function(){
    hideLabel.style.display = "block"

    if(billAmount.value > 0){
        hideLabel.style.display = "none"
    }else{
        hideLabel.style.display = "block"
    }
    if(numberOfPeople.value > 0){
        hideLabelPeople.style.display = "none"
    }else{
        hideLabelPeople.style.display = "block"
    }
})

//აქ ღილაკებზე კლიკის დროს ვამოწმებ თუ ინფუთების value არის 0-ზე მეტი მაშინ ვალიდაციის წარწერები გაქრეს შესაბამისად 
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        buttonClicked = true;
        customInput.value = "";
        hideLabelCustom.style.display = "none";
        clickedButton = buttons[i];
        if(billAmount.value > 0){
            hideLabel.style.display = "none"
        }else{
            hideLabel.style.display = "block"
        }
        if(numberOfPeople.value > 0){
            hideLabelPeople.style.display = "none"
        }else{
            hideLabelPeople.style.display = "block"
        }
//აქ ვამოწმებ, ღილაკებზე კლიკის დროს. თუ bill-ის და people-ს გრაფა 0 ზე მეტია ანუ ჩაწერილია რაიმე რიცხვი მაგ შემთხვევაში დაიანგარიშოს და გამოიტანოს შედეგის მხარეს, თუ არადა ისევ 0-ები დატოვოს
        if(billAmount.value > 0 && numberOfPeople.value > 0){
            if(buttons[i].innerHTML === "5%"){
                countResult(5)    
            }else if(buttons[i].innerHTML == "10%"){
                countResult(10)
            }else if(buttons[i].innerHTML == "15%"){
                countResult(15)
            }else if(buttons[i].innerHTML == "20%"){
                countResult(25)
            }else if(buttons[i].innerHTML == "25%"){
                countResult(50)
            }
        }else{
            tipAmountPerPerson.innerHTML = "$0.00"
            totalAmountPerPerson.innerHTML = "$0.00"
        }            
    }) 
}
//აქ bill-ზე როცა მოხდება კლიკი თუ 0-ზე მაღალი რიცხვი ჩაიწერა ამოწმებს სხვა ველებში თუ არის ჩაწერილი და მაგის მიხედვით ითვლის შედეგებს, თუ რომელიმე არ არის ჩაწერილი მაშინ 00 ებს ტოვებს 
billAmount.addEventListener("input", function(e){
    e.preventDefault()
    billAmount.value = parseInt(e.target.value); 
    if(billAmount.value > 0){
       billAmount.style.color = "#00474B"
       billBox.style.border = "2px solid #26C2AE;"
       hideLabel.style.display = "none"
       if(customInput.value > 0 && numberOfPeople.value > 0){
        countResult(customInputValue)
       }else if(buttonClicked && numberOfPeople.value > 0){
          let cutOnlyNumber = clickedButton.innerHTML.substring(0,clickedButton.innerHTML.length-1)
          countResult(cutOnlyNumber)
       }else{
            tipAmountPerPerson.innerHTML = "$0.00"
            totalAmountPerPerson.innerHTML = "$0.00"
       }
    }else if(billAmount.value == 0){
        billAmount.value = "";
        hideLabel.style.display = "block";
    }  
})
customInput.addEventListener("input", function(e){
    e.preventDefault();
    customInputValue = parseInt(e.target.value);
    
    if(customInput.value > 0){
        customInput.style.color = "#00474B";
        billBox.style.border = "2px solid #26C2AE;"
        hideLabelCustom.style.display = "none"
        if(billAmount.value > 0 && numberOfPeople.value > 0){
            countResult(customInputValue)
        }else{
            tipAmountPerPerson.innerHTML = "$0.00"
            totalAmountPerPerson.innerHTML = "$0.00"
        }   
    }else if(customInput.value == 0){
        customInput.value = "";
        hideLabelCustom.style.display = "block";
    }
    
})
numberOfPeople.addEventListener("input", function(e){
    numberOfPeopleValue = parseInt(e.target.value);
    
    if(numberOfPeople.value > 0){
        numberOfPeople.style.color = "#00474B"
        hideLabelPeople.style.display = "none"
        if(billAmount.value > 0 && customInput.value > 0){
            countResult(customInputValue)
        }else if(buttonClicked && billAmount.value > 0){
            let cutOnlyNumber = clickedButton.innerHTML.substring(0,clickedButton.innerHTML.length-1)
            countResult(cutOnlyNumber)
        }else{
            tipAmountPerPerson.innerHTML = "$0.00"
            totalAmountPerPerson.innerHTML = "$0.00"
        }    
    }else if(numberOfPeople.value == 0){
        numberOfPeople.value = "";
        hideLabelPeople.style.display = "block";
    }
    
})
//ამ ფუნქციით reset-ღილაკზე კლიკის დროს ვანულებთ ყველაფრის მნიშვნელობას
resetButton.addEventListener("click", function(){
    billAmount.value = 0;
    numberOfPeople.value = 0;
    tipAmountPerPerson.innerHTML = "$0.00"
    totalAmountPerPerson.innerHTML = "$0.00"
    customInput.value = ""
    hideLabel.style.display = "block"
    hideLabelPeople.style.display = "block"
    hideLabelCustom.style.display = "block"
})
//ეს ფუნქცია პარამეტრად იღებს პროცენტს და ანგარიშობს ყველაფერს რაც შედეგშია გამოტანილი
function countResult(persent){
    totalTip = (billAmount.value * persent) / 100
    tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
    totalBill = parseInt(billAmount.value) + totalTip;
    totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
    tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
    totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
}
