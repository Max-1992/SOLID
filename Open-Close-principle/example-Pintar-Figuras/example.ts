/*
    Tenemos una clase pintor cuya responsabilidad es pintar figuras.

    Se esperan que vayan apareciendo en el tiempo nuevo tipos de figuras. Por ello se crear una clase principal llamada figura y sub-clases para todos los tipos de figuras que se deban considerar.

    Cada figura requiere su propio algoridmo para ser pintada no nos alcanza con una unica implementación. Es po ello que por cada figura requeriremos modificar el constructor del método pintor y añadir un nuevo metodo pintarFigura para extender la funcionalidad de pintor.

    Podemos observar que esto no cumple con el principio de Open/Close ya que para poder extender la funcionalidad de la clase pintor debo modificar la misma, agregando nuevos metodos y refactorizando su logica actual.

    Tarea: 
    Debemos crear la clase Figura como una interfaz que implemente el método pintar.
    Los tipos de figura deberán implementar la intefaz de figura.
    La clase pintor debe llamar al método pintar de cada figura.
*/

// Clase principal.
class Figura {}

// Sub-clases.
class Cuadrado extends Figura {}
class Circulo extends Figura {}
class Triangulo extends Figura {}

class Pintor {

    constructor(private figuras: Figura[]) {

        this.figuras.forEach(figura => {
            if(figura instanceof Cuadrado) {
                this.pintaCuadrado(figura)
            }

            if(figura instanceof Circulo) {
                this.pintaCirculo(figura)
            }

            if(figura instanceof Triangulo) {
                this.pintarTriangulo(figura)
            }
        });

    }

    public pintaCuadrado (cuadrado: Cuadrado) {
        // ....
    }

    public pintaCirculo (circulo: Circulo) {
        // ....
    }

    public pintarTriangulo (triangulo: Triangulo) {
        // ....
    }
}