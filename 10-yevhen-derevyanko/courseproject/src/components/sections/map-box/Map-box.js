import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import './style/style-map-box.scss';

class MapBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            currentCoordinates: {},
            centerMap: {
                lat: 48.9585527,
                lng: 31.9471914,
                zoom: 6.25
            }
        }
    }

    

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    };
    
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = position.coords;
                this.setState({currentCoordinates: location});
                this.setState({centerMap: {lat: location.latitude, lng: location.longitude, zoom: 14}});
            },
            error => { 
                console.log(error); 
            }
        );
    }

    onMarkerMounted = element => {
        if(element){
            setTimeout(() => {
                this.setState({
                    selectedPlace: element.props,
                    activeMarker: element.marker,
                    showingInfoWindow: true
                });
            }, 1000);
        }
    };


    render(){
        return (
            <div className="map-box">
                <Map
                    google={this.props.google}
                    zoom={this.state.centerMap.zoom}
                    initialCenter={this.state.centerMap}
                    center={this.state.centerMap}
                    onClick={this.onMapClicked}
                    >

                    {this.props.dataMap.map(elem => {
                        return <Marker key={elem[7]} onClick={this.onMarkerClick}
                            title={elem[2]}
                            name={`${elem[0]} ${elem[1]} ${elem[2]} ${elem[3]} ${elem[4]}`}
                            position={{lat: elem[5], lng: elem[6]}} />;
                    })}

                    {'latitude' in this.state.currentCoordinates &&
                        <Marker key={999999} 
                        ref={this.onMarkerMounted}
                        onClick={this.onMarkerClick}
                        title={'Ваше місцеположення'}
                        name={`Плюс-мінус ${this.state.currentCoordinates.accuracy} метрів.`}
                        position={{lat: this.state.currentCoordinates.latitude, lng: this.state.currentCoordinates.longitude}}/>
                    }

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                            <div>
                                <h3>{this.state.selectedPlace.title}</h3>
                                <p>{this.state.selectedPlace.name}</p>
                            </div>
                    </InfoWindow>

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA0xuurSq8On1VSQ4z16_JWkTubt4c9ayM',
    language: 'ru',
  })(MapBox);
