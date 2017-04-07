declare const RichMarker: any | google.maps.Marker;

export function Richmarker(options) {
    require('../lib/richmarker');
    return new RichMarker(options)
}