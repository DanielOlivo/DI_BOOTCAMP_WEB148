import { createProxyMiddleware } from "http-proxy-middleware";

export default function(app){
    app.use(
        'api',
        createProxyMiddleware({
            target: "www.themealdb.com/",
            changeOrigin: true,
            secure: false
        })
    )
}