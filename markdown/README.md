<!--
para hacer los encabezados de primer nivel se poner la almohadilla (#)
y para los diferentes encabezados se ponen mas almohadilla hasta el nivel 6
 -->

# Esto es un encabezado de nivel 1

## Esto es un encabezado de nivel 2

### Esto es un encabezado de nivel 3

#### Esto es un encabezado de nivel 4

##### Esto es un encabezado de nivel 5

###### Esto es un encabezado de nivel 6

<!--
los párrafos se escriben en una línea, si hay un ente se convertirá en otro párrafo independiente
 -->
<!-- para poner cursiva se encierra la palabra entre guiones bajos (_palabra_) -->

_Parrafo_ 1: esto es un parrafo

<!-- para aplicar negrita se encierra la palabra con doble asterisco (**palabra**) -->

**Parrafo** 2: esto es otro parrafo

<!-- se puede combinar tanto la negrita como la cursiva -->

**_esto es combinando la negrita y la cursiva_**

<!-- para los enlaces se ponen corchetes donve va el texto y parentesis donde va la ruta [texto](ruta) se pueden enlazar archivos -->

[porfolio José Esteves](https://josefestevesp.github.io/josefestevesp/)

[enlace a un archivo](index.html)

<!-- para hacer anclajes q te lleven a un ponto del documento se puede enlasa con los encabezados q se comportan como anclajes y si el encabezado posee un separador se sustitulle ene el enlace con un guion -->

[encabesado 1](#esto-es-un-encabezado-de-nivel-1)

<!-- para las imagenes es la misma estructura de los enlaces pero poniendo un simbolo de exclacmacional principio -->

![esta es una imagen de la poke api que ise](https://josefestevesp.github.io/poke/assets/src/img/imgLink.jpg)

![esta es una imagen de mi gatito](1.jpg)

<!-- para hacer una divicion se usa 3 giones (---)
 seguidos esto dibuja una liea orizontal, esto cuenta como un hr q es para dividir el contenido referente al tema -->

---

esto es texto 1

---

esto es texto 2

<!-- para las listas -->
<!-- para la lista ordenada solo se pone el numero mas un punto (1.) se puede poner los numeros pero si solo pones el 1. por cada item es md lo ara automatico -->

1. gato 1
2. gato 2
3. gato 3
4. gato 4
5. gato 5
<!-- es lo mismo de arriva -->
6. gato 1
7. gato 2
8. gato 3
9. gato 4
10. gato 5

<!-- para la lista desordenada se pone el asterisco o el guion (* o -) -->
<!-- para la sub lista se tiene que indentar el contenio y se formara la sub lista y esa sub lista puede tener mas sub lista dentro solo indetando su contenido -->

- gato 1
  - gatito 1
  - gatito 2
- gato 2
- gato 3
- gato 4
- gato 5
<!-- es lo mismo de arriva -->

* gato 1
  - gatito 1
  - gatoto 2
* gato 2
* gato 3
* gato 4
* gato 5

<!-- para trabajosr con la citas su usa el simbolo de maryor (>) esto es una cita en linie -->

> Siempre tienes opcion de no tener opinión - Marco Aurelio

<!-- para las sitas en bloques se usa muteples simbolos de mayor (>) por cada linea -->

> Todo lo que escuchamos es una opinión, no un echo.
>
> Todo lo que vemos es una perspectiva, no la verdad.
>
> Marco Aurelio

<!--para trabajosr con las tablas se usa le simbolo de or de js (|) segido de un espacio y el texto y pra q se forme la tabal se pone ma misma cantida de renblenes pero relleno de giones  -->

| nombre | edad |
| ------ | ---- |
| jose   | 23   |
| ale    | 22   |

<!-- para colocar codigo es con con las comillas invertidas (`codigo e linea`) se puede colocar codigo en linea o en bloque y para codigo en bloque es con 3 seguidas (``` codigo en bloque ```) si al inicio ponemos el tipo de lenguaje se colorea-->

Lorem ipsum dolor sit amet consectetur adipisicing elit. `let y conts` Assumenda impedit quos aspernatur est earum numquam iste tempora libero quis expedita.

```js
const suma = ({ a = 0, b = 0 }) => a + b;
```

```html
<p class="text">html</p>
```
<!-- tambien se puede escribir codigo html y lo va a intelpretar -->
<h1>esto es un titulo con las etiqueta html h1 </h1>
<!-- para escapar los cararcteres se usa la barra inbertida -->

de esat manera se pone negritas y cursiva en md

\*\*jose\*\* y \_gato\_