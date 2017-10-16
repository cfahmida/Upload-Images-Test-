import React from 'react';
import { Button, Image, View, ScrollView, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

export default class App extends React.Component {
  state = {
    images[null, null, null, null];
  };

  render() {
    let  { images[0] } = this.state;
    let  { images[1] }  = this.state;
    let  { images[2] }  = this.state;
    let  { images[3] }  = this.state;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <ScrollView>

     <View style={buttonStyles.alternativeLayoutButtonContainer}>
      <Button
        title="Upload from Photos"
        onPress={this._pickImage3}
      />
      </View>
      {images[3] &&
        <Image source={{ uri: images[3] }} style={{ width: 200, height: 200 }} />}

      <Button
        title="Pick an image from camera roll"
        onPress={this._pickImage2}
      />
      {images[2] &&
        <Image source={{ uri: images[2] }} style={{ width: 200, height: 200 }} />}

        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage1}
        />
        {images[1] &&
          <Image source={{ uri: images[1] }} style={{ width: 200, height: 200 }} />}


          <Button
            title="Pick a second image from camera roll"
            onPress={this._pickImage0}
          />
          {images[0] &&
            <Image source={{ uri: images[0] }} style={{ width: 200, height: 200 }} />}

      </ScrollView>
      </View>
    );
  }






  _pickImage0 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ images[0]: result.uri });
    }
  };


  _pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ images[1]: result.uri });
    }
  };


  _pickImage2 = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [4, 3],
      });

      console.log(result);

      if(!result.cancelled) {
        this.setState({ images[2]: result.uri});
      }
    };


  _pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ images[3]: result.uri });
    }
  };


}


const buttonStyles = StyleSheet.create({

  alternativeLayoutButtonContainer: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#66cccc',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  }
})
