let box = document.querySelector('.box-show');
let player = document.querySelector('.player');
let com = document.querySelector('.com');
const playerscore = document.getElementById('player-score');
const comscore = document.getElementById('computer-score');
let score_com = 0, score_player = 0;

playerscore.innerText = '0'
comscore.innerText = '0'

function playerplay(choice) {
    box.style.display = 'block'
    player.innerText = choice.value
    player.style.display = 'block'

    return computerplay(choice.value)
}
function computerplay(playerplay) {
    const choices = ['✊', '🖐️', '✌️'];
    const random = Math.floor(Math.random() * choices.length)
    const computer = choices[random]

    com.innerText = computer
    com.style.display = 'block'

    return calresult(playerplay, computer)
}


function calresult(player, computer) {
    console.log(player + computer)
    //เสมอกัน
    if (player === computer) {
        console.log('เสมอ')
    } else if (
        player === '✊' && computer === '✌️' ||
        player === '✌️' && computer === '🖐️' ||
        player === '🖐️' && computer === '✊'
    ) {
        console.log('ผู้เล่นชนะ! 🎉')
        score_player++
        playerscore.innerText = score_player
    } else {
        console.log('คอมพิวเตอร์ชนะ! 😭');
        score_com++
        comscore.innerText = score_com
    }
}