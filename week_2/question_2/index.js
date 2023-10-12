const testingItems = document.querySelectorAll(".testing__item");

testingItems.forEach((item) => {
    const question = item.querySelector(".testing__ques");
    const answer = item.querySelector(".testing__text");
    const span = question.querySelector("i");

    question.addEventListener("click", () => {
        answer.classList.toggle("testing__text__inactive");
        answer.classList.toggle("testing__text__active");
        span.classList.toggle("fa-chevron-up");
        span.classList.toggle("fa-chevron-down");
    });
});
