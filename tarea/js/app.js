import estudiantes, { curso } from "./datos.js";
import reporte from "./calculos.js";

const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };
const todosEstudiantes = [...estudiantes, nuevoEstudiante];

console.log(`Curso: ${curso}`);
document.querySelector("#curso").textContent = `Curso: ${curso}`;

const listaReportes = document.querySelector("#reportes");

todosEstudiantes.forEach(estudiante => {
    const lineaReporte = reporte(estudiante);
    console.log(lineaReporte);
    
    const li = document.createElement("li");
    li.textContent = lineaReporte;
    listaReportes.appendChild(li);
});