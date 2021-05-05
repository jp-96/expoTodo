import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar as ReactNStatubBar, Platform,
         ScrollView,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : ReactNStatubBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <Text>フィルターがここに配置される</Text>
        </View>
        <ScrollView style={styles.todolist}>
          <Text>ToDoリストがここに配置される</Text>
        </ScrollView>
        <View style={styles.input}>
          <Text>テキスト入力がここに配置される</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1,
  },
  input: {
    height: 30,
  },
});
