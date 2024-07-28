export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = "Paul's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    let headerDiv = document.getElementById('header');
    headerDiv.children[0].innerText = "I am Paul Wentzel"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    let aboutMeSection = document.body.children[1];
    let descPara = aboutMeSection.children[1];
    descPara.innerText = "I am Groot!";
}
