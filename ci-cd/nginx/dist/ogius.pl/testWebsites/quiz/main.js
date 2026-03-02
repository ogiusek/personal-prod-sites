const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question')
const modal = document.querySelector('.popup')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.closepopup')

const handleQuiz = e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allChecked = checkedAnswers.length === allQuestions.length

    if (!allChecked) {
        modal.classList.add('popup-active')
        modalInfo.textContent = 'Wybierz wszystkie odpowiedzi!'
        return
    }

    checkedAnswers.forEach(answer => {
        const checkIfCorrect = answer.value === 'true'
        const answerBox = answer.closest('.ansbox')

        if (checkIfCorrect) {
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else {
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }
    })

    if (isTrue && allChecked) {
        modal.classList.add('popup-active')
        modalInfo.textContent = 'Brawo! Wszystkie odpowiedzi są poprawne!'
    } else {
        modal.classList.add('popup-active')
        modalInfo.textContent = 'Niestety przegrywasz...'
    }

}

const popupClose = () => {
    modal.classList.remove('popup-active')
}

modalBtn.addEventListener('click', popupClose)
form.addEventListener('submit', handleQuiz)
