let tabs = () => {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (item, elem) => {
        for (let i = item; i < elem.length; i++) {
            elem[i].classList.remove('show');
            elem[i].classList.add('hide');
        }
    };

    let showTabContent = (index, elem) => {
        if (elem[index].classList.contains('hide')) {
            elem[index].classList.remove('hide');
            elem[index].classList.add('show');
        }
    };

    hideTabContent(1, tabContent);

    info.addEventListener('click', event => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0, tabContent);
                    showTabContent(i, tabContent);
                    break;
                }
            }
        }
    });
};

export default tabs;