let numbers = ["1","1","2","2","3","3","4","4","5","5","6","6"]
let pair = [];
let cardIds = [];
let flippedCards = 0;
    
 function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let newPosition = Math.floor(Math.random() * (i + 1));
        [array[i], array[newPosition]] = [array[newPosition], array[i]];
    }
    return array;
}
    
    function startGame() {
        flippedCards = 0;
        let cardDiv = '';
        shuffle(numbers);
        for (let i = 0; i < numbers.length; i++)
            cardDiv += '<div id="card_'+ i +'" onclick="flipper(this,\'' + numbers[i] + '\')"></div>';
        document.getElementById('board').innerHTML = cardDiv;
    }
    
    function flipCard(){
        var card1 = document.getElementById(cardIds[0]);
        var card2 = document.getElementById(cardIds[1]);
        card1.style.background = card2.style.background = 'red';
        card1.innerHTML = card2.innerHTML = "";
        [pair, cardIds] = [[], []];
    }
    
    function flipper(card, number) {
        if (card.innerHTML == "" && pair.length < 2) {
            card.style.background = 'blue';
            card.innerHTML = number;
    
            if (!pair[0] || !pair[1]) {
                pair.push(number);
                cardIds.push(card.id);
            }
            
            if (pair[0] && pair[1])
                pair[0] == pair[1] ? (flippedCards += 2, [pair, cardIds] = [[], []]) : setTimeout(flipCard, 1100);
        }
    
        if (flippedCards == numbers.length)
            document.getElementById('board').innerHTML = '<h1>🥇<u>Well done! you won</u>🥇</h1></br><button onclick="startGame()">Start New Game...</button>';
    }
module.exports ={startGame, flipper}