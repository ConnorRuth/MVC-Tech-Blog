const postFormHandler = async (event) => {
    event.preventDefault();
    const formData = {
        title: document.getElementById("title-input").value,
        content: document.getElementById("content-input").value
    }
    try{
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Post successfull!');
        } else {
            console.error('Failed to create character.');
        }
    }catch(error){
        console.error('Error creating post:', error);
    }
}
document.getElementById("submit-post")
.addEventListener("submit", postFormHandler)