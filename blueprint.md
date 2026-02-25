# Bitwize Technologies - One-Page Portfolio Website

**Complete Build Prompts (Human Readable Format)**

---

## Phase 1: Environment & Foundation

**Goal:** Establish a lean, modern development environment optimized for a single-page application feel.

- [x] 1. Set up a new Next.js project with the App Router. Choose TypeScript for type safety and Tailwind CSS for styling. Use the src directory structure. Install essential utility packages for conditional class management and an icon library.
- [x] 2. Initialize Git version control for the project. Create a comprehensive gitignore file tailored to Next.js, Node modules, environment variables, and operating system specific files. Make the first commit with a clear message indicating this is the initial project setup for the Bitwize Technologies landing page.
- [x] 3. Install and configure ESLint and Prettier for code linting and consistent formatting. Set up a simple pre-commit hook that ensures code is automatically formatted before each commit to maintain quality standards.
- [x] 4. Create the folder structure inside the src directory with separate folders for components, utilities, custom hooks, TypeScript type definitions, data storage, and the Next.js app router files. Within the components folder, create subfolders for layout components, section components, and reusable UI elements.

---

## Phase 2: Dark Theme & Design Tokens

**Goal:** Establish the visual identity before building any sections.

- [ ] 5. Extend the Tailwind CSS configuration file to implement a dark mode first theme. Define a custom color palette including a deep space color for the primary background, a slightly lighter surface color for cards and elevated elements, a vibrant cyan for primary call to action buttons and highlights, a purple for secondary accents and icons, white for primary text, and a softer gray for supporting text.
- [ ] 6. Set up the typography system by importing clean, modern fonts from Google Fonts. Choose a highly readable sans serif for body text and a bold, modern sans serif for headings. Configure fluid typography scales so text sizes adjust seamlessly across different screen sizes. Define base sizes for main headings, secondary headings, and body text.
- [ ] 7. Build reusable user interface component primitives including a glassmorphic card component with semi-transparent background and border glow effect on hover, a primary button with gradient fill and scale animation on hover, a secondary button with outline style and color transition on hover, and a section container component with maximum width and consistent horizontal padding for all content sections.

---

## Phase 3: Persistent Layout & Navigation

**Goal:** Create the wrapper that stays consistent as the user scrolls.

- [ ] 8. Build the sticky navigation bar component with a transparent background that becomes blurred and solid as the user scrolls down the page. Place the company name on the left side. Create navigation links on the right side for About, Brands, Services, Portfolio, and Contact sections. Ensure proper spacing and typography hierarchy.
- [ ] 9. Implement the mobile responsive version of the navigation by creating a hamburger menu that appears on small screens. Design a full-screen overlay menu with smooth slide-in animation. Include all navigation links and ensure the close button is easily accessible and clearly visible.
- [ ] 10. Implement smooth scroll functionality for all anchor links throughout the site. When a user clicks any navigation link, the page should glide smoothly to the corresponding section rather than jumping abruptly. Add offset calculation to account for the fixed header height so sections are not hidden behind the navigation bar.
- [ ] 11. Build the minimal footer component with copyright information, social media icons for platforms like LinkedIn, Twitter, and GitHub, and a discreet back to top button that smoothly scrolls to the top of the page when clicked.
