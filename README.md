# HERO.IO - App Store Dashboard

## Live Demo
Check out the live demo of the application here: [Live Demo](https://precious-alfajores-377c46.netlify.app/)


## Description
**HERO.IO** is a responsive web application that showcases a collection of mobile apps. Users can explore apps, view detailed information, install/uninstall apps, and track app reviews with interactive charts. The project is fully responsive, providing a smooth experience across all devices.  

Key features include:
- Home page with banner, state cards, and top apps section.
- All Apps page with live search and filter functionality.
- App Details page showing app info, reviews, and interactive charts.
- LocalStorage-based installation system with Install/Uninstall functionality.
- Sorting apps by download count (Low-High / High-Low).
- Custom error page for invalid routes.
- Loading animations for page navigation and search operations.

---

## Features

### Home Page
- Center-aligned banner with buttons linking to App Store and Play Store.
- Three state cards displaying app statistics.
- Top 8 apps displayed in a four-column layout.
- "Show All" button navigates to All Apps page.

### All Apps Page
- Displays all apps from JSON data.
- Live search filtering apps by title.
- Case-insensitive search.
- Displays “No App Found” message if search yields no results.
- Each app card is clickable, navigating to App Details page.

### App Details Page
- Shows app image and detailed information.
- Install button with toast notification on install.
- Interactive Recharts chart for app reviews.
- Description section for app details.

### My Installation Page
- Displays installed apps as cards.
- Uninstall button removes app from both UI and localStorage.
- Sort apps by download count (High-Low / Low-High).
- Toast notification on uninstall.

### Other Features
- Fully responsive design for all devices.
- Custom navigation and footer.
- Loading animations during page navigation and search.
- Handles invalid routes with a custom error page.

---

## Technologies Used
- **React** - Frontend library
- **React Router DOM** - Routing and navigation
- **Tailwind CSS** - Styling and responsive design
- **Recharts** - Interactive charts for app reviews
- **React Toastify** - Toast notifications
- **LocalStorage** - Persistent app installation state
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

