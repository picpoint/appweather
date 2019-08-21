const input = document.querySelector('.general__findblock').firstChild;
const btn = document.querySelector('.general__findblock').lastChild;
const key = 'b13322108a6798e54b547c8d1708f1c2';
const uri = 'http://api.openweathermap.org/data/2.5/weather?q=';
let result = '';

/*
simple work template
https://api.openweathermap.org/data/2.5/weather?q=Stavropol&appid=b13322108a6798e54b547c8d1708f1c2
*/

function responseStr () {
  const cityName = input.value;
  const xhr = new XMLHttpRequest();
  const url = uri + cityName + '&appid=b13322108a6798e54b547c8d1708f1c2';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      result = xhr.responseText;
      //console.log(result);
    }
  });
  xhr.send();

  console.log(result);

}

btn.addEventListener('click', responseStr);

