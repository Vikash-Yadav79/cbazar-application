// import React from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Swiper from 'react-native-swiper';

// export default function Header() {
//     // Array of categories with their respective images
//     const categories = [
//         { name: 'SAREES', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' },
//         { name: 'SALWAR', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' },
//         { name: 'INDOWESTERN', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' },
//         { name: 'LEHENGA', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug22.jpg' },
//         { name: 'KURTIS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug23.jpg' },
//         { name: 'GOWNS', imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug24.jpg' },
//     ];

//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity>
//                     <Icon name="menu" size={30} color="#000" />
//                 </TouchableOpacity>
//                 <Text style={styles.logo}>cbazaar</Text>
//                 <View style={styles.headerIcons}>
//                     <TouchableOpacity>
//                         <Icon name="search" size={25} color="#000" />
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <Icon name="heart-outline" size={25} color="#000" />
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <Icon name="cart-outline" size={25} color="#000" />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* Category Scroll */}
//             <ScrollView horizontal={true} style={styles.categoryScroll} contentContainerStyle={styles.categoryContent}>
//                 {categories.map((item, index) => (
//                     <View key={index} style={styles.categoryItem}>
//                         <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
//                         <Text>{item.name}</Text>
//                     </View>
//                 ))}
//             </ScrollView>

//             {/* Image Slider */}
//             <Swiper style={[styles.wrapper, { marginTop: -10 }]} showsButtons={true}>
//                 <View style={styles.slide}>
//                     <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg' }} style={styles.sliderImage} />
//                 </View>
//                 <View style={styles.slide}>
//                     <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg' }} style={styles.sliderImage} />
//                 </View>
//                 <View style={styles.slide}>
//                     <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg' }} style={styles.sliderImage} />
//                 </View>
//                 <View style={styles.slide}>
//                     <Image source={{ uri: 'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug22.jpg' }} style={styles.sliderImage} />
//                 </View>
//             </Swiper>

//             {/* Feature Blocks */}
//             <View style={styles.featureSection}>
//                 <View style={styles.featureItem}>
//                     <Text style={styles.featureText}>PLUS SIZE</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                     <Text style={styles.featureText}>EXPRESS SHIPPING</Text>
//                 </View>
//             </View>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor: '#fff',
//     },
//     logo: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     headerIcons: {
//         flexDirection: 'row',
//     },
//     categoryScroll: {
//         marginVertical: 0, // No vertical margin
//     },
//     categoryContent: {
//         paddingVertical: 0, // Removed vertical padding
//     },
//     categoryItem: {
//         alignItems: 'center',
//         marginHorizontal: 10,
//     },
//     categoryImage: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//     },
//     wrapper: {
//         height: 200,
//     },
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sliderImage: {
//         width: '100%',
//         height: '100%',
//     },
//     featureSection: {
//         padding: 10,
//     },
//     featureItem: {
//         backgroundColor: '#8B0000',
//         marginVertical: 10,
//         padding: 20,
//         borderRadius: 10,
//     },
//     featureText: {
//         color: '#fff',
//         fontSize: 18,
//         textAlign: 'center',
//     },
// });







