import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { selectColors } from '../../store/slices/themeSlice';
import { setUser, setRole } from '../../store/slices/authSlice';
import { Button, Input } from '../../components';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation, route }) => {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();
  const selectedRole = route?.params?.role;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    // Mock registration - replace with actual Firebase auth
    setTimeout(() => {
      dispatch(setUser({ ...formData, id: '123' }));
      dispatch(setRole(selectedRole?.id || 'student'));
      setLoading(false);
    }, 1000);
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

          <Text style={styles.title}>Create Account</Text>
          {selectedRole && (
            <Text style={styles.subtitle}>Registering as {selectedRole.name}</Text>
          )}

          <View style={styles.formContainer}>
            <Input
              label="Full Name"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Enter your full name"
              icon={<Ionicons name="person-outline" size={20} color={colors.textSecondary} />}
            />
            <Input
              label="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Ionicons name="mail-outline" size={20} color={colors.textSecondary} />}
            />
            <Input
              label="Phone"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              icon={<Ionicons name="call-outline" size={20} color={colors.textSecondary} />}
            />
            <Input
              label="Password"
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              placeholder="Create a password"
              secureTextEntry
              icon={<Ionicons name="lock-closed-outline" size={20} color={colors.textSecondary} />}
            />
            <Input
              label="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
              placeholder="Confirm your password"
              secureTextEntry
              icon={<Ionicons name="lock-closed-outline" size={20} color={colors.textSecondary} />}
            />

            <Button
              title="Register"
              onPress={handleRegister}
              loading={loading}
              style={styles.registerButton}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}
            >
              <Text style={[styles.loginText, { color: colors.card }]}>
                Already have an account? <Text style={styles.loginBold}>Login</Text>
              </Text>
            </TouchableOpacity>
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
  formContainer: {
    width: '100%',
  },
  registerButton: {
    marginTop: 24,
  },
  loginButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
  },
  loginBold: {
    fontWeight: '700',
  },
});

export default RegisterScreen;
