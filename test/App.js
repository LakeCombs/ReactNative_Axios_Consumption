import React from 'react';
import Header from './src/components/Header';
import { View } from 'react-native';
// import ImageNow from './src/components/ImageNow';
import AlbumList from './src/components/AlbumList';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText='Music Villa' />
      {/* <ImageNow /> */}
      <AlbumList />
    </View>
  )
}


export default App;
 