let form = () => {
    let message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то прошло не так...',
    };

    let form = document.querySelector('.main-form'),
        formContact = document.querySelector('#form'),
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    let sendForm = elem => {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            let obj = {};

            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            const json = JSON.stringify(obj);

            let postData = data => {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve(data);
                        } if (request.readyState === 4 && request.status === 200) {
                            resolve(data);
                        } else {
                            reject();
                        }
                    };
                    request.send(data);
                });
            };
            let clearInput = () => {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            };

            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.succes;
                    console.log(JSON.parse(json));
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    };

    sendForm(form);
    sendForm(formContact);
};

export default form;