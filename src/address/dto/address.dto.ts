export interface CreateAddressDto {
    streetName: string;
    addressNumber: number;
    complement: string;
    postalCode: string;
    region: string;
    city: string;
    state: string;
    latitude?: number;
    longitude?: number;
}
