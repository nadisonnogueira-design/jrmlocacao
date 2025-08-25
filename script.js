// Efeito surgir nos itens ao rolar
function mostrarItens() {
  const triggerBottom = window.innerHeight * 0.85;

  // Itens do setor segurança (horizontal)
  const itemsHoriz = document.querySelectorAll('.surgir-horizontal .item');

  itemsHoriz.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrarItens);
window.addEventListener('load', mostrarItens);