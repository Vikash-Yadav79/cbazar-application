import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const exploreMoreItems = [
        { id: 1, title: '', image: 'https://images.cbazaar.com/pl_images/bannerimages/SB14_July19.jpg' },
        { id: 2, title: '', image: 'https://images.cbazaar.com/pl_images/bannerimages/SB15_July19.jpg' },
        { id: 3, title: '', image: 'https://images.cbazaar.com/pl_images/bannerimages/SB16_July19.jpg' },
        { id: 4, title: '', image: 'https://images.cbazaar.com/pl_images/bannerimages/SB17_July19.jpg' },
    ];

    const shopByRoleItems = [
        { id: 1, title: 'GUEST', image: 'https://manpreetkamalproduction.in/wp-content/uploads/2022/04/couple-royal-portrait-at-there-wedding.jpg' },
        { id: 2, title: 'GROOM', image: 'https://www.wedium.com/bhubaneswar/wp-content/uploads/2022/03/groom-makeup-in-bhubaneswar.jpg' },
        { id: 3, title: 'Bride', image: 'https://symphonyevents.com.au/wp-content/uploads/2022/11/JKHinduWeddingHighRes-253-scaled.jpg' },
        { id: 4, title: 'KIDS', image: 'https://houstonfamilymagazine.com/wp-content/uploads/2014/09/kids-pretend-marriage.jpg' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>EXPLORE MORE</Text>
            <View style={styles.grid}>
                {exploreMoreItems.map(item => (
                    <View key={item.id} style={styles.gridItem}>
                        <ImageBackground source={{ uri: item.image }} style={styles.image}>
                            <View style={styles.overlay}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </View>

            <Text style={styles.header}>SHOP BY YOUR ROLE</Text>
            <View style={styles.grid}>
                {shopByRoleItems.map(item => (
                    <View key={item.id} style={styles.gridItem}>
                        <ImageBackground source={{ uri: item.image }} style={styles.image}>
                            <View style={styles.overlay}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '48%',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomeScreen;
