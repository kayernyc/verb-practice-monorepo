import {
  NextFunction,
  Request,
  Response,
  RequestHandler,
  Router,
} from 'express';

export const dataRouter: Router = Router();

const fullday = 86_400; // 1 day
const quarterHour = 900; // 1 day

dataRouter.post('/', async (req, res) => {
  try {
    res.send('here it got through').status(201);
  } catch (err) {
    console.log(`ERROR: ${err}`);
    res.send('Read the data');
  }
}) as RequestHandler;

// exports.signup = (req, res) => {
//   const user = new User({
//     fullName: req.body.fullName,
//     email: req.body.email,
//     role: req.body.role,
//     password: bcrypt.hashSync(req.body.password, 8)
//   });

//   user.save((err, user) => {
//     if (err) {
//       res.status(500)
//         .send({
//           message: err
//         });
//       return;
//     } else {
//       res.status(200)
//         .send({
//           message: "User Registered successfully"
//         })
//     }
//   });
// };
