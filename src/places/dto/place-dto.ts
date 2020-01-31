import { CreateAddressDto } from "src/address/dto/address.dto";

export interface CreatePlaceDto {
  name: string;
  telephone: string;
  email: string;
  openingHours: string;
  closingHours: string;
  workingDays: string;
}

export type CreatePlaceAddressDto = CreatePlaceDto & CreateAddressDto; 