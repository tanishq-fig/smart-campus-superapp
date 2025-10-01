import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card } from '../../../components';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const badges = [
  { id: '1', name: 'First Login', icon: 'trophy', color: '#FFD700', unlocked: true },
  { id: '2', name: 'Food Explorer', icon: 'restaurant', color: '#FF6B6B', unlocked: true },
  { id: '3', name: 'Library Regular', icon: 'book', color: '#4ECDC4', unlocked: false },
  { id: '4', name: 'Event Organizer', icon: 'calendar', color: '#A8E6CF', unlocked: false },
];

const leaderboard = [
  { rank: 1, name: 'Alice Johnson', points: 2500, avatar: '👩' },
  { rank: 2, name: 'Bob Smith', points: 2350, avatar: '👨' },
  { rank: 3, name: 'Charlie Brown', points: 2200, avatar: '🧑' },
  { rank: 4, name: 'You', points: 1850, avatar: '😊', isCurrentUser: true },
];

const GamificationScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const points = useSelector((state) => state.gamification.points);
  const level = useSelector((state) => state.gamification.level);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Gamification"
        subtitle="Your progress & achievements"
        onBack={() => navigation.goBack()}
      />

      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.profileCard}
      >
        <View style={styles.profileContent}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>😊</Text>
          </View>
          <View style={styles.profileStats}>
            <Text style={styles.levelText}>Level {level || 1}</Text>
            <Text style={styles.pointsText}>{points || 0} Points</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${((points || 0) % 100)}%` }]} />
        </View>
        <Text style={styles.progressText}>{100 - ((points || 0) % 100)} points to next level</Text>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Badges</Text>
        <View style={styles.badgesGrid}>
          {badges.map((badge) => (
            <View key={badge.id} style={[styles.badgeCard, { backgroundColor: colors.card }]}>
              <View style={[
                styles.badgeIcon,
                { backgroundColor: badge.color + '20', opacity: badge.unlocked ? 1 : 0.3 }
              ]}>
                <Ionicons name={badge.icon} size={32} color={badge.color} />
              </View>
              <Text style={[styles.badgeName, { color: colors.text }]}>{badge.name}</Text>
              {badge.unlocked && (
                <View style={styles.checkmark}>
                  <Ionicons name="checkmark-circle" size={20} color={colors.success} />
                </View>
              )}
            </View>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Leaderboard</Text>
        {leaderboard.map((user) => (
          <Card
            key={user.rank}
            style={user.isCurrentUser && { borderColor: colors.primary, borderWidth: 2 }}
          >
            <View style={styles.leaderboardItem}>
              <View style={styles.rankContainer}>
                <Text style={[styles.rankText, { color: colors.text }]}>#{user.rank}</Text>
              </View>
              <Text style={styles.userAvatar}>{user.avatar}</Text>
              <View style={styles.userInfo}>
                <Text style={[styles.userName, { color: colors.text }]}>{user.name}</Text>
                <View style={styles.pointsContainer}>
                  <Ionicons name="trophy" size={16} color="#FFD700" />
                  <Text style={[styles.userPoints, { color: colors.textSecondary }]}>
                    {user.points} pts
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
  profileCard: {
    margin: 16,
    padding: 24,
    borderRadius: 16,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatar: {
    fontSize: 40,
  },
  profileStats: {
    flex: 1,
  },
  levelText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  pointsText: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
    marginTop: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFF',
  },
  progressText: {
    fontSize: 12,
    color: '#FFF',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 12,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  badgeCard: {
    width: '48%',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badgeIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  checkmark: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankContainer: {
    width: 40,
    alignItems: 'center',
  },
  rankText: {
    fontSize: 18,
    fontWeight: '700',
  },
  userAvatar: {
    fontSize: 40,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  userPoints: {
    fontSize: 14,
    marginLeft: 4,
  },
});

export default GamificationScreen;
