import { HistoryInterval } from '@/types';

export const historyIntervalsData: HistoryInterval[] = [
  {
    category: 'science',
    startYear: 1953,
    endYear: 1977,
    events: [
      {
        id: 'sci1',
        year: 1953,
        text: 'Открытие структуры ДНК Уотсоном и Криком',
      },
      {
        id: 'sci2',
        year: 1957,
        text: 'Запуск спутника "Спутник-1" — начало космической эры',
      },
      {
        id: 'sci3',
        year: 1961,
        text: 'Первый полёт человека в космос — Юрий Гагарин',
      },
      { id: 'sci4', year: 1969, text: 'Посадка "Аполлона-11" на Луну' },
      {
        id: 'sci5',
        year: 1977,
        text: 'Запуск космического аппарата Voyager-1',
      },
    ],
  },
  {
    category: 'technology',
    startYear: 1981,
    endYear: 1989,
    events: [
      { id: 'tech1', year: 1981, text: 'Выпуск первого IBM PC' },
      {
        id: 'tech2',
        year: 1983,
        text: 'Запуск первого мобильного телефона Motorola DynaTAC',
      },
      { id: 'tech3', year: 1984, text: 'Презентация Macintosh от Apple' },
      { id: 'tech4', year: 1985, text: 'Запуск Windows 1.0' },
      {
        id: 'tech5',
        year: 1989,
        text: 'Тим Бернерс-Ли предлагает концепцию Всемирной паутины (WWW)',
      },
    ],
  },
  {
    category: 'culture',
    startYear: 1991,
    endYear: 1999,
    events: [
      {
        id: 'cult1',
        year: 1991,
        text: 'Появление MTV Russia и рост музыкальной культуры 90-х',
      },
      { id: 'cult2', year: 1994, text: 'Дебют культового сериала "Друзья"' },
      {
        id: 'cult3',
        year: 1997,
        text: 'Выход фильма "Титаник" — мировой рекорд по кассовым сборам',
      },
      {
        id: 'cult4',
        year: 1999,
        text: 'Матрица меняет стиль и эстетику научной фантастики',
      },
    ],
  },
  {
    category: 'cooking',
    startYear: 2001,
    endYear: 2009,
    events: [
      {
        id: 'cook1',
        year: 2001,
        text: 'Возрастание популярности кулинарных телешоу',
      },
      { id: 'cook2', year: 2004, text: 'Распространение фьюжн-кухни' },
      { id: 'cook3', year: 2006, text: 'Появление первых food-блогов' },
      {
        id: 'cook4',
        year: 2009,
        text: 'Бум cupcake-кондитерских в США и Европе',
      },
    ],
  },
  {
    category: 'sports',
    startYear: 2010,
    endYear: 2015,
    events: [
      {
        id: 'sport1',
        year: 2010,
        text: 'Чемпионат мира по футболу в ЮАР — победа Испании',
      },
      { id: 'sport2', year: 2012, text: 'Олимпийские игры в Лондоне' },
      {
        id: 'sport3',
        year: 2014,
        text: 'Чемпионат мира в Бразилии — победа Германии',
      },
      { id: 'sport4', year: 2015, text: 'Скандал с коррупцией в ФИФА' },
    ],
  },
  {
    category: 'nature',
    startYear: 2020,
    endYear: 2023,
    events: [
      {
        id: 'nat1',
        year: 2020,
        text: 'Лесные пожары в Австралии и Калифорнии',
      },
      { id: 'nat2', year: 2021, text: 'Извержение вулкана на Ла-Пальме' },
      {
        id: 'nat3',
        year: 2022,
        text: 'Аномальные засухи и волны жары в Европе',
      },
      {
        id: 'nat4',
        year: 2023,
        text: 'Рекордная жара в Канаде и США — изменения климата усиливаются',
      },
    ],
  },
];
