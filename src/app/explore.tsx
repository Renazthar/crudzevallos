import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text>NOSOTROS</Text>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas atque cumque mollitia provident odio corporis debitis omnis. Neque, reprehenderit iusto velit nostrum reiciendis adipisci explicabo, autem tempore eaque voluptates aliquam!
      Totam mollitia, perspiciatis temporibus odit asperiores possimus molestias. Excepturi ullam ipsa, doloremque temporibus hic unde recusandae nesciunt quos adipisci fugit officia ut, deleniti at quia ea laudantium maxime nulla doloribus?</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
