/// <reference types="googlemaps" />
import { TrackAction } from "./track-action";
import { CustomVehicleIcon } from "./trace/time-aware-anim";
import MapTypeStyle = google.maps.MapTypeStyle;
import { TrackedAction } from "./track-action.new";
export interface IDecoded {
    action: IAction;
    sub_account: ISubAccount;
}
export interface ISubAccountData {
    sub_account: ISubAccount;
}
export interface ITrackedActions {
    [key: string]: TrackedAction;
}
export interface ITrackActionResult {
    user: IUser;
    actions: IAction[];
}
export interface ITrackActionResults {
    results: ITrackActionResult[];
}
export interface IAction {
    assigned_at: string | null;
    canceled_at: string | null;
    completed_at: string | null;
    completed_place: IPlace | null;
    created_at: string | null;
    display: {
        duration_remaining: number | null;
        duration_elapsed: number | null;
        distance_remaining: number | null;
        show_summary: boolean;
        status_text: string;
        distance_unit: string;
        isLate: boolean;
        sub_status_text: string;
    };
    distance: number | null;
    encoded_polyline: string;
    eta: string | null;
    expected_place: IPlace;
    id: string;
    initial_eta: string | null;
    lookup_id: string;
    short_code: string;
    started_at: string | null;
    started_place: IPlace | null;
    ended_at: string | null;
    status: string;
    suspended_at: string | null;
    time_aware_polyline: string;
    tracking_url: string;
    type: string;
    user: IUser;
    vehicle_type: string;
    metadata?: any;
}
export interface ISubAccount {
    id: string;
    type: string;
    token: ISubAccountToken;
    account: IAccount;
}
export interface ISubAccountToken {
    key: string;
    scope: string;
}
export interface IAccount {
    name: string | null;
    tagline: string | null;
    id: string;
    ios_app_download_url: string | null;
    android_app_download_url: string | null;
    logo: string | null;
    ios_deeplink_url: string | null;
    android_deeplink_url: string | null;
}
export interface IUser {
    name: string;
    phone: number | string | null;
    last_heartbeat_at: string | null;
    photo: string;
    display: {
        speed: number | null;
        battery: number | null;
    };
    last_location: {
        geojson: IPlace;
    };
}
export interface IPlace {
    address: string;
    city: string;
    country: string;
    created_at: string;
    id: string;
    landmark: string;
    location: {
        coordinates: [number, number];
    };
    name: string;
    state: string;
    zip_code: string;
}
export interface ITrackOption {
    mapId: string;
    mapOptions?: IMapOptions;
    onError?: (error: any) => void;
    onReady?: (trackAction: TrackAction) => void;
    onActionReady?: (action: IAction) => void;
    onActionUpdate?: (action: IAction) => void;
    onAccountReady?: (subAccount: ISubAccount, action: IAction) => void;
}
export interface ITrackingOptions {
    mapId: string;
    mapOptions?: IMapOptions;
    onError?: (error: any) => void;
    onReady?: (trackedActions: ITrackedActions, actions: IAction[], map: google.maps.Map) => void;
    onUpdate?: (trackedActions: ITrackedActions, actions: IAction[]) => void;
    onActionsReady?: (actions: IAction[]) => void;
    onActionsUpdate?: (actions: IAction[]) => void;
    onAccountReady?: (subAccount: ISubAccount, actions: IAction[]) => void;
}
export interface IMapOptions {
    gMapsStyle?: MapTypeStyle[];
    bottomPadding?: number;
    topPadding?: number;
    vehicleIcon?: CustomVehicleIcon;
    originLatLng?: [number, number];
}
export interface GMapsPolyLineOptions {
    strokeColor: string;
    strokeOpacity: number;
    strokeWeight: number;
    visible: boolean;
}
