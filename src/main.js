var users = [{}]

//Registrar 

function registerButton(newUsername, newPassword) {
    newUsername = document.getElementById('registerEmail').value
    newPassword = document.getElementById('registerPassword').value
    users.push({ username: newUsername, password: newPassword })
}

function loginButton(username, password) {
    username = document.getElementById('loginEmail').value
    password = document.getElementById('loginPassword').value
        for (var i = 0; i < users.length; i++) {
        if (username == users[i].username) {
            if (password == users[i].password) {
                document.getElementById('loginResult').innerHTML = 'Success!'
            return
        } else {
            alert("wrong password")
             }
        }
    }

  alert("wrong username")
}