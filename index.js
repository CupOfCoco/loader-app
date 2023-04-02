const percentEl = document.querySelector('.percent');
const barEl = document.querySelector('.barback');
let idx = 0;


load();

function load () {
    percentEl.innerHTML =  idx + '%'; 
    barEl.style.width = idx + '%';
    idx++;
 if( idx < 101){
    setTimeout(load,50)
 }
};
