const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "4iHlrp29wu+a8RtXu4rysX9c5/wdJAH+qAo6YLXyojNcT3CeVYbmDXLUsg32bjrH6MJ8WKGWNpS9JRo8OipgYDfscjngyrZUcFLDua7Ed8UpPIHHemAMKCoLR9P76PQW4JC4SKaQArqIzUwbXqijrZApDhnBWee2Wb7w7fhIwwkod8I2rqp+EY66wol7W+hlKaXtcvU1B/md+AJSrkWwZc0Z13Qk6GVDAUQn8WmLClLGvbr5MjzSXYhfLaeI7oMJsDZmwGGWqxxbdAiI6ReDsSJ95NRbY6I7MGGZ2jZc31RKTs7f0AGoe3VXkwaQsXEqjKJg6owqIKdkOeBUM+lrZQ==";

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.log("Invalid token");
    throw new Error("Invalid token");
  }
};

const extractUserIdFromToken = (decodedToken) => {
  if (decodedToken && decodedToken.userId) {
    return decodedToken.userId;
  } else {
    console.log("Invalid or missing user ID in token");
    throw new Error("Invalid or missing user ID in token");
  }
};

function authVerify(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = verifyToken(token);
    const userId = extractUserIdFromToken(decoded);
    req.user = { userId };
    return next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ message: "Unauthorised access, please add the token" });
  }
}

module.exports = authVerify;
