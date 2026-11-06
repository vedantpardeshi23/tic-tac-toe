let cells = document.querySelectorAll(".cell")
let currentPlayer="X"
let gameActive=true

cells.forEach(function(cell){
    cell.onclick=function(){
        if(cell.textContent!=="" || !gameActive){
            return
        }
        cell.textContent=currentPlayer

        let winner = winningplayer()
        if(winner){ 
            alert(winner + " wins!");
            gameActive = false;
            return;
        }
        if (Array.from(cells).every(cell => cell.textContent !== "")) {
        alert("It's a draw!");
        gameActive = false;
        return;
        }
        if(currentPlayer=="X"){
            currentPlayer="O"
        }else{
            currentPlayer="X"
        }  
    }
})
const winningCombinations = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6]  
];

function winningplayer(){
    for(let combination of winningCombinations){
        let a=combination[0]
        let b=combination[1]
        let c=combination[2]

        if(
            cells[a].textContent!=="" &&
            cells[a].textContent==cells[b].textContent &&
            cells[b].textContent==cells[c].textContent
        ){
            return cells[a].textContent
        }
    }
    return null
}


