1 -> "py manage.py startapp frontend" 

2 -> FOLDER STRUCTURE

/---------------------------------------
frontend - 
        |- src -
            |-components
        |-static -
            |-frontend
        |-templates -
            |-frontend
-----------------------------------------/

3 ->    "npm init -y"
        "npm i -D webpack webpack-cli"
        "npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react"
        "npm install --save-dev babel-plugin-transform-class-properties"
        "npm i react react-dom prop-types react-router-dom"
        "npm install redux react-redux redux-thunk redux-devtools-extension"

4 -> Create file ".babelrc" and add presets and plugins
/---------------------------------------------
{
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["transform-class-properties"]
}
----------------------------------------------/

5 -> Create file "webpack.config.js"
/--------------------------------------------------
module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
}
---------------------------------------------------/

6 -> Change scripts in package.json file.


7 -> ALERT
"npm install react-alert react-alert-template-basic react-transition-group"