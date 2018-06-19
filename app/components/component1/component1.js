import React, {Component} from 'react';
import {AppRegistry, Text, View,} from 'react-native';

export default class Component1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:'Brad',
			age:31,
			showName: false,
			message: this.props.message
		}
	}

	static defaultProps = {
		message: "Hi There'"
	}

  render(){
  	console.log('HELLO');
  	let name = this.state.showName ? this.state.name : 'No name';
    return(
        <View>
          <Text>{this.state.message}</Text>
          <Text>{name}</Text>
          <Text>{this.state.age}</Text>
        </View>
      );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);