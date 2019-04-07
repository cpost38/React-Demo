import React, { Component, Fragment } from 'react';
import EsriMap from 'esri/Map';
// import WebMap from 'esri/WebMap';
import FeatureLayer from 'esri/layers/FeatureLayer';
import MapView from './MapView';
import './App.css';

const labelClass = {
  // autocasts as new LabelClass()
  symbol: {
    type: "text",  // autocasts as new TextSymbol()
    color: "black",
    haloColor: "white",
    haloSize: 2,
    font: {  // autocast as new Font()
      // family: "playfair-display",
      size: 16,
      weight: "bold"
    }
  },
  labelPlacement: "above-center",
  labelExpressionInfo: {
    expression: "$feature.ZIP_CODE"
  }
};

var zipLayer = new FeatureLayer({
  labelingInfo: [ labelClass ],
  renderer: {
    type: "simple",
    fill: {
      type: "simple-fill",
      outline: {
          cap: "round",
          width: 1,
          color: [255, 255, 255, 1]
      },
      color: [255, 255, 255, 0]
    }
  },
  url: "https://cohegis.houstontx.gov/cohgispub/rest/services/PD/Government_Boundaries_wm/MapServer/7"
});

var citylimitLayer = new FeatureLayer({
  url: "https://cohegis.houstontx.gov/cohgispub/rest/services/PD/Government_Boundaries_wm/MapServer/0"
});

var layers = [zipLayer, citylimitLayer];

var map = new EsriMap({
  basemap: 'satellite',
  layers: layer
});

// var webmap = new WebMap({
//   portalItem: {
//     id: "78b9e5b41bad430fa992ef39169522bc"//"e691172598f04ea8881cd2a4adaa45ba"
//   }
// });

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        spatialReference: { latestWkid: 4236, wkid: 102100 },
        x: 15047024.975994881,
        y: -2875028.188734928,
      },
      drawerDirection: 'right',
      active: false,
    }
  }

  render() {
    return (
      <Fragment>
        <MapView
          map={map}
          onCenterChange={center => {
            this.setState({ center });
          }}
        />
    </Fragment>
    );
  }
}

export default App;
