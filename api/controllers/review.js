import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getReviews = (req, res) => {
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM reviews AS c JOIN users AS u ON (u.id = c.userId)
      WHERE c.imdbID = ? ORDER BY c.createdAt DESC
      `;

  db.query(q, [req.query.imdbID], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addReview = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    // console.log(`img is ${JSON.stringify(req.body)}`);
    const q =
      "INSERT INTO reviews(`desc`, `createdAt`, `userId`, `imdbID`) VALUES (?)";
    const values = [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.imdbID,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Review has been created.");
    });
  });
};