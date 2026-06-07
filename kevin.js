function removeItem() {
    let list = document.getElementById("list");

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}