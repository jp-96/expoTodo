import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar as ReactNStatubBar, Platform,
         ScrollView,
         FlatList,
         EventSubscriptionVendor,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : ReactNStatubBar.currentHeight;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {index: 1, title: "原稿を書く", done: false},
        {index: 2, title: "散歩をする", done: false},
        {index: 3, title: "昼を食べる", done: false}
      ],
      currentIndex: 2
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <Text>フィルターがここに配置される</Text>
        </View>
        <ScrollView style={styles.todolist}>
          <FlatList data={this.state.todo}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + item.index}
          />
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
