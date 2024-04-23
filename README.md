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

4. Build the Project
```
npm run build
```

5. Run Locally
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
