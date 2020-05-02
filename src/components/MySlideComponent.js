import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const MySlideComponent = props => {
  const {item} = props;
  //   const iconStyle = {
  //     backgroundColor: item.backgroundColor,
  //     borderColor: item.borderColor,
  //   };
  return (
    <ImageBackground source={item.picture} style={styles.image}>
      <View style={styles.innerCard}>
        <View style={{...styles.icon, ...item.style}}>
          <Icon color="#fff" size={25} name={item.icon} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.text}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MySlideComponent;

const styles = StyleSheet.create({
  innerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.925)',

    borderRadius: 5,
    padding: 10,
    marginVertical: 20,

    width: '70%',
  },
  icon: {
    borderRadius: 25,

    borderWidth: 4,
    padding: 10,
    marginRight: 5,
  },
  subtitle: {
    fontSize: 13,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  title: {fontSize: 16},
});
