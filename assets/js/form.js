// getting value/input from the form
// let userName = document.getElementById('username').value;
// let title = document.getElementById('title').value;
// let content = document.getElementById('content').value;
let submitButton = document.getElementById('submit-button');

document.getElementById(`myform`).addEventListener(`submit`, function(event){
    event.preventDefault();

    let userName = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    let existingBlogInfo = JSON.parse(localStorage.getItem(`allBlogInfo`));
    if(existingBlogInfo == null) existingBlogInfo = [];

    let blogInfo = {    
        userName: userName,
        title: title,
        content: content,
    };

    if (userName.trim() === '') {
        // Display a prompt message
        alert('Please enter something in the input field.');
    } else {
        // If the input field is not empty, submit the form
        this.submit();
        localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
        existingBlogInfo.push(blogInfo);
        localStorage.setItem(`allBlogInfo`, JSON.stringify(existingBlogInfo));
        location.href="blog.html"
    }

    // localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
    // existingBlogInfo.push(blogInfo);
    // localStorage.setItem(`allBlogInfo`, JSON.stringify(existingBlogInfo));

})




// submitButton.addEventListener(`click`, function(event) {

//     event.preventDefault();

//     let existingBlogInfo = JSON.parse(localStorage.getItem(`allBlogInfo`));
//     if(existingBlogInfo == null) existingBlogInfo = [];

//     let blogInfo = {    
//         userName: userName,
//         title: title,
//         content: content,
//     };
//     localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
//     existingBlogInfo.push(blogInfo);
//     localStorage.setItem(`allBlogInfo`, JSON.stringify(existingBlogInfo));

//     if (blogInfo.userName.trim() === '') {
//         // Display a prompt message
//         alert('Please enter something in the input field.');
//     } else {
//         // If the input field is not empty, submit the form
//         document.getElementById('myform').submit();
//     }

//     // document.getElementById('myform').submit();

// });

