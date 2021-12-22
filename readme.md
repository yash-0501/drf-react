DJANGO REST FRAMEWORK AND REACT - POC

Install required dependencies and modules:

/--------------In the root directory only---------------
"npm init -y"
"npm i -D webpack webpack-cli"
"npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react"
"npm install --save-dev babel-plugin-transform-class-properties"
"npm i react react-dom prop-types react-router-dom"
"npm install redux react-redux redux-thunk redux-devtools-extension"
"npm install react-alert react-alert-template-basic react-transition-group"
----------------------------------------------------------/

To run the project:

Enter a virtual environment
Install required py modules -> "pip install -r requirements.txt"
Then run commands below:
'python manage.py makemigrations'
'python manage.py migrate'
'python manage.py runserver'

This will start the project on your localhost at port 8000.

Routes for API can be found in the urls.py file in the leadmanager app.
