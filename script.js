const start = document.querySelector('#start')
const text = document.querySelector('#text')
const pitch  = document.querySelector('#pitch')
const speed  = document.querySelector('#speed')
const voiceName = document.querySelector('#voiceName')

let synth = window.speechSynthesis;



speed.oninput = function() {
    document.querySelector('#speedIndicator').innerHTML = this.value
}

pitch.oninput = function() {
    document.querySelector('#pitchIndicator').innerHTML = this.value
}

voiceName.addEventListener('change',()=>{
    console.log(voiceName.value)
})

start.addEventListener('click', e=>{
    textRead = text.value
    let voices = window.speechSynthesis.getVoices()

    let utterThis = new SpeechSynthesisUtterance(textRead);
    
    utterThis.rate =speed.value

    utterThis.pitch = pitch.value
    
    utterThis.voice = voices[`${voiceName.value}`]


    synth.speak(utterThis) 

})

