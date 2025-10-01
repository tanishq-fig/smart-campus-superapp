import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const buses = [
  { id: '1', route: 'Campus to City Center', nextArrival: '10 mins', status: 'on_time' },
  { id: '2', route: 'Campus to Railway Station', nextArrival: '25 mins', status: 'delayed' },
  { id: '3', route: 'Campus to Airport', nextArrival: '45 mins', status: 'on_time' },
];

const TransportScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Transport"
        subtitle="Track buses & book shuttles"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Live Bus Tracking</Text>
        {buses.map((bus) => (
          <Card key={bus.id}>
            <View style={styles.busCard}>
              <View style={[styles.busIcon, { backgroundColor: colors.primary + '20' }]}>
                <Ionicons name="bus" size={32} color={colors.primary} />
              </View>
              <View style={styles.busDetails}>
                <Text style={[styles.busRoute, { color: colors.text }]}>{bus.route}</Text>
                <View style={styles.busInfo}>
                  <Ionicons name="time" size={16} color={colors.textSecondary} />
                  <Text style={[styles.busArrival, { color: colors.textSecondary }]}>
                    Arrives in {bus.nextArrival}
                  </Text>
                </View>
              </View>
              <View style={[
                styles.statusBadge,
                { backgroundColor: bus.status === 'on_time' ? colors.success : colors.warning }
              ]}>
                <Text style={styles.statusText}>
                  {bus.status === 'on_time' ? 'On Time' : 'Delayed'}
                </Text>
              </View>
            </View>
            <Button title="Track on Map" variant="outline" style={styles.trackButton} />
          </Card>
        ))}

        <Button
          title="Book Shuttle"
          onPress={() => navigation.navigate('BookShuttle')}
          style={styles.bookButton}
        />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  busCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  busIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  busDetails: {
    flex: 1,
  },
  busRoute: {
    fontSize: 16,
    fontWeight: '600',
  },
  busInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  busArrival: {
    fontSize: 14,
    marginLeft: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  trackButton: {
    marginTop: 8,
  },
  bookButton: {
    marginTop: 24,
  },
});

export default TransportScreen;
