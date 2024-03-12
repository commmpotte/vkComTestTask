# Communities list

This is a simple React application for managing groups. It allows you to view a list of groups, along with their members and friends.

## Stack

- **Frontend:**
  - React.js
  - Bootstrap (for styling)
  - Font Awesome (for icons)

## Features

- View a list of groups
- See details of each group, including their members and friends
- Groups can be open or closed, indicated by a lock/unlock icon

## Data Mocking

To emulate the backend, the application uses mock server data stored in a JSON file (`groups.json`). This file contains dummy data for the groups.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/group-management-app.git
cd group-management-app
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the app.
Folder Structure
csharp
Copy code
group-management-app/
  ├── public/              # Public assets and index.html
  ├── src/                 # Source files
  │   ├── components/      # React components
  │   ├── server/          # Mock server data
  │   ├── types/           # TypeScript types/interfaces
  │   ├── App.tsx          # Main application component
  │   └── index.tsx        # Entry point
  ├── .gitignore           # Git ignore file
  ├── package.json         # Node.js dependencies and scripts
  ├── README.md            # Project documentation
  └── tsconfig.json        # TypeScript configuration
```
