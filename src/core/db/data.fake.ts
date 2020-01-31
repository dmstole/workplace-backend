import { PlaceEntity } from "src/places/place.entity"
import { DepartamentEntity } from "src/departament/departament.entity";
import { RoomEntity } from "src/room/room.entity";
import { TableEntity } from "src/table/table.entity";

export const loadDataFake = async () => {
    const place = await createPlaces();
    const departament = await createDepartament(place.id);
    const room = await createRoom(departament.id);
    await createTable(room.id)
}

async function createPlaces() {
    let place = new PlaceEntity();
    place.name = "Connecta";
    place.telephone = "(12) 3204-5660";
    place.email = "conecta@conecta.com.br";
    place.streetName = "Praça Chuí";
    place.addressNumber = 35;
    place.postalCode = "12243-380";
    place.region = "Vila Ema";
    place.city = "São José dos Campos";
    place.state = "SP";
    place.openingHours = "07:00";
    place.closingHours = "21:00";
    place.workingDays = "seg a sex";
    return await place.save();
}

async function createDepartament(placeId: number) {
    const departament = new DepartamentEntity();
    departament.name = "Departamento 1";
    departament.placeId = placeId;
    return await departament.save();
}

async function createRoom(departmentId: number) {
    const room = new RoomEntity();
    room.name = "Sala 1";
    room.departamentId = departmentId;
    return await room.save();
}

async function createTable(roomId: number) {
    const table = new TableEntity();
    table.name = "Mesa de Reunião";
    table.roomId = roomId;
    return await table.save();
}