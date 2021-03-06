import {Richmarker} from "./richmarker";
import {Style} from "../style";
import {Assets} from "../assets";
declare const RichMarkerPosition: any;

export class EndMarker {
  marker;

  constructor() {
    this.marker = Richmarker({
      flat: true
    }, 'MIDDLE')
  }

  render(position, map) {
    this.setPosition(position);
    this.marker.setMap(map)
  }

  setPosition(position) {
    this.marker.setPosition(position)
  }

  setMarkerDiv(content: string = this.getDefaultMarkerContent()) {
    this.marker.setContent(content)
  }

  getDefaultMarkerContent() {
    let img = Assets.endPosition;
      return `
          <div style="${Style.endMarker}${Style.noSelect}">
              <img height="20px" src="${img}" alt="">
          </div>
      `;
  }

  clear() {
    this.marker.setMap(null)
  }

  getPosition() {
    return this.marker.getPosition()
  }
}