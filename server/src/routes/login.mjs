import { Router } from "express";
import connectionPool from "../utils/db.mjs";
<<<<<<< HEAD
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
=======
import bcrypt from "bcrypt"
>>>>>>> 9fe1977 (fix: rebase)

const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
<<<<<<< HEAD
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
=======
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
        return res.status(400).json({
          code: "U002",
          message: "Email or Username and Password is null"
        });
      }
  
      try{
        const [result] = await connectionPool.query("SELECT * FROM user_profiles WHERE email = $1 OR username = $2", [usernameOrEmail, usernameOrEmail]);
    const user = result[0];

    if (!user) {
      return res.status(404).json({
        code: "U001",
        message: "Email or Username and Password is incorrect"
>>>>>>> 9fe1977 (fix: rebase)
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).json({
        code: "U001",
<<<<<<< HEAD
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign({ userId: user.id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      message: "Server could not login because of a database error",
    });
  }

});

export default loginRouter;
=======
        message: "Email or Username and Password is incorrect"
      });
    }

    res.status(200).json({ message: "Login successful" });
    
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
        "message": "Server could not login because database connection"
      });
  }
    
  });
  
export default loginRouter 
>>>>>>> 9fe1977 (fix: rebase)
