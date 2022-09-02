    document.querySelector('#calcular').addEventListener('click', () =>{
        const n1 = parseInt(document.querySelector('#n1').value);
        const n2 = parseInt(document.querySelector('#n2').value);
        const op = document.querySelector('#op').value;
        let r;
        if(op == '+'){
            r = n1 + n2;
        }else if( op == '-'){
            r = n1 - n2;
        }else if( op == '*'){
            r = n1 * n2;
        }else if ( op == '/'){
            r = n1 / n2;
        }
        console.log(r)
    });

    window.alert("Bienvenido a nuestro sitio web");
    let name = prompt('Cual es tu nombre?');
    let age = prompt('Cual es tu edad?');