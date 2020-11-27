const toBuy = [];
const bought = [];
const products = [];
const buttonToBuy = document.querySelectorAll('.listElement__button--buy');
const buttonAddNewTask= document.querySelector('.button__addNewTask');
const buttonClosePopUp = document.querySelector('.closePopUp');
const popUp = document.querySelector('.popUp');
const WindowPopUp = document.querySelector('.mainWindowPopUp');
const sectionMain = document.querySelector('.main');
const popUpSearch = document.querySelector('.popUp__search');
const form = document.querySelector('.search__form');
const fieldToSearchProduct = document.querySelector('.search__form--input');
const catalogButton = document.querySelector('.catalog__button');
const productDatabase = document.querySelector('.productDatabase')
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

const showCatalogProducts = () => {
    productDatabase.classList.toggle('showed')
}

const searchProduct = fieldToSearchProduct.value;

const onFormSubmit = (e) => {
    e.preventDefault();
};
const init = () => {
form.addEventListener('submit', onFormSubmit);
buttonClosePopUp.addEventListener('click', ClosePopUp);
buttonAddNewTask.addEventListener('click', ActivePopUp);
catalogButton.addEventListener('click', showCatalogProducts);
};

init();