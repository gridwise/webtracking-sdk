/// <reference types="googlemaps" />
import { IAction, ITrackOption } from "./model";
import { Destination } from "./trace/destination";
import { StartMarker } from "./trace/start-marker";
import { EndMarker } from "./trace/end-marker";
export declare class TrackAction {
    map: google.maps.Map;
    private anim;
    startMarker: StartMarker;
    endMarker: EndMarker;
    private actionPoll;
    destination: Destination;
    action: IAction;
    options: ITrackOption;
    private pk;
    constructor();
    init(action: IAction, pk: string, options: ITrackOption): void;
    resetBounds(): void;
    setOptions(options: ITrackOption): void;
    private renderMap();
    private getFirstOrigin();
    private makeMap();
    private trace();
    private startActionPoll();
    private fetchAction();
    private updateAction(action);
    private traceDestination();
    private showSummary();
    private clear();
    private drawAndFitPolyline(polylineEncoded);
    private fitPolyline(polylineMvc);
    private fitExtended(polylineMvc);
    private extendedLocation(position, y);
    private extendedBounds(bounds, y);
}
export declare function trackAction(action: IAction, pk: string, options: ITrackOption): TrackAction;
