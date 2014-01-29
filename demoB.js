    /* Written by danish
       Purpose: Nothing
    */
    "use strict";
    window.addEventListener('load', init, false); 
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    var svgElem;
    var svgns;
    var g;
    // Radius of the circle
    var RADIUS = 100;

    function init() { 
      // Initialize the documents
      createSVG();
      // Animation loop which gets all again and again
      requestAnimationFrameID = window.requestAnimationFrame(doLogo);
    }

    function createSVG(){
      //Decide the width of the screen
      var width = window.innerWidth;
      //Decide the height of the screen
      var height = window.innerHeight;
      // Create the svg element
      // This is the namespace
      svgns = "http://www.w3.org/2000/svg"; 
      svgElem = document.createElementNS(svgns, "svg:svg");
      // Add width
      svgElem.setAttribute("width", width);
      // Add height
      svgElem.setAttribute("height", height);
      // Setup the viewbox
      svgElem.setAttribute("viewBox", "0 0 " + width + " " + height);
      // Create the group if you wish to add multiple elemenst under one id.
      g = document.createElementNS(svgns, "g");
      // Translate the cordinate so that all references inside the group are based 
      g.setAttribute("transform", "translate("+width/4+","+height/2+")");
      // Append the group to svgElement
      svgElem.appendChild(g); 
      // Append the svgElement to the body
      document.body.appendChild(svgElem);
    }

    function doLogo() {
        // Creates the random number between 1 to radius
        var cx = Math.floor((Math.random()*RADIUS)+1);
        var cy = Math.floor((Math.random()*RADIUS)+1);
        // Make this random x and y positive and negative
        var sx = Math.random() < 0.5 ? -1 : 1;
        var sy = Math.random() < 0.5 ? -1 : 1;

        // If the x is negative then make the color red otherwise black
        var color;
        if(sx<0) color = "red";
        else color = "black";

        // Make the cordinate positive or negative
        cx = cx*sx;
        cy = cy*sy;
        // Math equation we learned in school
        // If the points lie inside the circle then it is going to be negative.
        var value = Math.pow(cx,2) + Math.pow(cy,2) - Math.pow(RADIUS,2);
        // If you want to draw outside the circle make the condition reversed.
        if(value<0){
            var icon = document.createElementNS(svgns, "circle");
            icon.setAttribute("cx", cx);             
            icon.setAttribute("cy", cy);
            icon.setAttribute("r", 2);
            icon.setAttribute("fill", color);   
            icon.setAttribute("stroke", color);   
            icon.setAttribute("stroke-width", "1");
            //icon.setAttribute("transform", "translate("+X+","+Y+")");
            g.appendChild(icon);              
            document.body.appendChild(svgElem);
        }
       requestAnimationFrameID = window.requestAnimationFrame(doLogo);
    }
