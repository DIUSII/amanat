import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import YaMap from 'react-native-yamap';

const Main = () => {
  const map = useRef(null);
  return (
    <View style={{flex: 1}}>
      <YaMap
        ref={map}
        showUserPosition
        followUser
        userLocationAccuracyFillColor="rgba(202, 215, 249, 0.5)"
        style={{flex: 1}}
        initialRegion={{
          lat: 55.6220068,
          lon: 49.135765,
          zoom: 20,
          azimuth: 80,
          tilt: 10,
        }}
      />
    </View>
  );
};

export default Main;
