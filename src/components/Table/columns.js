import React from 'react';

export const columns = [
  {
    id: 'name',
    title: () => {
      return <div>It custom title</div>;
    },
    isSortable: true,
    renderCell: (cell) => {
      return <div key={cell.id}>{cell.name}</div>;
    },
  },
  {
    id: 'login',
    title: 'login',
    renderCell: (cell) => {
      return <div key={cell.id}>{cell.login}</div>;
    },
  },
  {
    id: 'rank',
    title: 'Rank',
  },
];

export const list = [
  {
    id: 1,
    name: 'Illia',
    login: 'moloko',
  },
  {
    id: 2,
    name: 'Moloko',
    login: 'akkerman',
  },
  {
    id: 3,
    name: 'Kefir',
    login: 'akkermanKryto',
  },
];
