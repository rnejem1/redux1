### Redux - component based - SPA with dependency injection WITHOUT using frameworks. 

### The app is built entirely with browsers native Web Components (Custom Elements, Shadow DOM, HTML Imports and HTML Template)

The app works in older browsers thank to the web component polyfill loader that dynamically loads the necessary polyfills using features detection.

__webpack.config.js__ builds the app using a custom template (__app.template.html__) where the root component is set, the components templates are imported (__components-templates.html__) and the Polyfills detector is loaded.

__index.js__ is the app entry script, it waits until the necessary polyfills are loaded then instantiates the dependencies and bootstrap the app.

style encapsulation, component tree creation and modern frameworks-like component code organization is made possible by the awesomeness of the native Web Components elements, that are __already available in your browser__!!  