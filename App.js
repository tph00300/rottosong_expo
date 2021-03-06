import { StyleSheet, Text, View, ViewComponent } from 'react-native';
import { Video } from 'expo-av';
import { DangerZone } from 'expo';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
          <Text>인생역전 뮤직게임쇼로또싱어</Text>
          <Image
            style={{flex: 1}}
            source={require('./png/title.png')}
          />
      </View>
      <View style={styles.main}>
        <View style={styles.searchbox}>
          <Text>{screenHeight-Constants.statusBarHeight}</Text>
        </View>
        <View style={styles.searchbox}>

        </View>
        <View style={styles.listbox}>

        </View>
        <View style={styles.bottombar}>

        </View>
        <View style={styles.bottombar}>

        </View>
      </View>    
      
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
    backgroundColor: '#fff',
    //backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topbar: {
    //height : 100,
    flex: 5,
    backgroundColor: 'gray',
  },
  main: {
    flex: 35,
    backgroundColor: 'gray',
    alignItems: 'stretch',
  },
  searchbox: {
    //height: 60,
    flex: 3,
    backgroundColor: 'white',
  },
  listbox: {
    flex: 19,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    alignItems: 'stretch',

  },
  bottombar: {
    //height: 100,
    flex: 5,
    backgroundColor: 'gray',
    borderTopWidth: 1,
    borderTopColor: 'black',
  }
});
