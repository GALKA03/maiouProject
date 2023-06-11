import React from 'react';
import AdressComponent from './AdressComponent';
import { ExistRequiredError } from '../lib/exceptions';
import { Heading } from '../components/Heading';

const Contatti = () => {
//   try {
//     throw new ExistRequiredError();
//   } catch (error) {
//     // Handle the error, e.g., display an error message or log it
//     console.error(error);
//   }

  return (
    <>
      <Heading />
      <AdressComponent />
    </>
  );
};

export default Contatti;