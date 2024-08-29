import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/header/Header';
// import Categories from './src/components/categories/Categories';
import BannerSlider from './src/components/banner/BannerSlider';
import HomeScreen from './src/components/HomeScreen';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Header />
        <BannerSlider />
        <HomeScreen />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0, // Ensure no padding
    margin: 0, // Ensure no margin
    borderWidth: 1, // Add border for visual debugging
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures the ScrollView takes up the full available space
  },
});

export default App;
