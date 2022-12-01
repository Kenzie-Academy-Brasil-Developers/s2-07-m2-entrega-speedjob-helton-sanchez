const article = document.querySelector('article');

const sectionFront = document.querySelector('.containerFront');
const ulFront = document.querySelector('.ulFront');

const sectionBack = document.querySelector('.containerBack');
const ulBack = document.querySelector('.ulBack');

function listFront(listCard) {
    for (let i = 0; i < listCard.length; i++) {

        const card = document.createElement('li');
        const icon = document.createElement('span');
        const titleCard = document.createElement('h3');
        const city = document.createElement('span');
        const textCard = document.createElement('p');
        const timeWork = document.createElement('span');
        const modality = document.createElement('span');

        icon.classList.add('icon')
        titleCard.classList.add('titleCard')
        city.classList.add('city')
        textCard.classList.add('text')
        timeWork.classList.add('timeWork')
        modality.classList.add('modality')

        card.id = listCard[i].id
        icon.innerText = "G"
        titleCard.innerText = listCard[i].title
        city.innerText = "São José do Rio Preto - SP"
        textCard.innerText = listCard[i].descrription
        timeWork.innerText = listCard[i].modality[0]
        modality.innerText = listCard[i].modality[1]

        if (listCard == frontEndJobs) {
            ulFront.appendChild(card);
            card.append(icon, titleCard, city, textCard, timeWork, modality)
        } else if (listCard == backEndJobs) {
            ulBack.appendChild(card);
            card.append(icon, titleCard, city, textCard, timeWork, modality)
        };
    }

};

listFront(frontEndJobs);
listFront(backEndJobs)
