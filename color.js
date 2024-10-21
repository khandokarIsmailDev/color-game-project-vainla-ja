

let number =6
let headContainer = document.getElementById('head')
let headColor = document.getElementById('rgb-color')
let square = document.querySelectorAll('.square')
let colors = colorGenerate(number)
let randomized = randomColor(number)
let correct = document.getElementById('correct')
let newColor = document.getElementById('new-color')
let easy = document.getElementById('easy')
let hard = document.getElementById('hard')



//randomized color add in heading
headColor.innerHTML = randomized


//generate Color
function colorGenerate(num){
    let colors = []

    for(let i=0; i<num; i++){
        let r = Math.floor(Math.random() *255)
        let g = Math.floor(Math.random() *255)
        let b = Math.floor(Math.random() *255)
        colors.push(`rgb(${r}, ${g}, ${b})`)
    }
    return colors
}



//square setting push color add listener
for(let i=0; i<square.length; i++){
    
    square[i].style.backgroundColor = colors[i]

    square[i].addEventListener('click',function(event){
        if(event.target.style.backgroundColor === randomized){
            mathched()
            headContainer.style.backgroundColor = randomized
            correct.innerHTML = 'CORRECT!'
            newColor.innerHTML = 'PLAY AGAIN!'
            newColor.classList.add('play_again')

        }else{
            this.style.backgroundColor = 'black'
            correct.innerHTML = 'TRY AGAIN!'
        }
    })
}



//color randomized
function randomColor(num){
    return colors[Math.floor(Math.random() *num)]
}



//mathced color inside add
function mathched(){
    for(let i=0; i<square.length; i++){
        square[i].style.backgroundColor = event.target.style.backgroundColor
    }
}



//new color change color
newColor.addEventListener('click',function(event){
    
    colors = colorGenerate(number)
    randomized = randomColor(number)
    headColor.innerHTML = randomized
    correct.innerHTML = ''
    this.innerHTML = 'NEW COLOR'
    this.classList.remove('play_again')

    for(let i=0; i<square.length; i++){
        square[i].style.backgroundColor = colors[i]
    }
    
})



//catch button easy and hard and add listener
easy.addEventListener('click',function(event){

    number = 3
    this.classList.add('selected')
    hard.classList.remove('selected')
    colors = colorGenerate(number)
    randomized = randomColor(number)
    correct.innerHTML = ''
    newColor.innerHTML = 'NEW COLOR'
    newColor.classList.remove('play_again')

    for(let i=0; i<square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i]

        }else{
            square[i].style.display = 'none'
        }
    }
})


hard.addEventListener('click',function(event){

    number = 6
    this.classList.add('selected')
    easy.classList.remove('selected')
    colors = colorGenerate(number)
    randomized = randomColor(number)
    correct.innerHTML = ''
    newColor.innerHTML = 'NEW COLOR'
    newColor.classList.remove('play_again')

    for(let i=0; i<square.length;i++){
        if(colors[i]){
            square[i].style.display = 'block'
            square[i].style.backgroundColor = colors[i]
        }
    }

})