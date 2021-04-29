import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

// pure javascript modules available in npm

export default function App() {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30);
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  //Obstacles
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 200;

  const gravity = 3;
  let gamerTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;
  
  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gamerTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gamerTimerId);
      }
    }
  }, [birdBottom]);

  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)) {
      setBirdBottom(birdBottom => birdBottom + 50);
    }
  };

  //start first obstacle
  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      }
    } else {
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random()*100);
      setScore(score => score + 1);
    }
  }, [obstaclesLeft]);

    //start second obstacle
  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo);
      }
    } else {
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(-Math.random()*100);
      setScore(score => score + 1);
    }
  }, [obstaclesLeftTwo]);

  //check for collisions
  useEffect(()=>{
    if(
      ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
      birdBottom > (obstaclesNegHeight + obstacleHeight + gap -30 )) &&
      (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 +30)
      )
      ||
      ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
      birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap -30)) &&
      (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30)
      )
    ) {
      gameOver();
    }
  })

  const gameOver = () => {
    setIsGameOver(true);
    clearInterval(gamerTimerId);
    clearInterval(obstaclesLeftTimerId);
    clearInterval(obstaclesLeftTimerIdTwo);
  }

  return (
    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>

      {isGameOver && <Text>Your Score is: {score}</Text>}

      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />

      <Obstacles
        color={'green'}
        obstacleLeft={obstaclesLeft}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeight}
        gap={gap}
      />
      <Obstacles
        color={'yellow'}
        obstacleLeft={obstaclesLeftTwo}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeightTwo}
        gap={gap}
      />

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});

