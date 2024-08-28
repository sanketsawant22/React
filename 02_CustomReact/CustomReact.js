
function customRender(reactElement, mainDoc) {

/*
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children;

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.traget);

    mainDoc.appendChild(domElement)
*/

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for ( let prop in reactElement.props) {

        if (prop === 'children') continue

        domElement.setAttribute(prop, reactElement.props[prop]) 

        mainDoc.appendChild(domElement)
    }

}

const reactElement = {
    type: 'a',
    props: {
        href: "google.com",
        traget: '_blank'
    },
    children: 'click me to visit google'
}

const mainDoc = document.querySelector("#root")

customRender(reactElement, mainDoc);

