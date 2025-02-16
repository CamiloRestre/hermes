function toggleMenu() {
    const submenu = document.getElementById('usuarios-submenu');
    submenu.classList.toggle('hidden');
}

function toggleSwitch(element) {
    element.classList.toggle('bg-green-500');
    element.classList.toggle('bg-gray-400');
}

function showPermisos() {
    const roles = [
        "Líder TIC", "Mesa de ayuda", "Admin almacén",
        "Admin biblioteca", "Admin coordinación", "Aprendiz",
        "Instructor", "Vigilante"
    ];
    const permisos = ["CE", "Ce", "ME", "IE", "AE", "RE"];

    const botones = [
        "Gestión de equipos", "Solicitudes y autorizaciones", "Devoluciones", "Salidas"
    ];

    const infoSecciones = [{
        titulo: "Gestión de equipos",
        items: [
            { codigo: "CE", descripcion: "Crear equipos" },
            { codigo: "Ce", descripcion: "Consultar equipos" },
            { codigo: "ME", descripcion: "Modificar equipos" },
            { codigo: "IE", descripcion: "Inhabilitar equipos" },
            { codigo: "AE", descripcion: "Asignar equipos" },
            { codigo: "RE", descripcion: "Revisar equipos" }
        ]
    },
    {
        titulo: "Solicitudes y autorizaciones",
        items: [
            { codigo: "RS", descripcion: "Realizar solicitudes" },
            { codigo: "Ce", descripcion: "Consultar equipos" },
            { codigo: "CS", descripcion: "Cancelar solicitudes" },
            { codigo: "AS", descripcion: "Aprobar solicitudes" },
            { codigo: "EE", descripcion: "Entregar equipos" },
            { codigo: "DE", descripcion: "Devolver equipos" },
            { codigo: "AS", descripcion: "Autorizar salidas" },
            { codigo: "CS", descripcion: "Consultar salidas" }
        ]
    },
    {
        titulo: "Devoluciones",
        items: [
            { codigo: "DE", descripcion: "Devolver equipos" },
            { codigo: "RE", descripcion: "Revisar equipos" },
            { codigo: "AD", descripcion: "Actualizar estados" },
            { codigo: "CD", descripcion: "Consultar devoluciones" }
        ]
    },
    {
        titulo: "Salidas",
        items: [
            { codigo: "VA", descripcion: "Verificar autorizaciones" },
            { codigo: "CS", descripcion: "Consultar salidas" },
            { codigo: "FS", descripcion: "Firmar salidas" }
        ]
    }
    ];

    document.getElementById('main-content').innerHTML = `

        <div class="mb-4">
    <h1 class="text-2xl font-bold">PERMISOS</h1>

    <!-- Barra de navegación -->
    <div class="flex items-center gap-6 border-b border-gray-300 pb-2">
        <span class="font-semibold cursor-pointer flex items-center">
            Pendientes
            <span class="ml-1 bg-gray-500 text-white text-xs font-bold rounded-full px-2 py-0.5">2</span>
        </span>
        <span class="cursor-pointer text-gray-800 hover:text-black">Reportes</span>
        <span class="cursor-pointer text-gray-800 hover:text-black">Líder TIC</span>
        <span class="text-gray-400 cursor-default">John Doe</span>
    </div>
</div>

        <div class="flex gap-4">
            <!-- Contenedor de botones alineados a la izquierda -->
            <div class="flex flex-col gap-2 w-fit">
                ${botones.map((nombre, index) => `
                    <button onclick="toggleTables('tabla${index + 1}', 'infoTabla${index + 1}')" 
                        class="bg-black text-white text-sm px-3 py-1 rounded w-fit">
                        ${nombre}
                    </button>
                `).join("")}

                <!-- Contenedor de tablas informativas debajo de los botones -->
                <div id="contenedor-info" class="hidden mt-4 flex flex-col gap-4">
                    ${infoSecciones.map((seccion, index) => `
                        <div id="infoTabla${index + 1}" class="hidden border-dashed border-2 border-gray-400 p-4 rounded-lg">
                            <h2 class="text-lg font-bold text-blue-900 bg-gray-100 px-2 py-1">${seccion.titulo}</h2>
                            <table class="min-w-full">
                                <tbody>
                                    ${seccion.items.map(item => `
                                        <tr>
                                            <td class="font-bold p-2">${item.codigo}</td>
                                            <td class="p-2">${item.descripcion}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Contenedor de las tablas principales alineadas a la derecha -->
            <div id="contenedor-tablas" class="flex-1 flex flex-col gap-4">
                ${botones.map((nombre, index) => `   
                    <div id="tabla${index + 1}" class="hidden bg-white shadow-md rounded-lg p-4">
                        <h2 class="text-xl font-bold text-blue-900 mb-2">${nombre}</h2>
                        <table class="min-w-full border border-gray-300">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border p-2 text-left">Nombre/Rol ⬇️</th>
                                    ${permisos.map(p => `<th class="border p-2">${p}</th>`).join("")}
                                </tr>
                            </thead>
                            <tbody>
                                ${roles.map(rol =>
        `<tr class="even:bg-gray-50">
                                        <td class="border p-2">${rol}</td>
                                        ${permisos.map(() =>
            `<td class="border p-2 text-center">
                                                <input type="checkbox">
                                            </td>`
        ).join("")}
                                    </tr>`
    ).join("")}
                            </tbody>
                        </table>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function toggleTables(idTabla, idInfoTabla) {
    let tabla = document.getElementById(idTabla);
    let infoTabla = document.getElementById(idInfoTabla);
    let contenedorInfo = document.getElementById('contenedor-info');

    // Alternar visibilidad de la tabla principal y la informativa
    tabla.classList.toggle("hidden");
    infoTabla.classList.toggle("hidden");

    // Revisar si hay al menos una tabla visible para mostrar el contenedor de info
    const hayTablasVisibles = [...document.querySelectorAll("[id^='infoTabla']")]
        .some(tabla => !tabla.classList.contains("hidden"));

    if (hayTablasVisibles) {
        contenedorInfo.classList.remove("hidden");
    } else {
        contenedorInfo.classList.add("hidden");
    }
}

// Inicializar
showPermisos();



function showUsuarios() {
    document.getElementById('main-content').innerHTML = `
        <h1 class="text-2xl font-bold mb-4">Usuarios</h1>
        <button onclick="openModal()" class="bg-black text-white px-4 py-2 rounded mb-4">Agregar Usuario</button>
        <input type="text" id="searchInput" placeholder="Buscar usuario..." class="w-full p-2 mb-4 border rounded" onkeyup="filtrarUsuarios()">
        <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border p-2">Identificación</th>
                        <th class="border p-2">Nombre/Rol</th>
                        <th class="border p-2">Ficha</th>
                        <th class="border p-2">Estado</th>
                        <th class="border p-2">Último ingreso</th>
                        <th class="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody id="usuarios-table"></tbody>
            </table>
        </div>

        <!-- Modal para agregar/editar usuario -->
        <div id="modal" class="fixed inset-0 flex items-center justify-center hidden bg-gray-800 bg-opacity-50">
            <div class="bg-white p-6 rounded shadow-lg w-96">
                <h2 id="modal-title" class="text-xl font-bold mb-4">Agregar Usuario</h2>
                <input id="identificacion" type="text" placeholder="Identificación" class="w-full p-2 mb-2 border rounded">
                <input id="nombre" type="text" placeholder="Nombre/Rol" class="w-full p-2 mb-2 border rounded">
                <input id="ficha" type="text" placeholder="Ficha" class="w-full p-2 mb-2 border rounded">
                <input type="hidden" id="editingIndex">
                <button onclick="closeModal()" class="bg-red-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                <button onclick="saveUsuario()" class="bg-green-500 text-white px-4 py-2 rounded">Guardar</button>
            </div>
        </div>

        <!-- Modal de visualización -->
        <div id="view-modal" class="fixed inset-0 flex items-center justify-center hidden bg-gray-800 bg-opacity-50">
            <div class="bg-white p-6 rounded shadow-lg w-96">
                <h2 class="text-xl font-bold mb-4">Detalles del Usuario</h2>
                <p><strong>Identificación:</strong> <span id="view-identificacion"></span></p>
                <p><strong>Nombre/Rol:</strong> <span id="view-nombre"></span></p>
                <p><strong>Ficha:</strong> <span id="view-ficha"></span></p>
                <p><strong>Estado:</strong> <span id="view-estado"></span></p>
                <p><strong>Último ingreso:</strong> <span id="view-ultimoIngreso"></span></p>
                <button onclick="closeViewModal()" class="bg-gray-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
            </div>
        </div>
    `;
    renderUsuarios();
}

function openModal(editIndex = null) {
    document.getElementById('modal').classList.remove('hidden');
    if (editIndex !== null) {
        const usuario = usuarios[editIndex];
        document.getElementById('identificacion').value = usuario.identificacion;
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('ficha').value = usuario.ficha;
        document.getElementById('editingIndex').value = editIndex;
        document.getElementById('modal-title').textContent = "Editar Usuario";
    } else {
        document.getElementById('identificacion').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('ficha').value = "";
        document.getElementById('editingIndex').value = "";
        document.getElementById('modal-title').textContent = "Agregar Usuario";
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function openViewModal(index) {
    const usuario = usuarios[index];
    document.getElementById('view-identificacion').textContent = usuario.identificacion;
    document.getElementById('view-nombre').textContent = usuario.nombre;
    document.getElementById('view-ficha').textContent = usuario.ficha;
    document.getElementById('view-estado').textContent = usuario.estado;
    document.getElementById('view-ultimoIngreso').textContent = usuario.ultimoIngreso;
    document.getElementById('view-modal').classList.remove('hidden');
}

function closeViewModal() {
    document.getElementById('view-modal').classList.add('hidden');
}

let usuarios = [
    { identificacion: "21811664", nombre: "Juan Pérez (Admin)", ficha: "234343", ultimoIngreso: "10/02/2025" },
    { identificacion: "23232122", nombre: "Ana Gómez (Aprendiz)", ficha: "1223343", ultimoIngreso: "11/02/2025" },
    { identificacion: "12323232", nombre: "Carlos Ruiz (Instructor)", ficha: "222122", ultimoIngreso: "12/02/2025" },
    { identificacion: "11112223", nombre: "Laura Medina (Admin)", ficha: "232333", ultimoIngreso: "13/02/2025" },
    { identificacion: "10022235", nombre: "Pedro Ramírez (Aprendiz)", ficha: "122323", ultimoIngreso: "14/02/2025" },
    { identificacion: "1006464445", nombre: "Alejandro Vera (Aprendiz)", ficha: "2847523", ultimoIngreso: "14/02/2025" }
];

function saveUsuario() {
    const identificacion = document.getElementById('identificacion').value;
    const nombre = document.getElementById('nombre').value;
    const ficha = document.getElementById('ficha').value;
    const editIndex = document.getElementById('editingIndex').value;

    if (identificacion && nombre && ficha) {
        if (editIndex) {
            usuarios[editIndex] = { identificacion, nombre, ficha, estado: usuarios[editIndex].estado, ultimoIngreso: usuarios[editIndex].ultimoIngreso };
        } else {
            usuarios.push({ identificacion, nombre, ficha, estado: "Activo", ultimoIngreso: new Date().toLocaleDateString() });
        }
        closeModal();
        renderUsuarios();
    }
}

function toggleEstado(index) {
    usuarios[index].estado = usuarios[index].estado === "Activo" ? "Inactivo" : "Activo";
    renderUsuarios();
}

function deleteUsuario(index) {
    usuarios.splice(index, 1);
    renderUsuarios();
}

function renderUsuarios() {
    const tbody = document.getElementById('usuarios-table');
    tbody.innerHTML = usuarios.map((usuario, index) => `
        <tr>
            <td class="border p-2">${usuario.identificacion}</td>
            <td class="border p-2">${usuario.nombre}</td>
            <td class="border p-2">${usuario.ficha}</td>
            <td class="border p-2 text-center">
                <button onclick="toggleEstado(${index})" class="px-2 py-1 rounded text-white ${usuario.estado === "Activo" ? "bg-green-500" : "bg-red-500"}">
                    ${usuario.estado}
                </button>
            </td>
            <td class="border p-2 text-center">${usuario.ultimoIngreso}</td>
            <td class="border p-2 text-center">
                <button onclick="openViewModal(${index})" class="text-blue-500 hover:text-blue-700 mx-1"><i class="fas fa-eye"></i></button>
                <button onclick="openModal(${index})" class="text-yellow-500 hover:text-yellow-700 mx-1"><i class="fas fa-edit"></i></button>
                <button onclick="deleteUsuario(${index})" class="text-red-500 hover:text-red-700 mx-1"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}


function filtrarUsuarios() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#usuarios-table tr");
    rows.forEach(row => {
        let texto = row.textContent.toLowerCase();
        row.style.display = texto.includes(input) ? "" : "none";
    });
}

function toggleMenu() {
    const submenu = document.getElementById('usuarios-submenu');
    submenu.classList.toggle('hidden');
}

function toggleSwitch(element) {
    element.classList.toggle('bg-green-500');
    element.classList.toggle('bg-gray-400');
}

function loadContent(contentType) {
    const mainContent = document.getElementById('main-content');
    if (contentType === 'usuarios') {
        mainContent.innerHTML = `
            <h1 class="text-2xl font-bold">Usuarios</h1>
            <button onclick="openModal()" class="bg-black text-white px-4 py-2 rounded mb-4">Agregar Usuario</button>
            <input type="text" id="searchInput" placeholder="Buscar usuario..." class="w-full p-2 mb-4 border rounded" onkeyup="filtrarUsuarios()">
            <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="border p-2">Identificación</th>
                            <th class="border p-2">Nombre/Rol</th>
                            <th class="border p-2">Ficha</th>
                            <th class="border p-2">Estado</th>
                            <th class="border p-2">Último ingreso</th>
                            <th class="border p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="usuarios-table"></tbody>
                </table>
            </div>
            <!-- Modal para agregar/editar usuario -->
            <div id="modal" class="fixed inset-0 flex items-center justify-center hidden bg-gray-800 bg-opacity-50">
                <div class="bg-white p-6 rounded shadow-lg w-96">
                    <h2 id="modal-title" class="text-xl font-bold mb-4">Agregar Usuario</h2>
                    <input id="identificacion" type="text" placeholder="Identificación" class="w-full p-2 mb-2 border rounded">
                    <input id="nombre" type="text" placeholder="Nombre/Rol" class="w-full p-2 mb-2 border rounded">
                    <input id="ficha" type="text" placeholder="Ficha" class="w-full p-2 mb-2 border rounded">
                    <input type="hidden" id="editingIndex">
                    <button onclick="closeModal()" class="bg-red-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                    <button onclick="saveUsuario()" class="bg-green-500 text-white px-4 py-2 rounded">Guardar</button>
                </div>
            </div>
            <!-- Modal de visualización -->
            <div id="view-modal" class="fixed inset-0 flex items-center justify-center hidden bg-gray-800 bg-opacity-50">
                <div class="bg-white p-6 rounded shadow-lg w-96">
                    <h2 class="text-xl font-bold mb-4">Detalles del Usuario</h2>
                    <p><strong>Identificación:</strong> <span id="view-identificacion"></span></p>
                    <p><strong>Nombre/Rol:</strong> <span id="view-nombre"></span></p>
                    <p><strong>Ficha:</strong> <span id="view-ficha"></span></p>
                    <p><strong>Estado:</strong> <span id="view-estado"></span></p>
                    <p><strong>Último ingreso:</strong> <span id="view-ultimoIngreso"></span></p>
                    <button onclick="closeViewModal()" class="bg-gray-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
                </div>
            </div>
        `;
        renderUsuarios();
    } else if (contentType === 'permisos') {
        mainContent.innerHTML = `
            <h1 class="text-2xl font-bold">Permisos</h1>
            <table class="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border p-2">Rol</th>
                        <th class="border p-2">Crear</th>
                        <th class="border p-2">Modificar</th>
                        <th class="border p-2">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    ${['Líder Tic', 'Mesa de ayuda', 'Admin almacén', 'Admin biblioteca', 'Admin Coordinación', 'Aprendiz', 'Instructor', 'Vigilante']
                .map(rol => `
                            <tr>
                                <td class="border p-2">${rol}</td>
                                <td class="border p-2"><input type="checkbox"></td>
                                <td class="border p-2"><input type="checkbox"></td>
                                <td class="border p-2"><input type="checkbox"></td>
                            </tr>
                        `).join('')}
                </tbody>
            </table>`;
    }
}



function openModal(editIndex = null) {
    document.getElementById('modal').classList.remove('hidden');
    if (editIndex !== null) {
        const usuario = usuarios[editIndex];
        document.getElementById('identificacion').value = usuario.identificacion;
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('ficha').value = usuario.ficha;
        document.getElementById('editingIndex').value = editIndex;
        document.getElementById('modal-title').textContent = "Editar Usuario";
    } else {
        document.getElementById('identificacion').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('ficha').value = "";
        document.getElementById('editingIndex').value = "";
        document.getElementById('modal-title').textContent = "Agregar Usuario";
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function openViewModal(index) {
    const usuario = usuarios[index];
    document.getElementById('view-identificacion').textContent = usuario.identificacion;
    document.getElementById('view-nombre').textContent = usuario.nombre;
    document.getElementById('view-ficha').textContent = usuario.ficha;
    document.getElementById('view-estado').textContent = usuario.estado;
    document.getElementById('view-ultimoIngreso').textContent = usuario.ultimoIngreso;
    document.getElementById('view-modal').classList.remove('hidden');
}

function closeViewModal() {
    document.getElementById('view-modal').classList.add('hidden');
}

function saveUsuario() {
    const identificacion = document.getElementById('identificacion').value;
    const nombre = document.getElementById('nombre').value;
    const ficha = document.getElementById('ficha').value;
    const editIndex = document.getElementById('editingIndex').value;

    if (identificacion && nombre && ficha) {
        if (editIndex) {
            // Actualiza el usuario existente
            usuarios[editIndex] = {
                identificacion,
                nombre,
                ficha,
                estado: usuarios[editIndex].estado, // Mantiene el estado actual
                ultimoIngreso: usuarios[editIndex].ultimoIngreso
            };
        } else {
            // Agrega un nuevo usuario con estado "Activo"
            usuarios.push({
                identificacion,
                nombre,
                ficha,
                estado: "Activo", // Asegúrate de que el estado se defina aquí
                ultimoIngreso: new Date().toLocaleDateString()
            });
        }
        closeModal();
        renderUsuarios();
    }
}

function toggleEstado(index) {
    usuarios[index].estado = usuarios[index].estado === "Activo" ? "Inactivo" : "Activo";
    renderUsuarios();
}

function deleteUsuario(index) {
    usuarios.splice(index, 1);
    renderUsuarios();
}

function renderUsuarios() {
    const tbody = document.getElementById('usuarios-table');
    tbody.innerHTML = usuarios.map((usuario, index) => `
        <tr>
            <td class="border p-2">${usuario.identificacion}</td>
            <td class="border p-2">${usuario.nombre}</td>
            <td class="border p-2">${usuario.ficha}</td>
            <td class="border p-2 text-center">
                <button onclick="toggleEstado(${index})" class="px-2 py-1 rounded text-white ${usuario.estado === "Activo" ? "bg-green-500" : "bg-red-500"}">
                    ${usuario.estado}
                </button>
            </td>
            <td class="border p-2 text-center">${usuario.ultimoIngreso}</td>
            <td class="border p-2 text-center">
                <button onclick="openViewModal(${index})" class="text-blue-500 hover:text-blue-700 mx-1"><i class="fas fa-eye"></i></button>
                <button onclick="openModal(${index})" class="text-yellow-500 hover:text-yellow-700 mx-1"><i class="fas fa-edit"></i></button>
                <button onclick="deleteUsuario(${index})" class="text-red-500 hover:text-red-700 mx-1"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}



function filtrarUsuarios() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#usuarios-table tr");
    rows.forEach(row => {
        let texto = row.textContent.toLowerCase();
        row.style.display = texto.includes(input) ? "" : "none";
    });
}

function validarFormulario() {
    // Obtener los valores ingresados por el usuario
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar si los campos están vacíos
    if (!usuario || !contrasena) {
        alert('Por favor, complete todos los campos.');
        return; // Detener la ejecución si hay campos vacíos
    }

    // Definir los usuarios y contraseñas válidos
    const usuariosValidos = {
        'cristian': 'cristian123',
        'vera': 'vera123',
        'millan': 'millan123',
        'instructor': 'instructor123',
        'sena': 'sena123',
    };

    // Validar si el usuario y la contraseña son correctos
    if (usuariosValidos[usuario] === contrasena) {
        // Redirigir a la página principal si la validación es exitosa
        window.location.href = 'index.html';
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert('Contraseña incorrecta');
    }


    // Validar si el usuario y la contraseña son correctos
    if (usuariosValidos[usuario] === contrasena) {
        // Redirigir a la página principal si la validación es exitosa
        window.location.href = 'index.html';
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert('Contraseña incorrecta');
    }
}

// Asignar la función de validación al evento de envío del formulario
document.querySelector('form').onsubmit = function (event) {
    event.preventDefault(); // Prevenir el envío del formulario
    validarFormulario(); // Llamar a la función de validación
};