import React from 'react';
import { Button, Image, View, ScrollView, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

export default class App extends React.Component {
  state = {
    image: null,
    image2: null,
    image3: null,
    image4: null
  };


  render() {
    let { image } = this.state;
    let { image2 } = this.state;
    let { image3 } = this.state;
    let { image4 } = this.state;

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <ScrollView>

     <View style={buttonStyles.alternativeLayoutButtonContainer}>
      <Button
        title="Upload from Photos"
        onPress={this._pickImage4}
      />
      </View>
      {image4 &&
        <Image source={{ uri: image4 }} style={{ width: 200, height: 200 }} />}

      <Button
        title="Pick an image from camera roll"
        onPress={this._pickImage}
      />
      {image3 &&
        <Image source={{ uri: image3 }} style={{ width: 200, height: 200 }} />}

        <Button
          title="Pick an image from camera roll"
          onPress={this.imagePicker}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


          <Button
            title="Pick a second image from camera roll"
            onPress={this._pickImage2}
          />
          {image2 &&
            <Image source={{ uri: image2 }} style={{ width: 200, height: 200 }} />}

      </ScrollView>
      </View>
    );
  }




  imagePicker = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [4, 3],
      });

      console.log(result);

      if(!result.cancelled) {
        this.setState({ image: result.uri});
      }
    };


  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image3: result.uri });
    }
  };


  _pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image4: result.uri });
    }
  };



_pickImage2 = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image2: result.uri });
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
