const estudiante = async (req, res, next) => {
    try {
      const {
        Cedula,
        Apellido,
        Nombre,
        Semestre,
        Paralelo,
      } = req.body;
      
      const result = await pool.query(
        "INSERT INTO estudiante (Cedula,Apellido,Nombre,Semestre,Paralelo) RETURNING*",
        [
            Cedula,
            Apellido,
            Nombre,
            Semestre,
            Paralelo,
        ]
      );
  
function valida(){
    cedula= /^.{10,10}$/;
    nombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    semestre= /^.{1,10}$/;
}