function valid(x){
    let name = /^[A-Za-z ]+$/;
    var mail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (x.username.value == "") {
        alert('Please enter your Name');
        x.username.focus();
        return false;
    }if (!x.username.value.match(name)) {
        alert('Your Name contain invalid characters');
        x.username.focus();
        return false;
    }if (x.mail.value == "") {
        alert('Please enter Your E-mail Address');
        x.mail.focus();
        return false;
    }if (!x.mail.value.match(mail)) {
        alert('Enter valid E-mail Address');
        x.mail.focus();
        return false;
    }if (x.subject.value == "") {
        alert('Please enter Subject');
        x.subject.focus();
        return false;
    }if (x.message.value == "") {
        alert('Please enter Message');
        x.message.focus();
        return false;
    }
}