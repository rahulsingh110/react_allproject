
function custumRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.link
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('targer',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.child
    for (const prop in reactElement.props) {
       if(prop == 'children')continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}



const reactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'click me'


}
const container =  document.querySelector('#root')

custumRender(reactElement, container)