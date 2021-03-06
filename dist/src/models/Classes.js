"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classes = void 0;
var typeorm_1 = require("typeorm");
var Students_1 = require("./Students");
var Tasks_1 = require("./Tasks");
var Classes = /** @class */ (function () {
    function Classes() {
    }
    __decorate([
        typeorm_1.Column("uuid", {
            primary: true,
            name: "id",
            default: function () { return "uuid_generate_v4()"; },
        }),
        __metadata("design:type", String)
    ], Classes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("character varying", {
            name: "level",
            default: function () { return "'ensino medio'"; },
        }),
        __metadata("design:type", String)
    ], Classes.prototype, "level", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "course" }),
        __metadata("design:type", String)
    ], Classes.prototype, "course", void 0);
    __decorate([
        typeorm_1.Column("smallint", { name: "year" }),
        __metadata("design:type", Number)
    ], Classes.prototype, "year", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Students_1.Students; }, function (students) { return students.class; }),
        __metadata("design:type", Array)
    ], Classes.prototype, "students", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Tasks_1.Tasks; }, function (tasks) { return tasks.class; }),
        __metadata("design:type", Array)
    ], Classes.prototype, "tasks", void 0);
    Classes = __decorate([
        typeorm_1.Entity("classes", { schema: "public" })
    ], Classes);
    return Classes;
}());
exports.Classes = Classes;
exports.default = Classes;
