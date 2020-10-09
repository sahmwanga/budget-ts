"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var budgetSchema = new mongoose_1.Schema({ name: { type: String, required: true } });
exports.default = mongoose_1.model('Budget', budgetSchema);
