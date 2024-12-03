import { Coordinates } from '../types/geolocation';

const DEFAULT_COORDINATES: Coordinates = {
  latitude: -33.8688,
  longitude: 151.2093
};

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000, // Increased timeout to 20 seconds
  maximumAge: 0
};

export async function getCurrentPosition(): Promise<Coordinates> {
  if (!('geolocation' in navigator)) {
    return DEFAULT_COORDINATES;
  }

  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, GEOLOCATION_OPTIONS);
    });

    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
  } catch (error) {
    console.warn('Geolocation error:', error);
    return DEFAULT_COORDINATES;
  }
}