const teste = [
  {
    username: 'root',
    name: 'Superuser',
    notes: [],
    id: '6587c51074d721d32be584ca',
  },
  {
    username: 'marcos',
    name: 'user',
    notes: [],
    id: '6587c53674d721d32be584ce',
  },
  {
    username: 'genildocs',
    name: 'Genildo',
    notes: [
      {
        content: 'Nova nota',
        important: true,
        id: '659112f16c31d279827e46b6',
      },
    ],
    id: '6591100d4f5ea67ab0b56f3b',
  },
];

const teste2 = teste.map((item) => {
  return item.username;
});

console.log(teste2);
