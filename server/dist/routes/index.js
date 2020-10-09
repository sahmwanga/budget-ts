"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var appRoutes = express_1.default.Router();
var budget_routes_1 = __importDefault(require("./budget.routes"));
exports.default = (function () {
    appRoutes.use('/budget', budget_routes_1.default());
    return appRoutes;
});
