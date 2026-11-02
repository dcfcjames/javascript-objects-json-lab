(function(){ 
const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock"); 
const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
hrHand.style.backgroundColor = '#0f0';
digitalClock.appendChild(myNode);
myNode.innerHTML = "Welcome";

const updateTime = function(){
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });

    // Analogue clock
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`; 

    const minutes = myDate.getMinutes();
    const rotMinutes = minutes * 6 - 90;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;

    const hours = myDate.getHours();
    hours = hours + myDate.getMinutes() / 60; // Add fractional hour based on minutes
    const rotHours = hours * 30;
    hrHand.style.transform = `rotate(${rotHours}deg)`;
    }

    setInterval(updateTime, 1000);
})();