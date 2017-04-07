import {Richmarker} from "./richmarker";
declare const RichMarkerPosition: any;

export class UserMarker {
    marker;

    constructor() {
        this.marker = Richmarker({
            flat: true
        }, true)

    }

    render(position, map) {
        this.setPosition(position);
        this.marker.setMap(map)
    }

    setPosition(position) {
        this.marker.setPosition(position)
    }

    setMarkerDiv(content: string) {
        this.marker.setContent(content)
    }

    clear() {
        this.marker.setMap(null)
    }

    getPosition() {
        return this.marker.getPosition()
    }
}