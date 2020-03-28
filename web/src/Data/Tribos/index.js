import lobo from '../SandBox/Personagens/lobo.png';

const icones = [
    { cam: 'https://previews.123rf.com/images/seamartini/seamartini1809/seamartini180900796/109985298-claw-scratches-or-wild-animal-paw-torn-marks-vector-sharp-nails-slashes-or-scars-with-laceration-and.jpg'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3cMzEwLTPhC40kl5udSB-tYgasIpIkC5iwy12SuOarqiR0Un8'},
    { cam: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abbf6919-9f5e-4910-bdd2-e05ae8ac0ad8/ddbzsml-c4b3b50b-047e-4f99-a6e0-84b78921df92.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYmY2OTE5LTlmNWUtNDkxMC1iZGQyLWUwNWFlOGFjMGFkOFwvZGRienNtbC1jNGIzYjUwYi0wNDdlLTRmOTktYTZlMC04NGI3ODkyMWRmOTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bi-fkld32fIIvfyS0w1irZX9aJmlt0S2-Q-AJpF6msI'},
];

const tribos = [
    {
        nome: 'Feranis',
        simbolo:'',
        descricao: 'exemplo descrição Feranis',
        racas: [
            {   
                nome: 'Leão',
                portrait: lobo,
                descricao: 'exemplo descrição',
                modelo: icones[2].cam,
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
                atributos: { STR: 360, DEX: 335, CON: 330, INT: 210, TOU: 240, AGI: 325}
            },
            { 
                nome: 'Leopardo',
                portrait: '',
                descricao: 'exemplo descrição',
                model: '',
                habilidades: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                atributos: { STR: 300, DEX: 460, CON: 200, INT: 200, TOU: 180, AGI: 400}
            },
            { 
                nome: 'Tigre',
                portrait: '',
                descricao: 'exemplo descrição',
                model: '',
                habilidades: [{ nome: 'habilidade1'}, { nome: 'habilidade2'}, { nome: 'habilidade3'}],
                atributos: { STR: 330, DEX: 390, CON: 280, INT: 250, TOU: 200, AGI: 350}
            },
        ]
    },

    {
        nome: 'Lupinos',
        simbolo:'',
        descricao: 'exemplo descrição Lupinos',
        racas: [
            { nome: 'Lobo', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { nome: 'Hyena', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { nome: 'Terrier', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
        ]
    },

    {
        nome: 'Repteis',
        simbolo:'',
        descricao: 'exemplo descrição Repteis',
        racas: [
            { nome: 'Crocodilo', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { nome: 'Cobra', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { nome: 'Tartaruga', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
        ]
    },

    {
        nome: 'Arthropius',
        simbolo:'',
        descricao: 'exemplo descrição Arthropius',
        racas: [
            { nome: 'Aranha', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { nome: 'Besouro', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
            { nome: 'Formiga', portrait: '', model: '', habilidades: [], atributos: { STR: '', DEX: '', CON: '', INT: '', TOU: '', AGI: ''}},
        ],
    },
]

export default tribos;

