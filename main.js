function foto_clicada() {
    // Get the image element by its ID
    let img = document.getElementById("foto_gohan");

    // Check the current source and change it to the new source
    if (img.src.match("imagens/foto.png")) {
        img.src = "imagens/foto2.png";
    } else {
        img.src = "imagens/foto.png";
    }
}