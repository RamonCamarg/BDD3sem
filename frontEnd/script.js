const { Pool } = require('pg');

// Configurações de conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzaria_db',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;


const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
});
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});

// Variável para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar item ao carrinho
function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

// Função para atualizar o conteúdo do carrinho
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    let total = 0;

    // Limpar o conteúdo do carrinho antes de atualizar
    cartList.innerHTML = '';

    // Criar um objeto para armazenar a contagem de cada item no carrinho
    const itemCounts = {};

    // Contar a quantidade de cada item no carrinho
    cartItems.forEach(item => {
        if (itemCounts[item.name]) {
            itemCounts[item.name]++;
        } else {
            itemCounts[item.name] = 1;
        }
    });

    // Adicionar cada item ao carrinho
    for (const itemName in itemCounts) {
        const itemCount = itemCounts[itemName];
        const listItem = document.createElement('li');
        listItem.textContent = `${itemCount}x ${itemName}`;
        
        // Adicionar botão de exclusão para cada item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            removeItemFromCart(itemName);
        });
        listItem.appendChild(deleteButton);
        
        cartList.appendChild(listItem);

        // Calcular o preço total para este item
        const itemPrice = cartItems.find(item => item.name === itemName).price;
        total += itemPrice * itemCount;
    }

    // Atualizar o total
    totalElement.textContent = `R$${total.toFixed(2)}`;
}

// Função para remover um item específico do carrinho
function removeItemFromCart(itemName) {
    const index = cartItems.findIndex(item => item.name === itemName);
    if (index !== -1) {
        cartItems.splice(index, 1);
        updateCart();
    }
}

// Função para limpar o carrinho
function clearCart() {
    cartItems = [];
    updateCart();
}

// Evento de clique no ícone do carrinho
document.getElementById('cart-icon').addEventListener('click', function() {
    // Exibir ou ocultar o carrinho ao clicar no ícone
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
});

// Evento de clique no botão de carrinho para mostrar ou ocultar o carrinho de compras
document.getElementById('cart-icon').addEventListener('click', function() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none'; // Se o carrinho já estiver visível, oculta-o
    } else {
        cart.style.display = 'block'; // Se o carrinho estiver oculto, exibe-o
    }
});

// Função para comprar itens do carrinho
function purchaseCart() {
    // Aqui você pode adicionar a lógica para redirecionar para a página de pagamento
    // Por exemplo:
    window.location.href = 'pagina_de_pagamento.html';
}
