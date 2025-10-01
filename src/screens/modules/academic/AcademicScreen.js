import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const timetable = [
  { id: '1', subject: 'Data Structures', time: '09:00 - 10:00', room: 'Lab 101', day: 'Monday' },
  { id: '2', subject: 'Algorithms', time: '10:15 - 11:15', room: 'Room 202', day: 'Monday' },
  { id: '3', subject: 'Database Systems', time: '11:30 - 12:30', room: 'Lab 103', day: 'Monday' },
];

const AcademicScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Academic"
        subtitle="Timetable & Attendance"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Ionicons name="calendar" size={24} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.text }]}>85%</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Attendance</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Ionicons name="school" size={24} color={colors.success} />
            <Text style={[styles.statValue, { color: colors.text }]}>8.5</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>CGPA</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Ionicons name="book" size={24} color={colors.secondary} />
            <Text style={[styles.statValue, { color: colors.text }]}>6</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Courses</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Today's Classes</Text>
        {timetable.map((class_) => (
          <Card key={class_.id}>
            <View style={styles.classCard}>
              <View style={[styles.timeBox, { backgroundColor: colors.primary + '20' }]}>
                <Ionicons name="time" size={24} color={colors.primary} />
                <Text style={[styles.timeText, { color: colors.primary }]}>{class_.time}</Text>
              </View>
              <View style={styles.classDetails}>
                <Text style={[styles.subjectName, { color: colors.text }]}>{class_.subject}</Text>
                <View style={styles.classInfo}>
                  <Ionicons name="location" size={14} color={colors.textSecondary} />
                  <Text style={[styles.roomText, { color: colors.textSecondary }]}>
                    {class_.room}
                  </Text>
                </View>
              </View>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  classCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
    minWidth: 80,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  classDetails: {
    flex: 1,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
  },
  classInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  roomText: {
    fontSize: 14,
    marginLeft: 4,
  },
});

export default AcademicScreen;
