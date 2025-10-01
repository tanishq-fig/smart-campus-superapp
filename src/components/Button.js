import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { selectColors } from '../store/slices/themeSlice';

const Button = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false, 
  disabled = false,
  style,
  textStyle,
  icon
}) => {
  const colors = useSelector(selectColors);

  const getButtonColors = () => {
    if (variant === 'primary') {
      return [colors.primary, colors.secondary];
    } else if (variant === 'secondary') {
      return [colors.secondary, colors.primary];
    } else if (variant === 'outline') {
      return ['transparent', 'transparent'];
    }
    return [colors.primary, colors.secondary];
  };

  const buttonContent = (
    <>
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <>
          {icon}
          <Text style={[
            styles.buttonText, 
            variant === 'outline' && { color: colors.primary },
            textStyle
          ]}>
            {title}
          </Text>
        </>
      )}
    </>
  );

  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.button,
          styles.outlineButton,
          { borderColor: colors.primary },
          disabled && styles.disabled,
          style
        ]}
      >
        {buttonContent}
      </TouchableOpacity>
    );
  }

  return (
    <LinearGradient
      colors={getButtonColors()}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.button, disabled && styles.disabled, style]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={styles.buttonInner}
      >
        {buttonContent}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 8,
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  outlineButton: {
    borderWidth: 2,
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
