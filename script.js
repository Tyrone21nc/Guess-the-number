one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");
ten = document.getElementById("ten");

guess = Math.floor(Math.random() * 6) + 1;

let chance = 5;
let guessed = false;


// Display initial chance
document.getElementById("countValue").textContent = `#${chance}`;

// Function to handle button clicks
function handleClick(button) {
    if (guessed || chance <= 0) return;

    if (guess.toString() === button.textContent) {
        document.getElementById("won").textContent = "You've guessed the correct number. Congrats ✅";
        button.style.color = "brown";
        button.style.background = "rgb(58, 220, 61)";
        document.getElementById("wonimg").src = "goblin1.png";
        guessed = true;
    } else {
        chance--;
        document.getElementById("countValue").textContent = `#${chance}`;
        if (chance === 0) {
            document.getElementById("won").style.color = "brown";
            document.getElementById("won").textContent = "Game Over! No more chances. ❌";
            document.getElementById("wonimg").src = "goblin2.gif";
        }
    }
}

// Assign event listeners to all buttons
one.onclick = () => handleClick(one);
two.onclick = () => handleClick(two);
three.onclick = () => handleClick(three);
four.onclick = () => handleClick(four);
five.onclick = () => handleClick(five);
six.onclick = () => handleClick(six);
seven.onclick = () => handleClick(seven);
eight.onclick = () => handleClick(eight);
nine.onclick = () => handleClick(nine);
ten.onclick = () => handleClick(ten);


