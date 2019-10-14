import React from 'react';
import { Text, View } from 'react-native';
export default function FavoritesScreen() {
  return (
    <View>
      <Text>מועדפים</Text>
    </View>
  );
}

FavoritesScreen.navigationOptions = {
  title: 'מועדפים',
  headerTitleStyle: { flex: 1, alignItems: 'flex-start', textAlign: 'right' }
};