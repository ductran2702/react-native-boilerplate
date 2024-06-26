import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './Stack.typeDefs';
import { DrawerProps } from '../drawer/Drawer.typeDefs';
import { StackHeaderLeft, StackHeaderTitle } from './components';
import { colors } from '@theme';

// views
import Home from '@views/Home';
import Details from '@views/Details';
import Profile from '@views/Profile';
import Card from '@views/Card';
import { StackHeaderAdd } from './components/StackHeaderAdd';
import { StackHeaderBack } from './components/StackHeaderBack';

const Stack = createNativeStackNavigator<StackParamList>();

const navigationProps = {
  headerTintColor: colors.darkPurple,
  headerStyle: { backgroundColor: colors.white },
  headerTitleStyle: { fontSize: 18 },
};

export function HomeStackNavigator({ navigation }: DrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        component={Home}
        name="HomeStack"
        options={{
          title: 'Home',
          headerTitle: () => <StackHeaderTitle />,
          headerLeft: () => <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        component={Details}
        name="DetailsStack"
        options={{
          title: 'Details',
          headerTitle: () => <StackHeaderTitle />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export function ProfileStackNavigator({ navigation }: DrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        component={Profile}
        name="ProfileStack"
        options={{
          title: 'Card',
          headerTitle: () => <StackHeaderTitle />,
          headerLeft: () => <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        component={Card}
        name="CardStack"
        options={{
          title: 'Card list',
          headerTitle: () => <StackHeaderTitle />,
          headerLeft: () => (
            <StackHeaderBack
              onPress={() => navigation.navigate('ProfileStack', { from: 'Card list' })}
            />
          ),
          headerRight: () => <StackHeaderAdd onPress={() => navigation.goBack()} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
