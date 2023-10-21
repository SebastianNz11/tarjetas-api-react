import React, { useState, useEffect } from "react";
import "./styles.css";

export const App = () => {
  const fecha = document.lastModified;
  const url = `https://jsonplaceholder.typicode.com/users`;
  const [datos, setDatos] = useState([]);

  const traerDatos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setDatos(data);
  };

  useEffect(() => {
    traerDatos(url);
  }, [url]);

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <div className="row">
        <h1 className="mb-5 text-center fs-1 animate__wobble">TARJETAS</h1>
        {datos.map((dato) => (
          <div className="container col-6" key={dato.id}>
            <div className="card col-12 m-4  borde  fondo transUp sombra">
              <div className="row no-gutters">
                <div className="col-3">
                  {/* Lado izquierdo con la imagen */}
                  <img
                    src={`https://robohash.org/user ${dato.id}`}
                    className="card-img"
                    alt="Imagen de la tarjeta"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="fw-semibold fs-6">
                      <b className="fw-bold fs-5">Nombre: </b> {dato.name}
                    </p>
                    <p className="fw-semibold fs-6">
                      <b className="fw-bold fs-5">Usuario: </b> {dato.username}
                    </p>
                    <p className="fw-semibold fs-6">
                      <b className="fw-bold fs-5">Correo: </b> {dato.email}
                    </p>
                    <div className="container d-flex">
                      <div className="row col-12 mx-5 border border-dark mt-1 rounded">
                        <p className="text-right mx-3 fw-semibold fs-6">
                          <b className="fw-bold fs-5">Dirección: </b>
                        </p>
                        <p className="text-right mx-3 fw-semibold fs-6">
                          <b className="fw-bold">Calle:</b>{" "}
                          {dato.address.street}
                        </p>

                        <p className="text-right mx-3 fw-semibold fs-6">
                          <b className="fw-bold">Ciudad:</b> {dato.address.city}
                        </p>
                        <p className="text-right mx-3 fw-semibold fs-6">
                          <b className="fw-bold">Código postal</b>:{" "}
                          {dato.address.zipcode}
                        </p>
                      </div>
                    </div>

                    <p className="card-text" id="actualizacion">
                      <small className="text-white fw-semibold">
                        Última actualización: {fecha}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
