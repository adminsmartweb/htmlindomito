// Lista de enlaces de imágenes
var imagenes = [
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6558.JPG?alt=media&token=cf6db3df-d05c-4e22-b8f5-ccda2aebfd55',
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6569.JPG?alt=media&token=cae63775-ba43-435e-9088-7e68e799d554',
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6571.JPG?alt=media&token=ed7f127e-dd60-4d3d-9c1c-64ae0dcd3e2f',
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6566.JPG?alt=media&token=30b9132c-9390-442e-af4e-9daf3e001b5a',
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6576.JPG?alt=media&token=c65e10ad-5676-42b3-85b4-8077921c7768',
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6578.JPG?alt=media&token=b2ec2547-220a-4459-92eb-1a90bcc79fc1',
    'https://firebasestorage.googleapis.com/v0/b/cuota-admin-2e674.appspot.com/o/img%2FIMG_6579.JPG?alt=media&token=90f6e6d0-b65f-44ac-b0dd-8617253fbcbe',
    // Agrega más enlaces según sea necesario
];

// Función para obtener un número aleatorio entre 0 y la longitud de la lista de imágenes
function obtenerNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

// Obtener el elemento del encabezado
var encabezado = document.getElementById('header');

// Obtener un número aleatorio y asignar la imagen de fondo al encabezado
var numeroAleatorio = obtenerNumeroAleatorio(imagenes.length);
encabezado.style.backgroundImage = 'url(' + imagenes[numeroAleatorio] + ')';
