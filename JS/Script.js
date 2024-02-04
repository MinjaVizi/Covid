document.addEventListener('DOMContentLoaded', function() {
    fetchCovidData();
});

function fetchCovidData() {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
        displayCovidData(data);
    })
    .catch(error => {
        console.error('Došlo je do greške prilikom učitavanja podataka', error);
    });
}

function displayCovidData(data) {
    const container = document.getElementById('covid-data');
    const content = `
        <p>Ukupno slučajeva: ${data.cases}</p>
        <p>Ukupno smrtnih slučajeva: ${data.deaths}</p>
        <p>Ukupno oporavljenih: ${data.recovered}</p>
        <p>Aktivni slučajevi: ${data.active}</p>
        <p>Kritični slučajevi: ${data.critical}</p>
        <p>Slučajevi danas: ${data.todayCases}</p>
        <p>Smrtni slučajevi danas: ${data.todayDeaths}</p>
        <p>Oporavljeni danas: ${data.todayRecovered}</p>
        <p>Ukupno testova: ${data.tests}</p>
    `;
    container.innerHTML = content;
}
