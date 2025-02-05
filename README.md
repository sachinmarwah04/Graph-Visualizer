Graph Visualization Application

Setup Instructions
To set up and run the application locally, follow these steps:

1. Clone the repository
   First, clone the repository to your local machine by running the following command:
   git clone <repository-url>

Then, navigate to the project directory:

cd <project-directory>

2. Install dependencies
   Make sure you have Node.js installed on your system. If not, you can download and install it from here.

Next, install the required dependencies by running: npm install

3. Run the development server
   To start the development server, run: npm run dev

   This will start the server and open the app in your default browser. The app will reload automatically whenever you make changes to the code.

4. Build the application for production
   To create a production build of the application, run: npm run build

Available Scripts
npm start: Starts the development server at http://localhost:3000.
npm run build: Builds the app for production, optimized for deployment.
npm test: Runs the test suite, if available, to ensure that everything is working correctly.
npm run lint: Runs the linter to check for code quality and style issues.

Dependencies List
react: The core React library.
react-dom: The React DOM library for rendering components.
react-redux: The official Redux bindings for React.
redux: The Redux state management library.
@reduxjs/toolkit: A package for simplifying Redux state management.
react-flow-renderer: A library for building interactive graph visualizations.
typescript: TypeScript language for adding static types to JavaScript.
react-router-dom: For routing, if applicable.

Basic Usage Guide
Once the application is up and running, you'll be able to interact with the graph visualization and perform various customizations. Here's a quick overview of how to use the app:

Graph Interactions:
Draggable Nodes: You can click and drag any of the 10 nodes to reposition them on the graph.

Node Customization:
Change Color: Use the color picker to change the color of any selected node. The color change will reflect immediately.

Change Font Size: Use the font size dropdown to change the size of node labels (from 12px to 24px).
Undo/Redo:
Undo: Click the "Undo" button to revert the most recent action (e.g., color change, font size adjustment, node movement).

Redo: Click the "Redo" button to restore the last reverted action.
This is how the basic user interface functions to help you interact with the graph, customize nodes, and manage the history of changes.
