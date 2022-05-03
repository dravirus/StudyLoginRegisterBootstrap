var users = [{}]

//Registrar 

function registerButton(newEmail, newPassword, newName, newPhone) {
    newEmail = document.getElementById('registerEmail').value
    newPassword = document.getElementById('registerPassword').value
    newName = document.getElementById('registerName').value
    newPhone = document.getElementById('registerPhone').value
    users.push({ email: newEmail, password: newPassword, name: newName, phone: newPhone })
}

function loginButton(email, password) {
    email = document.getElementById('loginEmail').value
    password = document.getElementById('loginPassword').value
        for (var i = 0; i < users.length; i++) {
        if (email == users[i].email) {
            if (password == users[i].password) {
                document.getElementById('loginResult').innerHTML = 'Success!'
            return
        } else {
            alert("wrong password")
             }
        }
    }

  alert("wrong email")
}