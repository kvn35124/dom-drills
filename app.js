document.addEventListener('DOMContentLoaded', function () {

    //added div with a class called header-container
    let header = document.createElement('div');
    header.className = ("header-container");


    //created h1 with "This is an h1" text.
    let h1 = document.createElement('h1');
    h1.className = ("h1");
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);

    //appended the h1 to the div
    header.appendChild(h1);

    //create h2 element with text and appended it to div

    let h2 = document.createElement('h2');
    h2.className = ("h2");
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    header.appendChild(h2);

    //ceate h3 element with text and appended it to div
    let h3 = document.createElement('h3');
    h3.className = ("h3");
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    header.appendChild(h3);

    //create h4 element with text and appended it to div
    let h4 = document.createElement('h4');
    h4.className = ("h4");
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    header.appendChild(h4);

    //create h5 element with text and appended it to div
    let h5 = document.createElement('h5')
    h5.className = ("h5");
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    header.appendChild(h5);

    //create h6 element with text and appended it to div
    let h6 = document.createElement('h6');
    h6.className = ("h6");
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    header.appendChild(h6);


    let colorArray = ['black', 'blue', 'green', 'purple', 'yellow', 'pink', 'darkorange', 'darkorchid'];

    let randomColorGenerator = Math.floor(Math.random() * colorArray.length);
    h1.style.color = colorArray[randomColorGenerator];

    h1.addEventListener('dblclick', function() {
        let randomColorGenerator = Math.floor(Math.random() * colorArray.length);
        h1.style.color = colorArray[randomColorGenerator];
    })

    let button = document.createElement('button');
    button.innerText = 'Click to add new list item';
    button.className = ('b1');
    header.appendChild(button);

//added button that created a list item which is able to change colors 
//and delete itself
    let ul = document.createElement('ul');
    var counting = 1

    button.addEventListener('click', function() {
        let li = document.createElement('li');
        let listText = document.createTextNode('This is list item ' + counting);
        counting ++;  //counting = counting +1
        li.appendChild(listText);
        ul.appendChild(li);
        header.appendChild(ul);
        li.addEventListener('click', function() {
            let randomColorGenerator = Math.floor(Math.random() * colorArray.length);
            li.style.color = colorArray[randomColorGenerator];
        })
        ul.addEventListener('dblclick', function() {
            ul.removeChild(li);
        })
    })


    //appended the div to the body
    document.body.appendChild(header);
})

