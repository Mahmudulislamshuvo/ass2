<div align="center">

# 🎨 Project: Bookmark Vault 🎨

**A modern and responsive web application for securely storing and managing website credentials. Built with React, Vite, and Tailwind CSS.**

</div>

---

### ✨ **Project Description**

Bookmark Vault is a front-end application designed to help users keep their most-used credentials organized and accessible. Users can add new website login information, view their saved credentials in a clean and organized manner, search and sort through their list, and reveal passwords when needed. The interface is designed to be modern, intuitive, and responsive.

---

---

### 📸 **Application Screenshots**

_Here are a few snapshots of the application in action. (Note: The Google Drive links below may not render correctly. Please replace them with direct image links from a service like Imgur)._

|                                               Main Dashboard                                               |                                      Add New Bookmark Form                                       |
| :--------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![Screenshot of the main dashboard showing saved credentials](![Desktop Banner](./public/Screenshot1.png)) | ![Screenshot of the form for adding a new bookmark](![Desktop Banner](./public/Screenshot2.png)) |

---

### 🛠️ **Technologies Used**

<p align="center">
  <a href="https://react.dev/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/vitejs/vitejs-icon.svg" alt="vite" width="40" height="40"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
  </a>
    <a href="https://www.npmjs.com/package/react-toastify" target="_blank" rel="noreferrer">
    <img src="https://camo.githubusercontent.com/a9afd6ad3c2c108427651888af2e8623b08e5a8850642d20599bdd040529d1bd/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3234302f3030303030302f746f6173742e706e67" alt="toastify" width="40" height="40"/>
  </a>
  <a href="https://eslint.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original-wordmark.svg" alt="eslint" width="40" height="40"/>
  </a>
</p>

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Notifications:** React-Toastify
- **Linting:** ESLint

---

### 🧩 **Component Breakdown**

This project utilizes a component-based architecture to ensure reusability and maintainability.

- **`Header.jsx`**: A welcoming banner component that displays a "Good Morning" greeting, the current date, and a brief introduction to the application. It sets the context for the user.

- **`Form.jsx`**: A comprehensive and well-styled form for adding new bookmarks. It includes fields for:

  - Website URL
  - Username & Password
  - Category (Dropdown select)
  - Favicon Color (Color picker)
  - It handles user input and form submission logic, including success notifications via `react-toastify`.

- **`MainContent.jsx`**: The core component for displaying the user's saved bookmarks. Its key features include:

  - **Dynamic Grid Layout:** Renders credentials in a responsive card-based grid.
  - **Search Functionality:** A real-time search bar to filter bookmarks by URL, username, or category.
  - **Sorting:** Allows users to sort the bookmarks alphabetically (A-Z or Z-A) based on the website name.
  - **Password Visibility Toggle:** A "Reveal" / "Hide" button on each card to securely view passwords.
  - **Empty State:** A helpful message and icon are displayed when no bookmarks have been saved or when a search returns no results.

- **`Footer.jsx`**: A standard footer component containing navigation links (About, Blog, etc.) and a copyright notice.

---

### ⚙️ **Getting Started**

Follow these instructions to get a copy of the project up and running on your local machine.

#### **Prerequisites**

- Node.js (v18.x or higher recommended)
- An npm-compatible package manager (npm, yarn, or pnpm)

#### **Installation & Setup**

1.  **Clone the repository:**

    ```sh
    git clone https://your-repository-link.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd ass2
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

#### **Running the Application**

1.  **Start the development server:**

    ```sh
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

2.  **Build for production:**
    ```sh
    npm run build
    ```
    This command generates a `dist` folder with the optimized production build.

---

### 🤝 **Contributing**

Contributions are welcome! If you have suggestions or want to improve the project, please feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

---

### 📄 **License**

Distributed under the MIT License. See `LICENSE` for more information.

---

### 📫 **Contact**

Your Name - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

Project Link: [https://github.com/your_username/ass2](https://github.com/your_username/ass2)
