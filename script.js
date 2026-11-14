tailwind.config = {
    theme: {
        extend: {
            colors: {
                cream: '#FFFDF9',
                blush: '#FDF0F0',
                rose: {
                    DEFAULT: '#E8A0BF',
                    dark: '#C05C7E'
                },
                wine: {
                    light: '#802334',
                    DEFAULT: '#581825',
                    dark: '#3A0E17'
                },
                gold: '#D4AF37'
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
                cursive: ['Alex Brush', 'cursive']
            }
        }
    }
};

const startDate = new Date(2026, 8, 23, 18, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

const lettersData = {
    1: {
        title: "Quando estiver tendo um dia difícil 🌧️",
        icon: "fa-cloud-rain",
        text: `<p>Meu amor, eu sei que nem todos os dias são fáceis. Às vezes, as coisas não saem como planejamos, o cansaço aparece e parece que tudo está dando errado. Mas quero que você se lembre de uma coisa: você não precisa ser forte o tempo todo.</p>
               <p>Permita-se descansar, respirar e entender que dias difíceis também passam. Não deixe que um momento ruim faça você esquecer o quanto é incrível e especial. Eu queria poder estar aí agora, te abraçar bem forte e fazer você esquecer, nem que fosse por alguns minutos, tudo aquilo que está te preocupando.</p>
               <p>Saiba que você não está sozinha. Quero estar ao seu lado nos dias bons, mas principalmente nos dias em que tudo parecer difícil. Eu acredito em você, tenho muito orgulho de quem você é e vou continuar torcendo pela sua felicidade.</p>
               <p>Eu te amo, e nunca se esqueça disso. ❤️</p>`
    },
    2: {
        title: "Quando quiser sorrir 😁",
        icon: "fa-face-smile",
        text: `<p>Ei, minha menina! Está precisando de um motivo para sorrir? Então deixa eu tentar ser um deles.</p>
               <p>Você sabia que uma das minhas coisas favoritas é saber que você está feliz? Seu sorriso tem um jeito especial de melhorar qualquer dia meu. Às vezes, basta uma mensagem sua, uma conversa boba ou até uma simples lembrança sua para eu me pegar sorrindo sozinho.</p>
               <p>Queria que você pudesse se enxergar pelos meus olhos, porque talvez assim entendesse o quanto é linda, especial e importante para mim. Nunca duvide da felicidade que você merece e nunca deixe de sorrir por causa das dificuldades da vida.</p>
               <p>E, caso ainda não tenha conseguido sorrir, fica aqui uma missão: lembra de alguma das nossas conversas, das nossas brincadeiras ou de alguma besteira que já fizemos juntos. Tenho certeza de que existe pelo menos uma lembrança capaz de arrancar esse sorriso lindo do seu rosto.</p>
               <p>E lembre-se: seu sorriso é um dos meus lugares favoritos. Eu te amo! 🤍</p>`
    },
    3: {
        title: "Quando estiver com saudades de mim 💌",
        icon: "fa-heart-crack",
        text: `<p>Se você abriu esta mensagem, imagino que esteja sentindo minha falta. E queria muito poder atravessar essa distância agora, aparecer aí e te dar aquele abraço que parece colocar tudo no lugar.</p>
               <p>Saiba que a saudade também aparece por aqui. Sinto falta da sua voz, das nossas conversas, dos seus abraços, dos seus beijos e até daqueles pequenos momentos que talvez pareçam simples, mas que significam tanto para mim.</p>
               <p>Enquanto não podemos estar juntinhos, quero que você se lembre de que existe alguém pensando em você, torcendo por você e agradecendo a Deus por ter colocado alguém tão especial em sua vida.</p>
               <p>A distância pode até impedir um abraço agora, mas não diminui o carinho, o amor e a vontade de viver tantos outros momentos ao seu lado.</p>
               <p>Guarda um abraço bem apertado para quando a gente se encontrar. Estou com saudades também, minha princesa. ❤️</p>`
    },
    4: {
        title: "Quando não conseguir dormir 🌙",
        icon: "fa-moon",
        text: `<p>Oi, meu amor. Ainda está acordada? Então quero que, por alguns instantes, você deixe de lado as preocupações e tente descansar seu coração.</p>
               <p>Sei que às vezes a cabeça fica cheia de pensamentos, lembranças e preocupações que parecem não ter fim. Mas você não precisa resolver tudo esta noite. Amanhã será um novo dia, com novas oportunidades e novas possibilidades.</p>
               <p>Respire fundo, feche os olhos e imagine que estou aí, fazendo carinho em você e dizendo baixinho que está tudo bem. Queria poder te abraçar até você pegar no sono e garantir que, por hoje, você não precisa se preocupar com mais nada.</p>
               <p>Entregue suas preocupações nas mãos de Deus e peça a Nossa Senhora que cuide de você e te cubra com seu manto sagrado.</p>
               <p>Durma bem, minha menina. Que sua noite seja tranquila, que seus sonhos sejam lindos e que você acorde com o coração leve.</p>
               <p>Eu te amo. Boa noite, meu amor. 🌙🤍</p>`
    }
};

function openLetter(id) {
    const data = lettersData[id];
    if (!data) return;

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-body').innerHTML = data.text;
    document.getElementById('modal-icon').className = `fa-solid ${data.icon} text-xl`;

    const modal = document.getElementById('letter-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
    }, 10);
}

function closeLetter() {
    const modal = document.getElementById('letter-modal');
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

const loveReasons = [
    "Pelo jeito único como você sorri com os olhos.",
    "Por ser minha melhor amiga e parceira de todas as horas.",
    "Pelo abraço quentinho que faz qualquer problema sumir.",
    "Por como você me apoia e acredita nos meus sonhos.",
    "Pelas nossas piadas internas que só a gente entende.",
    "Pelo som da sua risada, que é a minha música favorita.",
    "Por fazer até os dias mais simples serem especiais.",
    "Pelo seu carinho e dedicação em tudo que faz.",
    "Porque com você posso ser 100% eu mesmo.",
    "Simplesmente por existir e fazer da minha vida muito melhor!"
];

let lastIndex = -1;

function generateNewReason() {
    const reasonText = document.getElementById('reason-text');
    reasonText.style.opacity = '0';

    setTimeout(() => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * loveReasons.length);
        } while (randomIndex === lastIndex);

        lastIndex = randomIndex;

        reasonText.innerText = `"${loveReasons[randomIndex]}"`;
        reasonText.style.opacity = '1';
    }, 300);
}

function redeemCoupon(button) {
    button.innerText = "Resgatado! ❤️";
    button.classList.remove('bg-white', 'hover:bg-rose', 'text-wine-light');
    button.classList.add('bg-wine', 'text-white', 'cursor-default');
    button.disabled = true;

    confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
    });
}

function triggerLoveExplosion() {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#E8A0BF', '#C05C7E', '#802334', '#D4AF37']
    });
}

let canvas;
let ctx;
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 12 + 6;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < -20) {
            this.y = canvas.height + 20;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#E8A0BF';
        ctx.font = `${this.size}px FontAwesome`;
        ctx.fillText('♥', this.x, this.y);
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 25; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTimer, 1000);
    updateTimer();
});

window.addEventListener('load', () => {
    canvas = document.getElementById('particles-canvas');
    ctx = canvas.getContext('2d');
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    animateParticles();
});
