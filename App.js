import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState, useEffect } from 'react';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null; // You can show a loading indicator here while the fonts are loading
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(guess) {
    setGameIsOver(true);
    setGuessRound(guess);
  }

  function startNewGame() {
    setUserNumber(null);
    setGuessRound(null);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOver={gameOverHandler} />;
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onStartGame={startNewGame} />;
  }

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={['#C96868', '#FFBE98']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode="cover"
        imageStyle={styles.rootScreenImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  rootScreenImage: {
    opacity: 0.11,
  },
});
