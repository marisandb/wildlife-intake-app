import React, { useState } from 'react';
import { CarouselImages } from './carouselImages';
import { Image, Button, ButtonGroup, Box, VStack, Heading, Text, Center} from "@chakra-ui/react"


const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section>
      <Center>
      <Heading p="10px"> Check out our success stories! </Heading>
      </Center>
            {CarouselImages.map((slide, index) => {
              return (
                <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
                >
                <VStack align="center">
                  <Box>
                  {index === current && (
                    <Image src={slide.image} boxSize="300px"
                    objectFit="cover" alt='various wildlife'/>
                    )}
                  </Box>
                  <Box width="750px">
                  {index === current && (
                  <Text fontSize="lg"> {slide.description} </Text>
                      )}
                  </Box>
                </VStack>
                </div>
              );
            })}
            <Center>
            <Box display="flex" mt="2">
              <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="green" onClick={prevSlide}>Previous Photo</Button>
              <Button colorScheme="green" onClick={nextSlide}>Next Photo</Button>
              </ButtonGroup>
            </Box>
          </Center>
    </section>
  );
};

export default Carousel;