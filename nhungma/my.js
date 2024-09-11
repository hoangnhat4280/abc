alert('xin chao');

document.write('xin chao');

document.getElementById('demo').innerText = 'xin chao';

document.getElementById('demo2').innerHTML = 'xin chao';

// goi function

 function getName() {
     alert("thanh")
     document.getElementById('demo').innerText = 'thanh';
     document.getElementById('demo2').innerText = '<h1>thanh</h1>';

 }

 document.getElementById("b1").addEventListener('click', getName);