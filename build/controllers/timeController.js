"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = exports.getTodayDate = void 0;
function getTodayDate(req, res) {
    const date = new Date();
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
}
exports.getTodayDate = getTodayDate;
function getDate(req, res) {
    const { date } = req.body;
    // res.json({ date });
    let inputDate;
    if (!isNaN(Number(date))) {
        inputDate = new Date(Number(date));
    }
    else {
        inputDate = new Date(date);
    }
    if (inputDate.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" });
    }
    else {
        res.json({ unix: inputDate.getTime(), utc: inputDate.toUTCString() });
    }
}
exports.getDate = getDate;
