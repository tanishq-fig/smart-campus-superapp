import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../store/slices/themeSlice';
import { BlurView } from 'expo-blur';

const Card = ({ children, onPress, style, blurred = false }) => {
  const colors = useSelector(selectColors);

  const CardWrapper = onPress ? TouchableOpacity : View;

  if (blurred) {
    return (
      <CardWrapper onPress={onPress} style={[styles.card, style]}>
        <BlurView intensity={80} tint="light" style={styles.blurContainer}>
          {children}
        </BlurView>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
        style,
      ]}
    >
      {children}
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  blurContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    padding: 16,
  },
});

export default Card;
