let Citata=[
    ['Люди не могут думать одинаково, но понимать друг друга должны. На то они и люди.'],
    ['Помни, что нет тюрьмы страшнее, чем в голове...'],
    ['Моя душа — в моих песнях. А живу я надеждой на лучшее время.'],
    ['Я ни о чем не жалею. Я всегда отвечаю за свои поступки. Для меня вообще важно, чтобы мне было интересно жить. Все остальное меня не интересует.']
    ['Все говорят, что мы вместе! Все говорят, но не многие знают, в каком.'],
    ['Я не люблю когда мне врут, но от правды я тоже устал.'],
    ['Музыка — это то, ради чего я готов пожертвовать практически всем.'],
    ['Смерть стоит того, чтобы жить, а любовь стоит того, чтобы ждать.'],
    ['Мы ждали завтрашний день,Каждый день ждали завтрашний день...'],
    ['Я считаю, что человек живет на планете, а не в государстве.'],
    ['Попробуй спастись от дождя, если он внутри.'],
    ['Каждый должен делать что-то такое, что отличало бы его от других.'],
    ['Все дороги приводят меня к тебе,Дороги знают все лучше, чем я,И я не стану искать других дорог.'],
    ['Каждый человек имеет право сказать, и каждый человек имеет право слушать или не слушать.'],
    ['За окнами дождь, но я в него не верю.'],
    ['Ты должен быть сильным, иначе зачем тебе быть.'],
    ['Мне не нравятся люди, которые считают себя пророками и думают, что в состоянии научить других, как жить.'],
    ['Я один, но это не значит, что я одинок.'],
    ['Если есть шаг — должен быть след,Если есть тьма — должен быть свет.'],
    ['Я утверждаю, что добро всегда побеждает зло, а терпение сильнее самурайского меча.'],
]

function random(min, max) {
    return min + Math.random() * (max - min);
}

let a = random(1, 20)
a = Math.trunc(a)

let ButCita = document.querySelector('.gen')
let ShowCita = document.querySelector('.cita')
let SB = document.querySelector('.sb')

ButCita.addEventListener('click',function(){
    ShowCita.innerText = Citata[a]
    
    

    
})
