const input = document.querySelector('.general__findblock').firstChild;
const btn = document.querySelector('.general__findblock').lastChild;
const span = document.querySelector('.general__datablock').firstChild;
const nameCity = document.querySelector('.general__nameCity');
const visibility = document.querySelector('.general__visibility');
const key = 'b13322108a6798e54b547c8d1708f1c2';
const uri = 'http://api.openweathermap.org/data/2.5/weather?q=';


/*
simple work template
https://api.openweathermap.org/data/2.5/weather?q=Stavropol&appid=b13322108a6798e54b547c8d1708f1c2
*/

console.log(nameCity);
console.log(visibility);

function responseStr () {
  const cityName = input.value;
  const xhr = new XMLHttpRequest();
  const url = uri + cityName + '&appid=b13322108a6798e54b547c8d1708f1c2';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let result = xhr.responseText;
      //console.log(result);
      let objJson = JSON.parse(result);
      //console.log(objJson);

      for (let key in objJson) {
        //console.log(key);
        if (key == 'name') {
          console.log(objJson[key]);
          nameCity.innerText = objJson[key];
        }

        if (key == 'visibility') {
          visibility.innerText = objJson[key];
        }


      }

    }
  });
  xhr.send();


}

btn.addEventListener('click', responseStr);

