"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const timeRoute_1 = __importDefault(require("./routes/timeRoute"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
// routes
app.use("/api/v1/time", timeRoute_1.default);
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(`${process.cwd()}/views`, "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
