# React-With-SpringBoot-Starter (Maven)

## 1. Overview:
  _A quick downloadable fileset that is ready to use with common tasks in React and SpringBoot development including in the pom.xml_
  * Web
  * H2
  * Lombok
  * JPA

  _Also including a ready to develop React app. After pulling down the fileset you should be able to both run **npm start** to start the node server for development, and after building for production **npm run build** create a .jar in SpringBoot that captures the built React application._
  
## 2. Create your own
  Prerequisites: Node and npm should be installed (https://nodejs.org/en/)
  1. If your editor has the ability to pull dependencies for SpringBoot you can create what you need with it when creating your standard SpringBoot project. Otherwise, you can go to this link https://start.spring.io/ to build your package. 
  2. Once the project has been created, (and node js and npm installed) navigate to the root folder of the project (the /src folder) and run the below command. 
  ```.sh
  $ npx create-react-app <your app name here>
  ```
  3. This will begin to pull all of the node modules and create the react app for your build. 
  4. Next, open a terminal window and navigate to the app directory and run. 
  ```.sh
  $ npm start
  ```
   This should bring the React app on localhost:3000.
   
   5. Create a RestController in your SpringBoot application for React to communicate with when starting. 
