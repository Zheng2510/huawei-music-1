console.log("hello1222")
import './icons.js'
const $ =selector =>document.querySelector(selector)
const $$ =selector =>document.querySelectorAll(selector)

class Player{
    constructor(node){
    this.root = typeof node ==='string' ? $(node) : node
    this.songList = []
    this.currentIndex = 0 
    this.audio = new Audio()
    this.start()
    this.bind()
    console.log(this.start)
} 
start() {
     fetch('https://jirengu.github.io/data-mock/huawei-music/莫文蔚-真的吗.mp3')
     .then(res => res.json())
    .then(data => {
               console.log(data)
               this.songList=data
    })
}

    bind(){
    let self = this
    this.root.querySelector('.btn-play-pause pause').onclick = function() {
        self.audio.src=self.songList[self.currentIndex].url
        self.audio.play()
        console.log(self)
    //self.playSong()
}
    }
    playSong() {

    }
}
