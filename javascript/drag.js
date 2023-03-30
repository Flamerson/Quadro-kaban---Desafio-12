const cards = document.querySelectorAll(".card");
const boards = document.querySelectorAll(".board");

cards.forEach( card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {

    this.classList.add('is-dragging');
}

function drag() {
    
}

function dragend() {

    this.classList.remove('is-dragging');
}

boards.forEach(board => {
    board.addEventListener("dragenter", dragenter);
    board.addEventListener("dragover", dragover);
    board.addEventListener("dragleave", dragleave);
    board.addEventListener("drop", drag);
})

function dragenter() {

    
    const dragCard = document.querySelector(".is-dragging");
    
    this.appendChild(dragCard);
    
    
}

function dragover() {
    
    this.classList.add('highlight')

}

function dragleave() {
    
    this.classList.remove('highlight')

}

function drop() {
    
    this.classList.remove('highlight')

}