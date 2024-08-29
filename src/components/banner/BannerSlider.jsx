import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const categories = [
    {
        id: '1',
        image: 'https://images.cbazaar.com/pl_images/bannerimages/SB6_July19.jpg',
    },
    {
        id: '2',
        image: 'https://images.cbazaar.com/pl_images/bannerimages/SB7_July19.jpg',
    },
    {
        id: '3',
        image: 'https://images.cbazaar.com/pl_images/bannerimages/SB8_July19.jpg',
    },
    {
        id: '4',
        image: 'https://images.cbazaar.com/pl_images/bannerimages/SB9_July19.jpg',
    },
];

const CategoryCard = ({ title, image }) => (
    <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.overlay}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </ImageBackground>
);

const BannerSlider = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>CATEGORIES TO BAG</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                {categories.map((item) => (
                    <CategoryCard key={item.id} title={item.title} image={item.image} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    image: {
        width: width * 0.7,
        height: width * 0.9,
        marginRight: 10,
        justifyContent: 'flex-end',
        borderRadius: 10,
        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BannerSlider;
