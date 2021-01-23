const start = document.querySelector('#start')
const text = document.querySelector('#text')
const pitch  = document.querySelector('#pitch')
const speed  = document.querySelector('#speed')
const voiceName = document.querySelector('#voiceName')
let synth = window.speechSynthesis;

// регулятор скорости
speed.oninput = function() {
    document.querySelector('#speedIndicator').innerHTML = this.value
}

// регулятор высоты голоса
pitch.oninput = function() {
    document.querySelector('#pitchIndicator').innerHTML = this.value
}

// создать список акцентов
voiceName.addEventListener('click',e=>{
    let options = document.querySelectorAll('option')
    if(options.length>2){
        return
    }
    voiceName.innerHTML = 0
    let voiceChoice = synth.getVoices().forEach((item, index)=>{

        voiceName.innerHTML += `<option value="${index}">${item.name}</option>`
    })
    
})

// задать параметры голосу и начать читать
start.addEventListener('click', e=>{
    textRead = text.value
    let voices = synth.getVoices()
    let utterThis = new SpeechSynthesisUtterance(textRead);
    
    utterThis.rate =speed.value

    utterThis.pitch = pitch.value
    
    utterThis.voice = voices[`${voiceName.value}`]

    console.log(voiceName)
    synth.speak(utterThis) 
})

