export function makeVisible(element) {
    element.classList.add("flex-visible")
    element.classList.remove("invisible")
}

export function makeInvisible(element) {
    element.classList.remove("flex-visible")
    element.classList.add("invisible")
}






/*
function getShow(element) {
    element.classList.style.display = "";
}

function getHide(element) {
    element.classList.style.display = "none";
}
*/