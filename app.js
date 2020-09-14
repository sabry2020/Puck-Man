// JavaScript source code

//global variables 
let pacmanCurrentindex = 490
const width = 28
const squares = []
let powerpellet = document.querySelectorAll('.power-pellet')
const scoreDisplay = document.getElementById('score')
let score = 0

const directions = [-1, 1, width, -width]

//declaring ghosts globally
var t 
setTimeout(t,10000)
 t=document.addEventListener('keydown', () => {

    class ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.timerId = NaN
        }

    }
    let ghosts =
        [
            new ghost('blinky', 444, 1150),
            new ghost('pinky', 376, 800),
            new ghost('inky', 351, 700),
            new ghost('clyde', 379,900)
        ]

    function moveGhosts(ghost) {




      
       


        ghost.timerId = setInterval(function () {
            //rules for motion of ghosts 
            // if move valid 
            let direction = directions[Math.floor(Math.random() * directions.length)]
            if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghosts')) {
           //if (squares[ghost.currentIndex + direction].classList.contains('wall') || squares[ghost.currentIndex+direction)
                
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghosts')
                //move the ghosts in normal directions
                ghost.currentIndex += direction*2
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghosts')
           }
            //else if not valid 
            else {
               let direction = directions[Math.floor(Math.random() * directions.length)]
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghosts')
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghosts')
            }
            //find another direction




        }, ghost.speed)


    }
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghosts')


    })
    ghosts.forEach(ghost => {
        moveGhosts(ghost)
    })



})


const layout =
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 4, 0,
        0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 4, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0


    ]
document.addEventListener('DOMContentLoaded', () =>


{
    /*
    function shine()
    {
        let randomShinyColor = [
            'blue',
            'lightblue',
            'black',
            'darkblue'
        ]
        powerpellet.backgroundColor = randomShinyColor[Math.floor(Math.random() * randomShinyColor.length)]



    }
    window.setInterval(shine(),100) 
    */

    const grid = document.querySelector('.grid')
  
   



   
  

    //layout of the grid and the squares components 

   

    //character for the numbers in the array 
    //0 for blank 
    //1 for wall
    //2 for pacman
    //3 pac-dot
    //4  power-pellet 
    //5 ghosts



    //creating a container or grid for the game 



    function createBoard() {

        for (let i = 0; i < layout.length; i++) {

             
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)
           
          
            
            //adding layout to the board 
            
            if (layout[i] === 0) {

                squares[i].classList.add('blank')   
            }


            else if (layout[i] === 1)
            {
                squares[i].classList.add('wall')
            }
          


            
           else if (layout[i] === 3)

            {
                squares[i].classList.add('pac-dot')

            }
            else if (layout[i] === 4) {
                squares[i].classList.add('power-pellet')

            }
            else if (layout[i] ===5) {
                squares[i].classList.add('ghosts')

            }
            
           

        }
        squares[pacmanCurrentindex].classList.add('pac-man')
    }

    createBoard()


    //passing the number of pac-man to the array of layout 
   

   // squares[pacmanCurrentindex].classList.add('pac-man')

})
 
    //making the start position of pac-man 
/*
function startPosition() {

    let randomPosition = [5, 7, 12, 34, 56, 67, 87, 120, 180, 250, 400]

   

    pacmanCurrentindex = randomPosition[Math.floor(Math.random() * randomPosition.length)]
    if (squares[pacmanCurrentindex].classList.contains('wall'))
        pacmanCurrentindex=459
        

}
startPosition()

*/

    //moving pac-man  by using keycodes (can rely on instructions)

function movePacMan(e) {
    squares[pacmanCurrentindex].classList.remove('pac-man')
    //using keycodes for moving pacman 

    //browse for the keycodes ---- arrow left 37, arrow up 38 ,arrow right 39, arrow down 40,  


    switch (e.keyCode) {

        //allowing movement in the whole row and the whole column 
        case 37:
            if (pacmanCurrentindex - 1 !== '' && !squares[pacmanCurrentindex - 1].classList.contains('wall') && !squares[pacmanCurrentindex - 1].classList.contains('ghosts'))
                pacmanCurrentindex--
            /*if (squares[pacmanCurrentindex - 1] % width === 0)
                pacmanCurrentindex = width
                */
            //left exit 
            if ((pacmanCurrentindex - 1) === 363) {
                pacmanCurrentindex = 391
            }
            break

        case 38:
            if (pacmanCurrentindex - width >= 0 && !squares[pacmanCurrentindex - width].classList.contains('wall') && !squares[pacmanCurrentindex - width].classList.contains('ghosts'))
                pacmanCurrentindex -= width
            break
        case 39:
            if (pacmanCurrentindex % width < width - 1 && !squares[pacmanCurrentindex + 1].classList.contains('wall') && !squares[pacmanCurrentindex + 1].classList.contains('ghosts'))
                pacmanCurrentindex++
            /* if (squares[pacmanCurrentindex - 1] % width===0)
                 pacmanCurrentindex +=width
                 */
            //right exit 
            if ((pacmanCurrentindex + 1) === 392) {
                pacmanCurrentindex = 364
            }
            break
        case 40:
            if (pacmanCurrentindex + width < layout.length && !squares[pacmanCurrentindex + width].classList.contains('wall') && !squares[pacmanCurrentindex + width].classList.contains('ghosts'))
                pacmanCurrentindex += width
            break
    }
    squares[pacmanCurrentindex].classList.add('pac-man')


    function pacDotEaten() {
        //when pacman eats a pacDot

        if (squares[pacmanCurrentindex].classList.contains('pac-dot')) {

            /*score++
            scoreDisplay.innerHTML = score*/
            squares[pacmanCurrentindex].classList.remove('pac-dot')
        }

    }
    pacDotEaten()

    function powerPelletEaten() {


        if (squares[pacmanCurrentindex].classList.contains('power-pellet'))
        {

            squares[pacmanCurrentindex].classList.remove('power-pellet')
            squares[pacmanCurrentindex].classList.remove('pacman')
            //squares[pacmanCurrentindex].style.backgroundColor='black'



        }
    }
    powerPelletEaten()

   


  

   

   
   
       }
  


    


    //add event listeners to help execute the above code 




    document.addEventListener('keydown', movePacMan)



                                                                       //creating objects (not OOP:OOP is for classes and objects of classes ) tutorial by w3schools 
                                                                               //creating a direct instance of an object 





//create our ghost template 

/* my way 
Ghost(ghost1,34,1)
Ghost(ghost2,67,5)
Ghost(ghost3,54,10)
*/
//ania s way 




//draw ghosts onto the grid 



//adding ghosts by the  forEach method 
/*
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghosts')
})
*/
//ghosts moving randomly 


//ghosts.forEach(ghost => moveGhost(ghost))




//function to move ghosts 
/* will be fixed 
function moveGhost(ghost)
{
    const directions = [-1, +1, width, -width]
    let direction = Math.floor(Math.random() * directions.length)


    ghost.timerId = setInterval(function () {
        // if ghost movement restrictions wall,ghost, 
        if (!squares[currentIndex + direction].classList.contains('wall') && !squares[currentIndex + direction].classList.contains('ghosts')) {
            //removing all the ghost related classes
            squares[currentIndex + direction].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            //new position 
            ghost.currentIndex += direction
            //redraw the ghost in a new place 
            squares[currentIndex + direction].classList.add(ghost.className, 'ghost', 'scared-ghost')

        }
            else
        {
            direction = Math.floor(Math.random() * directions.length)
            squares[currentIndex + direction].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex += direction
            squares[currentIndex + direction].classList.add(ghost.className, 'ghost', 'scared-ghost')
        }
        //else find another direction to go 

    },ghost.speed)


}
*/


     //functions to do later 

 //noEntry()     //  prevent pacman from entering the maze of ghosts

//powerPelletEaten()
//checkForGameOver()
//checkForWin()

/*function pacDotEaten()
{
    //when pacman eats a pacDot

    if (squares[pacmanCurrentindex].classList.contains('pac-dot') )
    {
        squares[pacmanCurrentindex].classList.remove('pac-dot')
        score++ 
        scoreDisplay.innerHTML = score
    }

}
   */