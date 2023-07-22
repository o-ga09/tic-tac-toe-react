/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Grid, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { gameState, usecase } from './lib/container';

function App() {
  const [turn, setTurn] = useState(1);
  const [isExit, setExit] = useState(false);

  useEffect(() => {
    (() => {
      usecase.init();
    })();
  }, []);

  const tapped = ((index:number) => {
    const koma = usecase.input(index,turn,gameState.board);
    if(koma.turn == -1) return;

    if(usecase.isWin(gameState.board)){
      setExit(true);
      setTurn(1);
    }

    if(turn === 1) {
      setTurn(2);
    } else if(turn === 2) {
      setTurn(1);
    }
  });

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">
        五目並べ
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
      <h1>{turn} のターン</h1>
      <Grid templateColumns="repeat(5, 0fr)" gap={1}>
        {[...Array(25)].map((_, rowIndex) => (
          <Box
          key={rowIndex}
          h="80px"
          w="80px"
          border="1px solid #ccc"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          bg="skyblue"
          borderRadius="md"
          boxShadow="md"
          onClick={() => tapped(rowIndex)}
        >
          {rowIndex}
        </Box>
        ))}
      </Grid>
      </Box>

    </Box>
  );
}

export default App
