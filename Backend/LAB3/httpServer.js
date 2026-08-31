import http from "http";
const userdata =[{
    id:1,
    name:"Ayush",
    email:"ayushyadav1355@gmail.com"
}]
const server = http.createServer((req, res) => {
    // res.end("hello server");
    const url =req.url;
    const method = req.method
    if(url == "/msg" && method == 'GET'){
        res.end("this is welcome message from server");
    }
    else if (url == "/sys" && method =="GET")
    {
        res.end("this is system information");
    }
    else if(url == "/data" && method == "GET")
    {
        res.statusCode =201;
        res.end(JSON.stringify(userdata));
    }
});

server.listen(2000, () => {
    console.log("server is running on port number 3000");
})