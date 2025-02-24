import { defineConfig } from "vite";
import { resolve } from "path"; 
import react from '@vitejs/plugin-react'



export default defineConfig({
    plugins: [react()],
    base: "/Multi-page-site/docs/",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                alerts: resolve(__dirname, "alerts.html"),
                profile: resolve(__dirname, "profile.html"),
                todoList: resolve(__dirname, "todo.html")
                
            }
        }
    }
})