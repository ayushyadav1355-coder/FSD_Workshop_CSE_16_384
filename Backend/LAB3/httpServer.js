import http from "http";

const userdata = [
  {
    id: 1,
    name: "Ayush",
    email: "ayushyadav1355@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/msg" && method == "GET") {
    res.end("this is welcome message from server");
  } else if (url == "/sys" && method == "GET") {
    res.end("this is system information");
  } else if (url == "/data" && method == "GET") {
    res.statusCode = 201;
    res.end(JSON.stringify(userdata));
  } else if (url.startsWith("/users/") && method == "GET") {
    const id = url.split("/")[2];
    console.log(id);
    const user = userdata.find((u) => u.id == id);
    if (!user) {
      return res.end("user not found");
    }
    res.end(JSON.stringify(user));
  }
});

server.listen(2000, () => {
  console.log("server is running on port number 3000");
});