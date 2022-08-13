const accordions = document.querySelectorAll('.accordion');

const clickHandler = (elements, index) => (event) => {
    const accordionNode = elements[index];
    const classes = [...accordionNode.classList];
    // If current accordion is open, close it
    if (classes.includes("show")) {
        accordionNode.classList.replace("show", "hidden");
        elements.forEach(element => {
            element.classList.add('hidden');
        });
    } else if (classes.includes("hidden")) {
        elements.forEach(element => {
            element.classList.remove("show");
            element.classList.add("hidden");
        });
        accordionNode.classList.replace("hidden", "show");
    }
}

accordions.forEach((element, index) => {
    element.addEventListener('click', clickHandler(accordions, index));
})