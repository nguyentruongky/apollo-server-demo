"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        \"\"\"\n        Test Message\n        \"\"\"\n        testMessage: String!,\n        id: ID!,\n        title: String!,\n        user: User\n    }\n\n    type Mutation {\n        createStudent(collegeId:ID,firstName:String,lastName:String):String\n    }\n\n    type User {\n        id: String\n        name: String\n      }\n"], ["\n    type Query {\n        \"\"\"\n        Test Message\n        \"\"\"\n        testMessage: String!,\n        id: ID!,\n        title: String!,\n        user: User\n    }\n\n    type Mutation {\n        createStudent(collegeId:ID,firstName:String,lastName:String):String\n    }\n\n    type User {\n        id: String\n        name: String\n      }\n"])));
var templateObject_1;
