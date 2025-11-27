const sizeFilters = document.querySelectorAll(".filter-size");
const entregaFilters = document.querySelectorAll(".filter-entrega");
const marcaFilters = document.querySelectorAll(".filter-marca");

const produtos = document.querySelectorAll(".produto");

function aplicarFiltros() {
    
    const tamanhosSelecionados = [...sizeFilters].filter(f => f.checked).map(f => f.value);
    const entregaSelecionadas = [...entregaFilters].filter(f => f.checked).map(f => f.value);
    const marcasSelecionadas = [...marcaFilters].filter(f => f.checked).map(f => f.value);

    produtos.forEach(produto => {
        const size = produto.dataset.size;
        const entrega = produto.dataset.entrega;
        const marca = produto.dataset.marca;

        let mostrar = true;

        if (tamanhosSelecionados.length > 0 && !tamanhosSelecionados.includes(size)) {
            mostrar = false;
        }

        if (entregaSelecionadas.length > 0 && !entregaSelecionadas.includes(entrega)) {
            mostrar = false;
        }

        if (marcasSelecionadas.length > 0 && !marcasSelecionadas.includes(marca)) {
            mostrar = false;
        }

        produto.style.display = mostrar ? "block" : "none";
    });
}


[...sizeFilters, ...entregaFilters, ...marcaFilters].forEach(f => {
    f.addEventListener("change", aplicarFiltros);
});



let cart = [];
let total = 0;

function addToCart(nome, preco) {
    cart.push({ nome, preco });

    const lista = document.getElementById("cart-items");
    const item = document.createElement("li");
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    lista.appendChild(item);

    total += preco;
    document.getElementById("cart-total").textContent = total.toFixed(2);

    document.getElementById("cart").classList.add("open");
}
