// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city;
        break;
    }
}

console.log(firstOddLengthCity);


// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]
let cityLengthGreater5 = []

for (const city of cities) {
    if (city.length > 5) {
        cityLengthGreater5.push(city);
    }
}

console.log(cityLengthGreater5); // [ 'Berlin', 'Chicago', 'Istanbul' ]


// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]
let citiesWithI = []

for(const city of cities) {
    if (city.toLowerCase().includes('i')) {
        citiesWithI.push(city);
    }
}

console.log(citiesWithI);