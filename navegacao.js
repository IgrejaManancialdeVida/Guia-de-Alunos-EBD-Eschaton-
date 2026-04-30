document.addEventListener("DOMContentLoaded", function () {
  const menuSuperior = document.createElement("nav");
  menuSuperior.setAttribute("aria-label", "Navegação rápida do hub");
  menuSuperior.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0;
    background: rgba(10, 22, 40, 0.96); border-bottom: 1px solid rgba(201,168,76,0.45);
    display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;
    padding: 8px 10px; z-index: 9999; font-family: 'Oswald', sans-serif;
    box-shadow: 0 2px 10px rgba(0,0,0,0.45);
  `;

  const itens = [
    { nome: "Início", href: "#topo", vol: null },
    { nome: "Vol. I", href: "#vol-i", vol: "v1" },
    { nome: "Vol. II", href: "#vol-ii", vol: "v2" },
    { nome: "Vol. III", href: "#vol-iii", vol: "v3" }
  ];

  document.body.id = document.body.id || "topo";

  itens.forEach(function (item) {
    const btn = document.createElement("a");
    btn.textContent = item.nome;
    btn.href = item.href;
    btn.style.cssText = `
      color: #c9a84c; text-decoration: none; font-size: 10px;
      letter-spacing: 2px; text-transform: uppercase;
      padding: 5px 10px; border: 1px solid transparent;
      transition: 0.25s; font-weight: 400;
    `;
    btn.addEventListener("click", function () {
      if (item.vol && typeof window.setTema === "function") window.setTema(item.vol);
    });
    btn.onmouseover = function () {
      btn.style.borderColor = "#c9a84c";
      btn.style.background = "rgba(201, 168, 76, 0.1)";
    };
    btn.onmouseout = function () {
      btn.style.borderColor = "transparent";
      btn.style.background = "transparent";
    };
    menuSuperior.appendChild(btn);
  });

  document.body.prepend(menuSuperior);
  document.body.style.paddingTop = "44px";
});
