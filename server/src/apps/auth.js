import bcrypt from "bcrypt";
import { Router } from "express";
import jwt from "jsonwebtoken";
import connectionPool from "../utils/db.mjs";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  let inputData = { ...req.body };

  // Trim whitespace from keys and values
  const trimmedData = {};
  for (const key in inputData) {
    if (inputData.hasOwnProperty(key)) {
      const trimmedKey = key.trim();
      const trimmedValue =
        typeof inputData[key] === "string"
          ? inputData[key].trim()
          : inputData[key];
      trimmedData[trimmedKey] = trimmedValue;
    }
  }
  inputData = trimmedData;

  if (!inputData.username || !inputData.email || !inputData.password) {
    return res.status(400).json({
      code: "U002",
      message: "Username, email, or password is missing.",
    });
  }

  try {
    const hashPassword = await bcrypt.hash(inputData.password, 10);

    let result = await connectionPool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id`,
      [inputData.username, inputData.email, hashPassword]
    );
    const userId = result.rows[0].user_id;

    await connectionPool.query(
      `INSERT INTO user_profiles (user_id, name, username, birthdate, location, city, email, password, sexident, sexprefer, racialprefer, meetprefer, image)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [
        userId,
        inputData.name,
        inputData.username,
        inputData.birthdate,
        inputData.location,
        inputData.city,
        inputData.email,
        hashPassword,
        inputData.sexident,
        inputData.sexprefer,
        inputData.racialprefer,
        inputData.meetprefer,
        inputData.image,
      ]
    );
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Failed to create user profile." });
  }

  return res.status(200).json({
    code: "U000",
    message: "Registered successfully",
  });
});

authRouter.post("/login", async (req, res) => {
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
        message: "Password is incorrect",
      });
    }

    // Create a JWT token using environment variable SECRET_KEY
    const token = jwt.sign({ userId: user.user_id }, process.env.SECRET_KEY, {
      expiresIn: "15m",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      message: "Server could not login because of a database error",
    });
  }
});

authRouter.post("/login", async (req, res) => {
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
        message: "Password is incorrect",
      });
    }

    // Create a JWT token using environment variable SECRET_KEY
    const token = jwt.sign({ userId: user.user_id }, process.env.SECRET_KEY, {
      expiresIn: "15m",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      message: "Server could not login because of a database error",
    });
  }
});

export default authRouter;
