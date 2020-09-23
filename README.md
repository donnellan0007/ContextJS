# ContextJS
ContextJS is a dead simple library to quickly add custom context menus to your site

#### Simply add the `<context>` tag to the end of your HTML file with the required elements and include the context.js file, and you're all good to go


#### Custom styling
##### You can easily style Context.JS to your needs within the `context/styles/context-light.css` (or context-light.scss)


###### An API is on the way to easily create custom menus without the need of manually adding the `context` tag or having to customise the CSS files
##### The syntax will look something like this
```js
context.create({
  "bg-color" : "red",
  "options" : {
    "Menu" : title, // this is the type of button it will be
    "Click me" : buttonTo("/about.html") // buttonTo could be a function to go to another page
  }
})
```
