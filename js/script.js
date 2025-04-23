
function setElement(elementName){
    ele = document.querySelector(elementName);
    return ele
}

const submit = setElement('#submit');
const user = setElement('#user');

const chatInterface = setElement(".chat")
const signIn = setElement('.sign-in')

const userProfile = {
    user: 'gern',
}

submit.addEventListener('click', () =>{
    userProfile.user = user.value;
    signIn.className += " hide";

    chatInterface.classList.remove('hide');
    document.querySelector('#username').innerHTML = userProfile.user;
})

function currentTime(){
    time = new Date();
    document.querySelector('#time').innerHTML =  `${time.getHours()}:${(time.getMinutes()<10)? `0${time.getMinutes()}`: time.getMinutes()}`;
}

setInterval(currentTime(), 1000);



const chats = setElement('.chat-msg');
const sendBtn = setElement('#send');
const textarea = setElement('#write_msg');

function scrollToBottom() {
    chats.scrollTop = chats.scrollHeight;
}

textarea.addEventListener('input', ()=>{
    textarea.style.height = '60px';
});

textarea.addEventListener('mouseout', ()=>{
    textarea.style.height = '20px';
})

function addMessage(msg, user, date=''){
    const msgContainer = document.createElement('div');
    (userProfile.user == user)? msgContainer.className += "msg-wrap me": msgContainer.className += "msg-wrap other";
    const profile = document.createElement('div');
    profile.className += "profile";
    username = document.createTextNode(user);
    profile.appendChild(username);

    const msgElement = document.createElement('div');
    msgElement.className += "msg";
    msgString = document.createTextNode(msg);
    msgElement.appendChild(msgString);

    msgContainer.appendChild(profile);
    msgContainer.appendChild(msgElement);
    chats.appendChild(msgContainer);
}

sendBtn.addEventListener('click', ()=>{
    addMessage(textarea.value, userProfile.user);
    textarea.value = '';
    textarea.style.height = '20px';
    scrollToBottom();
})


