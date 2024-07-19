/*Qsomos*/
import QSomos1 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_1.jpg";
import QSomos2 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_2.jpg";
import QSomos3 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_3.jpg";
import QSomos4 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_4.jpg";
import QSomos5 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_5.jpg";
import QSomos6 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_6.jpg";
import QSomos7 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_7.jpg";
import QSomos8 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_8.jpg";
import QSomos9 from "../../assets/stuf/main/us/quienes_somos/imagen_quienes_somos_9.jpg";
/*Qsomos*/

/*DEstamos*/
import DEstamos1 from "../../assets/stuf/main/us/donde_estamos/imagen_donde_estamos_1.jpg";
import DEstamos2 from "../../assets/stuf/main/us/donde_estamos/imagen_donde_estamos_2.jpg";
import DEstamos3 from "../../assets/stuf/main/us/donde_estamos/imagen_donde_estamos_3.jpg";
/*DEstamos*/

import adelante from "../../assets/stuf/iconos/adelante.png";
import atras from "../../assets/stuf/iconos/atras.png";
export { adelante, atras };
export let Us = [
  {
    texto:
      "Somos un pequeño Estudio especializado en la realización de efectos visuales, edición y colorimetría, diseño comunicacional, mographic y animación en 3d para proyectos audiovisuales, gráficos, artísticos y comunicacionales.",
    titulo: "QUIÉNES SOMOS",
    urlImagen: [
      QSomos1,
      QSomos2,
      QSomos3,
      QSomos4,
      QSomos5,
      QSomos6,
      QSomos7,
      QSomos8,
      QSomos9,
    ],
    id: 1,
  },
  {
    texto:
      "Nuestro Estudio se encuentra ubicado en un sencillo apartamento enclavado en la céntrica barriada del Vedado habanero. Beneficiados por el fácil acceso a la zona y su proximidad a las ávenidas Línea y 23, donde se desarrolla, principalmente, la vida cultural y social de la ciudad.",
    titulo: "DÓNDE ESTAMOS",
    urlImagen: [DEstamos1, DEstamos2, DEstamos3],
    id: 2,
  },
  {
    texto:
      "Nos encontramos en el proceso de realización de la post producción de largomentrajes con importantes directores de cine cubanos. Además del trabajo de diseños gráficos y animaciones para varios programas de la televisión nacional.",
    titulo: "EN QUÉ TRABAJAMOS",
    urlImagen: [DEstamos1, DEstamos2, DEstamos3],
    id: 3,
  },
];
