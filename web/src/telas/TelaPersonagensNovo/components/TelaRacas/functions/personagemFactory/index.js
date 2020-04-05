const personagemFactory = (raca, nivel, nome) => {
    return {
        id: 25353423534,
        nome: nome,
        nivel: nivel,
        classe: raca.nome,
        atributos: {STR: raca.atributos.STR, DEX: raca.atributos.DEX, CON: raca.atributos.CON, INT: raca.atributos.INT, TOU: raca.atributos.TOU, AGI: raca.atributos.AGI}, 
        habilidades: raca.habilidades,
        items: [],
        tracos: raca.tracos,
        modelo: raca.modelo,
        portrait: raca.portrait,
    }
}

export default personagemFactory;