import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { selectColors } from '../../store/slices/themeSlice';
import { Ionicons } from '@expo/vector-icons';

const roles = [
  { id: 'student', name: 'Student', icon: 'person', description: 'Access courses, library, events' },
  { id: 'faculty', name: 'Faculty', icon: 'people', description: 'Manage classes, attendance, grades' },
  { id: 'authority', name: 'Authority', icon: 'shield-checkmark', description: 'Review reports, manage facilities' },
  { id: 'admin', name: 'Admin', icon: 'settings', description: 'Full system access and control' },
  { id: 'guest', name: 'Guest', icon: 'eye', description: 'Limited access to public features' },
];

const RoleSelectionScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);

  const handleRoleSelect = (role) => {
    navigation.navigate('Register', { role });
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.title}>Select Your Role</Text>
          <Text style={styles.subtitle}>Choose the role that best describes you</Text>

          <View style={styles.rolesContainer}>
            {roles.map((role) => (
              <TouchableOpacity
                key={role.id}
                onPress={() => handleRoleSelect(role)}
                style={styles.roleCard}
              >
                <Ionicons name={role.icon} size={40} color={colors.primary} />
                <Text style={[styles.roleName, { color: colors.text }]}>{role.name}</Text>
                <Text style={[styles.roleDescription, { color: colors.textSecondary }]}>
                  {role.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  backButton: {
    marginBottom: 24,
    padding: 8,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
    marginBottom: 32,
  },
  rolesContainer: {
    gap: 16,
  },
  roleCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  roleName: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
  },
  roleDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default RoleSelectionScreen;
