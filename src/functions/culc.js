let culc = () => {

    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.querySelector('#select'),
    totalValue = document.querySelector('#total'),
    total = 0;

    totalValue.innerHTML = 0;

    let culc = (persons, restDays, total) => {
        let sum = (+persons.value + (+restDays.value));
        total = (sum) * 4000 * place.value;
    
        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            total = 0;
            return total;
        } else {
            return total;
        }
    };

    persons.addEventListener('input', function() {
        totalValue.innerHTML = culc(this, restDays, total);
        if (this.value < 0 || this.value == 0 || isNaN(this.value)) {
            this.value = '';
        }
    });

    restDays.addEventListener('input', function() {
        totalValue.innerHTML = culc(this, persons, total);
        if (this.value < 0 || this.value == 0 || isNaN(this.value)) {
            this.value = '';
        }
    });

    place.addEventListener('input', function() {
        let total = (+persons.value + (+restDays.value)) * 4000 * this.value;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
};

export default culc;