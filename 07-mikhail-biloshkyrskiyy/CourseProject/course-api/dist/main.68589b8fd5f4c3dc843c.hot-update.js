exports.id = "main";
exports.modules = {

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nvar apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nvar graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nvar cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\r\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\n// IMPORT ROUTES\r\nvar index_1 = __importDefault(__webpack_require__(/*! @/routes/index */ \"./routes/index.ts\"));\r\nvar branches_1 = __importDefault(__webpack_require__(/*! @/routes/branches */ \"./routes/branches.ts\"));\r\nvar tracking_1 = __importDefault(__webpack_require__(/*! @/routes/tracking */ \"./routes/tracking.ts\"));\r\nvar localities_1 = __importDefault(__webpack_require__(/*! @/routes/localities */ \"./routes/localities.ts\"));\r\nvar services_1 = __importDefault(__webpack_require__(/*! @/routes/services */ \"./routes/services.ts\"));\r\nvar auth_1 = __importDefault(__webpack_require__(/*! @/routes/auth */ \"./routes/auth.ts\"));\r\nvar authentication_1 = __importDefault(__webpack_require__(/*! @/middleware/authentication */ \"./middleware/authentication.ts\"));\r\n// IMPORT GRAPHQL\r\nvar schema_1 = __webpack_require__(/*! @/schema */ \"./schema/index.ts\");\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\nvar app = express_1.default();\r\nvar MongoStore = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\")(express_session_1.default);\r\nvar schema = graphql_tools_1.makeExecutableSchema({\r\n    typeDefs: schema_1.typeDefs,\r\n    resolvers: schema_1.resolvers,\r\n});\r\n// MONGOOSE\r\nmongoose_1.default.Promise = global.Promise;\r\nmongoose_1.default.connect(keys_1.default.MONGODB_URI, {\r\n    useUnifiedTopology: true,\r\n    useNewUrlParser: true\r\n}).then(function () { return console.log('MongoDB connected.'); })\r\n    .catch(function (error) { return console.log(error); });\r\nvar SessionStore = new MongoStore({\r\n    collection: 'sessions',\r\n    uri: keys_1.default.MONGODB_URI\r\n});\r\nvar graphql = new apollo_server_express_1.ApolloServer({\r\n    schema: schema,\r\n    context: function (_a) {\r\n        var req = _a.req;\r\n        return req.headers.authorization && authentication_1.default(req.headers.authorization);\r\n    }\r\n});\r\napp.use(cors_1.default({ credentials: true }));\r\napp.use(express_1.default.urlencoded({ extended: true }));\r\napp.use(cookie_parser_1.default());\r\napp.use(body_parser_1.default());\r\napp.use(express_session_1.default({\r\n    name: 'sessionId',\r\n    secret: 'Some secret key',\r\n    resave: false,\r\n    saveUninitialized: false,\r\n    cookie: {\r\n        maxAge: 600000,\r\n        httpOnly: true,\r\n        secure: false\r\n    },\r\n    store: SessionStore\r\n}));\r\ngraphql.applyMiddleware({ app: app, cors: false });\r\n// ROUTER\r\napp.use('/api/', index_1.default);\r\napp.use('/api/authorization', auth_1.default);\r\napp.use('/api/branches', branches_1.default);\r\napp.use('/api/tracking', tracking_1.default);\r\napp.use('/api/localities', localities_1.default);\r\napp.use('/api/services', services_1.default);\r\n// LISTEN PORT\r\nvar PORT = process.env.PORT || 5000;\r\napp.listen(PORT, function () {\r\n    console.log(\"Server ready at http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ })

};