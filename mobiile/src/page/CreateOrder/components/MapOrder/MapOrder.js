import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import MapboxGL, {Logger} from '@rnmapbox/maps';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../../../utils/hooks';
import {setMapOrderAddress} from '../../../../store/slice/MainSlice';
import BottomSheetOrderMap from './components/BottomSheetOrderMap/BottomSheetOrderMap';

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

const MapOrder = ({navigation}) => {
  const dispatch = useAppDispatch();
  const camera = useRef(null);

  const mapOrderAddress = useAppSelector(state => state.main.mapOrderAddress);

  const [pointCoordinates, setPointCoordinates] = useState([
    92.8798352, 56.0370466,
  ]);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const updateUserCoordinates = location => {
    if (pointCoordinates[1] === '1' || pointCoordinates[0] === '1') {
      setPointCoordinates([
        location.coords.longitude,
        location.coords.latitude,
      ]);
    }
  };

  useEffect(() => {
    setLoading(true);

    if (pointCoordinates.length) {
      axios({
        method: 'get',
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${pointCoordinates[0]},${pointCoordinates[1]}.json?access_token=pk.eyJ1IjoicHJvZGl1cyIsImEiOiJjbDlyOWIyNzkwMDIyM29waW5iN2g2bDVuIn0.TbhpPoFoUJM6CME8fcfNdQ`,
      }).then(({data}) => {
        setLoading(false);

        if (data.features[0] && data.features[0].properties.address) {
          setAddress(data.features[0].properties.address);
        } else {
          data.features[0].address
            ? setAddress(
                `${data.features[0].text} д.${data.features[0].address}`,
              )
            : setAddress(`${data.features[0].text}`);
        }
      });
    }
  }, [pointCoordinates]);

  useEffect(() => {
    if (mapOrderAddress.coordinates.length) {
      setPointCoordinates(mapOrderAddress.coordinates);
      setAddress(mapOrderAddress.text);
    }
  }, [mapOrderAddress]);

  const checkedAddress = () => {
    dispatch(
      setMapOrderAddress({text: address, coordinates: pointCoordinates}),
    );
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <MapboxGL.MapView
        onPress={({geometry}) => setPointCoordinates(geometry.coordinates)}
        style={{flex: 1}}
        styleJSON={JSON.stringify(defaultStyle)}>
        <MapboxGL.Camera
          centerCoordinate={pointCoordinates}
          zoomLevel={14}
          ref={camera}
        />
        <MapboxGL.UserLocation
          visible={false}
          onUpdate={updateUserCoordinates}
        />
        <MapboxGL.PointAnnotation
          draggable={true}
          coordinate={pointCoordinates}
          onDragEnd={({geometry}) => setPointCoordinates(geometry.coordinates)}
        />
      </MapboxGL.MapView>
      <BottomSheetOrderMap
        onPress={checkedAddress}
        loading={loading}
        address={address}
      />
    </View>
  );
};

export default MapOrder;
