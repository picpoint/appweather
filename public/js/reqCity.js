const input = document.querySelector('.general__findblock').firstChild;
const btn = document.querySelector('.general__findblock').lastChild;
const span = document.querySelector('.general__datablock').firstChild;
const nameCity = document.querySelector('.general__nameCity');
const visibility = document.querySelector('.general__visibility');
const tempCity = document.querySelector('.general__temp');
const pressCity = document.querySelector('.general__press');
const humidCity = document.querySelector('.general__humid');
const windCity = document.querySelector('.general__wnd');
const cloudsCity = document.querySelector('.general__clds');
const visibilityCity = document.querySelector('.general__vsblt');
const weatherdesc = document.querySelector('.general__weatherdesc');
const icon = document.querySelector('.general__icon').firstElementChild;
const pahtIcon = 'https://openweathermap.org/img/wn/';
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

      for (let key in objJson) {

        if (key == 'weather') {
          let weatherFact = objJson[key][0].main;

          switch (weatherFact) {
            case 'Clouds':
              weatherdesc.innerHTML = 'Облачно';
              break;

            case 'Fog':
              weatherdesc.innerHTML = 'Туман';
              break;

            case 'Rain':
              weatherdesc.innerHTML = 'Дождь';
              break;

            case 'Snow':
              weatherdesc.innerHTML = 'Снег';
              break;

            case 'Drizzle':
              weatherdesc.innerHTML = 'Изморозь';
              break;

            case 'Clear':
              weatherdesc.innerHTML = 'Чистое небо';
              break;

            default:
              weatherdesc.innerHTML = 'Нет данных';
              break;
          }

          let valueSrc = pahtIcon + objJson[key][0].icon + '.png';
          icon.setAttribute('src', valueSrc);
        }

        if (key == 'name') {
          nameCity.innerText = objJson[key];
        }

        if (key == 'main') {
          tempCity.innerHTML = Math.floor(objJson[key].temp - 273.15) + ' C';
          pressCity.innerHTML = objJson[key].pressure - 300 + ' мм. рт. ст.';
          humidCity.innerHTML = objJson[key].humidity + ' %';
        }

        if (key == 'wind') {
          windCity.innerHTML = objJson[key].speed + ' м/с';
        }

        if (key == 'clouds') {
          cloudsCity.innerHTML = objJson[key].all + ' %';
        }

        if (key == 'visibility') {
          visibilityCity.innerHTML = objJson[key] + ' м.';
        }

      }
    }
  });
  xhr.send();

}

btn.addEventListener('click', responseStr);

input.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    responseStr();
  }
});


