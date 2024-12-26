# Advanced Web Application with Admin Panel

## Overview
This project is an **advanced web application** built with **HTML**, **CSS**, **JavaScript**, and **SASS**. It features multiple pages, including an admin dashboard, and uses modularized code for scalability and maintainability.

---

## Features
- **Admin Panel**: A dedicated dashboard for managing and analyzing data.
- **User Authentication**: Register and sign in with secure forms.
- **Responsive Design**: Fully optimized for various devices.
- **SASS Integration**: Simplified and modularized CSS.
- **Interactive UI**: Smooth animations and dynamic content updates.
- **Multi-Page Structure**: Includes several interconnected pages:
  - `index.html`: Main landing page.
  - `register.html`: User registration page.
  - `signin.html`: User sign-in page.
  - `admin.html`: Admin dashboard.
  - `elements.html`: A collection of reusable components.

---

## Tech Stack
- **HTML**: Structure of the website.
- **CSS & SASS**: For styling with pre-processed SASS for modularity.
- **JavaScript**: Adds interactivity and dynamic behavior.
- **Node.js**: For managing dependencies and running scripts.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v14+)
- Code editor (optional, e.g., VSCode)
- A web browser (e.g., Chrome, Firefox)

### Steps
1. Clone the repository or download the zip file:
   ```bash
   git clone https://github.com/yourusername/advanced-web-app.git
   cd advanced-web-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build SASS files:
   ```bash
   npm run sass
   ```

4. Launch the application:
   - Open `index.html` in your browser.

---

## Usage
1. Navigate to the **Landing Page** (`index.html`).
2. **Sign In/Register** as a user via `signin.html` or `register.html`.
3. Access the **Admin Dashboard** for data management and analysis via `admin.html`.
4. Explore the **Elements Page** for reusable components.

---

## Customization
1. **Edit Content**:
   - Update HTML files to match your project requirements.

2. **Modify Styles**:
   - Edit SASS files in the `sass/` folder for custom styles.
   - Recompile styles using `npm run sass`.

3. **Add New Pages**:
   - Create new HTML files and link them to the navigation menu.
   - Add corresponding styles in `sass/` and scripts in `js/`.

---

## File Structure
```
├── .vscode          # VSCode configuration (optional)
├── css              # Compiled CSS files
├── demo             # Demo files (optional)
├── images           # Images used in the application
├── js               # JavaScript files
├── node_modules     # Node.js dependencies
├── sass             # SASS source files
├── scripts          # Custom scripts for additional functionality
├── admin.html       # Admin dashboard page
├── elements.html    # Reusable components
├── index.html       # Main landing page
├── package-lock.json
├── package.json
├── register.html    # User registration page
└── signin.html      # User sign-in page
```

---

## License
This project is open-source and free to use for personal or educational purposes.

---

## Contact
For any questions or suggestions, feel free to contact [daongocanhkhoi@gmail.com].
