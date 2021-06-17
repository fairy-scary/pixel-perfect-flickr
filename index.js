
// randomizes background image every 2 seconds
changeBackground = () => {
    
    const images = [ 'url("./assets/fam.jpg")',
        'url("./assets/desk.jpeg")',
        'url("./assets/grandbudapest.jpg")',
        'url("./assets/moonrise2.jpg")',
        'url("./assets/lifeaquatic.jpg")'
    ];

    const contentDiv = document.getElementsByClassName("content")[0];
    const bg = images[Math.floor(Math.random() * images.length)];
    //console.log(contentDiv.style) //*see the HTML DOM Style Object(under "style")
    //let content = document.querySelectorAll("content")[0]
    contentDiv.style.backgroundImage = bg
    //console.log(bg)

}

setInterval(changeBackground,2000)

