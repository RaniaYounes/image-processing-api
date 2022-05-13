"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResized_1 = __importDefault(require("../routes/imageResize/imageResized"));
var routes = express_1.default.Router();
routes.use('/image', imageResized_1.default);
exports.default = routes;
