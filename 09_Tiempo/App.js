import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );

};

// NÚMERO DA AULA: 1
// LINK: https://www.youtube.com/watch?v=ZSV4fsaVTIs&list=WL&index=52

// NÚMERO DA AULA: 2 
// LINK: https: https://www.youtube.com/watch?v=EaYxQD9SnUQ&list=PLAF5G8rnMmBbhW1t7BI0ydEomHAKCpIRZ&index=6

// NÚMERO DA AULA: 3
// LINK: https://www.youtube.com/watch?v=02EQj3h0h8I&list=PLAF5G8rnMmBbhW1t7BI0ydEomHAKCpIRZ&index=5

// NÚMERO DA AULA: 4 (Aula Final)
// LINK: https://www.youtube.com/watch?v=rgDPHWbwHAo&list=PLAF5G8rnMmBbhW1t7BI0ydEomHAKCpIRZ&index=5