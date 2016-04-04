
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Bienvenidos al rediseño de la sección cine de www.entradas.com 

Este el repositorio que utilizaremos para todo el código de la aplicación web, se puede acceder a el desde [aquí](git@github.com:adrigrillo/cine.git) (recomendado http) o desde [aquí](https://github.com/adrigrillo/cine.git) (mediante ssh). __Se deberá pedir permiso antes__ para modificar los datos.

## Requisitos

En la sección _Tecnologías_ de Trello están todas las cuentas utilizadas con el usuario común con el que nos hemos registrado, aunque lo normal es que no tengáis que usar la mayoría. Por otro lado:

* Se necesitará una cuenta de GitHub para modificar el código de la web. Podéis poner el __nombre de usuario__ de la cuenta por Telegram o dejar un comentario en el apartado del Trello.
* Es recomendable una cuenta de www.c9.io para probar los avances realizados. Si os la hacéis poner el __nombre de usuario__ de la cuenta por Telegram o dejar un comentario en el apartado del Trello.
* Para back sería recomendable tener a mano la cuenta de www.heroku.com para realizar nuevas builds de la aplicación si así lo requiere alguno.

## Estructura

La aplicación estará organizada de la siguiente forma:

    app/
        __init__.py
        views.py
        models.py
        forms.py
        static/ ** Aquí irán el css, imágenes, etc **
        templates/ ** Aquí iran los html de la aplicación **
    data/
    requirements.txt
    Procfile
    runtime.txt
    config.py
    run.py

## Funcionamiento
El servidor en www.c9.io tiene control mediante git, conectado al repositorio anteriormente comentado. En cada nueva conexión al servidor se deberá hacer __pull__ para comprobar que no hay nuevos cambios. Por otra parte, antes de desconectar del servidor, se deberá hacer __push__ para evitar pérdidas de datos.

En ambos caso, se preguntará por el usuario de GitLab y la contraseña. En estos poner vuestro usuario y contraseña de usuario, funciona correctamente.

Recomiendo que los archivos HTML y demás los modifiquéis y vayáis probando de forma local o en una nueva rama del Git hasta que vayamos conectando mejor la base de datos y creando las clases de la aplicación. Esto es para evitar la sobrecarga del servidor. 


