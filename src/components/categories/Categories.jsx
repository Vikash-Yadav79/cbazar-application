import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Categories() {
    const categories = [
        { name: 'SAREES', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' },
        { name: 'SALWAR', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
        { name: 'INDOWESTERN', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' },
        { name: 'LEHENGA', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug22.jpg' },
        { name: 'KURTIS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug23.jpg' },
        { name: 'GOWNS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug24.jpg' },
    ];

    return (
        <View style={styles.categoryContainer}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.categoryContent}
                showsHorizontalScrollIndicator={false}
            >
                {categories.map((item, index) => (
                    <View key={index} style={styles.categoryItem}>
                        <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        paddingVertical: 0,
        marginVertical: 0,
        paddingBottom: 0,
        paddingTop: 0,
        height: 100, // Adjusted height to fit the content
    },
    categoryContent: {
        paddingVertical: 0,
        marginVertical: 0,
    },
    categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingVertical: 0,
    },
    categoryImage: {
        width: 60,    // Adjust the size based on design needs
        height: 60,
        borderRadius: 30,
    },
    categoryText: {
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
    },
});
