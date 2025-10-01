import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectColors } from '../../store/slices/themeSlice';
import { logout } from '../../store/slices/authSlice';
import { Card } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const modules = [
  { id: 'canteen', name: 'Canteen', icon: 'restaurant', color: '#FF6B6B', route: 'Canteen' },
  { id: 'cleanliness', name: 'Cleanliness', icon: 'sparkles', color: '#4ECDC4', route: 'Cleanliness' },
  { id: 'lostFound', name: 'Lost & Found', icon: 'search', color: '#FFD93D', route: 'LostFound' },
  { id: 'events', name: 'Events', icon: 'calendar', color: '#A8E6CF', route: 'Events' },
  { id: 'library', name: 'Library', icon: 'library', color: '#6C5CE7', route: 'Library' },
  { id: 'hostel', name: 'Hostel', icon: 'bed', color: '#FD79A8', route: 'Hostel' },
  { id: 'transport', name: 'Transport', icon: 'bus', color: '#74B9FF', route: 'Transport' },
  { id: 'academic', name: 'Academic', icon: 'school', color: '#A29BFE', route: 'Academic' },
  { id: 'marketplace', name: 'Marketplace', icon: 'cart', color: '#FDCB6E', route: 'Marketplace' },
  { id: 'gamification', name: 'Gamification', icon: 'trophy', color: '#55EFC4', route: 'Gamification' },
];

const StudentDashboard = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const points = useSelector((state) => state.gamification.points);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>{user?.name || 'Student'}</Text>
          </View>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Ionicons name="trophy" size={24} color="#FFD700" />
            <Text style={styles.statValue}>{points || 0}</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="flame" size={24} color="#FF6B6B" />
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="star" size={24} color="#4ECDC4" />
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Modules</Text>
        <View style={styles.modulesGrid}>
          {modules.map((module) => (
            <TouchableOpacity
              key={module.id}
              style={styles.moduleCard}
              onPress={() => navigation.navigate(module.route)}
            >
              <View style={[styles.moduleIconContainer, { backgroundColor: module.color + '20' }]}>
                <Ionicons name={module.icon} size={32} color={module.color} />
              </View>
              <Text style={[styles.moduleName, { color: colors.text }]}>{module.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
        <Card onPress={() => navigation.navigate('Canteen')}>
          <View style={styles.actionCard}>
            <Ionicons name="restaurant" size={24} color={colors.primary} />
            <View style={styles.actionContent}>
              <Text style={[styles.actionTitle, { color: colors.text }]}>Order Food</Text>
              <Text style={[styles.actionSubtitle, { color: colors.textSecondary }]}>
                Browse menu and order
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </View>
        </Card>
        <Card onPress={() => navigation.navigate('Transport')}>
          <View style={styles.actionCard}>
            <Ionicons name="bus" size={24} color={colors.primary} />
            <View style={styles.actionContent}>
              <Text style={[styles.actionTitle, { color: colors.text }]}>Track Bus</Text>
              <Text style={[styles.actionSubtitle, { color: colors.textSecondary }]}>
                Live bus tracking
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
  },
  logoutButton: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#FFF',
    opacity: 0.8,
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 16,
  },
  modulesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  moduleCard: {
    width: '48%',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  moduleIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  moduleName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionContent: {
    flex: 1,
    marginLeft: 16,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  actionSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default StudentDashboard;
