import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {logadoContext} from '../../contexts/logado';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const Logar: React.FC = () => {
  const {logado, logar} = logadoContext();
  console.log(logado);
  function handleLogar() {
    logar();
  }

  return (
    <View style={styles.container}>
      <Text>logar...</Text>
      <Button title="Logar" onPress={handleLogar} />
    </View>
  );
};

export default Logar;
