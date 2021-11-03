import React from 'react';
import {Heading, Center} from "@chakra-ui/react"

const AnimalList = ({ animals }) => {
  if (!animals.length) {
    return <div>
    <Center>
        <Heading>No animals currently, enjoy the quiet while you can!</Heading>;
    </Center>
    </div>
        
  }

  return (
    <div>
      {animals &&
        animals.map(animal => (
          <div key={animal._id} className="card mb-3">
            <ul>
                <li>{animal.speciesName}</li>
                <li>{animal.speciesAge}</li>
                <li>{animal.circumstance}</li>
                <li>{animal.initObservations}</li>
            </ul>
            </div>
        ))}
    </div>
  );
};

export default AnimalList;