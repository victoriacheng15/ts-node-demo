import { Request, Response } from "express";

export function getTodayDate(req: Request, res: Response) {
  const date = new Date();
  res.json({ unix: date.getTime(), utc: date.toUTCString() });
}

export function getDate(req: Request, res: Response) {
  const { date } = req.body;
  // res.json({ date });
  let inputDate: Date;
  if (!isNaN(Number(date))) {
    inputDate = new Date(Number(date));
  } else {
    inputDate = new Date(date);
  }

  if (inputDate.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: inputDate.getTime(), utc: inputDate.toUTCString() });
  }
}
