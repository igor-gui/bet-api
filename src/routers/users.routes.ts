import {signUp, getUsers} from "@/controllers/users.controllers";
import { Router } from "express";

const router = Router()

router.post('/participants', signUp);
router.get('/participants', getUsers);

export default router;