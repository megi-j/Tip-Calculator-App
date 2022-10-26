let billAmount = document.querySelector("#bill")
let buttons = document.querySelectorAll(".tip-box button");
let numberOfPeople = document.querySelector("#people")
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
let customInput = document.querySelector("#custom")
//აქ bill-ზე როცა დაეკლილება , მნიშვნელობა გახდება სიცარიელე
billAmount.addEventListener("focus", function(){
    billAmount.value = "";
    resetButton.style.backgroundColor = "#26C2AE"
    hideLabel.style.display = "block"
})
numberOfPeople.addEventListener("focus", function(){
    numberOfPeople.value = ""
})
customInput.addEventListener("focus", function(){
    hideLabelCustom.style.display = "block"
})

//აქ tip-ების ღილაკებზე ჩამოვივლი და ვნახულობ რომელზე მოხდა დაკლიკება და მაგის მიხედვით ვითვლი მთლიან trip-ს ,თთოეულ ადამიანზე რამდენი მოუწია trip და ასევე მთლიან გადასახადს და თითოეულს რამდენი მოუწია გადასახადი
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(buttons[i].innerHTML == "5%"){
            totalTip = (billAmount.value * 5) / 100
            tipPerPerson = (totalTip / numberOfPeople.value).toFixed(2);
            totalBill = parseInt(billAmount.value) + totalTip;
            totalPerPerson = (totalBill / numberOfPeople.value).toFixed(2);
            tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
            totalAmountPerPerson.innerHTML = `$${totalPerPerson}`;
        }
            
        
    })
}
//აქ bill-ზე როცა მოხდება კლიკი მაგ დროს bill-ის input-ი იღებს ჩაწერილი რიცხვის მნიშვნელობას
billAmount.addEventListener("input", function(e){
    e.preventDefault()
    billAmount.value = e.target.value; 
    if(billAmount.value ==! 0){
       billAmount.style.color = "#00474B"
       billBox.style.border = "2px solid #26C2AE;"
       hideLabel.style.display = "none"
    }else if(billAmount.value == 0){
        billAmount.value = "";
        // billBox.style.border = "2px solid #E17052";
        hideLabel.style.display = "block"
    }  
})
customInput.addEventListener("input", function(e){
    e.preventDefault();
    customInput.value = e.target.value;
    if(customInput.value ==! 0){
        customInput.style.color = "#00474B";
        billBox.style.border = "2px solid #26C2AE;"
        hideLabelCustom.style.display = "none"
    }else if(customInput.value == 0){
        customInput.value = "";
        hideLabelCustom.style.display = "none"
    }
})
numberOfPeople.addEventListener("input", function(e){
    numberOfPeople.value = e.target.value;
    if(numberOfPeople.value ==! 0){
        numberOfPeople.style.color = "#00474B"
    }
    
})
//ამ ფუნქციით reset-ღილაკზე კლიკის დროს ვანულებთ ყველაფრის მნიშვნელობას
resetButton.addEventListener("click", function(){
    billAmount.value = 0;
    numberOfPeople.value = 0;
    tipAmountPerPerson.innerHTML = "$0.00"
    totalAmountPerPerson.innerHTML = "$0.00"
    
})

