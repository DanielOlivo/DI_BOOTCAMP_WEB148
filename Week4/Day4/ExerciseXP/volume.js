const form = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const valumeInput = document.getElementById('volume');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const radius = Number(radiusInput.value);
    const result = 4.0 / 3.0 * Math.PI * Math.pow(radius, 3);
    valumeInput.value = result;
});