function copy(link) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = link;
    input.focus();
    input.select();
    document.execCommand("copy");
    input.remove();
    alert("Conteúdo copiado para a área de transferência!");
}