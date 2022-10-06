# Games-Using-Dom

This repository contains Webpages with Dom Manipulation Techniques

> This entire Game is dependent on the DOM functioning which includes :

- User input
- Manipulating user input data
- Presenting the data to the user end

> This Url Contains all 3 Games

- [Link to the Main Page](index.html)

#### This Repository includes 3 Games when are completely based on DOM

1. Guess the Number
2. Modal Window
3. Pig Game

> ⚠️IMPORTANT!

- DOM (Document Object Model) is a struture of Html Document with helps the user to manipulate the html data and styling using javascript. Its Basically a point between then html , css and javascript.

- It's basically a build-in **API** present in Browsers which helps it to fetch the data from the HTML Document

#### Structure of DOM

<hr>

![](<images/Screenshot%20(8).png>)

```javascript
document.querySelector("ElementName").Properties;
```

- Here document is the entry point for the Dom to fetch the Data.

<br>

#### DOM Properties used in this Repository

<hr>

```javascript
document.querySelector("ElementName").textContent;
```

```javascript
document.querySelector("ElementName").value;
```

```javascript
document.querySelector("ElementName").style.backgroundColor;
```

```javascript
document.querySelector("ElementName").style.color;
```

<br>

Here we have even used a different way of assigning a event listener to a element

<hr>

```javascript
document.querySelector("elementName").addEventListener("click", function () {
  // Code to be Executed when clicked on element
  document.querySelector("body").style.backgroundColor = "#fff";
});
```

#### Element Names to be Used as in there original form

<hr>

- body
- .className (the dot should be used as prefix)
- #id (the hash should be used as prefix)
- a (normal form)
