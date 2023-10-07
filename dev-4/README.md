# dev/4 - react app with vite

- Install

    `npm create vite@latest`

    ✔ Project name: … react-app-vite
    ✔ Select a framework: › React
    ✔ Select a variant: › JavaScript

- start

    `cd react-app-vite`

    `npm install`

    `npm run dev`

- config

    **vite.config.js**

    ```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
        base: '',
        plugins: [react()],
    })
    ```


- Vite is Super!

    `npm install`

    **added 266 packages**, and audited 267 packages **in 42s**

- Run

    `npm run dev`

    VITE v4.4.11  ready in 960 ms

    ➜  Local:   http://localhost:5173/

    ➜  Network: use --host to expose
    
    ➜  press h to show help

