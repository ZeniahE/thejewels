document.addEventListener('DOMContentLoaded', function() {
    const meetTheMembers = document.getElementById('mtm');
    const carousel = document.querySelector('.carousel');
    const header = document.getElementById('the-jewels');
    const facts = document.querySelectorAll('.fun-facts')
    const greentxtshadow = '10px 10px 5px #00a86b, -4px -4px 5px #00a86b, 4px -4px 5px #00a86b, -4px 4px 5px #00a86b';
    const bluetxtshadow = '10px 10px 5px #0f52ba, -4px -4px 5px #0f52ba, 4px -4px 5px #0f52ba, -4px 4px 5px #0f52ba';
    const purpletxtshadow = '10px 10px 5px #9966cc, -4px -4px 5px #9966cc, 4px -4px 5px #9966cc, -4px 4px 5px #9966cc';

    carousel.addEventListener('slide.bs.carousel', function(event) {
        if (event.relatedTarget.id === 'green') {
            meetTheMembers.style.backgroundColor = '#00a86b';
            header.style.textShadow = greentxtshadow;
            facts.forEach(element =>{ element.style.backgroundColor = '#00a86b'});
        } else if (event.relatedTarget.id === 'blue') {
            meetTheMembers.style.backgroundColor = '#0f52ba';
            header.style.textShadow = bluetxtshadow;
            facts.forEach(element =>{ element.style.backgroundColor = '#0f52ba'});
        } else if (event.relatedTarget.id === 'purple') {
            meetTheMembers.style.backgroundColor = '#9966cc';
            header.style.textShadow = purpletxtshadow;
            facts.forEach(element =>{ element.style.backgroundColor = '#9966cc'});
        } else {
            meetTheMembers.style.backgroundColor = ''; // Reset to default
            header.style.textShadow = '';
            facts.forEach(element =>{ element.style.backgroundColor = ''});
        }
    });
});