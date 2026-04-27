import { prisma } from "../config/db.js";
import { supabase } from "../config/supabase.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      code: 400,
      message: "Please fill all of the fields",
      success: false
    });
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({
        code: 400,
        message: error.message,
        success: false
      });
    }

    if (!data.user) {
      return res.status(400).json({
        code: 400,
        message: "User not created",
        success: false
      });
    }

    const insertProfile = await prisma.profiles.create({
      data: {
        role:"user",
        username:username,
        user_id: data.user.id
      }
    });

    return res.status(201).json({
  code: 201,
  message: "User created successfully",
  success: true,
  data: {
    email: data.user.email,
    username: insertProfile.username,
  }
});

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      success: false
    });
  }
};