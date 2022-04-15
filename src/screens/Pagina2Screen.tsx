// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes';

const Pagina2Screen = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 2</Text>

      <Button
        title="Ir a Pagina 3"
        // onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};

export default Pagina2Screen;
