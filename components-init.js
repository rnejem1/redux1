export default (dependencies) => {
    return (...components) => {
        components.forEach( componentInit => {
            let component = componentInit(dependencies)
            customElements.define( 
                component.customElement, 
                component.class 
            ); 
        })
    }
}