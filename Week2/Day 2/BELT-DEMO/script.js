function remove(element) {
    element.remove()
}
function voteUp(id) {
    document.getElementById(id).innerText++
}
function voteDown(id) {
    document.querySelector(`#${id}`).innerText--
}
function find() {
    inputValue = document.getElementById("search").value
    console.log(inputValue);
    alert('Searching for "${inputValue}"')
    document.getElementById("Search").value=""
}