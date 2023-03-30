let alunos = [
    {
        nome : 'João',
        nota: 9,
    },
    {
        nome:'Maria',
        nota: 6,
    },
    {
        nome: 'Felipe',
        nota: 8,
    },
    {
        nome: 'Marcos',
        nota: 3,
    },
    {
        nome: 'Jonatan',
        nota: 10
    }
]

function aprovados() {
    let alunosAprovados = alunos.filter( alunosAprovados => alunosAprovados.nota >= 6 )
    console.log(alunosAprovados);
}

function reprovados() {
    let alunosReprovados = alunos.filter( alunosReprovados => alunosReprovados.nota < 5)
    console.log(alunosReprovados)
}

aprovados()
reprovados()