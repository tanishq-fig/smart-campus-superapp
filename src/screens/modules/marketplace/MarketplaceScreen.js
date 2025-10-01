import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: '1', title: 'Textbook - Data Structures', price: 500, seller: 'John Doe', category: 'Books', image: '📚' },
  { id: '2', title: 'Scientific Calculator', price: 800, seller: 'Jane Smith', category: 'Electronics', image: '🖩' },
  { id: '3', title: 'Study Lamp', price: 350, seller: 'Bob Wilson', category: 'Accessories', image: '💡' },
];

const MarketplaceScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Marketplace"
        subtitle="Buy & sell on campus"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        {products.map((product) => (
          <Card key={product.id}>
            <View style={styles.productCard}>
              <Text style={styles.productImage}>{product.image}</Text>
              <View style={styles.productDetails}>
                <Text style={[styles.productTitle, { color: colors.text }]}>{product.title}</Text>
                <Text style={[styles.productSeller, { color: colors.textSecondary }]}>
                  Sold by {product.seller}
                </Text>
                <View style={styles.productFooter}>
                  <View style={[styles.categoryBadge, { backgroundColor: colors.secondary + '20' }]}>
                    <Text style={[styles.categoryText, { color: colors.secondary }]}>
                      {product.category}
                    </Text>
                  </View>
                  <Text style={[styles.productPrice, { color: colors.primary }]}>
                    ₹{product.price}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.actions}>
              <Button title="View Details" variant="outline" style={styles.viewButton} />
              <Button title="Chat with Seller" style={styles.chatButton} />
            </View>
          </Card>
        ))}
      </ScrollView>

      <Button
        title="+ Sell an Item"
        onPress={() => navigation.navigate('CreateListing')}
        style={styles.sellButton}
      />
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
    paddingBottom: 80,
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  productImage: {
    fontSize: 64,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  productSeller: {
    fontSize: 14,
    marginTop: 4,
  },
  productFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  viewButton: {
    flex: 1,
  },
  chatButton: {
    flex: 1,
  },
  sellButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
});

export default MarketplaceScreen;
