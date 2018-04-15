/**
* @file This file contain the logical functions of the Hangman Game
* @author Daniel Jiménez Chísica
* @version 1.0
*/

var lettersButtons = document.getElementsByClassName("letter");
var initSentence = 'engineering'.split('');
var boxes = document.getElementsByClassName("box");
var imagelabel = document.getElementById("hangman");
var attempts = 0;
var secondSentence = [];
paint();

/**
* This method sets on the screen if the user wins or loses the hangman game
*
* @param {String} outcome - The final outcome of the player game
*/
function finish(outcome) {
    var winbox = document.createElement("input");
    winbox.setAttribute("type", "text");
    winbox.setAttribute("value", outcome);
    document.getElementById("result").appendChild(winbox);
    document.getElementById("sentence").style.visibility = "hidden";
}

/**
* Represents the logic functionality when a user makes a mistake in the game
*/
function fail() {
    if (attempts > 6) {
        finish("You lost!!");
    }
    attempts++;
    imagelabel.removeChild(imagelabel.firstChild);
    var newimg = document.createElement("img");
    newimg.setAttribute("src", "Resources/" + attempts + ".jpg");
    imagelabel.appendChild(newimg);
}

/*
* This function receives a string with special characters and strings and returns a cleaned string
*
* @param {String} dirtyString - A string that has to be cleaned of special characters and spaces
* @returns {String} The cleaned String
*/
function cleanString(dirtyString) {
    var cleaned = dirtyString.split(/\s/g);
    return cleaned;
};

/*
* Here we defined a function for a letter button
*/
var letterclick = function () {
    var flag = false;
    for (var i = 0; i < initSentence.length; i++) {
        if (this.textContent == initSentence[i]) {
            boxes[i].setAttribute("value", this.textContent);
            secondSentence[i] = this.textContent;
            flag = true;
        }
    }

    if (!flag) {
        fail();
    }


    if (initSentence.join('') == secondSentence.join('')) {
        finish("You won!!");
    }
};


for (var i = 0; i < lettersButtons.length; i++) {
    lettersButtons[i].onclick = letterclick;
};


/*
* Here we set a paint function that sets the screen with all the required buttons and necessary labels
* to perform the game
*/
function paint() {
    for (var i = 0; i < initSentence.length; i++) {
        var box = document.createElement("input");
        box.setAttribute("size", "1em");
        box.setAttribute("disabled", "true");
        box.setAttribute("class", "box")
        document.getElementById("sentence").appendChild(box);
    };

    var firstimg = document.createElement("img");
    firstimg.setAttribute("src", "Resources/0.jpg");
    imagelabel.removeChild(imagelabel.firstChild);
    imagelabel.appendChild(firstimg);
};
