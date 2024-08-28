import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/header/Header'
import Categories from './src/components/categories/Categories';
import BannerSlider from './src/components/banner/BannerSlider';


const App = () => {
  return (
      <View style={styles.container}>
          <Header />
          {/* <Categories />
          <BannerSlider /> */}
      </View>
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
});

export default App;