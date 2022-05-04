import { myForm, myTodo, myItems } from './components-mixins'
import initComponentsDependencies from './components-init'
import storeInit from './store-init'
import initGetTemplate from './template-helpers'

window.addEventListener('WebComponentsReady', () => {
    const dependencies = {
        getTemplate: initGetTemplate(),
        store: storeInit()
    };
    const defineComponents = initComponentsDependencies(dependencies);
    defineComponents( myTodo, myForm, myItems )
})