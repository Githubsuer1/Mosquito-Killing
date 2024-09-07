let count = 0;
let isGameStarted = false;
let mosquito = document.getElementById('mosquito');
let playground = document.getElementById('playground');

// start the game by clicking on start button
const start = ()=>{
    let time = setInterval(()=>{
        isGameStarted = true;
        let i = Math.floor(Math.random()*355)+1;
        let j = Math.floor(Math.random()*450)+1;
        mosquito.style.left = i+"px";
        mosquito.style.top = j+"px";
    },1000)

    setTimeout(()=>{
        clearTimeout(time)
        gameOver()
    },30000)    
}


// hitting and counting the mosquito
const hitMosquito = ()=>{
    if(isGameStarted){
        count = count + 1;
        document.getElementById('totalHit').innerText = count;
    }
}

// game over
const gameOver = ()=>{        
    mosquito.style.left = 0;
    mosquito.style.top = 0;
    const heading1 = document.createElement("h1")
    heading1.textContent = "Game Over";
    heading1.style.backgroundColor = "red";
    heading1.style.padding = "10px";
    heading1.style.textAlign = "center";
    heading1.style.marginTop = "50%";
    heading1.setAttribute('id','heading1')
    playground.appendChild(heading1);
    isGameStarted = false;
}

// reset the game
const reset = ()=>{
    if (isGameStarted==false){
        mosquito.style.left = 0;
        mosquito.style.top = 0;
        count = 0;
        document.getElementById('totalHit').innerText = count;
        const heading1 = document.getElementById('heading1')
        if (heading1){
            const parent = heading1.parentElement;
            parent.removeChild(heading1)
        }
    }    
}