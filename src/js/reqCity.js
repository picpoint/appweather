const input = document.querySelector('.general__findblock').firstChild;
const btn = document.querySelector('.general__findblock').lastChild;
const span = document.querySelector('.general__datablock').firstChild;
const nameCity = document.querySelector('.general__nameCity');
const visibility = document.querySelector('.general__visibility');
const tempCity = document.querySelector('.general__temp');
const pressCity = document.querySelector('.general__press');
const humidCity = document.querySelector('.general__humid');


const key = 'b13322108a6798e54b547c8d1708f1c2';
const uri = 'http://api.openweathermap.org/data/2.5/weather?q=';


function responseStr () {
  const cityName = input.value;
  const xhr = new XMLHttpRequest();
  const url = uri + cityName + '&appid=b13322108a6798e54b547c8d1708f1c2';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let result = xhr.responseText;
      let objJson = JSON.parse(result);
      console.log(objJson);

      for (let key in objJson) {
        if (key == 'name') {
          nameCity.innerText = objJson[key];
        }

        if (key == 'main') {
          console.log(objJson[key].temp);
          tempCity.innerHTML = Math.floor(objJson[key].temp - 273.15) + ' C';
          pressCity.innerHTML = objJson[key].pressure + 'мм. рт. ст.';
          humidCity.innerHTML = objJson[key].humidity + ' %';
        }


      }

    }
  });
  xhr.send();


}

btn.addEventListener('click', responseStr);

