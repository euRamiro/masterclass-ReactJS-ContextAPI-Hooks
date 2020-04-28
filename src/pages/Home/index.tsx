import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {logadoContext} from '../../contexts/logado';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Home: React.FC = () => {
  const {user, sair} = logadoContext();
  function handleSair() {
    sair();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{user?.name}...está logado.</Text>
      <Button title="Sair" onPress={handleSair} />
    </View>
  );
};

export default Home;
