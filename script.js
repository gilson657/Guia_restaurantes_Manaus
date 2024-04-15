document.getElementById('location-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    if(state && city && country) {
        showLoadingMessage();
        setTimeout(function() {
            searchBusinesses(state, city, country);
        }, 1000); // Simula um pequeno atraso para mostrar uma mensagem de "carregando"
    } else {
        alert('Please fill in all fields');
    }
});

function showLoadingMessage() {
    document.getElementById('businesses').innerHTML = '<p>Loading...</p>';
}

function searchBusinesses(state, city, country) {
    // Aqui você pode fazer uma chamada AJAX para um servidor real para buscar os dados dos negócios
    // Mas neste exemplo, vou apenas exibir uma mensagem de demonstração

    const output = '<p>Showing local businesses for ' + city + ', ' + state + ', ' + country + '</p>';
    document.getElementById('businesses').innerHTML = output;
}
