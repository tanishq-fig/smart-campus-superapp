import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const HostelScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const roomInfo = {
    roomNumber: 'A-204',
    block: 'A Block',
    floor: 2,
    capacity: 2,
  };

  const maintenanceRequests = [
    { id: '1', title: 'AC not working', status: 'in_progress', date: '2024-01-15' },
    { id: '2', title: 'Water leakage', status: 'resolved', date: '2024-01-10' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Hostel"
        subtitle="Room & Maintenance"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Room Information</Text>
        <Card>
          <View style={styles.roomCard}>
            <View style={[styles.roomIcon, { backgroundColor: colors.primary + '20' }]}>
              <Ionicons name="bed" size={32} color={colors.primary} />
            </View>
            <View style={styles.roomDetails}>
              <Text style={[styles.roomNumber, { color: colors.text }]}>{roomInfo.roomNumber}</Text>
              <Text style={[styles.roomInfo, { color: colors.textSecondary }]}>
                {roomInfo.block} • Floor {roomInfo.floor}
              </Text>
              <Text style={[styles.roomCapacity, { color: colors.textSecondary }]}>
                Capacity: {roomInfo.capacity} students
              </Text>
            </View>
          </View>
        </Card>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Maintenance Requests</Text>
        {maintenanceRequests.map((request) => (
          <Card key={request.id}>
            <View style={styles.requestCard}>
              <View style={styles.requestDetails}>
                <Text style={[styles.requestTitle, { color: colors.text }]}>{request.title}</Text>
                <Text style={[styles.requestDate, { color: colors.textSecondary }]}>
                  {request.date}
                </Text>
              </View>
              <View style={[
                styles.statusBadge,
                { backgroundColor: request.status === 'resolved' ? colors.success : colors.warning }
              ]}>
                <Text style={styles.statusText}>{request.status}</Text>
              </View>
            </View>
          </Card>
        ))}

        <Button
          title="New Maintenance Request"
          onPress={() => navigation.navigate('NewMaintenanceRequest')}
          style={styles.newRequestButton}
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
    marginTop: 16,
    marginBottom: 12,
  },
  roomCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  roomDetails: {
    flex: 1,
  },
  roomNumber: {
    fontSize: 24,
    fontWeight: '700',
  },
  roomInfo: {
    fontSize: 14,
    marginTop: 4,
  },
  roomCapacity: {
    fontSize: 14,
    marginTop: 2,
  },
  requestCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  requestDetails: {
    flex: 1,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  requestDate: {
    fontSize: 14,
    marginTop: 4,
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
  newRequestButton: {
    marginTop: 24,
  },
});

export default HostelScreen;
