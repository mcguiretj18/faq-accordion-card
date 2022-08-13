const h2Elements = document.querySelectorAll('h2');

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

h2Elements.forEach((element, index) => {
    element.addEventListener('click', clickHandler(h2Elements, index));
})