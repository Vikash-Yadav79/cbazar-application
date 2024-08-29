import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const Header = () => {
    const categories = [
        { name: 'SAREES', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' },
        { name: 'SALWAR', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
        { name: 'INDOWESTERN', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' },
        { name: 'LEHENGA', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' },
        { name: 'KURTIS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
        { name: 'GOWNS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' },
    ];

    const banners = [
        { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' },
        { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
        { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' },
        { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header Section */}
                <View style={styles.header}>
                    <Icon name="menu" size={30} color="#000" />
                    <Text style={styles.logoText}>cbazaar</Text>
                    <View style={styles.headerIcons}>
                        <Icon name="search" size={25} color="#000" />
                        <Icon name="favorite-border" size={25} color="#000" style={styles.iconMargin} />
                        <Icon name="shopping-cart" size={25} color="#000" />
                    </View>
                </View>

                {/* Category Section */}
                <View style={styles.categoryContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map((category, index) => (
                            <TouchableOpacity key={index} style={styles.categoryItem}>
                                <Image
                                    source={{ uri: category.imageUrl }}
                                    style={styles.categoryImage}
                                />
                                <Text style={styles.categoryText}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Banner Section with Swiper */}
                <View style={styles.bannerContainer}>
                    <Swiper
                        autoplay
                        autoplayTimeout={5}
                        showsPagination
                        style={styles.wrapper}
                        dotStyle={styles.dotStyle}
                        activeDotStyle={styles.activeDotStyle}
                    >
                        {banners.map((banner, index) => (
                            <View key={index} style={styles.slide}>
                                <Image
                                    source={{ uri: banner.imageUrl }}
                                    style={styles.bannerImage}
                                />
                            </View>
                        ))}
                    </Swiper>
                </View>

                {/* Plus Size Section */}
                {/* <TouchableOpacity style={styles.promoContainer}>
                    <Text style={styles.promoText}>PLUS SIZE</Text>
                </TouchableOpacity> */}

                {/* Express Shipping Section */}
                {/* <TouchableOpacity style={styles.promoContainer}>
                    <Text style={styles.promoText}>EXPRESS SHIPPING</Text>
                </TouchableOpacity> */}
            </ScrollView>

            {/* WhatsApp Button */}
            <TouchableOpacity style={styles.whatsappButton}>
                <Ionicons name="logo-whatsapp" size={30} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    iconMargin: {
        marginHorizontal: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    categoryImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    categoryText: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
        color: '#000',
    },
    bannerContainer: {
        height: 200,  // Adjust as needed
        marginVertical: 10,
    },
    wrapper: {
        height: 200,  // Adjust as needed
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        width: Dimensions.get('window').width,
        height: 200,  // Adjust as needed
        resizeMode: 'cover',
    },
    dotStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    activeDotStyle: {
        backgroundColor: '#800000',
    },
    promoContainer: {
        backgroundColor: '#800000',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    promoText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    whatsappButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#25D366',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header;



// import React, { useContext } from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Swiper from 'react-native-swiper';
// import { CartContext } from '../CartContext';

// const Header = () => {
//     const { addToCart } = useContext(CartContext);

//     const categories = [
//         { id: 1, name: 'SAREES', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg', price: 1000 },
//         { id: 2, name: 'SALWAR', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg', price: 1200 },
//         { id: 3, name: 'INDOWESTERN', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg', price: 1500 },
//         { id: 4, name: 'LEHENGA', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg', price: 2000 },
//         { id: 5, name: 'KURTIS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg', price: 800 },
//         { id: 6, name: 'GOWNS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg', price: 2500 },
//     ];

//     const banners = [
//         { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' },
//         { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
//         { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' },
//         { imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
//     ];

//     const handleAddToCart = (category) => {
//         const product = {
//             id: category.id,
//             name: category.name,
//             imageUrl: category.imageUrl,
//             price: category.price,
//         };
//         addToCart(product);
//         Alert.alert('Added to Cart', `${category.name} has been added to your cart.`);
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView>
//                 {/* Header Section */}
//                 <View style={styles.header}>
//                     <Icon name="menu" size={30} color="#000" />
//                     <Text style={styles.logoText}>cbazaar</Text>
//                     <View style={styles.headerIcons}>
//                         <Icon name="search" size={25} color="#000" />
//                         <Icon name="favorite-border" size={25} color="#000" style={styles.iconMargin} />
//                         <Icon name="shopping-cart" size={25} color="#000" />
//                     </View>
//                 </View>

//                 {/* Category Section */}
//                 <View style={styles.categoryContainer}>
//                     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                         {categories.map((category, index) => (
//                             <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => handleAddToCart(category)}>
//                                 <Image
//                                     source={{ uri: category.imageUrl }}
//                                     style={styles.categoryImage}
//                                 />
//                                 <Text style={styles.categoryText}>{category.name}</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </ScrollView>
//                 </View>

//                 {/* Banner Section with Swiper */}
//                 <View style={styles.bannerContainer}>
//                     <Swiper
//                         autoplay
//                         autoplayTimeout={5}
//                         showsPagination
//                         style={styles.wrapper}
//                         dotStyle={styles.dotStyle}
//                         activeDotStyle={styles.activeDotStyle}
//                     >
//                         {banners.map((banner, index) => (
//                             <View key={index} style={styles.slide}>
//                                 <Image
//                                     source={{ uri: banner.imageUrl }}
//                                     style={styles.bannerImage}
//                                 />
//                             </View>
//                         ))}
//                     </Swiper>
//                 </View>

//                 {/* Plus Size Section */}
//                 {/* <TouchableOpacity style={styles.promoContainer}>
//                     <Text style={styles.promoText}>PLUS SIZE</Text>
//                 </TouchableOpacity> */}

//                 {/* Express Shipping Section */}
//                 {/* <TouchableOpacity style={styles.promoContainer}>
//                     <Text style={styles.promoText}>EXPRESS SHIPPING</Text>
//                 </TouchableOpacity> */}
//             </ScrollView>

//             {/* WhatsApp Button */}
//             <TouchableOpacity style={styles.whatsappButton}>
//                 <Ionicons name="logo-whatsapp" size={30} color="#fff" />
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 15,
//     },
//     logoText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     headerIcons: {
//         flexDirection: 'row',
//     },
//     iconMargin: {
//         marginHorizontal: 10,
//     },
//     categoryContainer: {
//         flexDirection: 'row',
//         marginVertical: 10,
//         paddingHorizontal: 10,
//     },
//     categoryItem: {
//         alignItems: 'center',
//         marginRight: 20,
//     },
//     categoryImage: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//     },
//     categoryText: {
//         marginTop: 5,
//         textAlign: 'center',
//         fontSize: 12,
//         color: '#000',
//     },
//     bannerContainer: {
//         height: 200,  // Adjust as needed
//         marginVertical: 10,
//     },
//     wrapper: {
//         height: 200,  // Adjust as needed
//     },
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     bannerImage: {
//         width: Dimensions.get('window').width,
//         height: 200,  // Adjust as needed
//         resizeMode: 'cover',
//     },
//     dotStyle: {
//         backgroundColor: 'rgba(255, 255, 255, 0.5)',
//     },
//     activeDotStyle: {
//         backgroundColor: '#800000',
//     },
//     promoContainer: {
//         backgroundColor: '#800000',
//         paddingVertical: 15,
//         paddingHorizontal: 10,
//         marginVertical: 5,
//         borderRadius: 10,
//     },
//     promoText: {
//         fontSize: 18,
//         color: '#fff',
//         textAlign: 'center',
//     },
//     whatsappButton: {
//         position: 'absolute',
//         bottom: 20,
//         right: 20,
//         backgroundColor: '#25D366',
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default Header;
