import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const submitCita = (e) => {
    e.preventDefault();

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      sintomas.trim() === "" ||
      hora.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    cita.id = uuidv4();

    crearCita(cita);

    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueno de la mascota"
          onChange={handleChange}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button tyoe="submit" className="u-full-widht button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
