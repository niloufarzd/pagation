window.onload = function() {

    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var frame = document.getElementById('frame');
    
    one.addEventListener('click',function(){
        frame.classList.add('img-1');
        frame.classList.remove('img-2');
        frame.classList.remove('img-3');
        frame.classList.remove('img-4');
        frame.style.border = "none";
    })
    two.addEventListener('click',function(){
        frame.classList.add('img-2');
        frame.classList.remove('img-1');
        frame.classList.remove('img-3');
        frame.classList.remove('img-4');
        frame.style.border = "none";
    })
    three.addEventListener('click',function(){
        frame.classList.add('img-3');
        frame.classList.remove('img-1');
        frame.classList.remove('img-2');
        frame.classList.remove('img-4');
        frame.style.border = "none";
    })
    four.addEventListener('click',function(){
        frame.classList.add('img-4');
        frame.classList.remove('img-1');
        frame.classList.remove('img-2');
        frame.classList.remove('img-3');
        frame.style.border = "none";
    })
        
    }