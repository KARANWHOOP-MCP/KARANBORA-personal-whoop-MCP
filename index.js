import http from “node:http”;

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.setHeader(“Content-Type”, “application/json”);
res.setHeader(“Cache-Control”, “no-store”);

if (req.url === “/health” && req.method === “GET”) {
res.writeHead(200);
res.end(
JSON.stringify({
status: “ok”,
service: “whoop-personal-mcp”,
whoopConnected: false,
message: “Server health check passed. WHOOP authorization is not configured yet.”
})
);
return;
}

res.writeHead(404);
res.end(JSON.stringify({ error: “Not found” }));
});

server.listen(PORT, “0.0.0.0”, () => {
console.log(Server listening on port ${PORT});
});