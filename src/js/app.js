const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>  {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.add("reveal");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const hidden1Elements = document.querySelectorAll('.hidden3');
hiddenElements.forEach((el) => observer.observe(el));
hidden1Elements.forEach((el) => observer.observe(el));