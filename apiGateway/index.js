import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(cors());
app.use(helmet()); // Add security headers
app.use(morgan("combined"));

const paths = {
    auth: "http://localhost:3010",
    bus: "http://localhost:3011",
    booking: "http://localhost:3012",
};

app.use("/auth", createProxyMiddleware({ target: paths.auth, changeOrigin: true }));
app.use("/bus", createProxyMiddleware({ target: paths.bus, changeOrigin: true }));
app.use("/booking", createProxyMiddleware({ target: paths.booking, changeOrigin: true }));

const port = process.env.APIGATEWAY_PORT || 3009;

app.listen(port, () => {
    console.log(`API Gateway is running on the port ${port}`);
});
