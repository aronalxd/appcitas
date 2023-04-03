// Obtener el formulario y la tabla
const appointmentForm = document.getElementById("appointment-form");
const appointmentsTable = document.getElementById("appointments-table");

// Escuchar el evento submit del formulario
appointmentForm.addEventListener("submit", (event) => {
  // Prevenir el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const phone = document.getElementById("phone-input").value;
  const date = document.getElementById("date-input").value;
  const time = document.getElementById("time-input").value;

  // Crear una fila para la tabla con los valores del formulario
  const row = appointmentsTable.insertRow(-1);
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const phoneCell = row.insertCell(2);
  const dateCell = row.insertCell(3);
  const timeCell = row.insertCell(4);
  nameCell.textContent = name;
  emailCell.textContent = email;
  phoneCell.textContent = phone;
  dateCell.textContent = date;
  timeCell.textContent = time;

  // Limpiar los valores del formulario
  appointmentForm.reset();
});
