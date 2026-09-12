import express from 'express'; 

const app = express(); // construir un servidor express

const PORT = process.env.PORT || 3000;  // el pueto que va a usar

const courses = [
        { id: 1, title: "Programación V", capacity: 30 },
        { id: 2, title: "Bases de Datos II", capacity: 25 },
        { id: 3, title: "Arquitectura de Software", capacity: 20 }
    ];

// Creamos nuestro primer endpoint que al consultarlo confirma que el servidor funciona.
app.get('/health',(reg,res) =>{
    res.status(200).json({ status: 'ok'});
});

//Agregamos Segundo endpoint de cursos 
app.get('/courses', (req, res) => {
    res.status(200).json(courses);
});

//Agregamos tercer endpoint el cual mostrara el curso que coincida con el id
app.get('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        res.status(404).json({ error: "Curso no encontrado" });
        return;
    }

    res.status(200).json(course);
});

//Agregamos endpoint version
app.get('/version',(req,res)=>{
    res.status(200).json({"version":"1.0.0"})
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
