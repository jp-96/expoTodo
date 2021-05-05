import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar as ReactNStatubBar, Platform,
         ScrollView,
         FlatList,
         TextInput,
         Button,
         KeyboardAvoidingView,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : ReactNStatubBar.currentHeight;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      currentIndex: 0,
      inputText: "",
    };
  }

  onAddItem = () => {
    const title = this.state.inputText;
    if (title == "") {
      return;
    }
    const index = this.state.currentIndex + 1;
    const newTodo = {index: index, title: title, done: false};
    const todo = [...this.state.todo, newTodo];
    this.setState({
      todo: todo,
      currentIndex: index,
      inputText: "",
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
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
          <TextInput
            onChangeText={(text) => this.setState({inputText: text})}
            value={this.state.inputText}
            style={styles.inputText}
          />
          <Button
            onPress={this.onAddItem}
            title="Add"
            color="#00FF00"
            style={styles.inputButton}
          />
        </View>
      </KeyboardAvoidingView>
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
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
  },
  inputButton: {
    width: 100,
  },
});
