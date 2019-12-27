"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mutation = {
    createStudent: function (root, args, context, info) {
        console.log("test mutation");
    }
};
var Query = {
    testMessage: function () { return "hello"; }
};
exports.default = { Query: Query, Mutation: Mutation };
