$(document).ready(function() {
    let likeElements = $('.like');
    let likeCounterElements = $('.like--counter');
    for( let i = 0; i < likeElements.length; i++ ) {
        let element = likeElements[String(i)],
            counter = likeCounterElements[String(i)];
            
        element.addEventListener("click", () => {
            if(element.classList.contains('like-active')) {
                element.className = 'like';
                counter.className = 'like--counter';
                let count = Number(counter.innerText);
                count--;
                counter.innerText = String(count);
            } else {
                element.className = 'like like-active';
                counter.className = 'like--counter like--counter-active';
                let count = Number(counter.innerText);
                count++;
                counter.innerText = String(count);
            }
        })
    }
})