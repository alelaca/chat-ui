function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    $.ajax({
        url: "http://localhost:8080/api/login", 
        type: "POST",
        data: JSON.stringify({ 
            "username": username,
            "password": password
        }),
        success: function(data, status, xhr) {
            if (xhr.status === 200) {
                window.location.replace("index.html?token=" + data.value + "&username=" + username)
            }
        },
        error: function(error) {
            console.log("Error in API call");
        }
    })
}