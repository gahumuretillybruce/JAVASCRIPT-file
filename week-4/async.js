function loadPost() {
      fetch('https://jsonplaceholder.typicode.com/photos/1')
        .then(response => response.json())
        .then(data => {
          const postDiv = document.getElementById("post");
          postDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
          `;
        })

        // Uncomment the following lines to handle errors

        .catch(error => {
          document.getElementById("post").textContent = "❌ Failed to load post.";
          console.error("Fetch error:", error);
        });
    }

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // fetch().then().then().catch(); // Example of a fetch call with empty parameters
    
    //asynchronous makes the app not wait for the fetch to complete before moving on to the next line of code
    // This is useful for loading data without blocking the user interface and making the app more responsive and fast.
