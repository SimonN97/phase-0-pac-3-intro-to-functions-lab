function shout(string) {
    return string.toUpperCase();
}


const whisper= (string) => {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}
// logShout("Simon");
function logWhisper(string) {
    console.log(string.toLowerCase())
}
// logWhisper("HOUSE");
function sayHiToHeadphonedRoommate(string) {
    if (string===string.toLowerCase()){
        return 'I can\'t hear you!';
    }
    else if(string==="Let's have dinner together!"){
        return "I would love to!";
    }
    else {
        return 'YES INDEED!';
    }
}