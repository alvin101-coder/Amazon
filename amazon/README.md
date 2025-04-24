# **SwiftCart**

Welcome to **SwiftCart** – a sleek and responsive e-commerce platform designed for fast and seamless shopping experiences. This application allows users to browse products, view details, filter categories, search items, and manage their shopping carts with ease.

---

## **Features**

### User Experience
- **Homepage:**
  - A visually striking hero section introduces SwiftCart and provides call-to-action buttons.
- **Product Listing:**
  - Displays a list of products fetched dynamically from an API.
  - Includes category filtering and a search bar for easy navigation.
- **Product Details:**
  - Detailed view of individual products with title, price, category, description, and an "Add to Cart" button.
- **Shopping Cart:**
  - Showcases selected items, allowing users to remove items and (optionally) displays total price.

### Technical Features
- **React** for building dynamic and fast user interfaces.
- **React Router** for smooth page navigation.
- **Axios** for fetching product data from the [Fake Store API](https://fakestoreapi.com/).
- **Responsive Design** for optimal usability on different devices.

---

## **Getting Started**

### **Prerequisites**
Ensure the following software is installed on your system:
- **Node.js** and **npm**: [Download Node.js](https://nodejs.org/)
- Modern web browser (e.g., Chrome, Firefox).

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone git@github.com:alvin101-coder/Amazon.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Amazon
   ```
3. Install required dependencies:
   ```bash
   npm install
   ```

---

### **Running the Application**

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the app in your browser at the URL provided by the terminal (e.g., `http://localhost:3000`).

---

### **Building for Production**
To create a production-ready build:
```bash
npm run build
```
Serve the build locally using:
```bash
npm run preview
```

---

## **Project Structure**
The project is organized as follows:

### **File Structure**
- **`public/`:**
  - Static files, including `index.html` and favicon assets.
- **`src/`:**
  - **`components/`:**
    - Reusable React components such as:
      - `Navbar.jsx`: Displays site navigation and cart count.
      - `HeroSection.jsx`: Adds a visually stunning hero section for the homepage.
      - `FilterBar.jsx`: Implements category filtering functionality.
      - `SearchBar.jsx`: Provides search capabilities for products.
      - `ProductCard.jsx`: Displays product data in a card format.
      - `Cart.jsx`: Handles the cart page view.
  - **`pages/`:**
    - Page-level components like:
      - `ProductListing.jsx`: Displays all products with filtering and searching.
      - `ProductDetails.jsx`: Shows detailed information about selected products.
  - **`styles/`:**
    - Global CSS file (`main.css`) for consistent styling across components.
  - **`App.jsx`:**
    - Root component defining the app structure and routing.
  - **`main.jsx`:**
    - Entry point that mounts the React app to the DOM.
- **`package.json`:**
  - Includes project metadata and dependencies.
- **`README.md`:**
  - Project documentation.

---

## **Technologies Used**
- **React**: For creating the user interface.
- **React Router**: For navigation and routing.
- **Axios**: For API requests.
- **CSS**: For layout, styling, and responsive design.

---

## **Customization**
### Change the Branding:
- Modify the app name in:
  - `Navbar.jsx`
  - `HeroSection.jsx`
  - The `<title>` tag in `public/index.html`.

### Modify Backgrounds:
- Update the gradient backgrounds in `main.css` under `.hero`, `body`, and `.product-card`.

---

## **Contributing**
We welcome contributions to improve **SwiftCart**. Follow these steps to get started:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-new-enhancement
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-new-enhancement
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).