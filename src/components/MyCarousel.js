import * as React from 'react';
import {View, SafeAreaView, Dimensions, StyleSheet} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import MySlideComponent from './MySlideComponent';
import color from '../constant/color';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Amna left for a trip',
          text: 'Swat 7.30am Battery: 78%',
          picture: require('../../assests/images/background-1.jpg'),
          icon: 'bell',

          style: {
            backgroundColor: '#FCAD08',
            borderColor: 'rgb(248, 218, 143)',
          },
        },
        {
          title: 'Ahsan is making notes',
          text: 'GHAR KA SAMAAN - Adding List',
          picture: require('../../assests/images/background-2.jpg'),
          icon: 'sticky-note',
          style: {
            backgroundColor: '#2E9AFE',
            borderColor: 'rgba(152, 199, 243, 0.822)',
          },
        },
        {
          title: "Mommy's Recipes",
          text: 'Cakes - Box Patties - Sweets',
          picture: require('../../assests/images/background-3.jpg'),
          icon: 'drumstick-bite',
          style: {
            backgroundColor: '#64d9c7',
            borderColor: '#c9e4df',
          },
        },
        {
          title: 'Aaish is Chatting with family',
          text: 'Talk freely with family',
          picture: require('../../assests/images/background-4.jpg'),
          icon: 'cuttlefish',
          style: {
            backgroundColor: 'rgba(189, 247, 54, 0.822)',
            borderColor: 'rgba(223, 243, 177, 0.822)',
          },
        },
      ],
    };
  }
  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem({item, index}) {
    return <MySlideComponent item={item} />;
  }

  render() {
    return (
      <View style={styles.CarouselView}>
        <Carousel
          data={this.state.carouselItems}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CarouselView: {
    height: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.164)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: color.primary,
  },

  //   CarouselView: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
});
