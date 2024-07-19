import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const loginRouter = Router();
dotenv.config();

loginRouter.post("/", async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  if (!usernameOrEmail?.trim() || !password?.trim()) {
    return res.status(400).json({
      code: "U002",
      message: "Email or Username and Password cannot be null",
    });
  }

  try {
    const result = await connectionPool.query(
      `SELECT * FROM user_profiles WHERE email = $1 OR username = $1`,
      [usernameOrEmail]
    );
    const user = result.rows[0];
    if (!user) {
      return res.status(404).json({
        code: "U001",
        message: "Email or Username and Password is incorrect",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).json({
        code: "U001",
        message: "Email or Username and Password is incorrect",
      });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.REACT_APP_SUPABASE_KEY,
      {
        expiresIn: "1h",
      }
    );

    console.log(token);
    console.log(process.env.REACT_APP_SUPABASE_KEY);

    res
      .status(200)
      .json({ code: "U000", message: "Login successfully", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server could not login because of a database error",
    });
  }
});

export default loginRouter;
