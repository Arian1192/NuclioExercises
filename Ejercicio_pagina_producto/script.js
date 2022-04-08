
const mostrarComentario = () => {
    const nombre = document.getElementById("name");
    const textArea = document.getElementById("comentario");
    const newComentario = document.getElementById("newComentario");
    const newComment = document.createElement("div");
    newComment.innerHTML = `<div class="comentario">` +
        `<h2>${nombre.value}</h2>` +
        `<p>${textArea.value}</p>` +
        `</div>`;
    newComentario.appendChild(newComment);
}

