import {IAction} from "../model";
import {GetLatLng, SetMap} from "../helpers";
import {Richmarker} from "./richmarker";
declare const RichMarker: any | google.maps.Marker;

export class Destination {
    marker;
    constructor() {
        this.marker = Richmarker({
            flat: true
        })
    }

    update(action: IAction, map) {
        let finalPlace = action.completed_place || action.expected_place;
        if(finalPlace) {
            this.marker.setPosition(GetLatLng(finalPlace));
            this.marker.setContent(this.getContent(action));
            SetMap(this.marker, map)
        } else {
            this.clear()
        }
    }

    getPosition() {
        return this.marker.getPosition()
    }


    clear() {
        this.marker.setMap(null)
    }

    private getContent(action: IAction): string {
        return "ooo"
    }
}