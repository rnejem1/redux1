import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import customElementMixin from './component-helpers';

export const myForm = ({getTemplate, store}) =>({
    customElement: 'my-form-component',
    class: class extends customElementMixin(getTemplate('my-form-template')) {
        constructor() {
            super();
            Observable.fromEvent(this.shadowRoot.querySelector('button'), "click")
                .subscribe( ev => store.dispatch({ 
                        type: 'ADDTODOITEM',
                        payload: this.shadowRoot.querySelector('input').value
                    }) 
                )
        }
    }
})

export const myItems = ({getTemplate, store}) => ({
    customElement: 'my-items-component',
    class: class extends customElementMixin(getTemplate('my-items-template')) {
        createListElement (content, item) {
            let liFragment = document.importNode(content, true)
            liFragment.querySelector('span').innerText = item.text;
            if(item.done) {
                liFragment.querySelector('span').classList.add('done')
            }
            Observable.fromEvent(liFragment.querySelector('button'), "click")
                .subscribe( () => store.dispatch({ 
                        type: 'DELETETODOITEM',
                        payload: item.text
                    })
                )
            Observable.fromEvent(liFragment.querySelector('span'), "click")
                .subscribe( () => store.dispatch({ 
                        type: 'TODOITEMDONE',
                        payload: item.text
                    })
                )
            return liFragment;       
        }
        constructor() {
            super();
            const itemTemplate = getTemplate('my-item-template');
            const ul = this.shadowRoot.querySelector('ul');
            store.subscribe( () => {
                ul.innerHTML = '';
                let listFragment = document.createDocumentFragment();
                store.getState()
                    .forEach( item => {
                        let liFragment = this.createListElement(itemTemplate.content, item)
                        listFragment.appendChild(liFragment)
                    } )
                ul.appendChild(listFragment) 
            })
        }
    }
}) 

export const myTodo = ({getTemplate}) => ({
    customElement: 'my-todo-component',
    class: customElementMixin(getTemplate('my-todo-template'))
}) 