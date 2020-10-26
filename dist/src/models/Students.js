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
exports.Students = void 0;
var typeorm_1 = require("typeorm");
var Classes_1 = require("./Classes");
var TaskStudents_1 = require("./TaskStudents");
var Students = /** @class */ (function () {
    function Students() {
    }
    __decorate([
        typeorm_1.Column("uuid", {
            primary: true,
            name: "id",
            default: function () { return "uuid_generate_v4()"; },
        }),
        __metadata("design:type", String)
    ], Students.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int8", { name: "registration", unique: true }),
        __metadata("design:type", Number)
    ], Students.prototype, "registration", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "name" }),
        __metadata("design:type", String)
    ], Students.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "surname" }),
        __metadata("design:type", String)
    ], Students.prototype, "surname", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "avatar" }),
        __metadata("design:type", String)
    ], Students.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "email" }),
        __metadata("design:type", String)
    ], Students.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "password" }),
        __metadata("design:type", String)
    ], Students.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "class_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Classes_1.Classes; }),
        typeorm_1.JoinColumn({ name: "class_id" }),
        __metadata("design:type", Classes_1.Classes)
    ], Students.prototype, "class", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return TaskStudents_1.Taskstudents; }, function (taskstudents) { return taskstudents.student; }),
        __metadata("design:type", Array)
    ], Students.prototype, "taskstudents", void 0);
    Students = __decorate([
        typeorm_1.Index("UQ_13e880a37642d39be55a6bb49ff", ["registration"], { unique: true }),
        typeorm_1.Entity("students", { schema: "public" })
    ], Students);
    return Students;
}());
exports.Students = Students;
exports.default = Students;
