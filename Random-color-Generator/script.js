const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    // @ts-ignore
    color.innerHTML = "#" + randomColor;
}

// @ts-ignore
genNew.addEventListener("click", setBg);
setBg();