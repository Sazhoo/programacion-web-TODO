const input = document.querySelector("input");
const boton = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = input.value.trim();

    if (texto === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <p>${texto}</p>
        <button class="btn-delete">X</button>
    `;

    ul.appendChild(li);

    input.value = "";

    actualizarEstado();

    const btnDelete = li.querySelector(".btn-delete");

    btnDelete.addEventListener("click", () => {
        li.remove();
        actualizarEstado();
    });
});

function actualizarEstado() {
    if (ul.children.length === 0) {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
    }
}