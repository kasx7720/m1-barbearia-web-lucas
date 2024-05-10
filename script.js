const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for (let i = 0; i < barbearia.cortes.length; i++){
        if (id === barbearia.cortes[i].id){
            return barbearia.cortes[i]
        }
    }
    return "Corte não encontrado"
}
buscaCortePorId(1)

function buscaBarbaPorId(id) {
    for (let i = 0; i < barbearia.barbas.length; i++){
        if (id === barbearia.barbas[i].id){
            return barbearia.barbas[i]
        }
    }
    return "Barba não encontrada"
}
buscaBarbaPorId(1)

function verificaStatusBarbearia() {
    if (barbearia.estaAberto){
        return "Estamos abertos"
    }
    return "Estamos fechados"
}
verificaStatusBarbearia()

function retornaTodosCortes() {
    return barbearia.cortes
}
retornaTodosCortes()

function retornaTodasBarbas() {
    return barbearia.barbas
}
retornaTodasBarbas()

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId)
    const barba = buscaBarbaPorId(barbaId)

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor
    }
    return pedido
}
criaPedido("Lucas", 1, 2)

const novoCorte = {id: 1, tipo: "Highfade", valor: 25}

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++){
        if (id === lista[i].id){
            lista[i].tipo = tipo
            lista[i].valor = valor
            break
        }
    }
    return lista   
}
atualizarServico(barbearia, 2, 20, "High fade")

function calculaTotal(pedido) {
    let valorTotal = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
    return valorTotal
}
calculaTotal(criaPedido("Lucas", 1, 2))