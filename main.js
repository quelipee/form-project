const userName = 'felipe mateus';
document.getElementById('form').addEventListener('submit',function(e)
{
    e.preventDefault()
    let messageDiv = document.getElementById('message');
    
    let messageBox = document.getElementById('messages');
    messageBox.insertAdjacentHTML("beforeend",sendMessage(userName,messageDiv.value))

    if (messageDiv.value == '!pills') 
    {
        let response = 'dsadsadasdasdsa'
        messageBox.insertAdjacentHTML("beforeend",sendMessage('dsadas',messageDiv.value))
    }

    messageDiv.value = '';
});

function sendMessage(username, message)
{
    return `<div>${username}: ${message}</div>`
}