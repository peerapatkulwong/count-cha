var button = document.getElementById('change');
var clear = document.getElementById('clear');

button.addEventListener('click',function(event){
    var put = document.getElementById('put').value;
    var empty = {};
    for (let i = 0; i < put.length; i++){
        var num = put[i];
        if (!empty[num]) {
            empty[num] = 0;
        }
        empty[num]++;
    }
    document.querySelector('.out').innerHTML = empty[num];
});

clear.addEventListener('click',function(event){
    document.getElementById('put').value = '';
    document.querySelector('.out').innerHTML = '';
});