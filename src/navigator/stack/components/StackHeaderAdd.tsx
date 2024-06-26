import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export function StackHeaderAdd({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 15 }}>
      <Image source={require('@assets/images/add.png')} />
    </TouchableOpacity>
  );
}
