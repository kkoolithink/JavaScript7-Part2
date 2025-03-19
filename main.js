function change_greeting() {
    document.querySelector("#greeting").textContent = `Hello JavaScript!`;
}

function change_background(){
    document.body.style.backgroundColor = "lightblue";
}

function show_name() {
    let name = document.querySelector("#user_input").value;
    document.querySelector("#output").textContent = `Hello, ${name}`;
}

let count = 0;
function increase_count() {
    count++;
    document.querySelector("#count").textContent = String(count);
}

function change_image() {
    document.querySelector("#image").src = "images/other_cat.avif";
}

function toggle_text() {
    let text = document.querySelector("#text");
    text.style.display = text.style.display === "none" ? "block": "none";
}

function increase_font_size() {
    document.querySelector("#text_size").style.fontSize = "50px";
}

function update_content() {
    document.querySelector("#title").textContent = "New Title";
    document.querySelector("#description").textContent = "This text has changed!";
    document.querySelector("#description").style.color = "red";
}

function calculate_square() {
    let num = document.querySelector("#number_input").value;
    let square = Math.pow(num, 2);
    document.querySelector("#result").textContent = `The square of ${num} is ${square}`;
}