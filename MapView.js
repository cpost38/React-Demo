import React from 'react';
import EsriMapView from 'esri/views/MapView';
import Search from 'esri/widgets/Search';
import Sketch from 'esri/widgets/Sketch';
import LayerList from 'esri/widgets/LayerList';
import GraphicLayer from 'esri/layers/GraphicsLayer';

export default class MapView extends React.Component {
  componentDidMount() {
    // const rightdrawer = new RightDrawer({
    //   // Type	Required	Default	Description
    //   drawerWidth: '200px',	//Number false	280	Width (in px) of the drawer nav
    //   //onRequestClose:	;//Func	false	() => {}	Function called when the user clicks the overlay area of a drawer
    //   //children	Node	false	-	Child elements to be rendered inside the Drawer
    //   active: false,	//Bool	false	-	Toggle visibility of the drawer
    //   right: true	//Bool	false	-	Display the drawer on the right side of the screen
    // });

    this.setState()

    const layer = new GraphicLayer({title:'Sketch Layer'}); 
    this.props.map.layers.add(layer);

    const view = new EsriMapView({
      container: this.mapViewDiv,
      map: this.props.map,
      zoom: 10,
      center: [-95.36327, 29.76328]
    });

    const sketch = new Sketch({
      layer: layer,
      view: view
    });

    // Add a legend instance to the panel of a
    // ListItem in a LayerList instance
    const layerlist = new LayerList({
      view: view,
      listItemCreatedFunction: function (event) {
        const item = event.item;
        if (item.layer.type !== "group"){ // don't show legend twice
          item.panel = {
            content: "legend"
          };
        }
      }
    });

    const search = new Search();

    view.ui.add(search, "top-left");
    view.ui.add(sketch, "bottom-right");
    view.ui.add(layerlist, "top-right");
    view.ui.move("zoom", "bottom-left");
  }
  
  render() {
    return (
      <div
        style={{ height: '100%', width: '100%' }}
        ref={mapViewDiv => {
          this.mapViewDiv = mapViewDiv;
        }}
      >
      </div>
    );
  }
}
