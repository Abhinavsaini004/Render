"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSecret = exports.URI = exports.HostName = void 0;
let LOCAL = false;
let HostName, URI;
if (LOCAL) {
    exports.URI = URI = "mongodb://localhost/contacts";
    exports.HostName = HostName = "localhost";
}
else {
    exports.URI = URI = "mongodb+srv://abhinavsaini0004:25QZJ9t6pQqaemB4@cluster0.pi2hxhq.mongodb.net/'";
    exports.HostName = HostName = "MongoDB Atlas";
}
exports.SessionSecret = "INFT2202SessionSecret";
//# sourceMappingURL=db.js.map