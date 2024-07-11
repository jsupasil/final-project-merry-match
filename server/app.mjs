import express from "express";
import connectionPool from "./src/utils/db.mjs";
import registerRouter from "../server/src/routes/register.mjs";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import profileRouter from "../server/src/routes/profile.mjs";
<<<<<<< HEAD
import loginRouter from "../server/src/routes/login.mjs";
import supabase from "./lib/supabase.js";
import cors from "cors";
=======
=======
>>>>>>> c570cdf (feat: crud admin at app.mjs)
<<<<<<< HEAD
>>>>>>> 198e40e (feat: crud admin at app.mjs)
=======
=======
>>>>>>> 0ccb2dd (feat: crud admin at app.mjs)
<<<<<<< HEAD
>>>>>>> faa012f (feat: crud admin at app.mjs)
=======
=======
import loginRouter from '../server/src/routes/login.mjs'
>>>>>>> 92e2545 (fix: rebase)
>>>>>>> 9fe1977 (fix: rebase)

const app = express();
const port = 4001;

app.use(express.json());
app.use("/register", registerRouter);
<<<<<<< HEAD
app.use("/profile", profileRouter);
<<<<<<< HEAD
app.use("/login", loginRouter);
app.use(cors());

=======
=======
app.use("/login", loginRouter);
>>>>>>> 92e2545 (fix: rebase)
>>>>>>> 9fe1977 (fix: rebase)

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});
// get all
app.get("/users", async (req, res) => {
  let result;
  try {
    const auth = req.headers['authorization']
    console.log('authorization',auth)
    
    result = await connectionPool.query(`select * from users`);
  } catch (error) {
    return res.status(500).json({
      message: "Server could not read assignment because database connection",
    });
  }
  return res.status(200).json({ data: result.rows });
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 198e40e (feat: crud admin at app.mjs)
=======
=======
>>>>>>> 0ccb2dd (feat: crud admin at app.mjs)
>>>>>>> faa012f (feat: crud admin at app.mjs)
//admin can create
app.post("/admin/create", async (req, res) => {
  const { packages_name, merry_limit, icons, detail } = req.body;

  if (!packages_name || !merry_limit || !icons) {
    return res.status(400).json({
      message: "Missing or invalid request data.",
    });
  }

  const newPackages = {
    ...req.body,
    detail: detail || null,
    created_at: new Date(),
    updated_at: new Date(),
  };
<<<<<<< HEAD
=======

  try {
    await connectionPool.query(
      `insert into admin (packages_name,merry_limit,icons,detail,created_at,updated_at) values ($1,$2,$3,$4,$5,$6)`,
      [
        newPackages.packages_name,
        newPackages.merry_limit,
        newPackages.icons,
        newPackages.detail,
        newPackages.created_at,
        newPackages.updated_at,
      ]
    );
    return res.status(201).json({
      message: "Create data successfully.",
    });
  } catch (error) {
    console.error("Database insertion error:", error);
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
      error: error.message,
    });
  }
});

//admin can read
app.get("/admin/get", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(`select*from admin`);
    return res.status(200).json({ data: result.rows });
  } catch {
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
    });
  }
});

//admin can update
app.put("/admin/edit/:package_id", async (req, res) => {
  const packagesId = req.params.package_id;
  const { packages_name, merry_limit, icons, detail } = req.body;
  const updatePackages = {
    ...req.body,
    updated_at: new Date(),
  };

  if (!packages_name || !merry_limit || !icons) {
    return res.status(400).json({
      message: "Missing or invalid request data.",
    });
  }

  try {
    const resultPackages = await connectionPool.query(
      `select*from admin where package_id=$1`,
      [packagesId]
    );

    if (resultPackages.rows.length === 0) {
      return res.status(404).json({
        message: `The server cannot find the requested resource. In the browser, this means the ${packagesId} is not recognized.`,
      });
    }

    await connectionPool.query(
      `update admin set packages_name =$2,
      merry_limit=$3,
      icons=$4,
      detail=$5,
      updated_at=$6
      where package_id=$1
      `,
      [
        packagesId,
        updatePackages.packages_name,
        updatePackages.merry_limit,
        updatePackages.icons,
        updatePackages.detail || null,
        updatePackages.updated_at,
      ]
    );

    return res.status(200).json({
      message: "Successfully updated the data in merry match.",
    });
  } catch (error) {
    console.error("Database insertion error:", error);
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
      error: error.message,
    });
  }
});

//admin can delete
app.delete("/admin/delete/:package_id", async (req, res) => {
  const packagesId = req.params.package_id;
  try {
    await connectionPool.query(`delete from admin where package_id=$1`, [
      packagesId,
    ]);

    return res.status(200).json({
      message: `Successfully delete the package id: ${packagesId}`,
    });
  } catch (error) {
    console.error("Database deletion error:", error);
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
      error: error.message,
    });
  }
});
>>>>>>> 0ccb2dd (feat: crud admin at app.mjs)

  try {
    await connectionPool.query(
<<<<<<< HEAD
      `insert into packages (packages_name,merry_limit,icons,detail,created_at,updated_at) values ($1,$2,$3,$4,$5,$6)`,
=======
      `insert into admin (packages_name,merry_limit,icons,detail,created_at,updated_at) values ($1,$2,$3,$4,$5,$6)`,
>>>>>>> 198e40e (feat: crud admin at app.mjs)
      [
        newPackages.packages_name,
        newPackages.merry_limit,
        newPackages.icons,
        newPackages.detail,
        newPackages.created_at,
        newPackages.updated_at,
      ]
    );
    return res.status(201).json({
      message: "Create data successfully.",
    });
  } catch (error) {
    console.error("Database insertion error:", error);
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
      error: error.message,
    });
  }
});

//admin can read
<<<<<<< HEAD
// app.get("/admin/get", async (req, res) => {
// let result;
// try {
//   result = await connectionPool.query(`select*from packages`);
//   return res.status(200).json({ data: result.rows });
// } catch {
//   return res.status(500).json({
//     message:
//       "The server has encountered a situation it does not know how to handle.",
//   });
// }

//ดึงข้อมูลจาก supabase เพื่อดู
app.get("/admin/get", async (req, res) => {
  try {
    let { data: packages, error } = await supabase.from("packages").select("*");
    if (error) {
      console.error("Error fetching packages:", error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ packages });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//admin can read by id
// app.get("/admin/get/:package_id", async (req, res) => {
//   const packagesId = req.params.package_id;
//   try {
//     const getPackageId = await connectionPool.query(
//       `select * from packages where package_id=$1`,
//       [packagesId]
//     );
//     const packages = getPackageId.rows[0];
//     if (!packages) {
//       return res.status(404).json({
//         message: `Server could not find a package id: ${packagesId}`,
//       });
//     }
//     return res.status(200).json({
//       message: "Ok Successfully",
//       data: packages,
//     });
//   } catch {
//     return res.status(500).json({
//       message:
//         "The server has encountered a situation it does not know how to handle.",
//     });
//   }
// });

app.get("/admin/get/:package_id", async (req, res) => {
  const packageId = req.params.package_id;

  if (!packageId) {
    return res.status(400).json({
      message: "Package ID is required",
    });
  }

  try {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("package_id", packageId)
      .single();

    if (error) {
      return res.status(404).json({
        message: `Server could not find a package with id: ${packageId}`,
        error: error.message,
      });
    }

    return res.status(200).json({
      message: "Package retrieved successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "The server has encountered a situation it does not know how to handle.",
      error: error.message,
=======
app.get("/admin/get", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(`select*from admin`);
    return res.status(200).json({ data: result.rows });
  } catch {
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
>>>>>>> 198e40e (feat: crud admin at app.mjs)
    });
  }
});

//admin can update
<<<<<<< HEAD
// app.put("/admin/edit/:package_id", async (req, res) => {
//   const packagesId = req.params.package_id;
//   const { packages_name, merry_limit, icons, detail } = req.body;
//   const updatePackages = {
//     ...req.body,
//     updated_at: new Date(),
//   };

//   if (!packages_name || !merry_limit || !icons) {
//     return res.status(400).json({
//       message: "Missing or invalid request data.",
//     });
//   }

//   try {
//     const resultPackages = await connectionPool.query(
//       `select*from packages where package_id=$1`,
//       [packagesId]
//     );

//     if (resultPackages.rows.length === 0) {
//       return res.status(404).json({
//         message: `The server cannot find the requested resource. In the browser, this means the ${packagesId} is not recognized.`,
//       });
//     }

//     await connectionPool.query(
//       `update packages set packages_name =$2,
//       merry_limit=$3,
//       icons=$4,
//       detail=$5,
//       updated_at=$6
//       where package_id=$1
//       `,
//       [
//         packagesId,
//         updatePackages.packages_name,
//         updatePackages.merry_limit,
//         updatePackages.icons,
//         updatePackages.detail || null,
//         updatePackages.updated_at,
//       ]
//     );

//     return res.status(200).json({
//       message: "Successfully updated the data in merry match.",
//     });
//   } catch (error) {
//     console.error("Database insertion error:", error);
//     return res.status(500).json({
//       message:
//         "The server has encountered a situation it does not know how to handle.",
//       error: error.message,
//     });
//   }
// });
app.put("/admin/edit/:package_id", async (req, res) => {
  const packageId = req.params.package_id;
  const { packages_name, merry_limit, icons, detail } = req.body;

  if (!packageId || !packages_name || !merry_limit || !icons) {
    return res.status(400).json({
      message: "Invalid input, all fields except 'detail' are required",
    });
  }

  if (typeof merry_limit !== "number") {
    return res.status(400).json({
      message: "'merry_limit' must be a number",
=======
app.put("/admin/edit/:package_id", async (req, res) => {
  const packagesId = req.params.package_id;
  const { packages_name, merry_limit, icons, detail } = req.body;
  const updatePackages = {
    ...req.body,
    updated_at: new Date(),
  };

  if (!packages_name || !merry_limit || !icons) {
    return res.status(400).json({
      message: "Missing or invalid request data.",
>>>>>>> 198e40e (feat: crud admin at app.mjs)
    });
  }

  try {
<<<<<<< HEAD
    const detailString = detail ? detail : "";

    const { data, error } = await supabase
      .from("packages")
      .update({
        packages_name,
        merry_limit,
        icons,
        detail: detailString,
      })
      .eq("package_id", packageId)
      .select();

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Package not found or update failed",
      });
    }

    return res.status(200).json({
      message: "Package updated successfully",
      packages: data[0],
    });
  } catch (error) {
=======
    const resultPackages = await connectionPool.query(
      `select*from admin where package_id=$1`,
      [packagesId]
    );

    if (resultPackages.rows.length === 0) {
      return res.status(404).json({
        message: `The server cannot find the requested resource. In the browser, this means the ${packagesId} is not recognized.`,
      });
    }

    await connectionPool.query(
      `update admin set packages_name =$2,
      merry_limit=$3,
      icons=$4,
      detail=$5,
      updated_at=$6
      where package_id=$1
      `,
      [
        packagesId,
        updatePackages.packages_name,
        updatePackages.merry_limit,
        updatePackages.icons,
        updatePackages.detail || null,
        updatePackages.updated_at,
      ]
    );

    return res.status(200).json({
      message: "Successfully updated the data in merry match.",
    });
  } catch (error) {
    console.error("Database insertion error:", error);
>>>>>>> 198e40e (feat: crud admin at app.mjs)
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
      error: error.message,
    });
  }
});

<<<<<<< HEAD







//admin can delete
// app.delete("/admin/delete/:package_id", async (req, res) => {
//   const packagesId = req.params.package_id;
//   try {
//     await connectionPool.query(`delete from packages where package_id=$1`, [
//       packagesId,
//     ]);

//     return res.status(200).json({
//       message: `Successfully delete the package id: ${packagesId}`,
//     });
//   } catch (error) {
//     console.error("Database deletion error:", error);
//     return res.status(500).json({
//       message:
//         "The server has encountered a situation it does not know how to handle.",
//       error: error.message,
//     });
//   }
// });

app.delete("/admin/delete/:package_id", async (req, res) => {
  const packageId = req.params.package_id;

  try {
    const { error } = await supabase
      .from("packages")
      .delete()
      .eq("package_id", packageId);

    if (error) {
      console.error("Supabase deletion error:", error);
      return res.status(500).json({
        message:
          "The server has encountered a situation it does not know how to handle.",
        error: error.message,
      });
    }

    return res.status(200).json({
      message: `Successfully deleted the package id: ${packageId}`,
    });
  } catch (error) {
    console.error("Supabase deletion error:", error);
=======
//admin can delete
app.delete("/admin/delete/:package_id", async (req, res) => {
  const packagesId = req.params.package_id;
  try {
    await connectionPool.query(`delete from admin where package_id=$1`, [
      packagesId,
    ]);

    return res.status(200).json({
      message: `Successfully delete the package id: ${packagesId}`,
    });
  } catch (error) {
    console.error("Database deletion error:", error);
>>>>>>> 198e40e (feat: crud admin at app.mjs)
    return res.status(500).json({
      message:
        "The server has encountered a situation it does not know how to handle.",
      error: error.message,
    });
  }
});

<<<<<<< HEAD





=======
>>>>>>> c570cdf (feat: crud admin at app.mjs)
>>>>>>> 198e40e (feat: crud admin at app.mjs)
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
