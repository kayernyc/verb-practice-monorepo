import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '@models/users/User';

const mongoDbCollectionName = 'users';

// exports.signin = (req: , res) => {
//   User.findOne({
//     email: req.body.email
//   })
//     .exec((err, user) => {
//       if (err) {
//         res.status(500)
//           .send({
//             message: err
//           });
//         return;
//       }
//       if (!user) {
//         return res.status(404)
//           .send({
//             message: "User Not found."
//           });
//       }

//       //comparing passwords
//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );
//       // checking if password was valid and send response accordingly
//       if (!passwordIsValid) {
//         return res.status(401)
//           .send({
//             accessToken: null,
//             message: "Invalid Password!"
//           });
//       }
//       //signing token with user id
//       var token = jwt.sign({
//         id: user.id
//       }, process.env.API_SECRET, {
//         expiresIn: 86400
//       });

//       //responding to client request with user profile success message and  access token .
//       res.status(200)
//         .send({
//           user: {
//             id: user._id,
//             email: user.email,
//             fullName: user.fullName,
//           },
//           message: "Login successfull",
//           accessToken: token,
//         });
//     });
// };