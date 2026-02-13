import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) =>{

    res.status(200).json({
        success: true,
        message: "User registered successfully",
    });
})
        

export { registerUser };

















































// const registerUser = asyncHandler(async (req, res) => {
//   const { username, password } = req.body;
//     // Simulate user registration logic
//     if (!username || !password) {
//         const error = new Error("Username and password are required");
//         error.code = 400;
//         throw error;
//     }
//     // Assume user is registered successfully
//     res.status(201).json({
//         success: true,
//         message: "User registered successfully",
//     });
// });

// export { registerUser };

