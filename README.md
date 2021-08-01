# React-With-SpringBoot-Starter (Maven)

## 1. Overview:
  _A quick downloadable fileset that is ready to use with common tasks in React and SpringBoot development including in the pom.xml_
  * Web
  * H2
  * Lombok
  * JPA

  _Also including a ready to develop React app. After pulling down the fileset you should be able to both run **"npm start"** to start the node server for development, and after building for production **"npm run build"** create a .jar in SpringBoot that captures the built React application._
 
 _My Example can be downloaded from [here](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/tree/master)_
  
## 2. Create your own
  Prerequisites: Node and npm should be installed (https://nodejs.org/en/)
  1. If your editor has the ability to pull dependencies for SpringBoot you can create what you need with it when creating your standard SpringBoot project. Otherwise, you can go to this link https://start.spring.io/ to build your package. 
  2. Once the project has been created, (and node js and npm installed) navigate to the root folder of the project (the /src folder) and run the below command. 
  ```.sh
  $ npx create-react-app <your app name here>
  ```
  3. This will begin to pull all of the node modules and create the react app for your build. 
      The file structure should look something like this. Notice in my example I used _"frontend"_ as my app name. 
      
      ![File Structure](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/file_structure.PNG)
  4. Next, open a terminal window and navigate to the app directory (where package.json lives) and run. 
  ```.sh
  $ npm start
  ```
   This should bring the React app up on localhost:3000, if you are able to bring up the standard React app logo, etc,... you have built it successfully.
   
   5. Create a RestController in your SpringBoot application for React to communicate with when starting. Below is the example I have used [here](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/master/src/main/java/com/slyfoxdevelopment/reactboot/ReactBootApplication.java). 

  ![Rest Controller Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/controller_example.PNG)
  
  6. To avoid CORS errors during development you also need to allow for this in your SpringBoot app. Here we will do this globally. 

  ![App Config Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/cors_config_example.PNG)
  
  7. We will also need to update the package.json file with a **_proxy_** and as an extra bonus **_homepage_** property. The **_proxy_** property allows us to use _fetch_ fairly easily when calling out to our API. More on **_proxy_** information [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/) and on **_homepage_** [here](https://create-react-app.dev/docs/deployment/#serving-the-same-build-from-different-paths).

  ![Package JSON Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/package_json_example.PNG)
  
  8. The final piece is to add a call to the API when React loads to test our communication and confirm we don't have any errors so we can get on with developing. 

  ![App JS Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/appjs_example.PNG)
  
  9. If you have followed the examples or used fileset avialable [here](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/tree/master) when you run **npm start** in your React app directory (where the package.json file is) and have started your SpringBoot app you should see something like this. In the below image I opened the console to confirm no errors where present. 

  ![App Start](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/app_start.PNG)
  
  
  ## 3. Building the app for Jar
  
  1. One last thing to talk about is when we build a .jar to hand out. In the pom.xml file we have the below configurations. They allow us to pull the built React app and place it within the /target/classes/public folder so SpringBoot can grab it when it loads. 

  ![Pom Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/pom_example.PNG)
  
  2. Before building the .jar file navigate back to the React app root folder (where the package.json file is) and run **_npm run build_**. This creates the static files needed to be served for your React application. 
  3. Now that we built the frontend of our app, we can use maven to build our .jar. Also, we need to make sure the pom has the correct packaging before moving forward. 
    ![Packaging Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/packaging_example.PNG)
    
  4. To build the package you can use your IDE if it is capable or you can use maven in the command line. From your Project Root (where src, .mvn, and pom.xml live)
  ```.sh
  $ mvn clean package
  ```
  
  5. If you don't see any errors you should have a target folder now in the current directory. Within the target folder you should be able to look through the tree and find your public folder where your React app lives and also the .jar file. 

  ![Jar Example](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/jar_example.PNG)
  
  6. You can now pass this application without having to install anything on another computer other than using this .jar file and the jre. To run it use this command below: 
  ```.sh
  $ java -jar <jar file name here>
  ```
  
  In this example it would be
  ```.sh
  $ java -jar ReactBoot-0.0.1-SNAPSHOT.jar
  ```
  You should now be able to go to http://localhost:8080 and see your React + SpringBoot application at work, and that is it! Happy hacking! 
  
  ![App on port 8080](https://github.com/Her0Zer0/React-With-SpringBoot-Starter/blob/main/app_on_8080.PNG)
  
