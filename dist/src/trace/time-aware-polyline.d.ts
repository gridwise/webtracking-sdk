/// <reference types="googlemaps" />
import LatLng = google.maps.LatLng;
export declare class TimeAwarePolyline {
    encodedPolyline: string;
    timeAwarePolyline: Array<Array<any>>;
    constructor(encodedPolyline?: string);
    updateTimeAwarePolyline(encodedPolyline: any): void;
    getPolylineToTime(timestamp: string): any;
    getLatestTime(): any;
    isNewPolyline(encodedPolyline: any): boolean;
    getPolylinePathDataArray(encodedPolyline: any): LatLng[];
}
