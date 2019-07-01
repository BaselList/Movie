import React from 'react';
import { View, Text, Image } from 'react-native';
import Colors from './../../Constants/Colors';

export default class SplashScreen extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.replace('MovieHome');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
         <Image source={require('./React-Native.png')} style={styles.imageStyles}/>
        <Text style={styles.textStyles}>
          Movies
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Black
  },
  imageStyles: {
    width: 200,
    height: 200
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}