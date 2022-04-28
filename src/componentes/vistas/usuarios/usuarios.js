import { useState, useEffect } from "react";
import "./usuarios.css";
import Card from "../../card/card";
import {
  eliminarUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  actualizarUsuario,
} from "../../../helpers/peticiones/peticiones";
import Input from "../../formulario/input";
import {expresiones} from "../../../helpers/expresionesRegulares"

function Usuarios() {
  const [admin, setAdmin] = useState([]);

  const [usuarios, setUsuarios] = useState([]);


  const id = localStorage.getItem("Usuario");
  const token = localStorage.getItem("Token");


  if (!token) {
    if(token.length<4){
      window.location.replace("/");
    }
    
  }

  useEffect(() => {
    obtenerUsuario(id).then((res) => setAdmin(res));
  }, []);

  useEffect(() => {
    obtenerUsuarios().then((res) => setUsuarios(res));
  }, [usuarios.length]);

  const handleOnclick = async (u) => {
    const res = await eliminarUsuario(u.uid, token);

    if (res.msg) {
      alert(res.msg);
    }

    window.location.reload(true);
  };

  const handleOnUpdate = async (u) => {


    localStorage.setItem("uidActualizar",u.uid)

    window.location.replace('/usuarios-actualizar');

  };

  const handleCerrarSesion = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <div className="contenedor-usuarios">
      <div className="perfil">
        <Card nombre={admin.nombre} descripcion={admin.rol} img={admin.img} />
        <div className="boton">
          <button onClick={handleCerrarSesion}>Cerrar Sesion</button>
        </div>
      </div>

      <div className="listado">
        <h1 className="titulo">Usuarios</h1>
        <div className="lista">
          <ul>
            {usuarios.map((u) => {
              return (
                <li key={u.uid} className="lista">
                  {" "}
                  {u.nombre}{" "}
                  <div>
                    <svg
                      onClick={() => handleOnclick(u)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill icono"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>{" "}
                    <svg
                      onClick={() => handleOnUpdate(u)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-earmark-person icono"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
