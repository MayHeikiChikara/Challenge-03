let adjective1; //Creates a new variable adjective1
let adjective2; //Creates a new variable adjective2
let adjective3; //Creates a new variable adjective3
let bodyPart; //Creates a new variable bodyPart
let color1; //Creates a new variable color1
let color2; //Creates a new variable color2
let favoriteFood; //Creates a new variable favoriteFood
let noun1; //Creates a new variable noun1
let noun2; //Creates a new variable noun2
let noun3; //Creates a new variable noun3
let noun4; //Creates a new variable noun4
let number; //Creates a new variable number
let pastTenseVerb; //Creates a new variable pastTenseVerb
let sillyExpression; //Creates a new variable sillyExpression
let somethingGross; //Creates a new variable somethingGross
let sound; //Creates a new variable sound
let typeOfJob; //Creates a new variable typeOfJob
let verb1; //Creates a new variable verb1
let verb2; //Creates a new variable verb2
let verbEndingInIng; //Creates a new variable verbEndingInIng
let button; //Creates a new variable button
let music; //Creates a new variable music

function setup() { //Executes the content within its curly brackets once
  let canvas = createCanvas(885, 600); //Creates a new variable canvas with 885 pixels in width and 600 pixels in height
  canvas.position(0, 105); //Positions the canvas 0 pixels from the left and 105 pixels from the top
  adjective1 = createInput('Adjective'); //Creates a text input for adjective1
  adjective2 = createInput('Adjective'); //Creates a text input for adjective2
  adjective3 = createInput('Adjective'); //Creates a text input for adjective3
  bodyPart = createInput('Body part'); //Creates a text input for bodyPart
  color1 = createInput('Color'); //Creates a text input for color 1
  color2 = createInput('Color'); //Creates a text input for color 2
  favoriteFood = createInput('Favorite food'); //Creates a text input for favorite Food
  noun1 = createInput('Noun'); //Creates a text input for noun1
  noun2 = createInput('Noun'); //Creates a text input for noun2
  noun3 = createInput('Noun'); //Creates a text input for noun3
  noun4 = createInput('Noun'); //Creates a text input for noun4
  number = createInput('Number'); //Creates a text input for number
  pastTenseVerb = createInput('Past-tense verb'); //Creates a text input for pastTenseVerb
  sillyExpression = createInput('Silly expression'); //Creates a text input for sillyExpression
  somethingGross = createInput('Something gross'); //Creates a text input for somethingGross
  sound = createInput('Sound'); //Creates a text input for sound
  typeOfJob = createInput('Type of job'); //Creates a text input for typeOfJob
  verb1 = createInput('Verb'); //Creates a text input for verb1
  verb2 = createInput('Verb'); //Creates a text input for verb2
  verbEndingInIng = createInput('Verb ending in -ing'); //Creates a text input for verbEndingInIng
  button = createButton('Read!'); //Creates a clickable button displaying Read!
  button.mousePressed(read); //Specifies the behavior when the button is clicked
}

function draw() { //Executes the content within its curly brackets untill the program is stopped
}

function read() { //Executes the content within its curly brackets once when the button is clicked
  background('skyblue'); //Makes the background skyblue
  music = createAudio('music/jungleBook.mp3'); //Creates the path to the junglebook.mp3 audio
  music.autoplay(true); //Plays the music automatic
  text('For our first field trip of the year, my class went to the arboretum to see all the '+adjective1.value()+' plants.', 130, 50); //Displays the text 130 pixels from the left and 50 pixels from the top
  text('We dropped our '+adjective2.value()+' '+noun1.value()+' lunches and followed a(n) '+typeOfJob.value()+' through a(n) '+adjective3.value()+', forest', 130, 70); //Displays the text 130 pixels from the left and 70 pixels from the top
  text('making sure not to '+verb1.value()+' anything. But then I saw a rare '+color1.value()+' '+noun2.value()+'-eating plant that was as', 130, 90); //Displays the text 130 pixels from the left and 90 pixels from the top
  text('tall as a(n) '+noun3.value()+'. I leaned in to '+verb2.value()+' one of its flowers when I heard a loud '+sound.value()+'. “'+sillyExpression.value()+'!” I', 130, 110); //Displays the text 130 pixels from the left and 110 pixels from the top
  text('shouted. My '+somethingGross.value()+' sandwich was being devoured by the plant! Still hungry, the plant', 130, 130); //Displays the text 130 pixels from the left and 130 pixels from the top
  text('reached out with its '+number.value()+' vines. I started '+verbEndingInIng.value()+' for help. But then the plant '+pastTenseVerb.value()+' into my', 130, 150); //Displays the text 130 pixels from the left and 150 pixels from the top
  text(noun4.value()+', pulled out a(n) '+favoriteFood.value()+' and put it in its '+bodyPart.value()+'. Now that is what I call plant food!', 130, 170); //Displays the text 130 pixels from the left and 170 pixels from the top
  for (let x = 0; x < number.value(); x++) { //Lets loop x number.value() times and every time x counts up 1
    stroke('olive'); //Colors the line olive
    strokeWeight(3); //Makes the line 3 pixels in weight
    line(10 * x, 600, 10 * x, random(200, 600)); //Draws a line
  }
  for (let x = 0; x < number.value(); x++) { //Lets loop x number.value() times and every time x counts up 1
    let r = random(200, 600); //Gets a random number between 200 and 600
    stroke('lightgreen'); //Colors the line lightgreen
    strokeWeight(2); //Makes the line 2 pixels in weight
    line(55 * x, 600, 55 * x, r); //Draws a line
    fill(color2.value()); //Colors the ellipses color.value()
    strokeWeight(1); //Makes the line 1 pixel in weight
    ellipse(55 * x - 2, r, 10, 20); //Draws an ellipse
    ellipse(55 * x + 2, r, 10, 20); //Draws an ellipse
  }
  for (let x = 0; x < number.value(); x++) { //Lets loop x number.value() times and every time x counts up 1
    let r = random(200, 600); //Gets a random number between 200 and 600
    stroke('darkgreen'); //Colors the line darkgreen
    strokeWeight(1); //Makes the line 1 pixel in weight
    line(107.5 * x, 600, 107.5 * x, r); //Draws a line
    fill(color1.value()); //Colors the circles color.value()
    strokeWeight(0); //Makes the line 0 pixels in weight
    circle(107.5 * x, r + 10, 20); //Draws a circle
    circle(107.5 * x - 10, r, 20); //Draws a circle
    circle(107.5 * x, r, 20); //Draws a circle
    circle(107.5 * x + 10, r, 20); //Draws a circle
    circle(107.5 * x, r - 10, 20); //Draws a circle
  }
}