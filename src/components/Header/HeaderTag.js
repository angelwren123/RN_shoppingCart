import React from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const HeaderTag = props => {
  const {toggleTag} = props;
  const [toggleAdvice, setToggleAdvice] = React.useState(false);
  const [toggleRecent, setToggleRecent] = React.useState(false);
  const [togglePopular, setTogglePopular] = React.useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: toggleTag ? '#85c9e8' : '#85c9e8',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableWithoutFeedback
        style={{
          margin: 10,
          paddingHorizontal: 25,
          paddingVertical: 10,
          backgroundColor: toggleAdvice ? 'white' : '#85c9e8',
          elevation: toggleAdvice ? 5 : 0,
          borderRadius: toggleAdvice ? 5 : 0,
        }}
        onPress={() => {
            setToggleAdvice(true),
            setToggleRecent(false),
            setTogglePopular(false);
        }}>
        <Text style={{alignSelf: 'center', fontWeight: '700'}}>Advice</Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={{
          margin: 10,
          paddingHorizontal: 25,
          paddingVertical: 10,
          backgroundColor: toggleRecent ? 'white' : '#85c9e8',
          elevation: toggleRecent ? 5 : 0,
          borderRadius: toggleRecent ? 5 : 0,
        }}
        onPress={() => {
          setToggleAdvice(false),
            setToggleRecent(true),
            setTogglePopular(false);
        }}>
        <Text style={{alignSelf: 'center', fontWeight: '700'}}>Recent</Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={{
          margin: 10,
          paddingHorizontal: 25,
          paddingVertical: 10,
          backgroundColor: togglePopular ? 'white' : '#85c9e8',
          elevation: togglePopular ? 5 : 0,
          borderRadius: togglePopular ? 5 : 0,
        }}
        onPress={() => {
          setToggleAdvice(false),
            setToggleRecent(false),
            setTogglePopular(true);
        }}>
        <Text style={{alignSelf: 'center', fontWeight: '700'}}>Popular</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HeaderTag;
