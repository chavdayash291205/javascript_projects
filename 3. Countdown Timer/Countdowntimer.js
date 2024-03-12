let countdowntime = new Date(" 5 jan ,2028 ").getTime();
let y =setInterval(function(){

    let now = new Date().getTime();

    let distance = countdowntime - now ;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("result").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(y);
    document.getElementById("result").innerHTML = "EXPIRED";
  }
}, 1000);




