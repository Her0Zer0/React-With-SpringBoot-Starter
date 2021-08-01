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
      The file structure should look something like this. 
      
      ![File Structure](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/file_structure.PNG)
  4. Next, open a terminal window and navigate to the app directory and run. 
  ```.sh
  $ npm start
  ```
   This should bring the React app on localhost:3000, if you are able to bring up the standard React app logo, etc,... you have built it successfully.
   
   5. Create a RestController in your SpringBoot application for React to communicate with when starting. Below is the example I have used [here](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/master/src/main/java/com/slyfoxdevelopment/reactboot/ReactBootApplication.java). 

  ![Rest Controller Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/controller_example.PNG)
  
  6. To avoid CORS errors during development you also need to allow for this in your SpringBoot app. Here we will do this globally. 

  ![App Config Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/cors_config_example.PNG)
  
  7. We will also need to update the package.json file with a **_proxy_** and as an extra bonus **_homepage_** property. The **_proxy_** property allows us to use _fetch_ fairly easily when calling out to our API. More on **_proxy_** information [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/) and on **_homepage_** [here](https://create-react-app.dev/docs/deployment/#serving-the-same-build-from-different-paths).

  ![Package JSON Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/package_json_example.PNG)
  
  8. The final piece is to add a call to the API when React loads to test our communication and confirm we don't have any errors so we can get on with developing. 

  ![App JS Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/appjs_example.PNG)
  
  
  
  
  
  
  
  
