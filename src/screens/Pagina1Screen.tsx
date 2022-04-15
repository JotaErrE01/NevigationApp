import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../themes';

interface Props extends NativeStackScreenProps<any, any> {}

const Pagina1Screen = ( { navigation }: Props ) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 1</Text>

      <Button
        title="Ir a Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};

export default Pagina1Screen;
