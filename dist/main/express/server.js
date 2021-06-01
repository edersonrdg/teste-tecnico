"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const expressServer = () => {
    try {
        app_1.default.listen(3333, () => console.log('server started on port 3333'));
    }
    catch (error) {
        console.error(error);
    }
};
exports.default = expressServer;
