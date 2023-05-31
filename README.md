# projectlibrary

Se creó una estructura básica del proyecto, incluyendo los archivos y carpetas necesarios para organizar el código.
Esto incluyó la configuración de la base de datos con Sequelize, la configuración de Passport para la autenticación,
y las carpetas para los modelos, controladores, rutas y configuraciones. Hice la conexion local a una base de datos 
mysql vacia para poder iniciar la aplicacion, me hubiera gustado poder crear una base de datos de libros y librerias 
pero siento que tengo un conocimiento muy limitado en el tema base de datos por el momento.
Se definieron los modelos de datos necesarios para la aplicación. En este caso, se crearon modelos para los libros y 
las bibliotecas, utilizando Sequelize para definir las tablas en la base de datos y establecer las relaciones entre ellas.
Se implementaron los controladores, que contienen la lógica de la aplicación para manejar las diferentes acciones. 
Los controladores se encargaron de procesar las solicitudes HTTP, interactuar con la base de datos a través de los modelos,
y enviar las respuestas correspondientes.
Se crearon las rutas para los diferentes endpoints de la API. Esto incluyó las rutas para obtener todas las bibliotecas, 
crear una nueva biblioteca, obtener libros de una biblioteca, crear un nuevo libro, etc. 
Se utilizaron los controladores correspondientes para manejar cada ruta.
Se implementó la autenticación con Passport y tokens JWT. Se configuraron las estrategias de autenticación 
y se generaron los tokens JWT al registrar un usuario o iniciar sesión. Se protegieron las rutas que requerían 
<<<<<<< HEAD
autenticación utilizando el middleware de Passport. Se crearon las rutas para la
creación de los usuarios y la funcionalidad de registro y login. La lógica que seguí para mi programa fue la de permitir crear un usuario que otorga un token JWT valido que se requiere cuando se trata de ejecutar una de las operaciones AUTH del codigo para verificar que el usuario autenticado tiene todos los permisos requeridos.
Se configuró el archivo app.js principal, que inicializa la aplicación Express, registra los middleware, crea el user 'admin', establece las rutas y maneja el inicio del servidor en el puerto especificado.
=======
autenticación utilizando el middleware de Passport. La lógica que seguí para mi programa fue la de permitir 
crear un usuario que otorga un token JWT valido que se requiere cuando se trata de ejecutar una de las operaciones
AUTH del codigo para verificar que el usuario autenticado tiene todos los permisos requeridos. 
Se configuró el archivo app.js principal, que inicializa la aplicación Express, registra los middleware, 
establece las rutas y maneja el inicio del servidor en el puerto especificado.
>>>>>>> aac64ea6474939df1ba3d6420590bb9984ba4ab0
Con esta API, los usuarios pueden realizar operaciones CRUD en bibliotecas y libros, y se aplican controles de 
autenticación y autorización para proteger las acciones específicas.
