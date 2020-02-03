import { Injectable } from "@nestjs/common";
import uuidv4 = require('uuid/v4');

@Injectable()
export class UtilsService {

    constructor() {}

    generateCode() {
        const code = uuidv4();
        return code;
    }

}