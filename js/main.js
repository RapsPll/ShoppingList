const toBuy = [];
const bought = [];
const products = [];
const buttonToBuy = document.querySelectorAll('.listElement__button--buy');
const buttonAddNewTask= document.querySelector('.button__addNewTask');
const buttonClosePopUp = document.querySelector('.closePopUp');
const popUp = document.querySelector('.popUp');
const WindowPopUp = document.querySelector('.mainWindowPopUp');
const sectionMain = document.querySelector('.main');
const popUpSearch = document.querySelector('.popUp__search')

const ActivePopUp = () => {
    popUp.classList.add('active');
    WindowPopUp.classList.add('active');
    sectionMain.classList.add('blur');
    buttonClosePopUp.classList.add('active');
    popUpSearch.classList.add('active');
};

const ClosePopUp = () => {
    popUp.classList.remove('active');
    WindowPopUp.classList.remove('active');
    sectionMain.classList.remove('blur');
    buttonClosePopUp.classList.remove('active');
    popUpSearch.classList.remove('active');
};

buttonClosePopUp.addEventListener('click', ClosePopUp);

buttonAddNewTask.addEventListener('click', ActivePopUp);