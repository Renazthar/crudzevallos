import { View, Text,StyleSheet,ScrollView,Image, useWindowDimensions} from 'react-native'
import React from 'react'

const index = () => {
  const {width}=useWindowDimensions();
  return (
    <View style={styles.container}>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{flexGrow:0}}
      >
      <Image
      source={require("../../assets/images/banner1.png")}
      style={{width:width,height:200}}
      resizeMode='contain'
      />

      <Image
      source={require("../../assets/images/banner2.png")}
      style={{width:width,height:200}}
      resizeMode='contain'
      />

      <Image
      source={require("../../assets/images/banner3.png")}
      style={{width:width,height:200}}
      resizeMode='contain'
      />
      
      </ScrollView>
      <Text>INICIO</Text>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas atque cumque mollitia provident odio corporis debitis omnis. Neque, reprehenderit iusto velit nostrum reiciendis adipisci explicabo, autem tempore eaque voluptates aliquam!
      Totam mollitia, perspiciatis temporibus odit asperiores possimus molestias. Excepturi ullam ipsa, doloremque temporibus hic unde recusandae nesciunt quos adipisci fugit officia ut, deleniti at quia ea laudantium maxime nulla doloribus?</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
});
