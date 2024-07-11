const endTime = new Date().getTime() + 30 * 60 * 1000;

function updateTimer() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
        
        document.getElementById('timer').innerText = "00:00:00";
        document.querySelector('.price2').style.display = 'none'; 
        document.querySelector('.price').style.textDecoration = 'none'; 
        document.querySelector('.price').style.fontSize = '28px';
        clearInterval(timerInterval);
        return;
    }

    
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timer').innerText = `${formattedMinutes}:${formattedSeconds}`;
}


const timerInterval = setInterval(updateTimer, 1000);


updateTimer();


function showHint(id) {
    document.getElementById(id).style.display = 'block';
}

function hideHint(id) {
    document.getElementById(id).style.display = 'none';
}

function validateNumberInput(input) {
    input.value = input.value.replace(/\D/g, '');
}