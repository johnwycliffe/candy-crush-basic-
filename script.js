document.addEventListener('DOMContentLoaded',() => {
const grid = document.querySelector('.grid')
const width = 8
const squares = []


const candyColors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue'];


function createBoard() {
    for (let i=0; i < width*width; i++){
        const square = document.createElement('div')
        square.setAttribute('draggable',true)
        square.setAttribute('id', i)
        let randomColor = Math.floor(Math.random()* candyColors.length)
        square.style.backgroundColor = candyColors[randomColor]
        grid.appendChild(square)
        squares.push(square)
    }
}

createBoard()

//candy dragging
squares.forEach(square => square.addEventListener('dragstart',dragstart))
squares.forEach(square => square.addEventListener('dragend',dragEnd))
squares.forEach(square => square.addEventListener('dragsover',dragOver))
squares.forEach(square => square.addEventListener('dragenter',dragEnter))
squares.forEach(square => square.addEventListener('dragleave',dragLeave))
squares.forEach(square => square.addEventListener('drop',dragDrop))

function dragstart(){
   console.log(this.id,'dragStart') 
}

function dragOver(){
    console.log(this.id,'dragover')
}













})
