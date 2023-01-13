import express from "express";
import { newTech } from "../controllers/technician.js";

const router = express.Router();

  router.post('/register', (req, res) => newTech.create(req, res));

export { router };
