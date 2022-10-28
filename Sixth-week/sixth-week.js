favorito1 = {
    nome: "Frostpunk",
    tempo: 135,
    massiveMultiplayer: false,
    estilo: ["Psicologico", "RTS", "Offline"],
    width: "180px",
    height: "100px",
    imagem: "https://cdn-ext.fanatical.com/production/product/1280x720/5fb7bcee-a0ca-4759-abda-8eff1a092bb9.jpeg",
    referencia: "https://store.steampowered.com/app/323190/Frostpunk/",
}

favorito2 = {
    nome: "Hunt",
    tempo: 213,
    massiveMultiplayer: false,
    estilo: ["Terror", "FPS", "Online"],
    width: "180px",
    height: "100px",
    imagem: "https://cdn.akamai.steamstatic.com/steam/apps/594650/header.jpg?t=1666109756",
    referencia: "https://store.steampowered.com/app/594650/Hunt_Showdown/",
}

favorito3 = {
    nome: "WoW",
    tempo: 500,
    massiveMultiplayer: true,
    estilo: ["Aventura", "RPG", "Online"],
    width: "180px",
    height: "100px",
    imagem: "https://s2.glbimg.com/7gudZIuRmFvHYK8mUE3PPVIoK-s=/0x0:620x320/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg",
    referencia: "https://worldofwarcraft.com/pt-br/start?utm_source=6372051&utm_medium=Paid&utm_content=336120361&utm_campaign=BLZ_27557830&dclid=&gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH7E43f1K7OKfydyVe8ljZIxgRmmZc5uBjMX9u_fqbaRzwmsd2OUwU4aAnvfEALw_wcB",
}

jogosFavoritos = [favorito1, favorito2, favorito3]

const retorneString = (favoritos) => {
    let jogoString = "";
    for (genero in favoritos) {
        favoritos[genero] == favoritos.length - 1 ? jogoString = jogoString + favoritos[genero] : jogoString = jogoString + favoritos[genero] + ", "
    } return jogoString
}

for (jogoFavorito of jogosFavoritos) {
    let lista = document.getElementById("lista")
    let newFavorito = document.createElement("section")

    newFavorito.setAttribute("class", jogoFavorito.nome)
    newFavorito.setAttribute("id", jogoFavorito.nome)
    newFavorito.innerHTML += "<ul>" + "<img width=" + jogoFavorito.width + " height=" + jogoFavorito.height + " src=" + jogoFavorito.imagem + " />" + "<li><a href=" + jogoFavorito.referencia + ">" + jogoFavorito.nome + "</a></li>" + "<li>Horas Jogadas:" + jogoFavorito.tempo + "</li>" + "<li>Massive Multiplayer:" + jogoFavorito.massiveMultiplayer + "</li>" + "<li>Estilo:" + retorneString(jogoFavorito.estilo) + "</li></ul>"

    lista.insertAdjacentElement("beforeend", newFavorito)
}

function realizePesquisa(e) {
    let pesquisar = document.getElementById("pesquisa")
    let jogo = document.getElementsByTagName("a")

    if (pesquisar.value === ""){
        alert("Digite um nome de jogo para pesquisar.")
    } else{
        for (nome of jogo){
            if(nome.innerHTML === pesquisar.value){
                let resultado = document.getElementById(pesquisar.value)
                resultado.style.display = "block"
            } else{
                let resultado = document.getElementById(nome.innerHTML)
                resultado.style.display = "none"
            }
        }
    }
}

console.log(favorito1)
console.log(favorito2)
console.log(favorito3)

console.log(` Media de Horas Jogadas: ` , Number(favorito1.tempo+favorito2.tempo+favorito3.tempo)/3,"horas.")

console.log(favorito1.nome ,"e um MMO?", favorito1.massiveMultiplayer)
console.log(favorito2.nome,"e um MMO?", favorito2.massiveMultiplayer)
console.log(favorito3.nome, "e um MMO?", favorito3.massiveMultiplayer)