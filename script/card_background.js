var cards = document.querySelectorAll(".card");
const gradintList = [4,5,9,15,22,24,26,28];
const startNum = Math.floor(Math.random() * gradintList.length);
cards.forEach((card,i) => {
    let colorNum = gradintList[(startNum + i)%gradintList.length]
    card.style.background = `var(--gradient-${colorNum})`
})
