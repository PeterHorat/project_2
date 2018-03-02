import React, {Component} from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class GoogleMapComponent extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11,
    };

    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (

            <div>
                <GoogleMapReact
                    bootstrapURLKeys=''
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={41.878114}
                        lng={-87.629798}
                        text={'Textli'}
                    />
                </GoogleMapReact>
            </div>

        )
    }
}

export default GoogleMapComponent;




