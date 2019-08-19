# Node & Express Demo App for Azure DevOps

> Build Your CI/CD Pipeline using Azure DevOps with this Demo App.

This is a Node and Express web application used to demonstrate CI/CD with Azure DevOps. You can clone this repo and use it within Azure DevOps to build, test, and release to an Azure App Service web app.

## Running and Testing Locally:

You can use these commands to install, test, and run the app locally. (Not Required)

### Install

```
npm install
```

### Test

```
npm test
```


Navigate to the `/test` folder to review the unit tests for this project. These tests will run as part of your Azure DevOps Build pipeline. See `azure-pipelines.yml` in this repo.

### Start

```
npm start
```

## Deploy the App Service Infrastructure using ARM-Template:

Click the button below to deploy an Azure Web App for Linux. This will create a new app service plan and web app with a dev deployment slot. You can then create build and release pipelines at dev.azure.com to continuously deploy the node application in this repo to the dev deployment slot.

<a href="https://azuredeploy.net/?repository=https://github.com/jalalhejazi/nodejs-express-azure-deploy/tree/master" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>


[![Build status](https://dev.azure.com/superusers-kursus/devops/_apis/build/status/working-ok/nodejs-express-azure-deploy/nodejs-express-2019%20-%20CI)](https://dev.azure.com/superusers-kursus/devops/_build/latest?definitionId=25)




### License

This project is licensed under the Apache License 2.0
