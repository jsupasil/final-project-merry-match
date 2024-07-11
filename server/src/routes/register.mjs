import { application, Router } from "express";
import connectionPool from "../utils/db.mjs";
<<<<<<< HEAD
import bcrypt from "bcrypt"
import cors from 'cors'
import supabase from "../apps/lib/supabase.js";
import express from 'express'
=======
<<<<<<< HEAD
import { v4 as uuidv4 } from "uuid"; // นำเข้า uuid
=======
import bcrypt from "bcrypt"
>>>>>>> 92e2545 (fix: rebase)
>>>>>>> 9fe1977 (fix: rebase)

const app = express()
const registerRouter = Router();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // 
};

app.use(cors(corsOptions));
app.use(express.json());

registerRouter.post("/", async (req, res) => {
<<<<<<< HEAD
  const inputData = { ...req.body };

  try {
=======
<<<<<<< HEAD
  const {
    user_id,
    name,
    birthdate,
    location,
    city,
    username,
    email,
    password,
    sexident,
    sexprefer,
    racialprefer,
    meetprefer,
    image,
  } = req.body;

  const userprofile_id = uuidv4(); // สร้าง UUID สำหรับ userprofile_id

  try {
    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        code: "U002",
        message: "Email or Username and Password is null",
      });
    }
=======
  const inputData = { ...req.body };

  try {
>>>>>>> 9fe1977 (fix: rebase)
    const hashPassword = await bcrypt.hash(inputData.password,10)
    // if (!inputData.name || !inputData.email || !inputData.password) {
    //   return res.status(400).json({
    //     code: "U002",
    //     message: "Name, Email, or Password is missing.",
    //   });
    let result = await connectionPool.query(
      `INSERT INTO users (username,email,password) VALUES ($1, $2, $3) RETURNING user_id`,
      [inputData.username, inputData.email, hashPassword]
    );
    const userId = result.rows[0].user_id;
<<<<<<< HEAD

    await connectionPool.query(
      `INSERT INTO user_profiles (user_id,name, birthdate, location, city, username, email, password, sexident, sexprefer, racialprefer, meetprefer, image) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10,$11,$12,$13)  `,
      [  userId,
        inputData.name,
        inputData.birthdate,
        inputData.location,
        inputData.city,
        inputData.username,
        inputData.email,
        hashPassword,
        inputData.sexident,
        inputData.sexprefer,
        inputData.racialprefer,
        inputData.meetprefer,
        inputData.image,
      ]
    );
 
=======
>>>>>>> 92e2545 (fix: rebase)

    await connectionPool.query(
<<<<<<< HEAD
      `INSERT INTO user_profiles (userprofile_id, user_id, name, birthdate, location, city, username, email, password, sexident, sexprefer, racialprefer, meetprefer, image) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
      [
        userprofile_id,
        user_id,
        name,
        birthdate,
        location,
        city,
        username,
        email,
        password,
        sexident,
        sexprefer,
        racialprefer,
        meetprefer,
        image,
      ]
    );

    // Respond with success message
    return res.status(200).json({
      code: "U000",
      message: "Register successfully",
    });
=======
      `INSERT INTO user_profiles (user_id,name, birthdate, location, city, username, email, password, sexident, sexprefer, racialprefer, meetprefer, image) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10,$11,$12,$13)  `,
      [  userId,
        inputData.name,
        inputData.birthdate,
        inputData.location,
        inputData.city,
        inputData.username,
        inputData.email,
        hashPassword,
        inputData.sexident,
        inputData.sexprefer,
        inputData.racialprefer,
        inputData.meetprefer,
        inputData.image,
      ]
    );
 
>>>>>>> 92e2545 (fix: rebase)
>>>>>>> 9fe1977 (fix: rebase)
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Failed to create user profile." });
  }
  return res.status(200).json({
    code: "U000",
    message: "Registered successfully",
  });
});

<<<<<<< HEAD
export default registerRouter;
=======
<<<<<<< HEAD
export default registerRouter;
=======
export default registerRouter;
>>>>>>> 92e2545 (fix: rebase)
>>>>>>> 9fe1977 (fix: rebase)
