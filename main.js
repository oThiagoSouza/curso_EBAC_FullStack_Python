document.addEventListener('DOMContentLoaded', ()=> {
    const avatar = document.getElementById('avatar')
    const nomePerfil = document.getElementById('prof-name')
    const nomeUsuario = document.getElementById('prof-username')
    const repositorios = document.getElementById('rep-number')
    const seguidores = document.getElementById('followers')
    const seguindo = document.getElementById('following')
    const linkPerfil = document.getElementById('prof-link')

    fetch('https://api.github.com/users/programerThen')
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        avatar.src = json.avatar_url
        nomePerfil.innerHTML = json.name
        nomeUsuario.innerHTML = "@"+json.login
        repositorios.innerHTML = json.public_repos
        seguidores.innerHTML = json.followers
        seguindo.innerHTML = json.following
        linkPerfil.href = json.html_url
    })
})