import express from "express";
import { getTodayDate, getDate } from "../controllers/timeController";

const router = express.Router();

router.get("/", getTodayDate);
router.post("/", getDate);


export default router;