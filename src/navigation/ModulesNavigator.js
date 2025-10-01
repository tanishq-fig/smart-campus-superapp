import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CanteenMenuScreen } from '../screens/modules/canteen';
import { CleanlinessReportScreen } from '../screens/modules/cleanliness';
import { LostFoundScreen } from '../screens/modules/lostFound';
import { EventsScreen } from '../screens/modules/events';
import { LibraryScreen } from '../screens/modules/library';
import { HostelScreen } from '../screens/modules/hostel';
import { TransportScreen } from '../screens/modules/transport';
import { AcademicScreen } from '../screens/modules/academic';
import { MarketplaceScreen } from '../screens/modules/marketplace';
import { GamificationScreen } from '../screens/modules/gamification';

const Stack = createStackNavigator();

const ModulesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Canteen" component={CanteenMenuScreen} />
      <Stack.Screen name="Cleanliness" component={CleanlinessReportScreen} />
      <Stack.Screen name="LostFound" component={LostFoundScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Hostel" component={HostelScreen} />
      <Stack.Screen name="Transport" component={TransportScreen} />
      <Stack.Screen name="Academic" component={AcademicScreen} />
      <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
      <Stack.Screen name="Gamification" component={GamificationScreen} />
    </Stack.Navigator>
  );
};

export default ModulesNavigator;
