

# React Candidate Test

Welcome! This project is designed to test your React knowledge and skills. Please follow the instructions below to complete the task.

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/shivvyas2/react-candidate-test.git
   cd react-candidate-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

## Task

### 1. Objective
Improve and add features to the application.

### 2. Instructions
- Refactor the Header component to include a dropdown menu
- Add a feature to fetch and display data from a public API (e.g., GitHub users or JSONPlaceholder)


### 3. Bonus Points
- Use TypeScript
- Add unit tests with Jest
- Improve project structure or add comments for clarity

## Submission

1. Commit your changes with meaningful commit messages
2. Push the changes to a **new branch** (e.g., `feature-yourname`)
3. Create a pull request to the main branch of this repository




# React Project Documentation

## Getting Started

### Prerequisites
- Latest stable version of Node.js and npm
- Do not delete the package-lock.json / yarn.lock file

### Installation

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Running the Application

```bash
# For CRA based project
npm start    # or yarn start

# For Vite based project
npm run dev  # or yarn dev

# For Next.js based project
npm run dev  # or yarn dev
```

The development server will start at `http://localhost:3000`

### Building for Production

```bash
# For CRA based project
npm run build    # or yarn build

# For Vite based project
npm run preview  # or yarn preview

# For Next.js based project
npm run build    # or yarn build
```

## Project Structure

```
├── public/               # Static files (images, icons)
├── src/
│   ├── __fakeData__/    # Mock data for development
│   ├── components/      # Reusable components
│   ├── contexts/        # Global context providers
│   ├── hooks/          # Custom React hooks
│   ├── icons/          # Icon components
│   ├── layouts/        # Layout components
│   ├── page-sections/  # Page-specific components
│   ├── pages/          # Route pages
│   ├── routes/         # Route configurations
│   ├── theme/          # Theme configuration
│   └── utils/          # Utility functions
```

## Navigation

Navigation configuration is located in `layouts/layout-parts/navigation.jsx`. Example structure:

```javascript
const navigations = [
  { 
    type: "label", 
    label: "Dashboard" 
  },
  {
    name: "Analytics",
    path: "/dashboard",
    icon: duotone.PersonChalkboard,
  },
  {
    name: "Users",
    icon: duotone.UserList,
    children: [
      { name: "Add User", path: "/dashboard/users/add-user" },
      { name: "User List", path: "/dashboard/users/user-list" }
    ]
  }
];
```

## Routing

Routes are configured using `react-router-dom` in `src/routes/index.js`. To add a new route:

```javascript
const routes = () => {
  return [
    { path: "/", element: <Landing /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <ErrorPage /> }
  ];
};
```

## Theming

### Colors
Define custom colors in `src/theme/colors.js`:

```javascript
const primary = {
  main: "#6950E8",
  light: "#F4F1FE",
  dark: "#240C6E"
};
```

### Typography
1. Install font package:
```bash
npm install @fontsource/inter
# or
yarn add @fontsource/inter
```

2. Configure in theme:
```javascript
import "@fontsource/inter/400.css";
createTheme({
  typography: { 
    fontFamily: "'Inter', sans-serif" 
  }
});
```

## Internationalization (i18n)

i18n configuration is in `src/i18n/index.js`. Example usage:

```javascript
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t } = useTranslation();
  return <h1>{t("Bounce Rate")}</h1>;
};
```

## Authentication

The project supports multiple authentication providers:
- Firebase
- Auth0
- JWT
- AWS Amplify

Configuration files are located in `src/contexts/`.

## Dependencies

Core dependencies:
- @mui/material
- @mui/icons-material
- @emotion/react
- react-router-dom
- axios
- formik
- yup

Optional dependencies based on features:
- firebase
- apexcharts
- react-beautiful-dnd

For a complete list of dependencies, refer to package.json.



## .env Settings
```env
VITE_FIREBASE_APT_KEY=AIzaSyBoUdiDtzQdC-m4nj9CPY5SvY7uKJGL71k
VITE_FIREBASE_AUTH_DOMAIN=matx-15ede.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://matx-15ede.firebaseio.com
VITE_FIREBASE_PROJECT_ID=matx-15ede
VITE_FIREBASE_STORAGE_BUCKET=matx-15ede.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=348111707030
VITE_FIREBASE_APP_ID=1:348111707030:web:70c4ca4eb3f1dbd18e1bb7
VITE_FIREBASE_MEASUREMENT_ID=G-806629YLNN
VITE_AUTH0_CLIENT_ID=XmminWIs0S8gR3gIRBydYLWbF58x81vK
VITE_AUTH0_DOMAIN=matx.us.auth0.com
GENERATE_SOURCEMAP=false
```
