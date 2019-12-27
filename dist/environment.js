"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultPort = 4000;
exports.environment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === "true",
        playground: process.env.APOLLO_PLAYGROUND === "true"
    },
    port: process.env.PORT || defaultPort
};
