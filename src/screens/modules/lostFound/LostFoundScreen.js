import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const lostItems = [
  { id: '1', name: 'Blue Backpack', location: 'Library', date: '2024-01-15', status: 'active' },
  { id: '2', name: 'iPhone 13', location: 'Canteen', date: '2024-01-14', status: 'claimed' },
  { id: '3', name: 'Calculator', location: 'Lab Building', date: '2024-01-13', status: 'active' },
];

const LostFoundScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const [activeTab, setActiveTab] = useState('lost');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Lost & Found"
        subtitle="Find your lost items"
        onBack={() => navigation.goBack()}
      />
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'lost' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('lost')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'lost' ? colors.primary : colors.textSecondary }]}>
            Lost Items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'found' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('found')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'found' ? colors.primary : colors.textSecondary }]}>
            Found Items
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {lostItems.map((item) => (
          <Card key={item.id}>
            <View style={styles.itemCard}>
              <View style={[styles.iconContainer, { backgroundColor: colors.primary + '20' }]}>
                <Ionicons name="search" size={24} color={colors.primary} />
              </View>
              <View style={styles.itemDetails}>
                <Text style={[styles.itemName, { color: colors.text }]}>{item.name}</Text>
                <Text style={[styles.itemLocation, { color: colors.textSecondary }]}>
                  📍 {item.location}
                </Text>
                <Text style={[styles.itemDate, { color: colors.textSecondary }]}>
                  {item.date}
                </Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: item.status === 'active' ? colors.success : colors.textSecondary }]}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('ReportLostItem')}
      >
        <Ionicons name="add" size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemLocation: {
    fontSize: 14,
    marginTop: 4,
  },
  itemDate: {
    fontSize: 12,
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default LostFoundScreen;
