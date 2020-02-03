import { CreateAddressDto } from "src/address/dto/address.dto";

export interface CreateUserDto {
  type: string;
  document: string;
  name: string;
  email: string;
  password: string;
}

export type CreateUserAddressDto = CreateUserDto & CreateAddressDto;