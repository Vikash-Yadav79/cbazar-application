import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export default function BannerSlider() {
    return (
        <Swiper style={styles.wrapper} showsButtons={true} showsPagination={false}>
            <View style={styles.slide}>
                <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' }} style={styles.sliderImage} />
            </View>
            <View style={styles.slide}>
                <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' }} style={styles.sliderImage} />
            </View>
            <View style={styles.slide}>
                <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' }} style={styles.sliderImage} />
            </View>
            <View style={styles.slide}>
                <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug22.jpg' }} style={styles.sliderImage} />
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
        marginTop: 0, // Ensure no top margin
        borderWidth: 1, // Add border for visual debugging
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
