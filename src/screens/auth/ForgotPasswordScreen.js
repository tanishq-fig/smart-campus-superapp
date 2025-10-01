import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { selectColors } from '../../store/slices/themeSlice';
import { Button, Input } from '../../components';
import { Ionicons } from '@expo/vector-icons';

const ForgotPasswordScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSendReset = async () => {
    setLoading(true);
    // Mock send - replace with actual Firebase password reset
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.container}
    >
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Ionicons name="mail" size={80} color="#FFF" style={styles.icon} />
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          {sent
            ? "Check your email for reset instructions"
            : "Enter your email to receive password reset instructions"}
        </Text>

        {!sent && (
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

            <Button
              title="Send Reset Link"
              onPress={handleSendReset}
              loading={loading}
              style={styles.sendButton}
            />
          </View>
        )}

        {sent && (
          <Button
            title="Back to Login"
            onPress={() => navigation.navigate('Login')}
            style={styles.backToLoginButton}
          />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 24,
    padding: 8,
  },
  icon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 32,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  sendButton: {
    marginTop: 24,
  },
  backToLoginButton: {
    marginTop: 24,
    width: '100%',
    maxWidth: 400,
  },
});

export default ForgotPasswordScreen;
