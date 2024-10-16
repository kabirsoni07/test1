function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}



const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to Visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

