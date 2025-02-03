import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                alerts: resolve(__dirname, "alerts.html"),
                profile: resolve(__dirname, "profile.html")
            }
        }
    }
})