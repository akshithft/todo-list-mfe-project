# Todo MFE (Microfrontend)

## Overview
This project demonstrates a Microfrontend (MFE) for a simple Todo application. It is designed to be integrated into larger applications, allowing for a decoupled development approach. The MFE is built using React and TypeScript and is packaged to be consumed independently.

## Setup Instructions
### Prerequisites
* Node.js installed (version 12 or higher recommended)
* npm or yarn installed

### Installation
1. Clone the Repository
```
git clone https://github.com/akshithft/todo-list-mfe-project.git
cd todo-mfe
```

2. Install Dependencies
```
npm install
```

3. Build the Project
```
npm run build
```

4. Run Locally
* Serve the `dist` directory using a static server.
```
npm install -g serve
serve -s dist
```
This will host the MFE on a local web server, typically available at `http://localhost:5000`.

## Testing Integration
To integrate this MFE into a host application, ensure that the host provides React and ReactDOM globally and include the MFE script:
```
<script src="path_to_your_mfe/todoMFE.js"></script>
<script>
  window.todoMFE.mount(document.getElementById('yourAppContainerId'), { /* optional props */ });
</script>
```
Replace `"path_to_your_mfe/todoMFE.js"` with the actual path to the bundled MFE script, and `"yourAppContainerId"` with the ID of the DOM element where the Todo app should mount.

For Example
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Todo MFE</title>
  </head>
  <body>
    <div id="root">Loading...</div>
    <script
      crossorigin
      src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"
    ></script>
    <script src="todoMFE.js"></script>
    <script>
      // Define the initial todo items
      const initialTodos = [
        { id: 1, text: "Complete the assessment", completed: false },
        { id: 2, text: "Go for shopping", completed: true },
        { id: 3, text: "Prepare for the interview", completed: false },
      ];

      // Pass the initialTodos as a prop to the MFE's mount function
      window.todoMFE.mount(document.getElementById("root"), {
        initialTodos: initialTodos,
      });
    </script>
  </body>
</html>
```

## Architectural Choices
### React
Chosen for its component-based architecture, which suits the microfrontend paradigm well. React's ecosystem and community provide robust support for building scalable and maintainable applications.

### TypeScript
Adds type safety to the project, enhancing development experience with static type checking, which can prevent many potential runtime errors.

### Webpack
Used for bundling the application. Configured to output a UMD (Universal Module Definition) build, making the MFE compatible with various module systems, thus increasing its flexibility in different host environments.

### External Dependencies
React and ReactDOM are set as externals in the Webpack configuration to prevent them from being bundled into the MFE. This setup assumes that the host application will provide these libraries globally, reducing the overall size of the MFE and avoiding version conflicts.

## Design Choices
### Modularity
The application is designed to be modular, with clear boundaries between the UI components and the state management logic. This separation of concerns facilitates easier maintenance and scalability.

### Isolation
The MFE operates independently of the host application's state management. It uses its own local storage mechanism to persist todo items, ensuring that it does not interfere with the host application's state.

### Custom Hooks
Use of custom hooks like `useTodos` encapsulates the business logic, keeping the components clean and focused on rendering UI.

