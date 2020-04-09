function generateRandomColor(){
   return'#'+ Math.floor(Math.random()*16777215).toString(16);
}

function changeBackgroundColor(){
let colorBg=document.getElementById('color-overlay');
colorBg.style.backgroundColor=generateRandomColor();
}

function ChangeBgtext(){
    let textBg=document.getElementById('one');
if(textBg.innerHTML=='ON THE FLOOR BABY')
  textBg.innerHTML=='HIT IT HARD BABY';
else if(textBg.innerHTML=='HIT IT HARD BABY')
textBg.innerHTML=='ROCK THE PARTY BABY';
else if(textBg.innerHTML=='ROCK THE PARTY BABY')
textBg.innerHTML=='ON THE FLOOR BABY'
}

function checkBg(){
    generateRandomColor();
    changeBackgroundColor();
    ChangeBgtext();
}
setInterval(checkbg,500);