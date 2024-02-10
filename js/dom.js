const sections=document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid blue';
    section.style.marginBottom= '5px';
    section.style.borderRadius= '5px';
    section.style.padding= '10px';
    section.style.backgroundColor= 'lightgray';
}
// const placesContainer=document.getElementById('places-container');
//     placesContainer.style.backgroundColor='yellow';


//add class name using dom
const placesContainer=document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('yellow-bg');