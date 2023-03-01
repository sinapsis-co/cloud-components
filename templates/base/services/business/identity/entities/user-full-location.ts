export type FullLocation = Partial<{
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  zipCode: string;
  countryCode: string;
}>;

export type GeoCode = {
  lat: number;
  lng: number;
};
