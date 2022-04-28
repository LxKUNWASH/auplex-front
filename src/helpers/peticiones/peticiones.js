const url = `https://au-resterver.herokuapp.com/api/`

export const login = async (body) => {
  try {
    const res = await fetch(`${url}auth`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuario = async (body) => {
  try {
    const res = await fetch(`${url}usuarios`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const actualizarUsuario = async (body,id) => {
  try {
    const res = await fetch(`${url}usuarios/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(body),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

  export const actualizarImagen = async (body,id) => {
    try {
      const res = await fetch(`${url}uploads/usuario/${id}`, {
        method: "PUT",
        body,
      });
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerUsuario = async (id) => {
    try {
      const res = await fetch(`${url}usuarios/${id}`);
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerUsuarios = async () => {
    try {
      const res = await fetch(`${url}usuarios`);
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };


  export const eliminarUsuario = async (id,token) => {
    try {
      const res = await fetch(`${url}usuarios/${id}`,
      {
          headers: {
            'x-token': token,
          },
          method: "DELETE"
      })
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  

