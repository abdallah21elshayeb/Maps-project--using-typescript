
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  nameContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(devId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(devId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
      );
    }
    addMarker(mappable: Mappable): void {
     const marker =  new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng,
        },
      });

      marker.addListener(
        'click',() =>{
          const infoWindow = new google.maps.InfoWindow({
            content: mappable.nameContent(),
          });
          infoWindow.open(this.googleMap,marker)
        }
      )
    }

    
}
