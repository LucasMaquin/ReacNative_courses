import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import update from 'immutability-helper';
import { StatusBar } from 'expo-status-bar';

const gameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const X_SYMBOL = 'X';
const O_SYMBOL = 'O';

const generateMap = (mapData, callback) => {
  const mapJsx = [];
  for (let i = 0; i < mapData.length; i++) {
    const row = mapData[i];
    const rowJsx = [];
    for (let j = 0; j < row.length; j++) {
      rowJsx.push(
        <TouchableOpacity
        activeOpacity={0.8}
          onPress={() => {
            callback(i, j);
          }}
          style={styles.cell}
          key={`cell_${i}_${j}`}
        >
          <Text style={styles.cellText}>{mapData[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    mapJsx.push(
      <View style={styles.row} key={`row_${i}`}>
        {rowJsx}
      </View>
    );
  }

  return mapJsx;
};

const getWinner = (gameStage) => {
  let transposed = [[], [], []];
  let diagonals = [[], []];

  for (let i = 0; i < gameStage.length; i++) {
    const row = gameStage[i];
    for (let j = 0; j < row.length; j++) {
      transposed[i][j] = gameStage[j][i];
      if (i === j) diagonals[0][i] = gameStage[i][j];

      if (i === Math.abs(j - (row.length - 1)))
        diagonals[1][i] = gameStage[i][j];
    }
  }

  const allLines = gameStage.concat(transposed).concat(diagonals);

  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    const isEqual = line.every((item) => item === line[0]);
    if (isEqual) {
      return line[0];
    }
  }

  return null;
};

export default function App() {
  const [gameStage, setgameStage] = useState(gameMatrix);
  const [turnSymbol, setTurnSymol] = useState(X_SYMBOL);
  const [winnerSymbol, setWinnerSymbol] = useState();

  const nextTurnSymbol = () => {
    setTurnSymol(turnSymbol === X_SYMBOL ? O_SYMBOL : X_SYMBOL);
  };

  const hasNulls = (inputArray) => {
    let hasNulls = false;
    for (let i = 0; i < inputArray.length; i++) {
      const row = inputArray[i];
      for (let j = 0; j < row.length; j++) {
        if (inputArray[i][j] === null) {
          hasNulls = true;
        }
      }
    }
    return hasNulls;
  };

  return (
    <SafeAreaView style={styles.generalContainer}>
      <StatusBar hidden={true} />
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text style={styles.text}>
          {!winnerSymbol && `It is ${turnSymbol}'s turn`}
        </Text>
        <Text style={styles.text}>{winnerSymbol}</Text>

        {winnerSymbol && (
          <TouchableOpacity
            onPress={() => {
              setgameStage(gameMatrix);
              setTurnSymol(X_SYMBOL);
              setWinnerSymbol(undefined);
            }}
          >
            <Text style={[styles.text, { textTransform: 'uppercase' }]}>
              Restart
              </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 2 }}>
        {generateMap(gameStage, (i, j) => {
          if (winnerSymbol || gameStage[i][j]) return;

          const newStage = update(gameStage, {
            [i]: {
              [j]: { $set: turnSymbol },
            },
          });
          nextTurnSymbol();
          setgameStage(newStage);
          const winner = getWinner(newStage);
          if (winner) {
            setWinnerSymbol(`${winner} wins!`);
          } else if (!hasNulls(newStage)) {
            setWinnerSymbol(`It is a tie`);
          }
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 32,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
