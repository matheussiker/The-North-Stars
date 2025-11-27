const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.getElementById("closeModal");


const buttons = document.querySelectorAll(".produto button");

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const produto = event.target.closest(".produto");

        const img = produto.querySelector("img").src;
        const title = produto.querySelector("h3").innerText;
        const price = produto.querySelector("p").innerText;

        
        modalImg.src = img;
        modalTitle.innerText = title;
        modalPrice.innerText = price;

        modal.style.display = "flex";
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const finalizarBtn = document.querySelector(".finalizar");

finalizarBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
});
