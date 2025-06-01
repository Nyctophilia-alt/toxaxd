document.addEventListener('DOMContentLoaded', () => {
    const finishButton = document.getElementById('finish-test');
    const quizForm = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const percentageSpan = document.getElementById('percentage');
    const answersReview = document.getElementById('answers-review');
    const testContainer = document.getElementById('test-container');
    const progressBar = document.querySelector('.progress-bar');

    const questions = [
        {
            question: "Что такое общество в широком смысле слова?",
            correctAnswer: "1",
            correctText: "Часть материального мира, обособившаяся от природы, но тесно связанная с ней"
        },
        {
            question: "Что является признаком государства?",
            correctAnswer: "1",
            correctText: "Суверенитет"
        },
        {
            question: "Что относится к духовной культуре?",
            correctAnswer: "1",
            correctText: "Образование"
        },
        {
            question: "Какая из перечисленных наук изучает общество как целостную систему?",
            correctAnswer: "1",
            correctText: "Социология"
        },
        {
            question: "Что является высшей ценностью согласно Конституции РФ?",
            correctAnswer: "1",
            correctText: "Человек, его права и свободы"
        },
        {
            question: "Что характеризует традиционное общество?",
            correctAnswer: "1",
            correctText: "Преобладание сельского хозяйства"
        },
        {
            question: "Что является признаком правового государства?",
            correctAnswer: "1",
            correctText: "Верховенство закона"
        },
        {
            question: "Какой институт социализации является первичным?",
            correctAnswer: "1",
            correctText: "Семья"
        },
        {
            question: "Что относится к факторам производства?",
            correctAnswer: "1",
            correctText: "Труд, земля, капитал"
        },
        {
            question: "Что характеризует рыночную экономику?",
            correctAnswer: "1",
            correctText: "Свободное ценообразование"
        },
        {
            question: "Что является признаком демократии?",
            correctAnswer: "1",
            correctText: "Разделение властей"
        },
        {
            question: "Какой вид деятельности характерен только для человека?",
            correctAnswer: "1",
            correctText: "Творчество"
        },
        {
            question: "Что является формой духовной культуры?",
            correctAnswer: "1",
            correctText: "Религия"
        },
        {
            question: "Что относится к социальным потребностям человека?",
            correctAnswer: "1",
            correctText: "Общение"
        },
        {
            question: "Что является признаком нации?",
            correctAnswer: "1",
            correctText: "Общая культура и язык"
        },
        {
            question: "Какой тип общества характеризуется информатизацией?",
            correctAnswer: "1",
            correctText: "Постиндустриальное"
        },
        {
            question: "Что относится к глобальным проблемам человечества?",
            correctAnswer: "1",
            correctText: "Экологический кризис"
        },
        {
            question: "Что является признаком гражданского общества?",
            correctAnswer: "1",
            correctText: "Независимость от государства"
        },
        {
            question: "Что характеризует рыночную экономику?",
            correctAnswer: "1",
            correctText: "Конкуренция производителей"
        },
        {
            question: "Что является особенностью морали как социальной нормы?",
            correctAnswer: "1",
            correctText: "Опора на общественное мнение"
        },
        {
            question: "Что является признаком правонарушения?",
            correctAnswer: "1",
            correctText: "Противоправность деяния"
        },
        {
            question: "Какой признак характеризует демократическое государство?",
            correctAnswer: "1",
            correctText: "Политический плюрализм"
        },
        {
            question: "Что относится к естественным правам человека?",
            correctAnswer: "1",
            correctText: "Право на жизнь"
        },
        {
            question: "Что является функцией семьи?",
            correctAnswer: "1",
            correctText: "Социализация детей"
        },
        {
            question: "Что характеризует научное познание?",
            correctAnswer: "1",
            correctText: "Системность"
        },
        {
            question: "Что является признаком этноса?",
            correctAnswer: "1",
            correctText: "Общие традиции и обычаи"
        },
        {
            question: "Что относится к политическим правам граждан?",
            correctAnswer: "1",
            correctText: "Право избирать и быть избранным"
        },
        {
            question: "Что является признаком социальной стратификации?",
            correctAnswer: "1",
            correctText: "Различие в доходах"
        },
        {
            question: "Что характеризует командную экономику?",
            correctAnswer: "1",
            correctText: "Централизованное планирование"
        },
        {
            question: "Что является признаком прогресса общества?",
            correctAnswer: "1",
            correctText: "Развитие науки и технологий"
        }
    ];

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

    finishButton.addEventListener('click', () => {
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

            const isCorrect = selectedAnswer.value === q.correctAnswer;
            if (isCorrect) {
                score++;
            }

            const selectedText = selectedAnswer.parentElement.textContent.trim();
            reviewHTML += `
                <p class="${isCorrect ? 'correct' : 'incorrect'}">
                    ${questionNumber}. ${q.question}<br>
                    Ваш ответ: ${selectedText}<br>
                    ${isCorrect ? '✓ Правильно!' : `✗ Неправильно. Правильный ответ: ${q.correctText}`}
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
        answersReview.innerHTML = reviewHTML;

        // Scroll to top to see results
        window.scrollTo(0, 0);
    });
}); 