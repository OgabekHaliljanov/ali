
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const trainerId = getQueryParam('trainer');
    const trainer = trainers[trainerId];
    // Находим кнопку
    const backBtn = document.getElementById('backBtn');

    // Добавляем обработчик клика
    backBtn.addEventListener('click', () => {
        // Перенаправление на главную страницу
        window.location.href = './index.html';
    });
