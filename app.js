document.addEventListener('DOMContentLoaded', function() {
    const meetTheMembers = document.getElementById('mtm');
    const carousel = document.querySelector('.carousel');
    const header = document.getElementById('the-jewels');
    const facts = document.querySelectorAll('.fun-facts')
    const greentxtshadow = '10px 10px 5px #00a86b, -4px -4px 5px #00a86b, 4px -4px 5px #00a86b, -4px 4px 5px #00a86b';
    const bluetxtshadow = '10px 10px 5px #0f52ba, -4px -4px 5px #0f52ba, 4px -4px 5px #0f52ba, -4px 4px 5px #0f52ba';
    const purpletxtshadow = '10px 10px 5px #9966cc, -4px -4px 5px #9966cc, 4px -4px 5px #9966cc, -4px 4px 5px #9966cc';
    const mruby = document.getElementById('meet-ruby')
    const mruby2 = document.getElementById('meet-ruby-2')
    const mjade = document.getElementById('meet-jade')
    const mjade2 = document.getElementById('meet-jade-2')

    const mamyth = document.getElementById('meet-amyth')
    const mamyth2 = document.getElementById('meet-amyth-2')
    const msaph = document.getElementById('meet-saph')
    const msaph2 = document.getElementById('meet-saph-2')

    carousel.addEventListener('slide.bs.carousel', function(event) {
        if (event.relatedTarget.id === 'green') {
            meetTheMembers.style.backgroundColor = '#00a86b';
            header.style.textShadow = greentxtshadow;
            facts.forEach(element =>{ element.style.backgroundColor = '#00a86b'});
            mjade.style.display = 'block';
            mjade2.style.display = 'block';
            mruby.style.display = 'none'
            mruby2.style.display = 'none'
            mamyth.style.display = 'none';
            mamyth2.style.display = 'none';
            msaph.style.display = 'none';
            msaph2.style.display = 'none';
        } else if (event.relatedTarget.id === 'blue') {
            meetTheMembers.style.backgroundColor = '#0f52ba';
            header.style.textShadow = bluetxtshadow;
            facts.forEach(element =>{ element.style.backgroundColor = '#0f52ba'});
            msaph.style.display = 'block';
            msaph2.style.display = 'block';
            mjade.style.display = 'none';
            mjade2.style.display = 'none';
            mruby.style.display = 'none'
            mruby2.style.display = 'none'
            mamyth.style.display = 'none';
            mamyth2.style.display = 'none';
        } else if (event.relatedTarget.id === 'purple') {
            meetTheMembers.style.backgroundColor = '#9966cc';
            header.style.textShadow = purpletxtshadow;
            facts.forEach(element =>{ element.style.backgroundColor = '#9966cc'});
            mamyth.style.display = 'block';
            mamyth2.style.display = 'block';
            msaph.style.display = 'none';
            msaph2.style.display = 'none';
            mjade.style.display = 'none';
            mjade2.style.display = 'none';
            mruby.style.display = 'none'
            mruby2.style.display = 'none'
        } else {
            meetTheMembers.style.backgroundColor = ''; // Reset to default
            header.style.textShadow = '';
            facts.forEach(element =>{ element.style.backgroundColor = ''});
            mruby.style.display = 'block'
            mruby2.style.display = 'block'
            mamyth.style.display = 'none';
            mamyth2.style.display = 'none';
            mjade.style.display = 'none';
            mjade2.style.display = 'none';
            msaph.style.display = 'none';
            msaph2.style.display = 'none';
        }
    });
});