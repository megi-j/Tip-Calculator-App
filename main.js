let billAmount = document.querySelector("#bill")
let billAmountValue = parseInt(billAmount.value)

let buttons = document.querySelectorAll(".tip-box button");

let numberOfPeople = document.querySelector("#people")
let numberOfPeopleValue = parseInt(numberOfPeople.value)

let customInput = document.querySelector("#custom")
let customInputValue = parseInt(customInput.value)

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

//აქ bill-ზე როცა დაეკლილება , მნიშვნელობა გახდება სიცარიელე
billAmount.addEventListener("focus", function(){
    billAmount.value = "";
    resetButton.style.backgroundColor = "#26C2AE"

    hideLabel.style.display = "block"
    if(numberOfPeople.value > 0){
        hideLabelPeople.style.display = "none"
    }else{
        hideLabelPeople.style.display = "block"
    }
    if(customInput.value > 0){
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
    if(customInput.value > 0){
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

//აქ tip-ების ღილაკებზე ჩამოვივლი და ვნახულობ რომელზე მოხდა დაკლიკება და მაგის მიხედვით ვითვლი მთლიან trip-ს ,თთოეულ ადამიანზე რამდენი მოუწია trip და ასევე მთლიან გადასახადს და თითოეულს რამდენი მოუწია გადასახადი
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
//აქ ვამოწმებ ღილაკებზე კლიკის დროს თუ სხვა ინფუთებში ჩაწერილია რაიმე რიცხვი მაშინ წითელი წარწერა გააქროს და აღარ ამოაგდოს
        customInput.value = "";
        hideLabelCustom.style.display = "none"
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
                totalTip = (billAmount.value * 5) / 100
                tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
                totalBill = parseInt(billAmount.value) + totalTip;
                totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
                tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
                totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;    
            }else if(buttons[i].innerHTML == "10%"){
                totalTip = (billAmount.value * 10) / 100
                tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
                totalBill = parseInt(billAmount.value) + totalTip;
                totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
                tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
                totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
            }else if(buttons[i].innerHTML == "15%"){
                totalTip = (billAmount.value * 15) / 100
                tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
                totalBill = parseInt(billAmount.value) + totalTip;
                totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
                tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
                totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
            }else if(buttons[i].innerHTML == "20%"){
                totalTip = (billAmount.value * 20) / 100
                tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
                totalBill = parseInt(billAmount.value) + totalTip;
                totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
                tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
                totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
            }else if(buttons[i].innerHTML == "25%"){
                totalTip = (billAmount.value * 25) / 100
                tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
                totalBill = parseInt(billAmount.value) + totalTip;
                totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
                tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
                totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
            }
        }else{
            tipAmountPerPerson.innerHTML = "$0.00"
            totalAmountPerPerson.innerHTML = "$0.00"
        }
        
               
    })
}
//აქ bill-ზე როცა მოხდება კლიკი მაგ დროს bill-ის input-ი იღებს ჩაწერილი რიცხვის მნიშვნელობას
billAmount.addEventListener("input", function(e){
    e.preventDefault()
    billAmount.value = parseInt(e.target.value); 

    if(billAmount.value > 0){
       billAmount.style.color = "#00474B"
       billBox.style.border = "2px solid #26C2AE;"
       hideLabel.style.display = "none"
    }else if(billAmount.value === 0){
        billAmount.value = "";
        // billBox.style.border = "2px solid #E17052";
        hideLabel.style.display = "block"
    }  
})
customInput.addEventListener("input", function(e){
    e.preventDefault();
    customInputValue = parseInt(e.target.value);
    if(billAmount.value > 0 && numberOfPeople.value > 0){
        if(customInput.value > 0){
            customInput.style.color = "#00474B";
            billBox.style.border = "2px solid #26C2AE;"
            hideLabelCustom.style.display = "none"
    
            totalTip = (billAmount.value * customInputValue) / 100
            tipPerPerson = (totalTip / numberOfPeopleValue).toFixed(2);
            totalBill = parseInt(billAmount.value) + totalTip;
            totalPerPerson = (totalBill / numberOfPeopleValue).toFixed(2);
            tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
            totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
        }else if(customInput.value == 0){
            customInput.value = "";
            hideLabelCustom.style.display = "block"
        }
    }else{
        tipAmountPerPerson.innerHTML = "$0.00"
        totalAmountPerPerson.innerHTML = "$0.00"
    }   
})
numberOfPeople.addEventListener("input", function(e){
    numberOfPeopleValue = parseInt(e.target.value);
    
    if(numberOfPeople.value > 0){
        numberOfPeople.style.color = "#00474B"
        hideLabelPeople.style.display = "none"
       
    }else if(numberOfPeople.value == 0){
        numberOfPeople.value = "";
        hideLabelPeople.style.display = "block"
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

