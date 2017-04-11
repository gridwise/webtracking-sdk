export const Assets = {
    destination: require("url-loader!./assets/destination-eta.png"),
    destinationNoEta:  require("url-loader!./assets/destionation-no-eta.png"),
};

export const VehicleAssets = {
    "car": "data:image/png;base64,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",
}