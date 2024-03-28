// Function to 
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


    if (userName.trim() === '' || title.trim() === '' || content.trim()  === '') {
        // Display a prompt message
        alert('All fields are required. Please add some content to the empty field.');
    } else {
        // If the input field is not empty, submit the form
        this.submit();
        localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
        existingBlogInfo.push(blogInfo);
        localStorage.setItem(`allBlogInfo`, JSON.stringify(existingBlogInfo));
        location.href="blog.html"
    }
})