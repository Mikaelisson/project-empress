// vite.config.js
import { defineConfig, preview } from "file:///C:/Users/mikae/OneDrive/%C3%81rea%20de%20Trabalho/Projeto_faculdade/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/mikae/OneDrive/%C3%81rea%20de%20Trabalho/Projeto_faculdade/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/admin": "http://localhost:3000"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtaWthZVxcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcUHJvamV0b19mYWN1bGRhZGVcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtaWthZVxcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcUHJvamV0b19mYWN1bGRhZGVcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9taWthZS9PbmVEcml2ZS8lQzMlODFyZWElMjBkZSUyMFRyYWJhbGhvL1Byb2pldG9fZmFjdWxkYWRlL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgcHJldmlldyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICBcIi9hZG1pblwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFksU0FBUyxjQUFjLGVBQWU7QUFDbGIsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
