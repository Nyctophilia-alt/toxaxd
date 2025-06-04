document.addEventListener('DOMContentLoaded', () => {
    const finishButton = document.getElementById('finish-test');
    const quizForm = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const percentageSpan = document.getElementById('percentage');
    const answersReview = document.getElementById('answers-review');
    const testContainer = document.getElementById('test-container');
    const progressBar = document.querySelector('.progress-bar');
    const gradeSpan = document.getElementById('grade');

    // Функция для перемешивания массива
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Функция для получения оценки
    function getGrade(percentage) {
        if (percentage === 100) return '5 (отлично)';
        if (percentage >= 80) return '4 (хорошо)';
        if (percentage >= 60) return '3 (удовлетворительно)';
        return '2 (неудовлетворительно)';
    }

    const questions = [
        {
            question: "Что такое общество в широком смысле слова?",
            answers: shuffleArray([
                { text: "Часть материального мира, обособившаяся от природы, но тесно связанная с ней", correct: true },
                { text: "Группа людей, объединенных общими интересами", correct: false },
                { text: "Определенный этап исторического развития", correct: false },
                { text: "Территория, на которой проживают люди", correct: false }
            ])
        },
        {
            question: "Что является признаком государства?",
            answers: shuffleArray([
                { text: "Суверенитет", correct: true },
                { text: "Наличие политических партий", correct: false },
                { text: "Защита прав человека", correct: false },
                { text: "Разделение властей", correct: false }
            ])
        },
        {
            question: "Что относится к духовной культуре?",
            answers: shuffleArray([
                { text: "Образование", correct: true },
                { text: "Экономика", correct: false },
                { text: "Политика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Какая из перечисленных наук изучает общество как целостную систему?",
            answers: shuffleArray([
                { text: "Социология", correct: true },
                { text: "Философия", correct: false },
                { text: "Биология", correct: false },
                { text: "Химия", correct: false }
            ])
        },
        {
            question: "Что является высшей ценностью согласно Конституции РФ?",
            answers: shuffleArray([
                { text: "Человек, его права и свободы", correct: true },
                { text: "Экономика", correct: false },
                { text: "Политика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Что характеризует традиционное общество?",
            answers: shuffleArray([
                { text: "Преобладание сельского хозяйства", correct: true },
                { text: "Индустриальное развитие", correct: false },
                { text: "Постиндустриальное развитие", correct: false },
                { text: "Отказ от традиций", correct: false }
            ])
        },
        {
            question: "Что является признаком правового государства?",
            answers: shuffleArray([
                { text: "Верховенство закона", correct: true },
                { text: "Автократическое правление", correct: false },
                { text: "Политическая нестабильность", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Какой институт социализации является первичным?",
            answers: shuffleArray([
                { text: "Семья", correct: true },
                { text: "Школа", correct: false },
                { text: "Работа", correct: false },
                { text: "Дружба", correct: false }
            ])
        },
        {
            question: "Что относится к факторам производства?",
            answers: shuffleArray([
                { text: "Труд, земля, капитал", correct: true },
                { text: "Экономика", correct: false },
                { text: "Политика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Что характеризует рыночную экономику?",
            answers: shuffleArray([
                { text: "Свободное ценообразование", correct: true },
                { text: "Централизованное планирование", correct: false },
                { text: "Плановая экономика", correct: false },
                { text: "Торговля", correct: false }
            ])
        },
        {
            question: "Что является признаком демократии?",
            answers: shuffleArray([
                { text: "Разделение властей", correct: true },
                { text: "Автократическое правление", correct: false },
                { text: "Наличие одной партии", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Какой вид деятельности характерен только для человека?",
            answers: shuffleArray([
                { text: "Творчество", correct: true },
                { text: "Движение", correct: false },
                { text: "Растение", correct: false },
                { text: "Животное", correct: false }
            ])
        },
        {
            question: "Что является формой духовной культуры?",
            answers: shuffleArray([
                { text: "Религия", correct: true },
                { text: "Политика", correct: false },
                { text: "Экономика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Что относится к социальным потребностям человека?",
            answers: shuffleArray([
                { text: "Общение", correct: true },
                { text: "Экономика", correct: false },
                { text: "Политика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Что является признаком нации?",
            answers: shuffleArray([
                { text: "Общая культура и язык", correct: true },
                { text: "Экономика", correct: false },
                { text: "Политика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Какой тип общества характеризуется информатизацией?",
            answers: shuffleArray([
                { text: "Постиндустриальное", correct: true },
                { text: "Традиционное", correct: false },
                { text: "Индустриальное", correct: false },
                { text: "Постмодернистское", correct: false }
            ])
        },
        {
            question: "Что относится к глобальным проблемам человечества?",
            answers: shuffleArray([
                { text: "Экологический кризис", correct: true },
                { text: "Экономический рост", correct: false },
                { text: "Политическая стабильность", correct: false },
                { text: "Социальное равенство", correct: false }
            ])
        },
        {
            question: "Что является признаком гражданского общества?",
            answers: shuffleArray([
                { text: "Независимость от государства", correct: true },
                { text: "Зависимость от государства", correct: false },
                { text: "Наличие одной партии", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Что характеризует рыночную экономику?",
            answers: shuffleArray([
                { text: "Конкуренция производителей", correct: true },
                { text: "Централизованное планирование", correct: false },
                { text: "Плановая экономика", correct: false },
                { text: "Торговля", correct: false }
            ])
        },
        {
            question: "Что является особенностью морали как социальной нормы?",
            answers: shuffleArray([
                { text: "Опора на общественное мнение", correct: true },
                { text: "Автократическое правление", correct: false },
                { text: "Политическая нестабильность", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Что является признаком правонарушения?",
            answers: shuffleArray([
                { text: "Противоправность деяния", correct: true },
                { text: "Законное поведение", correct: false },
                { text: "Политическая нестабильность", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Какой признак характеризует демократическое государство?",
            answers: shuffleArray([
                { text: "Политический плюрализм", correct: true },
                { text: "Автократическое правление", correct: false },
                { text: "Наличие одной партии", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Что относится к естественным правам человека?",
            answers: shuffleArray([
                { text: "Право на жизнь", correct: true },
                { text: "Право на образование", correct: false },
                { text: "Право на труд", correct: false },
                { text: "Право на свободу слова", correct: false }
            ])
        },
        {
            question: "Что является функцией семьи?",
            answers: shuffleArray([
                { text: "Социализация детей", correct: true },
                { text: "Экономическая деятельность", correct: false },
                { text: "Политическая деятельность", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Что характеризует научное познание?",
            answers: shuffleArray([
                { text: "Системность", correct: true },
                { text: "Автократическое правление", correct: false },
                { text: "Политическая нестабильность", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Что является признаком этноса?",
            answers: shuffleArray([
                { text: "Общие традиции и обычаи", correct: true },
                { text: "Экономика", correct: false },
                { text: "Политика", correct: false },
                { text: "Социальные отношения", correct: false }
            ])
        },
        {
            question: "Что относится к политическим правам граждан?",
            answers: shuffleArray([
                { text: "Право избирать и быть избранным", correct: true },
                { text: "Право на труд", correct: false },
                { text: "Право на образование", correct: false },
                { text: "Право на свободу слова", correct: false }
            ])
        },
        {
            question: "Что является признаком социальной стратификации?",
            answers: shuffleArray([
                { text: "Различие в доходах", correct: true },
                { text: "Равенство возможностей", correct: false },
                { text: "Автократическое правление", correct: false },
                { text: "Экономический кризис", correct: false }
            ])
        },
        {
            question: "Что характеризует командную экономику?",
            answers: shuffleArray([
                { text: "Централизованное планирование", correct: true },
                { text: "Свободное ценообразование", correct: false },
                { text: "Плановая экономика", correct: false },
                { text: "Торговля", correct: false }
            ])
        },
        {
            question: "Что является признаком прогресса общества?",
            answers: shuffleArray([
                { text: "Развитие науки и технологий", correct: true },
                { text: "Отказ от традиций", correct: false },
                { text: "Усиление религиозности", correct: false },
                { text: "Военная экспансия", correct: false }
            ])
        }
    ];

    // Создаем HTML для вопросов
    function createQuestions() {
        const form = document.getElementById('quiz-form');
        form.innerHTML = ''; // Очищаем форму

        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            
            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionText);

            q.answers.forEach((answer, answerIndex) => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `q${index + 1}`;
                input.value = answer.correct ? '1' : '0';
                label.appendChild(input);
                label.appendChild(document.createTextNode(` ${answer.text}`));
                questionDiv.appendChild(label);
            });

            form.appendChild(questionDiv);
        });

        // Добавляем кнопку "Завершить тест"
        const button = document.createElement('button');
        button.type = 'button';
        button.id = 'finish-test';
        button.className = 'btn';
        button.textContent = 'Завершить тест';
        form.appendChild(button);
    }

    // Создаем вопросы при загрузке страницы
    createQuestions();

    // Обновляем ссылку на кнопку после её создания
    const newFinishButton = document.getElementById('finish-test');

    // Update progress bar when radio buttons are clicked
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgress);
    });

    function updateProgress() {
        const answered = document.querySelectorAll('input[type="radio"]:checked').length;
        const total = questions.length;
        const progress = (answered / total) * 100;
        progressBar.style.width = `${progress}%`;
    }

    newFinishButton.addEventListener('click', () => {
        let score = 0;
        let reviewHTML = '';
        let allAnswered = true;

        questions.forEach((q, index) => {
            const questionNumber = index + 1;
            const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);

            if (!selectedAnswer) {
                allAnswered = false;
                return;
            }

            const isCorrect = selectedAnswer.value === '1';
            if (isCorrect) {
                score++;
            }

            const selectedText = selectedAnswer.parentElement.textContent.trim();
            const correctAnswer = q.answers.find(a => a.correct).text;

            reviewHTML += `
                <p class="${isCorrect ? 'correct' : 'incorrect'}">
                    ${questionNumber}. ${q.question}<br>
                    Ваш ответ: ${selectedText}<br>
                    ${isCorrect ? '✓ Правильно!' : `✗ Неправильно. Правильный ответ: ${correctAnswer}`}
                </p>
            `;
        });

        if (!allAnswered) {
            alert('Пожалуйста, ответьте на все вопросы!');
            return;
        }

        testContainer.style.display = 'none';
        resultsDiv.style.display = 'block';
        scoreSpan.textContent = score;
        const percentage = Math.round((score / questions.length) * 100);
        percentageSpan.textContent = percentage;
        gradeSpan.textContent = getGrade(percentage);
        answersReview.innerHTML = reviewHTML;

        // Scroll to top to see results
        window.scrollTo(0, 0);
    });
}); 