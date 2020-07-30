const input = document.querySelector("input");
const secretCode = "i will hire you";


window.addEventListener("keyup", (e) => {
    if (input.value === secretCode) {
        cornify_add();
        input.value = "";
    }
});