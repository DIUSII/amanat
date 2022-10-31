import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import MapboxGL, {Logger, CircleLayer} from '@rnmapbox/maps';

import BottomSheet from './components/BottomSheet/BottomSheet';

import Icon from '../../images/png/icon.png';
import Box from '../../images/png/box.png';
import axios from 'axios';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoicHJvZGl1cyIsImEiOiJjbDlyOWIyNzkwMDIyM29waW5iN2g2bDVuIn0.TbhpPoFoUJM6CME8fcfNdQ',
);

const defaultStyle = {
  version: 8,
  name: 'Land',
  sources: {
    map: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      minzoom: 1,
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#f2efea',
      },
    },
    {
      id: 'map',
      type: 'raster',
      source: 'map',
      paint: {
        'raster-fade-duration': 200,
      },
    },
  ],
};

const Main = () => {
  const isGranted = MapboxGL.requestAndroidLocationPermissions();
  const [coordinates, setCoordinates] = useState([]);
  const [radius, setRadius] = useState(60);
  const [zoom, setZoom] = useState(6);
  const [icon, setIcon] = useState(Icon);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  Logger.setLogCallback(log => {
    const {message} = log;

    if (
      message.match('Request failed due to a permanent error: Canceled') ||
      message.match('Request failed due to a permanent error: Socket Closed')
    ) {
      return true;
    }
    return false;
  });

  const createOrder = () => {
    setRadius(120);
    setIcon(Box);
    setZoom(10);
  };

  const rejectOrder = () => {
    setRadius(60);
    setIcon(Icon);
  };
  // '92.8798352 56.0370466'
  useEffect(() => {
    setLoading(true);
    if (coordinates) {
      axios({
        method: 'get',
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates[0]},${coordinates[1]}.json?access_token=pk.eyJ1IjoicHJvZGl1cyIsImEiOiJjbDlyOWIyNzkwMDIyM29waW5iN2g2bDVuIn0.TbhpPoFoUJM6CME8fcfNdQ`,
      }).then(response => {
        setLoading(false);
        const data = response.data;
        if (data.features[0] && data.features[0].properties.address) {
          setAddress(data.features[0].properties.address);
        } else {
          setAddress(`${data.features[0].text} д.${data.features[0].address}`);
        }
      });
    }
  }, [coordinates]);

  return (
    <View style={{flex: 1}}>
      <MapboxGL.MapView
        style={{flex: 1}}
        styleJSON={JSON.stringify(defaultStyle)}>
        <MapboxGL.Camera
          zoomLevel={zoom}
          followUserLocation={true}
          followUserMode="course"
          animationDuration={300}
        />
        <MapboxGL.UserLocation
          id={'user'}
          onUpdate={location => {
            if (
              coordinates[1] !== location.coords.latitude ||
              coordinates[0] !== location.coords.longitude
            ) {
              setCoordinates([
                location.coords.longitude,
                location.coords.latitude,
              ]);
            }
          }}>
          <MapboxGL.CircleLayer
            id="circle"
            style={{
              circleColor: '#32A360',
              circleOpacity: 0.4,
              circleRadius: 60,
              circleTranslateTransition: {duration: 300, delay: 0},
            }}
          />
          <MapboxGL.CircleLayer
            id="circle1"
            style={{
              circleColor: '#32A360',
              circleOpacity: 0.2,
              circleRadius: radius,
              circleTranslateTransition: {duration: 300, delay: 0},
            }}
          />
          <MapboxGL.SymbolLayer
            id={'custom-user-symbol'}
            style={{
              iconImage: icon,
              iconRotationAlignment: 'map',
              iconHaloWidth: 100,
            }}
          />
        </MapboxGL.UserLocation>
      </MapboxGL.MapView>
      <View style={{position: 'absolute', top: 0}}>
        <Text> {coordinates}</Text>
      </View>
      <BottomSheet
        createOrder={createOrder}
        rejectOrder={rejectOrder}
        loading={loading}
        address={address}
      />
    </View>
  );
};

export default Main;
