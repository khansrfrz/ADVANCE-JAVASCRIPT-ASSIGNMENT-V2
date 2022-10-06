const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".name"),
quoteBtn = document.querySelector("button");

function randomQuote(){
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        
    });
}
const greeting = () => {
    const d = new Date();
    var greeting_message;
    let time = d.getHours();
    if(time >= 0 && time < 12){
        greeting_message = 'morning' 
    }
    else if(time >= 12 && time < 17){
        greeting_message = 'afternoon' 
    }
    else if(time >= 17 && time < 20){
        greeting_message = 'evening' 
    }
    else if(time >= 20 && time < 24){
        greeting_message = 'night' 
    }
    else{
        greeting_message = 'day'
    }
    document.getElementById('greeting_status').innerText = greeting_message;
}


greeting();

quoteBtn.addEventListener("click",randomQuote);