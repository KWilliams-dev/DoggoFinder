import { express } from "express";
import {
    getUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js"

//Read

const router = express.Router();

router.get("/:id", verifyToken, getUser);

export default router;