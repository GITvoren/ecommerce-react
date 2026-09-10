# AGENTS.md

## Commands
- **Dev Server:** `npm start` (runs `react-scripts start`)
- **Build:** `npm run build` (runs `react-scripts build`)
- **Test:** `npm test` (runs `react-scripts test` via Jest / React Testing Library)

## Environment & Configuration
- **API Backend:** Requires `REACT_APP_API_URL` environment variable (e.g. `REACT_APP_API_URL=http://localhost:4000`) pointing to the backend API ([new-ecommerce-api](https://github.com/GITvoren/new-ecommerce-api)).
- **Build Toolchain:** Create React App (`react-scripts` v5).

## Architecture & Entrypoints
- **Main Entry:** `src/index.js` -> `src/App.js`
- **Routing:** React Router v6 (`react-router-dom`) with route guards (`AdminRoutes`, `MemberRoutes`, `NonMemberRoutes`).
- **State Management:** React Context (`UserContext`, `CartProvider`).
- **Structure:**
  - `src/pages/`: Page-level views (Home, Products, Login, Register, Cart, CheckOut, Admin dashboard views).
  - `src/components/`: Reusable UI components (Navbar, ProductCard, CartItem, etc.).
  - `src/utilities/`: Context providers, route protection wrappers, and utility components.
  - `src/assets/`: CSS stylesheets and local static images.
