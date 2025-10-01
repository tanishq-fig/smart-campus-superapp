import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { selectColors } from '../../store/slices/themeSlice';
import { setUser, setRole } from '../../store/slices/authSlice';
import { Button, Input } from '../../components';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    // Mock login - replace with actual Firebase auth
    setTimeout(() => {
      dispatch(setUser({ email, id: '123', name: 'Test User' }));
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
          <Ionicons name="school" size={80} color="#FFF" style={styles.logo} />
          <Text style={styles.title}>Smart Campus</Text>
          <Text style={styles.subtitle}>SuperApp</Text>

          <View style={styles.formContainer}>
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Ionicons name="mail-outline" size={20} color={colors.textSecondary} />}
            />
            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              icon={<Ionicons name="lock-closed-outline" size={20} color={colors.textSecondary} />}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
              style={styles.forgotButton}
            >
              <Text style={[styles.forgotText, { color: colors.card }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <Button
              title="Login"
              onPress={handleLogin}
              loading={loading}
              style={styles.loginButton}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('RoleSelection')}
              style={styles.registerButton}
            >
              <Text style={[styles.registerText, { color: colors.card }]}>
                Don't have an account? <Text style={styles.registerBold}>Register</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#FFF',
    marginBottom: 48,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotText: {
    fontSize: 14,
  },
  loginButton: {
    marginTop: 24,
  },
  registerButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
  },
  registerBold: {
    fontWeight: '700',
  },
});

export default LoginScreen;
