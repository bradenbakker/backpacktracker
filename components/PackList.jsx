import React from 'react';
import { StatusBar, View, TextInput, Text, FlatList, TouchableOpacity, Modal, Button, Picker } from 'react-native';
import styles from './PackStyles';

export const ENUM_packTypes = {
	DEFAULT: 'Default',
	DAYPACK: 'Daypack',
	EXPEDITION: 'Expedition Pack',
	CARRY: 'Carry-on',
	SUITCASE: 'Suitcase',
};

export default class PackList extends React.Component {
  state = {
    inputValues: {
    	packName: '',
    	packType: ENUM_packTypes.DEFAULT,
    	packVolume: '',
    	packValue: '',
    },
    isModalVisible: false,
	packs: []
  };

  changeInputs = (newinputs) => {
    this.setState(prevState => ({
      inputValues: newinputs
    }));
  };
  changeName = value => {
    const newInputs = {
      	...this.state.inputValues,
      	packName: value,
    }
    this.changeInputs(newInputs);
  };
  changeType = value => {
    const newInputs = {
      	...this.state.inputValues,
      	packType: value,
    }
    this.changeInputs(newInputs);
  };
  changeVolume = value => {
  	value.replace(/[^0-9]/g, '');
    const newInputs = {
      	...this.state.inputValues,
      	packVolume: value,
    }
    this.changeInputs(newInputs);
  };
  changeValue = value => {
  	value.replace(/[^0-9]/g, '');
    const newInputs = {
      	...this.state.inputValues,
      	packValue: value,
    }
    this.changeInputs(newInputs);
  };


  addPack = () => {
    if (this.state.inputValues.packName != '') {
      this.setState(prevState => {
        const newPack = {
          packName: this.state.inputValues.packName,
          packType: this.state.inputValues.packType,
    	  packVolume: this.state.inputValues.packVolume,
    	  packValue: this.state.inputValues.packValue,
        };
        
        var packs = this.state.packs.concat(newPack);

        this.setState({
          packs: packs,
        });
      });
    }
  };

  toggleModalVisibility = () => {
    this.setState({
    	isModalVisible: !this.state.isModalVisible
    });
  };

  addFromModal = () => {
  	this.addPack();
  	this.toggleModalVisibility();
  }

  render() {
    const packs = this.state.packs.map((pack, key) =>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity style={styles.listItem}>
        </TouchableOpacity>
        <Text style={styles.listText}>{pack.packName}</Text>
        <Text style={styles.listText}>{pack.packType}</Text>
        <Text style={styles.listText}>{pack.packVolume + "L"}</Text>
        <Text style={styles.listText}>{pack.packValue + "$"}</Text>
      </View>
    );
    const types = Object.values(ENUM_packTypes).map((entry, key) => {
    	return <Picker.Item label={entry} value={entry} />
    });
  return (
    <View>
	    <View>
	      {packs}
	    </View>
	    <View>
	   		<Modal animationType="slide" 
                   transparent visible={this.state.isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={this.toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <TextInput placeholder="Pack Name" 
                                   value={this.state.inputValues.packName} 
                                   style={styles.TextInput} 
                                   onChangeText={this.changeName} />
                        <Picker
					        selectedValue={this.state.inputValues.packType}
					        onValueChange={this.changeType}
					        style={{ height: 50, width: 150 }}
					    >
					 		{types}
					    </Picker>                     
  						<TextInput placeholder="Pack Volume" 
                                   value={this.state.inputValues.packVolume} 
                                   keyboardType= 'numeric'
                                   style={styles.TextInput} 
                                   onChangeText={this.changeVolume} />
                        <TextInput placeholder="Pack Value" 
                                   value={this.state.inputValues.packValue}
                                   keyboardType= 'numeric' 
                                   style={styles.TextInput} 
                                   onChangeText={this.changeValue} />
                        <Button title="Close" onPress={this.addFromModal} color='#228B22'/>
                    </View>
                </View>
            </Modal>
	    </View>
	    <Button
            title="+  Add Item"
            color= '#228B22'
            onPress={this.toggleModalVisibility}
            style={styles.buttonStyle}
          />
	  </View>
    );
  }
}