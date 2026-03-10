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

- [x] 5. Extend the Tailwind CSS configuration file to implement a dark mode first theme. Define a custom color palette including a deep space color for the primary background, a slightly lighter surface color for cards and elevated elements, a vibrant cyan for primary call to action buttons and highlights, a purple for secondary accents and icons, white for primary text, and a softer gray for supporting text.
- [x] 6. Set up the typography system by importing clean, modern fonts from Google Fonts. Choose a highly readable sans serif for body text and a bold, modern sans serif for headings. Configure fluid typography scales so text sizes adjust seamlessly across different screen sizes. Define base sizes for main headings, secondary headings, and body text.
- [x] 7. Build reusable user interface component primitives including a glassmorphic card component with semi-transparent background and border glow effect on hover, a primary button with gradient fill and scale animation on hover, a secondary button with outline style and color transition on hover, and a section container component with maximum width and consistent horizontal padding for all content sections.

---

## Phase 3: Persistent Layout & Navigation

**Goal:** Create the wrapper that stays consistent as the user scrolls.

- [x] 8. Build the sticky navigation bar component with a transparent background that becomes blurred and solid as the user scrolls down the page. Place the company name on the left side. Create navigation links on the right side for About, Brands, Services, Portfolio, and Contact sections. Ensure proper spacing and typography hierarchy.
- [x] 9. Implement the mobile responsive version of the navigation by creating a hamburger menu that appears on small screens. Design a full-screen overlay menu with smooth slide-in animation. Include all navigation links and ensure the close button is easily accessible and clearly visible.
- [x] 10. Implement smooth scroll functionality for all anchor links throughout the site. When a user clicks any navigation link, the page should glide smoothly to the corresponding section rather than jumping abruptly. Add offset calculation to account for the fixed header height so sections are not hidden behind the navigation bar.
- [x] 11. Build the minimal footer component with copyright information, social media icons for platforms like LinkedIn, Twitter, and GitHub, and a discreet back to top button that smoothly scrolls to the top of the page when clicked.

---

## Phase 4: Hero Section

**Goal:** Create the first impactful section users see above the fold.

- [ ] 12. Build the Hero section as a full viewport height component that fills the entire screen. Center all content vertically and horizontally using flexbox. Add a subtle animated grid pattern or floating tech icons as the background to create visual interest without distracting from the main message.
- [ ] 13. Implement gradient text effect for the company name using CSS background clip techniques. Add a fade-in or typewriter animation for the company tagline to create an engaging entrance.
- [ ] 14. Create two call-to-action buttons: one for exploring services and one for viewing work. Style the primary button with the cyan gradient and the secondary button with purple outline. Add hover effects that slightly scale the buttons and enhance the gradient intensity.
- [ ] 15. Connect the call-to-action buttons to their respective sections using the smooth scroll functionality. The explore services button should scroll to the Services section. The view work button should scroll to the Portfolio section.

---

## Phase 5: Trust Bar Section

**Goal:** Build credibility by displaying client or partner logos.

- [ ] 16. Create a horizontal row component positioned directly below the Hero section. Add a subtle divider line to separate from the hero. Display several placeholder client or technology partner logos in grayscale to suggest established partnerships.
- [ ] 17. Add hover effect to each logo that transitions from grayscale to full color with a slight scale increase. Ensure the component is fully responsive, either stacking vertically or switching to a carousel on mobile devices for optimal viewing.

---

## Phase 6: About Section

**Goal:** Communicate the company's identity and engineering focus.

- [ ] 18. Build the About section as a two-column layout with equal width on each side. On the left side, place a bold, large statement about the company's engineering-first approach to digital solutions. Use the accent purple for emphasis on key words.
- [ ] 19. On the right side, display a concise company description highlighting the multi-brand structure and commitment to practical IT and engineering solutions across various sectors. Below the description, add a key statistic or metric such as years of experience or projects delivered to build credibility.
- [ ] 20. Add a subtle entrance animation where both columns fade in and slide up when the section enters the viewport. Ensure the animation is smooth and enhances rather than distracts from the content.

---

## Phase 7: Services Section

**Goal:** Showcase the three core technical offerings.

- [ ] 21. Create the Services section with a centered section title clearly indicating this is where core technologies are showcased. Below the title, build a three-card grid using flexbox that automatically wraps appropriately on different screen sizes.
- [ ] 22. Design the first service card for Web Technologies using a globe or code icon. List the specific offerings including web design, hosting, and development. Keep the presentation clean and easy to scan.
- [ ] 23. Design the second service card for Computer Systems using a server or monitor icon. List the offerings including networking, troubleshooting, and maintenance. Maintain consistent styling with the first card.
- [ ] 24. Design the third service card for Control Engineering using a microchip or robot icon. List the offerings including automation, embedded systems, and IoT integration. Ensure all three cards have identical dimensions and styling for visual harmony.
- [ ] 25. Implement hover effects for all service cards including border glow using the accent cyan color, a slight lift animation that raises the card, and smooth transitions of all properties for a polished feel.

---

## Phase 8: Brands Section

**Goal:** Introduce the two sub-brands: Cyberlutions and eKoble.

- [ ] 26. Build the Brands section with a centered section title clearly indicating this is where the company brands are introduced. Create a two-card layout that displays side by side on desktop and stacks vertically on mobile.
- [ ] 27. Design the first brand card for Cyberlutions. Include the brand name, a brief description of virtual tech support services for individuals and small businesses, and an icon representing support. Add a call-to-action button labeled Get Support styled as a secondary button.
- [ ] 28. Design the second brand card for eKoble. Include the brand name, a description of the e-commerce store offering smart gadgets, digital products, and tech accessories for both business and consumer customers. Add a call-to-action button labeled Shop Now styled as a secondary button.
- [ ] 29. Make both cards visually distinct while maintaining overall brand cohesion. Consider using different accent colors for each brand or subtle background patterns to create differentiation.
- [ ] 30. For initial launch, make the call-to-action buttons trigger a simple message indicating the feature is coming soon or scroll to the e-commerce teaser section. This maintains functionality without requiring actual e-commerce integration.

---

## Phase 9: Portfolio Showcase

**Goal:** Display sample work to build credibility and demonstrate capabilities.

- [ ] 31. Create the Portfolio section with a centered section title indicating recent work. Build a three-card grid layout consistent with the services section design language for visual coherence.
- [ ] 32. Design the first project card representing Web Technologies work. Include a placeholder image with proper aspect ratio, a project title such as an e-commerce platform example, and a category tag indicating web development.
- [ ] 33. Design the second project card representing Computer Systems work. Include a placeholder image, a project title such as a corporate network security implementation, and a category tag indicating systems integration.
- [ ] 34. Design the third project card representing Control Engineering work. Include a placeholder image, a project title such as a smart home automation project, and a category tag indicating IoT solutions.
- [ ] 35. Implement hover effects for project cards that slightly scale the image, show an overlay with more project details, and a border glow consistent with the service cards for design unity.
- [ ] Create a generic "Coming Soon" page for portfolio projects. Link the "View Project" button on each portfolio card to this "Coming Soon" page. The "Coming Soon" page should have a consistent design with the rest of the website, include a message indicating that the project details are coming soon, and feature a back button to navigate back to the homepage.

---

## Phase 10: Contact Section

**Goal:** Provide a way for visitors to get in touch with the company.

- [ ] 36. Build the Contact section with a centered section title inviting visitors to start a conversation. Create a two-column layout with the contact form on the left and contact information on the right.
- [ ] 37. Design the contact form with three fields including a name input, an email input, and a message textarea. Add proper labels, placeholder text for guidance, and validation styling. Style all inputs with dark background, subtle borders, and focus state with accent cyan glow.
- [ ] 38. Implement form validation that shows inline error messages for invalid inputs. Disable the submit button while the form is in the process of submitting to prevent duplicate submissions.
- [ ] 39. Create the submit button with the primary gradient style. Add a loading state animation when the form is being sent. Connect the form to a third-party service for actual email functionality.
- [ ] 40. On the right column, display contact information including email address with copy to clipboard functionality, phone number, office hours or location details, and a placeholder map or office graphic using a simple illustration.

---

## Phase 11: E-commerce Teaser for Future Preparation

**Goal:** Hint at the future e-commerce functionality without building it fully.

- [ ] 41. Below the eKoble brand card or as a separate mini-section, create a horizontally scrollable row of product placeholders. Title this section something like Popular Gadgets or Shop Preview to indicate upcoming e-commerce functionality.
- [ ] 42. Create several product cards with placeholder images, product names such as wireless earbuds or smart watches, and a small button labeled View or Preview that indicates interest without full shopping functionality.
- [ ] 43. Style the product cards to be visually consistent with the main site but slightly smaller to indicate they are teasers rather than full product listings. Make the row scrollable on mobile with snap points for easy browsing.
- [ ] 44. Add a Shop Now button below the row that links to a coming soon page or opens a modal explaining the e-commerce store is launching soon, setting expectations appropriately.

---

## Phase 12: Motion & Micro-Interactions

**Goal:** Add polish and bring the site to life with thoughtful animations.

- [ ] 45. Integrate an animation library into the project. Apply entrance animations to each section that fade in and slide up from a slight offset when the section enters the viewport. Use staggered animations for card grids to create visual interest.
- [ ] 46. Add a subtle parallax effect to background elements in the hero section where the background moves slightly slower than the foreground when scrolling, creating depth.
- [ ] 47. Implement active navigation link highlighting using intersection observer technology. As the user scrolls, the corresponding navigation link should change color or show an underline to indicate which section is currently in view.
- [ ] 48. Add smooth transitions for all interactive elements including buttons, cards, and links. Ensure all animations run smoothly at high frame rates for a professional feel.

---

## Phase 13: Mobile Responsiveness

**Goal:** Ensure flawless experience on all devices from phones to desktops.

- [ ] 49. Test the entire site on a small mobile viewport. Make necessary adjustments including stacking all grid layouts vertically, reducing heading sizes proportionally, increasing padding and spacing for touch targets, and ensuring the mobile menu is easily accessible and closable.
- [ ] 50. Test on tablet viewport and adjust any layouts that break at intermediate sizes. Use responsive design techniques to apply specific styles at different breakpoints.
- [ ] 51. Ensure all touch targets are large enough for comfortable tapping. Increase spacing between clickable elements to prevent accidental taps. Verify that forms are usable with touch keyboards and autofill functionality.

---

## Phase 14: Centralized Content Management

**Goal:** Prepare for future updates and easy content changes.

- [ ] 52. Create a central data file that exports a single JavaScript object containing all site content including hero section text, about section content, services listings, brand information, portfolio items, and contact details.
- [ ] 53. Refactor all components to import content from this central file rather than having text hardcoded within components. This makes future content updates quick and enables easy migration to a content management system later.
- [ ] 54. Structure the eKoble brand data to include an array of product objects, preparing for when the e-commerce functionality is fully implemented and real products need to be displayed.

---

## Phase 15: Coming Soon Pages

**Goal:** Prepare for future expansion without breaking current user experience.

- [ ] 55. Create a simple blog route that displays a Blog Coming Soon page with consistent site branding, a placeholder illustration, and an option to subscribe for updates when the blog launches.
- [ ] 56. Create a simple support route that displays a Support Portal Coming Soon page with similar styling and a link back to the contact form for immediate assistance needs.
- [ ] 57. Add links to these pages in the footer, ensuring they don't create dead ends for users and clearly communicate that these features are upcoming.

---

## Phase 16: Performance Optimization

**Goal:** Ensure fast loading times and a smooth experience for all users.

- [ ] 58. Optimize all images by converting them to modern formats, compressing appropriately, and implementing lazy loading so images only load when they are about to enter the viewport.
- [ ] 59. Implement code splitting for animation libraries so they are only loaded when needed. Use dynamic loading for components that aren't immediately visible.
- [ ] 60. Run performance audit tools and address all issues including ensuring proper image dimensions, eliminating resources that block rendering, implementing proper font loading strategies, and adding meta tags for search engine optimization and social sharing.
- [ ] 61. Add simple loading skeletons or placeholders for any content that might load asynchronously to maintain a polished appearance during loading.

---

## Phase 17: Accessibility

**Goal:** Make the site usable for everyone regardless of ability or device.

- [ ] 62. Run accessibility audit tools to check for issues. Ensure color contrast ratios meet accessibility standards, especially for text on dark backgrounds where contrast can be challenging.
- [ ] 63. Add proper labels to all icon buttons and interactive elements without visible text. Ensure the mobile menu is accessible via keyboard and screen readers.
- [ ] 64. Verify that all form inputs have associated labels and error messages are announced by screen readers. Test keyboard navigation through the entire site to ensure logical focus order.
- [ ] 65. Ensure focus states are visible and logical when navigating with keyboard. Add focus styles that don't interfere with mouse and touch interactions.

---

## Phase 18: Pre-Launch Checklist

**Goal:** Verify everything is ready before deployment.

- [ ] 66. Verify all sections are complete and render correctly at all screen sizes from mobile to desktop.
- [ ] 67. Test form submission with a real email address. Confirm success messages appear and error handling works appropriately.
- [ ] 68. Click every link on the site including navigation links, footer links, call-to-action buttons, and social icons. Ensure nothing is broken or pointing to incorrect locations.
- [ ] 69. Open browser console and verify no errors or warnings appear that could indicate problems.
- [ ] 70. Add all meta tags including page title, description for search engines, open graph image for social sharing when the site is linked, and favicon for browser tabs.
- [ ] 71. Create favicon in multiple sizes for different devices and link them in the root layout.

---

## Phase 19: Environment & Build

**Goal:** Prepare for production deployment.

- [ ] 72. Create a sample environment variables file documenting all required environment variables such as form API keys. Ensure actual environment files are not committed to version control.
- [ ] 73. Run a production build and fix any TypeScript errors or linting warnings that appear. Ensure the build completes successfully without issues.
- [ ] 74. Test the production build locally to verify everything works as expected in production mode before deploying.

---

## Phase 20: Deployment

**Goal:** Launch the site live for the world to see.

- [ ] 75. Push the final code to a Git repository on a platform like GitHub, ensuring the main branch contains the production-ready code.
- [ ] 76. Connect the repository to a hosting platform like Vercel or Netlify. Configure build settings including the build command and output directory.
- [ ] 77. Add all environment variables to the hosting platform's dashboard so they are available in the production environment.
- [ ] 78. Configure custom domain if available (e.g., www.bitwize.tech). by updating DNS settings as required by the hosting platform.
- [ ] 79. Enable automatic deployments so any push to the main branch triggers a new production build, making updates easy.
- [ ] 80. Run a final performance audit on the live URL and aim for high scores in performance, accessibility, best practices, and search engine optimization.

---

## Phase 21: Post-Launch

**Goal:** Ensure ongoing success and easy maintenance.

- [ ] 81. Set up analytics to track visitor behavior, popular sections, and form submissions to understand how users interact with the site.
- [ ] 82. Create a simple maintenance guide documenting how to update content in the central data file, how to add new portfolio projects, how to modify the e-commerce teaser products, and where to find form submissions.
- [ ] 83. Schedule regular performance audits to ensure the site remains fast and accessible as content grows and technologies evolve.

---

Blueprint Complete
Follow these prompts sequentially to build the Bitwize Technologies one-page portfolio website from initial setup through successful launch.
