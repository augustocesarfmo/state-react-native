import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

// Dados iniciais
const data = [
  {
    name: 'Banana',
    id: uuidv4(),
  },
  {
    name: 'Maça',
    id: uuidv4(),
  },
  {
    name: 'Uva',
    id: uuidv4(),
  },
];

const App = () => {
  // Estado da aplicação
  const [products, setProducts] = useState(data);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Método para adição de novos produtos ao estado.
   */
  function handleAddProduct() {
    const newProduct = {name: `Produto ${getRandomInt(1, 100)}`, id: uuidv4()};

    setProducts([newProduct, ...products]);
  }

  /**
   * Método para remoção de itens do estado.
   */
  function handleRemoveProduct(item) {
    const filteredProducts = products.filter(product => product.id !== item.id);

    setProducts(filteredProducts);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>LISTA DE COMPRAS DE SUPERMERCADO</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollViewContainer}>
        {/* Método de listagem dos produtos do estado */}
        {products.map(item => (
          <View style={styles.productContainer} key={item.id}>
            <Text style={styles.productText}>{item.name}</Text>
            <Button
              title="Remover"
              onPress={() => handleRemoveProduct(item)}
              color="red"
            />
          </View>
        ))}
      </ScrollView>
      <Button title="Adicionar produto" onPress={handleAddProduct} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    marginVertical: 15,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 5,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 15,
  },
  productText: {
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
