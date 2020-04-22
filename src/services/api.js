export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
        {
          id: 2,
          content: 'Recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
        {
          id: 4,
          content: 'Assitir aula de ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
        {
          id: 5,
          content: 'Deploy da aplicação em ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Estudar Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
        {
          id: 8,
          content: 'Deploy da aplicação em ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/60434681?s=460&u=2d17838f8368802ef1cc6f72526fb6158a142096&v=4'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Deploy da aplicação em ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Estudar aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}