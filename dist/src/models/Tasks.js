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
exports.Tasks = void 0;
var typeorm_1 = require("typeorm");
var Classes_1 = require("./Classes");
var TaskStudents_1 = require("./TaskStudents");
var Tasks = /** @class */ (function () {
    function Tasks() {
    }
    __decorate([
        typeorm_1.Column("uuid", {
            primary: true,
            name: "id",
            default: function () { return "uuid_generate_v4()"; },
        }),
        __metadata("design:type", String)
    ], Tasks.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "title" }),
        __metadata("design:type", String)
    ], Tasks.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", { name: "deliverydate" }),
        __metadata("design:type", Object)
    ], Tasks.prototype, "deliverydate", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "subject" }),
        __metadata("design:type", String)
    ], Tasks.prototype, "subject", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "class_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Classes_1.Classes; }),
        typeorm_1.JoinColumn({ name: "class_id" }),
        __metadata("design:type", Classes_1.Classes)
    ], Tasks.prototype, "class", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return TaskStudents_1.Taskstudents; }, function (taskstudents) { return taskstudents.task; }),
        __metadata("design:type", Array)
    ], Tasks.prototype, "taskstudents", void 0);
    Tasks = __decorate([
        typeorm_1.Entity("tasks", { schema: "public" })
    ], Tasks);
    return Tasks;
}());
exports.Tasks = Tasks;
exports.default = Tasks;
