# Chest Hospital Management System

Welcome to the **Chest Hospital Management System** repository. This project is designed to streamline and enhance the administrative and medical functionalities of a chest hospital. Built with modern web technologies, this system aims to provide an efficient and user-friendly experience for both staff and patients.

## Overview

This system leverages **React**, **TypeScript**, and **Vite** to deliver a performant and maintainable codebase. It incorporates a minimal setup for rapid development and comes with essential configurations and tools to ensure code quality and scalability.

## Features

- **Patient Management**: Register, update, and manage patient records.
- **Appointment Scheduling**: Schedule and manage patient appointments with doctors.
- **Medical Records**: Maintain and access patient medical histories and treatment plans.
- **User Authentication**: Secure login and access control for different user roles (admin, doctor, nurse, etc).
- **Real-time Notifications**: Notify staff and patients about important updates and reminders.

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Linting**: ESLint with recommended configurations for React and TypeScript
- **Build Tool**: Vite
- **Version Control**: Git

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>=14.x.x)
- Yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ahmedSabbahMohamed/chesthospital.git
   cd chesthospital
   
2. Install dependencies:
  ```sh
  yarn install
  # or
  npm install
3. Start the development server:
```sh
yarn run dev
# or
npm run dev
```

### Building for Production
#### To build the project for production, run:
```sh
yarn build
# or
npm run build
```

### Linting
#### To run ESLint, run:
```sh
yarn lint
# or
npm run lint
```

### Project Structure
chesthospital/
├── languages/
│   ├── ar.json
│   └── en.json
├── public/                 # Static files
│   ├── assets
│     └── images
│   └── vite.svg
├── src/                    # Source files
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # React components
│   ├── data/               # Static nav data
│   ├── features/           # Project featues
│   ├── hooks/              # Custom React hooks
│   ├── i18next/            # Multilangs
│   ├── pages/              # Page components
│   ├── redux/              # Redux state management
│   ├── routes/             # Client-side routes
│   ├── schemas/            # Forms initial values and validation schemas
│   ├── services/           # API service files
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point for the React application
│   └── ...
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── package.json            # NPM dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration


### Contributing
We welcome contributions from the community! If you'd like to contribute, please follow these steps:

  1. Fork the repository
  2. Create a new branch (git checkout -b feature/YourFeature)
  3. Commit your changes (git commit -m 'Add some feature')
  4. Push to the branch (git push origin feature/YourFeature)
  5. Open a pull request

### Contact

For any inquiries or issues, please contact the project maintainer:

  - **GitHub**: https://github.com/ahmedSabbahMohamed
  - **Email**: ahmedsabbah880@gmail.com
