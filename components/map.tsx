import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
  height?: number; // Height of the map
}

const Map: React.FC<MapProps> = ({ location, height = 300 }) => {
  return (
    <View style={[styles.container, { height }]}>
      {/* React Native Maps */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
        />
      </MapView>

      {/* Google Maps (Commented out until API key is available) */}
      {/* 
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
        />
      </MapView>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
});

export default Map;