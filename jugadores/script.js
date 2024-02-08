const jugadores = [
    { nombre: "David Beckham", fechaNacimiento: "1975-05-02" },
  { nombre: "Ryan Giggs", fechaNacimiento: "1973-11-29" },
  { nombre: "Paul Scholes", fechaNacimiento: "1974-11-16" },
  { nombre: "Roy Keane", fechaNacimiento: "1971-08-10" },
  { nombre: "Cristiano Ronaldo", fechaNacimiento: "1985-02-05" },
  { nombre: "Eric Cantona", fechaNacimiento: "1966-05-24" },
  { nombre: "Wayne Rooney", fechaNacimiento: "1985-10-24" },
  { nombre: "Rio Ferdinand", fechaNacimiento: "1978-11-07" },
  { nombre: "Gary Neville", fechaNacimiento: "1975-02-18" },
  { nombre: "Peter Schmeichel", fechaNacimiento: "1963-11-18" },
  { nombre: "Nemanja Vidić", fechaNacimiento: "1981-10-21" },
  { nombre: "Ruud van Nistelrooy", fechaNacimiento: "1976-07-01" },
  { nombre: "George Best", fechaNacimiento: "1946-05-22" },
  { nombre: "Bobby Charlton", fechaNacimiento: "1937-10-11" },
  { nombre: "Denis Law", fechaNacimiento: "1940-02-24" },
  { nombre: "Michael Carrick", fechaNacimiento: "1981-07-28" },
  { nombre: "Patrice Evra", fechaNacimiento: "1981-05-15" },
  { nombre: "Dwight Yorke", fechaNacimiento: "1971-11-03" },
  { nombre: "Andy Cole", fechaNacimiento: "1971-10-15" },
  { nombre: "Ole Gunnar Solskjær", fechaNacimiento: "1973-02-26" }
    // Agrega más jugadores con sus fechas de nacimiento
  ];
  


  function encontrarJugador() {
    const fechaUsuario = document.getElementById("fechaNacimiento").value;
  
    if (!fechaUsuario) {
      alert("Ingresa una fecha de nacimiento válida.");
      return;
    }
  
    const diaMesUsuario = obtenerDiaMes(fechaUsuario);
  
    const jugadorMasCercano = jugadores.reduce((anterior, actual) => {
      const diaMesJugador = obtenerDiaMes(actual.fechaNacimiento);
  
      const diferencia = calcularDiferenciaDias(diaMesUsuario, diaMesJugador);
  
      if (anterior === null || diferencia < anterior.diferencia) {
        return { jugador: actual, diferencia };
      }
  
      return anterior;
    }, null);
  
    mostrarResultado(jugadorMasCercano.jugador.nombre);
  }
  
  function obtenerDiaMes(fecha) {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1; // Nota: en JavaScript, los meses van de 0 a 11
    return `${mes}-${dia}`;
  }
  
  function calcularDiferenciaDias(diaMesUsuario, diaMesJugador) {
    const fechaUsuario = new Date(`2000-${diaMesUsuario}`);
    const fechaJugador = new Date(`2000-${diaMesJugador}`);
  
    const diferencia = Math.abs(fechaUsuario - fechaJugador);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
    return dias;
  }
  
  function mostrarResultado(nombreJugador) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>Eres ${nombreJugador}</h2>`;
  }