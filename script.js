const h3Elements = document.querySelectorAll('h3');

const clickHandler = (elements, index) => (event) => {
    const accordionNode = elements[index].parentElement.parentElement;
    const classes = [...accordionNode.classList];
    // If current accordion is open, close it
    if (classes.includes("show")) {
        accordionNode.classList.replace("show", "hidden");
        elements.forEach(element => {
            element.parentElement.parentElement.classList.add('hidden');
        });
    } else if (classes.includes("hidden")) {
        elements.forEach(element => {
            element.parentElement.parentElement.classList.remove("show");
            element.parentElement.parentElement.classList.add("hidden");
        });
        accordionNode.classList.replace("hidden", "show");
    }
}

h3Elements.forEach((element, index) => {
    element.addEventListener('click', clickHandler(h3Elements, index));
})