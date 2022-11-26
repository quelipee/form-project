const userName = 'felipe mateus';
document.getElementById('form').addEventListener('submit',function(e)
{
    e.preventDefault()
    let messageDiv = document.getElementById('message');
    document.getElementById('messages')
    .insertAdjacentHTML("beforeend",sendMessage(messageDiv.value));

    messageDiv.value = '';
});

function sendMessage(message)
{
    return `<div>${userName}: ${message}</div>`
}