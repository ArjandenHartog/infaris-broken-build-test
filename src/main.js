// Bewust kapot: left-pad staat niet in package.json, dus de build faalt.
import leftPad from 'left-pad';
document.getElementById('app').textContent = leftPad('Infaris', 12, '*');
