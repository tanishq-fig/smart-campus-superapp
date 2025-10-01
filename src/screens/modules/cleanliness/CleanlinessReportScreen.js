import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { addReport } from '../../../store/slices/cleanlinessSlice';
import { Header, Input, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const CleanlinessReportScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });

  const handleSubmit = () => {
    const report = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    dispatch(addReport(report));
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Report Issue"
        subtitle="Help keep campus clean"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Input
          label="Issue Title"
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, title: text })}
          placeholder="Brief description"
          icon={<Ionicons name="document-text-outline" size={20} color={colors.textSecondary} />}
        />
        <Input
          label="Location"
          value={formData.location}
          onChangeText={(text) => setFormData({ ...formData, location: text })}
          placeholder="Where is the issue?"
          icon={<Ionicons name="location-outline" size={20} color={colors.textSecondary} />}
        />
        <Input
          label="Detailed Description"
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
          placeholder="Describe the issue in detail"
          multiline
          numberOfLines={4}
          icon={<Ionicons name="create-outline" size={20} color={colors.textSecondary} />}
        />
        <Button title="Submit Report" onPress={handleSubmit} />
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
});

export default CleanlinessReportScreen;
