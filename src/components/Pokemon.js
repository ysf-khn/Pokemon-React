import React from 'react';

const Pokemon = ({ id, image, name, experience, height, weight, type }) => {
  return (
    <li className='bg-slate-600 grid justify-center content-between rounded-md p-6 text-center text-gray-200 shadow-md'>
      <img className='' src={image} alt={name} />
      <div>
        <h2 className='font-bold text-2xl m-4'>{name.toUpperCase()}</h2>
        <div>Experience : {experience}</div>
        <div>Height : {height}</div>
        <div>Weight : {weight}</div>
        <div>Type : {type}</div>
      </div>
    </li>
  );
};

export default Pokemon;
