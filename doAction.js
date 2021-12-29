
const actionBox = document.getElementById('actionBox')
const colourBox = document.getElementById('colourBox')
const objectBox = document.getElementById('objectBox')

const goAction = document.getElementById('actionButton')
const goColour = document.getElementById('colourButton')
const goObject = document.getElementById('objectButton')

const canScore = document.getElementById('canBox')
const cantScore = document.getElementById('cantBox')

const success = document.getElementById('success')
const fail = document.getElementById('fail')



goAction.addEventListener('click', () => {
    randomAction()

})
goColour.addEventListener('click', () => {
    randomColour()
})
goObject.addEventListener('click', () => {
    randomObject()
})


canScore.addEventListener('click',() =>{
    let score = parseInt(canScore.innerText)
    canScore.innerText = score + 1
    if(score >= 5){success.style.display = 'block'}
    clearBoxes()
})

cantScore.addEventListener('click',() =>{
    let score = parseInt(cantScore.innerText)
    cantScore.innerText = score + 1
    if(score >= 5){fail.style.display = 'block'}
    clearBoxes()
})

function clearBoxes(){
    actionBox.innerText = ' '
    colourBox.style.backgroundImage = 'none'
    objectBox.style.backgroundImage = 'none'
}

function randomAction(){
    let actions = ['touch', 'look at', 'point to', 'say', 'find', 'hit', 'open', 'close', 'cut', 'eat']

    actionBox.innerText = actions[Math.floor(Math.random() * actions.length)]
}

function randomColour(){
    let colourPics = ['img/colours/0.png', 'img/colours/1.png', 'img/colours/3.png', 'img/colours/4.png', 'img/colours/5.png', 'img/colours/6.png', 'img/colours/7.png', 'img/colours/8.png', 'img/colours/9.png', 'img/colours/10.png', 'img/colours/11.png']

    colourBox.style.backgroundImage = `url(${colourPics[Math.floor(Math.random() * colourPics.length)]})` 
}

function randomObject(){
    let objectPics = ['img/objects/0.png', 'img/objects/1.png', 'img/objects/3.png', 'img/objects/4.png', 'img/objects/5.png', 'img/objects/6.png', 'img/objects/7.png', 'img/objects/8.png', 'img/objects/9.png', 'img/objects/10.png', 'img/objects/11.png', 'img/objects/12.png', 'img/objects/13.png', 'img/objects/14.png', 'img/objects/15.png','img/objects/16.png', 'img/objects/17.png']

    objectBox.style.backgroundImage = `url(${objectPics[Math.floor(Math.random() * objectPics.length)]})` 
}












