interface Location {
  latitude: number;
  longitude: number;
  readonly numberLocation: number;

  getLocation(): string;
}

const getLocation = (location: Location): string => {
  return `${location.latitude} - ${location.longitude}`;
};

// const location = {
//   latitude: 12332,
//   longitude2: 89765,
// }
// getLocation(location)

// const location: Location = {
//   latitude: 12332,
//   longitude: 89765,
//   numberLocation: 123,
// }
// getLocation(location)

class LocationMap implements Location {
  latitude: number;
  longitude: number;
  numberLocation: number = 0;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLocation(): string {
    throw 'any';
  }
}

class LocationMapBr implements Location {
  latitude: number;
  longitude: number;
  numberLocation: number = 0;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLocation(): string {
    throw 'any';
  }
}

getLocation(new LocationMapBr(123, 321))

export {};
