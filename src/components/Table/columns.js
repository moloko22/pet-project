import React from 'react';

export const columns = [
  {
    id: 'name',
    width: '150',
    isSticky: true,
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
    width: '150',
    isSticky: true,
    title: 'login',
    renderCell: (cell) => {
      return <div key={`${cell.id}-login`}>{cell.login}</div>;
    },
  },
  {
    width: '150',
    id: 'rank',
    title: 'Rank',
    renderCell: (cell) => {
      return <div key={`${cell.id}-rank`}>RANK</div>;
    },
  },
  {
    width: '150',
    id: 'rank',
    title: 'Rank',
    renderCell: (cell) => {
      return <div key={`${cell.id}-rank`}>RANK</div>;
    },
  },
  {
    width: '150',
    id: 'rank',
    title: 'Rank',
    renderCell: (cell) => {
      return <div key={`${cell.id}-rank`}>RANK</div>;
    },
  },
  {
    width: '150',
    id: 'rank',
    title: 'Rank',
    renderCell: (cell) => {
      return <div key={`${cell.id}-rank`}>RANK</div>;
    },
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
