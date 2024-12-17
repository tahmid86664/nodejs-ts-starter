/*
  Define your interfaces what you need in your project
*/

export interface IPhone {
  countryCode: string;
  number: string;
}

export interface IAddress {
  addressLine1: string;
  addressLine2?: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
}
