To actually build this, sync it to your desktop (install npm, node, create-react-app through npm)

Then run npm run build to kick the production build.

Then run startStormWaterProd.cmd to load the local index.html

You might have to tweak the built index.html to reference the js and css bundle correctly.

For instance:

 link href="./static/css/main.0af0cf80.css"