import React, {useState, useEffect, useRef, Component} from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, TextInput, Image, ImageBackground, TouchableOpacity, Button} from 'react-native';
import SelectDropdown  from 'react-native-select-dropdown';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window');

function HomeScreen() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const storeData = async (name) => {
    try {
      const jsonValue = JSON.stringify(name)
      await AsyncStorage.setItem('KEY', jsonValue)
      console.log(jsonValue);
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('KEY')
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  
  
  const armys = ['Space Marines' , "Ultramarines" , "Imperial Fists" , "Dark Angels" , "Blood Angels", "Salamanders", "Iron Hands" , "Space Wolves" , "White Scars", "Raven Guard" , "Deathwatch" , "Grey Knights" , "Astra Militarum" , "Adepta Sororitas" , "Adeptus Custodes" , "Adeptus Mechanicus" , "Imperial Knights" , "Chaos Space Marines" , "Death Guard" , "Thousand Sons" , "Khorne" , "Nurgle", "Tzeentch" , "Slaanesh" , "Chaos Knights" , "Craftworlds" , "Drukhari" , "Harlequins" , "Ynnari" , "Tyranids" , "Genestealer Cults" , "Necrons" , "Orks" ,  "T’au Empire"]
  return (
  <ImageBackground source={require("./Images/Background.png")} style={{ justifyContent: 'center'}} resizeMode="cover">
    <View style={addItemStyles.wrapper}>
      <View>
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
              <TextInput placeholder="Player Name" placeholderTextColor="#FFFFFF" style={{justifyContent: 'flex-start', color: '#FFFFFF', fontSize: 20, paddingBottom: 15}}/>
              <View style={{flexDirection: "row"}}>
              <SelectDropdown
                data={armys}
                onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                }}
                defaultButtonText={'Select Army'}
                buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={addItemStyles.dropdown1BtnStyle}
                buttonTextStyle={addItemStyles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={addItemStyles.dropdown1DropdownStyle}
                rowStyle={addItemStyles.dropdown1RowStyle}
                rowTextStyle={addItemStyles.dropdown1RowTxtStyle}>
              </SelectDropdown>
            </View>
            <View>
              <Image style={addItemStyles.ImagesStyling} source={require("./Images/Necron_Overlord.png")}></Image>
            </View>
            <View>
              <Text style={{color: '#FFFF', fontSize: 30, paddingLeft: 162, paddingBottom: 15}}>C</Text>
            </View>
            <View>
              <Button
                  color={'rgba(52, 52, 52, 0.8)'}
                  style={{width: '90%'}}
                  title="+"
                  onPress={() => setCount1(count1 + 1)}
                />
            <Text style={{color: '#FFFF', paddingLeft: 85, padding: 10}}>{count1}</Text>
            <Button
                color={'rgba(52, 52, 52, 0.8)'}
                fontSize= {10}
                title="-"
                onPress={() => setCount1(count1 - 1)}
              />
              <View>
                <Text style={{color: '#FFFF', fontSize: 30, paddingLeft: 162, paddingTop: 20}}>V</Text>
              </View>
              <View>
                <TextInput placeholder="00" placeholderTextColor="#FFFFFF" style={{justifyContent: 'center', color: '#FFFFFF', paddingLeft: 62, fontSize: 45}}/>
                </View>
            </View>
          </View>
            <View style={{flex:1}}>
                <TextInput placeholder="Player Name" placeholderTextColor="#FFFFFF" style={{justifyContent: 'flex-end', color: '#FFFFFF', fontSize: 20, paddingBottom: 15}} />
              <View style={{flexDirection: "row"}}>
                <SelectDropdown
                  data={armys}
                  onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  }}
                  defaultButtonText={'Select army'}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={addItemStyles.dropdown2BtnStyle}
                  buttonTextStyle={addItemStyles.dropdown2BtnTxtStyle}
                  renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={addItemStyles.dropdown2DropdownStyle}
                  rowStyle={addItemStyles.dropdown2RowStyle}
                  rowTextStyle={addItemStyles.dropdown2RowTxtStyle}>
              </SelectDropdown>
            </View>
            <View>
              <Image style={addItemStyles.ImagesStyling} source={require("./Images/tau.png")}></Image>
            </View>
            <View>
              <Text style={{color: '#FFFF', fontSize: 30, paddingLeft: 5, paddingBottom: 15}}>P</Text>
            </View>
            <View>
              <Button
                  style={{width: '10', height: '10'}}
                  color={'rgba(52, 52, 52, 0.8)'}
                  title="+"
                  onPress={() => setCount2(count2 + 1)}
                  onPress={() => storeData(count2)}
                />
            <Text style={{color: '#FFFF', paddingLeft: 85, padding: 10}}> {count2}</Text>
            <Button
                color={'rgba(52, 52, 52, 0.8)'}
                fontSize= {10}
                title="-"
                onPress={() => setCount2(count2 - 1)}
                onPress={() => getData(count2)}
                />
                <View>
                  <Text style={{color: '#FFFF', fontSize: 30, paddingLeft: 5, paddingTop: 20}}>P</Text>
                </View>
                <View>
                <TextInput placeholder="00" placeholderTextColor="#FFFFFF" style={{justifyContent: 'center', color: '#FFFFFF', paddingLeft: 62, fontSize: 45}}/>
                </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Warhammer 40K',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;

const addItemStyles = StyleSheet.create({
  wrapper: { 
    padding: 10,
  },
  inputLabels: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 7,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    color: '#FFFFFF',
    height: 50
  },
  inputWrapper: {
    paddingBottom: 20,
  },
  saveBtn: {
    backgroundColor: '#003E7D',
    alignItems: 'center',
    padding: 12,
  },
  saveBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  headerTitle: {color: '#FFFFFF', fontWeight: 'bold', fontSize: 10},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
  },
  dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},

  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  divider: {width: 12},
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'
  },
  ImagesStyling: {
    height: 250,
    width: 150, 
    justifyContent: 'center',
    margin: 15,
    marginTop: 20
  }
});