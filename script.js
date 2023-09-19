function moveButton(){
    let button = document.querySelector('#btn');
    let top = Math.floor(Math.random() * 500) + 1;
    let left = Math.floor(Math.random() * 90) + 1;
    button.style.position = 'absolute';
    button.style.top = top + 'px';
    button.style.left = left + '%';
}