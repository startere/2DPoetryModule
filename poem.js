function execute(elementType, text, timeout, switcher, switcherModifier){
    function appendChildren(){
        if(switcher == null && typeof elementType !== 'number'){
            var line = document.createElement(elementType)
            line.innerText = text;
            counter++
            line.id = counter;
            document.body.appendChild(line)
        }

        if(text == "remove"){
            for(var verse of switcherModifier){
                var selectedElement = document.getElementById(`${verse}`)
                selectedElement.style.display = "none";
            }
        }

        if(switcher == "change"){
            var selectedElement = document.getElementById(`${switcherModifier}`)
            selectedElement.style.display = "";
            selectedElement.innerText = text; 
        }  

    }
    if(typeof timeout !== 'number'){
        switcherModifier = timeout;
        timeout = elementType;
        switcher = text;
    }

    setTimeout(appendChildren, timeout)
}

function playAudio(){
    new Audio('While My Guitar Gently Weeps(acoustic Version).mp3').play()
}

var counter = 0;

execute("div", "take me", 2000)

execute("div", "rape me", 5000)

execute("div", "black", 7000)

execute("div", "night", 8000)

execute("div", "so dark", 10000)

execute("div", "desert bodies", 13000)

execute("div", "whirl", 15000)

execute("div", "whirl", 17000)

execute("div", "seeking", 20000)

execute("h3", "longing", 22000)

execute("div", "kissing", 23000)

execute("div", "no", 24000)

execute("div", "dying", 26000)

execute("div", "memories", 27000)

execute("div", "of shadow water", 30000)

execute("div", "to inundate", 31000)

execute("div", "this barren land", 33000)

execute("div", "forgotten", 34000)

execute(35000, "remove", [14, 15, 16, 17])

execute("div", "try to make me", 36000, "change", 1)

execute("div", "into something", 37000, "change", 3)

execute("div", "i am not", 38000, "change", 4)

execute("div", "silicone dreams", 39000, "change", 5)

execute("div", "of desert bodies", 40000, "change", 6)

execute("div", "getting high on information", 41000, "change", 7)

execute("div", "seek", 42000, "change", 9)

execute("div", "copper cities", 43000, "change", 10)

execute("div", "copper cities come alive", 44000, "change", 10)

execute("div", "1 + 1 = me", 44200, "change", 11)

execute("div", "me + me = her", 44500, "change", 11)

execute("div", "her + me = ", 45000, "change", 11)

execute("div", "her and god and me", 45500, "change", 11)

execute("div", "dying", 47000, "change", 12)

execute("div", "in quiet bursts", 48000, "change", 13)

execute("div", "final breaths", 49000, "change", 14)

execute("div", "symphonies", 50000, "change", 15)

execute("div", "symphonies of ice", 52000, "change", 15)

execute("div", "why am i here?", 54000, "change", 1)

execute("div", "prison to these lines", 55000, "change", 2)

execute("div", "prison to these lines of fire", 56000, "change", 2)

execute("div", "of something", 57000, "change", 3)

execute("div", "am i a memory?", 58000, "change", 5)

execute("div", "what was i?", 59000, "change", 6)

setTimeout(playAudio, 59000)

execute("div", "what did i have to remember", 60000, "change", 7)

execute(60000, "remove", [8, 9, 10])

execute("div", "what is that sound", 68000, "change", 8)

execute("div", "does anyone else hear?", 76000, "change", 9)