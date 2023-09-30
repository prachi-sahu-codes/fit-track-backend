const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "4iHlrp29wu+a8RtXu4rysX9c5/wdJAH+qAo6YLXyojNcT3CeVYbmDXLUsg32bjrH6MJ8WKGWNpS9JRo8OipgYDfscjngyrZUcFLDua7Ed8UpPIHHemAMKCoLR9P76PQW4JC4SKaQArqIzUwbXqijrZApDhnBWee2Wb7w7fhIwwkod8I2rqp+EY66wol7W+hlKaXtcvU1B/md+AJSrkWwZc0Z13Qk6GVDAUQn8WmLClLGvbr5MjzSXYhfLaeI7oMJsDZmwGGWqxxbdAiI6ReDsSJ95NRbY6I7MGGZ2jZc31RKTs7f0AGoe3VXkwaQsXEqjKJg6owqIKdkOeBUM+lrZQ==";

const generateToken = (userId) => {
  console.log("token", jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" }));
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
};

module.exports = generateToken;
