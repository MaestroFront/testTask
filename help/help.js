export function showCards() {
    const cards = document.querySelectorAll(".card__item");
    setTimeout(() =>
        cards.forEach((card) => (card.style.transform = "scale(1)"))
    );
}

export function setParametresForCards() {
    localStorage.setItem("dollar-1", true);
    localStorage.setItem("dollar-2", true);
    localStorage.setItem("dollar-3", true);
    localStorage.setItem("month-1", true);
    localStorage.setItem("month-2", true);
    localStorage.setItem("month-3", true);
}

export function changeCurrency() {
    const prices = document.querySelectorAll(".price");
    const btnsChangeCurrency = document.querySelectorAll(".currency");
    btnsChangeCurrency.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (localStorage.getItem(`dollar-${index + 1}`) === "true") {
                prices[index].innerHTML = +prices[index].innerHTML * 85;
                item.innerHTML = "₽";
                localStorage.setItem(`dollar-${index + 1}`, false);
            } else {
                prices[index].innerHTML = +prices[index].innerHTML / 85;
                item.innerHTML = "$";
                localStorage.setItem(`dollar-${index + 1}`, true);
            }
        });
    });
}

export function changeGap() {
    const prices = document.querySelectorAll(".price");
    const btnsChangeGap = document.querySelectorAll(".gap");
    btnsChangeGap.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (localStorage.getItem(`month-${index + 1}`) === "true") {
                prices[index].innerHTML = +Math.floor(
                    prices[index].innerHTML / 30
                );
                item.innerHTML = "/day";
                localStorage.setItem(`month-${index + 1}`, false);
            } else {
                prices[index].innerHTML = +prices[index].innerHTML * 30;
                item.innerHTML = "/month";
                localStorage.setItem(`month-${index + 1}`, true);
            }
        });
    });
}

export function moveCards() {
    const moveLeft = document.querySelector(".left");
    const moveRight = document.querySelector(".right");
    const cardList = document.querySelector(".card__list");

    localStorage.setItem("switch", "middle");

    moveLeft.addEventListener("click", () => {
        if (localStorage.getItem("switch") === "middle") {
            cardList.style.transform = "translateX(118%)";
            localStorage.setItem("switch", "left");
        } else if (localStorage.getItem("switch") === "right") {
            cardList.style.transform = "translateX(0%)";
            localStorage.setItem("switch", "middle");
        }
        if (localStorage.getItem("switch") === "left") {
            moveLeft.style.opacity = "0";
        } else {
            moveRight.style.opacity = "1";
        }
    });

    moveRight.addEventListener("click", () => {
        if (localStorage.getItem("switch") === "middle") {
            cardList.style.transform = "translateX(-118%)";
            localStorage.setItem("switch", "right");
        } else if (localStorage.getItem("switch") === "left") {
            cardList.style.transform = "translateX(0%)";
            localStorage.setItem("switch", "middle");
        }
        if (localStorage.getItem("switch") === "right") {
            moveRight.style.opacity = "0";
        } else {
            moveLeft.style.opacity = "1";
        }
    });
}

export function addBurger() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu__list");
    const top = document.querySelector(".top");
    const middle = document.querySelector(".middle");
    const bottom = document.querySelector(".bottom");

    burger.addEventListener("click", () => {
        if (burger.classList.contains("show")) {
            menu.style.transform = "translateY(0)";
            top.style.transform = "rotate(45deg)";
            top.style.top = "48%";
            bottom.style.transform = "rotate(-45deg)";
            bottom.style.bottom = "40%";
            middle.style.opacity = "0";
            burger.classList.remove("show");
        } else {
            menu.style.transform = "translateY(-150%)";
            top.style.transform = "rotate(0deg)";
            top.style.top = "0";
            bottom.style.transform = "rotate(0deg)";
            bottom.style.bottom = "0";
            middle.style.opacity = "1";
            burger.classList.add("show");
        }
    });
}
