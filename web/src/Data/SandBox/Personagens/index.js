import lobo from './lobo.png';

const icones = [
    { cam: 'https://previews.123rf.com/images/seamartini/seamartini1809/seamartini180900796/109985298-claw-scratches-or-wild-animal-paw-torn-marks-vector-sharp-nails-slashes-or-scars-with-laceration-and.jpg'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3cMzEwLTPhC40kl5udSB-tYgasIpIkC5iwy12SuOarqiR0Un8'},
    { cam: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abbf6919-9f5e-4910-bdd2-e05ae8ac0ad8/ddbzsml-c4b3b50b-047e-4f99-a6e0-84b78921df92.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYmY2OTE5LTlmNWUtNDkxMC1iZGQyLWUwNWFlOGFjMGFkOFwvZGRienNtbC1jNGIzYjUwYi0wNDdlLTRmOTktYTZlMC04NGI3ODkyMWRmOTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bi-fkld32fIIvfyS0w1irZX9aJmlt0S2-Q-AJpF6msI'},
];

const personagens = [
    {
        id: 2536734,
        nome: 'Renekton',
        nivel: 10,
        classe: 'Crocodilo',
        atributos: {STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}, 
        habilidades: { 
            ativas: [
                { nome: 'Garras', mod: 1, custo: 50, tipo: 'ataque', icone: icones[0].cam},
                { nome: 'Mordida', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[1].cam},
                { nome: 'Cura', mod: 10, custo: 16, tipo: 'cura'}
            ], 
            passivas: [
                { nome: 'regen', efeito: ''},
                { nome: 'sangria', efeito: ''},
            ],
            especial: { nome: 'especial', tipo: 'fortalecimento', mod: 1.4, efeito: ''}
        },
        modelo: icones[2].cam,
        portrait: lobo
    },
];


export default personagens;