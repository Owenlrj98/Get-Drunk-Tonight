// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), reactRefresh()],
//   build: {
//     rollupOptions: {
//       external: [
//         'react-bootstrap/Container',
//         'react-bootstrap/Nav',
//         'react-bootstrap/Navbar'
//       ]
//     }
//   }
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
})
