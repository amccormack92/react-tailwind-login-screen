# Responsive Login Page Project

This project started while I was waiting for my car to be serviced, and I decided to create a modern and responsive login page to pass the time. The goal was to implement a clean, functional, and well-tested component that showcases my front-end development skills.

## 🛠️ Technologies Used

- **React + Vite**: A fast and modern build tool that enhances the development experience with React.
- **TypeScript**: Added type safety to the project, ensuring robust code.
- **Tailwind CSS**: Employed a mobile-first, utility-first approach to create a fully responsive design.
- **React Hook Form**: Simplified form handling with built-in support for validations.
- **Zod**: Used for schema validation to ensure that the form inputs are correctly structured.
- **Jest & React Testing Library**: For unit and integration testing of the components.
- **Playwright**: For end-to-end testing, ensuring that the application works as expected across different screen sizes and browsers.
- **GitHub Actions**: Set up continuous integration to automatically run tests on every push.

## 📐 Features

- **Responsive Design**: Mobile-first design approach, ensuring the login page works seamlessly across devices of all sizes.
- **Form Validation**: Integrated Zod validation with React Hook Form to enforce rules and provide user-friendly error messages.
- **Testing**:
  - **Unit and Integration Tests**: Written using Jest and React Testing Library.
  - **End-to-End Tests**: Leveraged Playwright to simulate user interactions and ensure the entire flow works as expected.
- **Continuous Integration**: GitHub Actions configured to run tests automatically on every push to any branch.

## 🎨 Design Inspiration

The design of this login page was inspired by a concept I found on [Dribbble](https://dribbble.com/shots/3257502-Questionnaire-Login). I aimed to bring the vision to life with a focus on usability and aesthetics.

## 🚀 Getting Started

### Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amccormack92/react-tailwind-login-screen
   ```
2. Navigate to the project directory:
   ```bash
   cd react-tailwind-login-screen
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to http://localhost:5173 to view the app.

### Running Tests

To run the tests locally:

- **Jest Tests**:
  ```bash
  npm run test:jest
  ```
- **Playwright Tests**
  ```bash
  npx playwright test
  ```

### App Preview

TThe app can be previewed thanks to GitHub Pages and can viewed in the link below.
