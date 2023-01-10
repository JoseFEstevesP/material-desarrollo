const formularioConten = document.querySelectorAll(".formulario__Conteform");
const formularioEnlace = document.querySelectorAll(".formulario__enlace");
const formContenPrincipal = document.getElementById("formContenPrincipal");
const formularioContenPrincipal = document.getElementById("formulario");
formularioEnlace.forEach((iten) => {
  iten.addEventListener("click", () => {
    formContenPrincipal.classList.toggle("formulario__conten--registroContenT");
    formularioConten.forEach((iten2) => {
      iten2.classList.toggle("formulario__Conteform--activo");
    });
  });
});
// modal inicio seccion
const closeInicio = document.getElementById("closeInicio");
closeInicio.addEventListener("click", () => {
  formularioContenPrincipal.classList.toggle("formulario--openModal");
});
// para ver la pasword
const passInicio = document.getElementById("passInicio");
const eyePassInicio = document.getElementById("eyePassInicio");
const eyeIconInico = document.getElementById("eyeIconInico");
eyePassInicio.addEventListener("click", () => {
  if (passInicio.getAttribute("type") == "password") {
    passInicio.setAttribute("type", "text");
    eyeIconInico.classList.remove("fa-eye");
    eyeIconInico.classList.add("fa-eye-slash");
  } else {
    passInicio.setAttribute("type", "password");
    eyeIconInico.classList.remove("fa-eye-slash");
    eyeIconInico.classList.add("fa-eye");
  }
});
const passRegistro = document.getElementById("passRegistro");
const eyePassRegistro = document.getElementById("eyePassRegistro");
const eyeIconRegistro = document.getElementById("eyeIconRegistro");
eyePassRegistro.addEventListener("click", () => {
  if (passRegistro.getAttribute("type") == "password") {
    passRegistro.setAttribute("type", "text");
    eyeIconRegistro.classList.remove("fa-eye");
    eyeIconRegistro.classList.add("fa-eye-slash");
  } else {
    passRegistro.setAttribute("type", "password");
    eyeIconRegistro.classList.remove("fa-eye-slash");
    eyeIconRegistro.classList.add("fa-eye");
  }
});
// Validar
const formContenInicio = document.getElementById("formContenInicio");
const formContenRegisto = document.getElementById("formContenRegisto");
const inputsInicio = document.querySelectorAll("#formContenInicio input");
const inputsRegistro = document.querySelectorAll("#formContenRegisto input");
const infoContenInicio = document.getElementById("infoContenInicio");
const infoContenRegistro = document.getElementById("infoContenRegistro");
const infoTextInicio = document.getElementById("infoTextInicio");
const infoTextRegistro = document.getElementById("infoTextRegistro");
const usuarioCon = document.querySelectorAll(".usuarioCon");
const claveCon = document.querySelectorAll(".claveCon");
const nombCon = document.getElementById("nombCon");
const CIcon = document.getElementById("CIcon");
const emailCon = document.getElementById("emailCon");
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  clave: /^.{4,16}$/,
  nombre: /^[a-zA-ZÁ-ÿ\s]{3,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  CI: /^\d{8,10}$/,
};
let canpos = {
  usuario: false,
  clave: false,
  nombre: false,
  correo: false,
  CI: false,
};

const validarFormu = (e) => {
  switch (e.target.name) {
    case "usuario":
      usuarioCon.forEach((usuarioCo) => {
        validarCampos(expresiones.usuario, e.target, "usuario", usuarioCo);
      });
      break;
    case "clave":
      claveCon.forEach((claveCo) => {
        validarCampos(expresiones.clave, e.target, "clave", claveCo);
      });
      break;
    case "nombre":
      validarCampos(expresiones.nombre, e.target, "nombre", nombCon);
      break;
    case "correo":
      validarCampos(expresiones.correo, e.target, "correo", emailCon);
      break;
    case "CI":
      validarCampos(expresiones.CI, e.target, "CI", CIcon);
      break;
  }
};
const validarCampos = (expresion, input, canpo, conCampo) => {
  if (expresion.test(input.value)) {
    conCampo.classList.remove("formConten__contIimput--validatorInpud");
    conCampo.classList.remove("formConten__iconConten--iconValidator");
    conCampo
      .querySelector(".infoContenforInput")
      .classList.remove("infoContenforInput--leyenda_active");
    canpos[canpo] = true;
  } else {
    conCampo.classList.add("formConten__contIimput--validatorInpud");
    conCampo.classList.add("formConten__iconConten--iconValidator");
    conCampo
      .querySelector(".infoContenforInput")
      .classList.add("infoContenforInput--leyenda_active");
    canpos[canpo] = false;
  }
  if (input.value == "") {
    conCampo.classList.remove("formConten__contIimput--validatorInpud");
    conCampo.classList.remove("formConten__iconConten--iconValidator");
    conCampo
      .querySelector(".infoContenforInput")
      .classList.remove("infoContenforInput--leyenda_active");
    canpos[canpo] = false;
  }
};

inputsInicio.forEach((input) => {
  input.addEventListener("keyup", validarFormu);
  input.addEventListener("blur", validarFormu);
});
inputsRegistro.forEach((input) => {
  input.addEventListener("keyup", validarFormu);
  input.addEventListener("blur", validarFormu);
});
formContenInicio.addEventListener("submit", (e) => {
  e.preventDefault();
  if (canpos.usuario && canpos.clave) {
    let request = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    let ajaxUrl = base_url + "/Login/loginUser";
    let formData = new FormData(formulario);
    request.open("POST", ajaxUrl, true);
    request.send(formData);
    console.log(request);
  } else {
    infoContenInicio.classList.add("info--error");
    infoTextInicio.innerHTML =
      "<b>Error:</b> Todos los campos son abligatorios";
  }
});
formContenRegisto.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    canpos.usuario &&
    canpos.clave &&
    canpos.nombre &&
    canpos.CI &&
    canpos.correo
  ) {
  } else {
    infoContenRegistro.classList.add("info--error");
    infoTextRegistro.innerHTML =
      "<b>Error:</b> Todos los campos son abligatorios";
  }
});
