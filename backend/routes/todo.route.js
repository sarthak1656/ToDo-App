import { Router } from "express";
import { deleteTodo, getTodo, saveTodo, updateTodo } from "../controllers/todo.controller.js";


const router = Router()

router.get("/",getTodo)
router.post("/save",saveTodo)
router.post("/update",updateTodo)
router.post("/delete",deleteTodo)

export default router;