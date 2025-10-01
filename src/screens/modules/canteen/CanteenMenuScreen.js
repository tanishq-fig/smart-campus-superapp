import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { addToCart } from '../../../store/slices/canteenSlice';
import { Header, Card, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  { id: '1', name: 'Veg Burger', price: 80, category: 'Fast Food', rating: 4.5, image: '🍔' },
  { id: '2', name: 'Pizza Margherita', price: 150, category: 'Pizza', rating: 4.7, image: '🍕' },
  { id: '3', name: 'Pasta Alfredo', price: 120, category: 'Italian', rating: 4.3, image: '🍝' },
  { id: '4', name: 'Chicken Biryani', price: 180, category: 'Indian', rating: 4.8, image: '🍛' },
  { id: '5', name: 'Masala Dosa', price: 60, category: 'South Indian', rating: 4.6, image: '🥞' },
  { id: '6', name: 'Cold Coffee', price: 50, category: 'Beverages', rating: 4.4, image: '☕' },
];

const CanteenMenuScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.canteen.cart);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Canteen Menu"
        subtitle="Order your favorite food"
        onBack={() => navigation.goBack()}
        rightAction={() => navigation.navigate('CanteenCart')}
        rightIcon="cart"
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {cart.length > 0 && (
          <Card onPress={() => navigation.navigate('CanteenCart')} style={styles.cartBanner}>
            <View style={styles.cartBannerContent}>
              <View style={styles.cartInfo}>
                <Ionicons name="cart" size={24} color={colors.primary} />
                <Text style={[styles.cartText, { color: colors.text }]}>
                  {cart.length} item(s) in cart
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
            </View>
          </Card>
        )}

        {menuItems.map((item) => (
          <Card key={item.id}>
            <View style={styles.menuItem}>
              <Text style={styles.itemImage}>{item.image}</Text>
              <View style={styles.itemDetails}>
                <Text style={[styles.itemName, { color: colors.text }]}>{item.name}</Text>
                <Text style={[styles.itemCategory, { color: colors.textSecondary }]}>
                  {item.category}
                </Text>
                <View style={styles.itemFooter}>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={[styles.rating, { color: colors.text }]}>{item.rating}</Text>
                  </View>
                  <Text style={[styles.price, { color: colors.primary }]}>₹{item.price}</Text>
                </View>
              </View>
              <Button
                title="Add"
                onPress={() => handleAddToCart(item)}
                style={styles.addButton}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  cartBanner: {
    marginBottom: 16,
  },
  cartBannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    fontSize: 48,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemCategory: {
    fontSize: 14,
    marginTop: 4,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rating: {
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
  addButton: {
    width: 80,
    marginLeft: 8,
  },
});

export default CanteenMenuScreen;
