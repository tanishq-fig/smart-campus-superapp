import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const events = [
  { id: '1', title: 'Tech Fest 2024', date: '2024-02-15', venue: 'Auditorium', attendees: 250 },
  { id: '2', title: 'Cultural Night', date: '2024-02-20', venue: 'Open Theatre', attendees: 500 },
  { id: '3', title: 'Sports Day', date: '2024-02-25', venue: 'Sports Ground', attendees: 300 },
];

const EventsScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Events"
        subtitle="Upcoming campus events"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        {events.map((event) => (
          <Card key={event.id}>
            <View style={styles.eventCard}>
              <View style={[styles.dateBox, { backgroundColor: colors.primary }]}>
                <Text style={styles.dateDay}>{new Date(event.date).getDate()}</Text>
                <Text style={styles.dateMonth}>
                  {new Date(event.date).toLocaleString('default', { month: 'short' })}
                </Text>
              </View>
              <View style={styles.eventDetails}>
                <Text style={[styles.eventTitle, { color: colors.text }]}>{event.title}</Text>
                <View style={styles.eventInfo}>
                  <Ionicons name="location" size={14} color={colors.textSecondary} />
                  <Text style={[styles.eventVenue, { color: colors.textSecondary }]}>
                    {event.venue}
                  </Text>
                </View>
                <View style={styles.eventInfo}>
                  <Ionicons name="people" size={14} color={colors.textSecondary} />
                  <Text style={[styles.eventAttendees, { color: colors.textSecondary }]}>
                    {event.attendees} attending
                  </Text>
                </View>
              </View>
            </View>
            <Button title="Register" style={styles.registerButton} />
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
  eventCard: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dateBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  dateDay: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  dateMonth: {
    fontSize: 12,
    color: '#FFF',
    textTransform: 'uppercase',
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  eventVenue: {
    fontSize: 14,
    marginLeft: 4,
  },
  eventAttendees: {
    fontSize: 14,
    marginLeft: 4,
  },
  registerButton: {
    marginTop: 8,
  },
});

export default EventsScreen;
