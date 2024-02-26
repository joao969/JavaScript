const pikachu = document.querySelector('.pikachu');
const poke2= document.querySelector('.poke2');
const jump = () => {
    pikachu.classList.add('jump');
    
    setTimeout(() => {
        pikachu.classList.remove('jump');
    } , 500);
}

const loop = setInterval(() => {
  
    const poke2Position = poke2.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');

    console.log(pikachuPosition);

    if(poke2Position <= 120 && poke2Position > 0 && pikachuPosition < 100){

        poke2.style.animation= 'none';
        poke2.style.left = `${poke2Position}px`;

        pikachu.style.animation= 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;

        pikachu.src= '../JavaScript/img/pikamorto.gif';
        pikachu.style.width = '150px'
        pikachu.style.top = '150px'
       
        
        clearInterval(loop);
    }
    
}, 10);


document.addEventListener('keydown',jump);



