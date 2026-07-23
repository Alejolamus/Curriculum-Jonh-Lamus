import { IconMail, IconPhone, IconLocation, IconExternalLink, IconLinkedIn,  IconGitHub} from '../components/icons';
import styles from './PerfilPage.module.css';

const perfilProfesional = [
  'Desarrollador de Software Junior con formación en Análisis y Desarrollo de Software, orientado al desarrollo de aplicaciones web utilizando C#, ASP.NET Web API, Angular, TypeScript y MySQL.',

  'Cuento con conocimientos en análisis de requerimientos, modelado UML, programación orientada a objetos, diseño e implementación de APIs REST y gestión de bases de datos relacionales.',

  'Me caracterizo por mi capacidad de aprendizaje continuo, pensamiento analítico y compromiso con el desarrollo de soluciones de software de calidad, buscando fortalecer mis habilidades técnicas y crecer profesionalmente como desarrollador.'
];

const fortalezas = [
  'Desarrollo de aplicaciones web utilizando C#, ASP.NET Web API y Angular.',

  'Conocimientos en análisis de requerimientos, modelado UML y programación orientada a objetos.',

  'Diseño e implementación de APIs REST con autenticación mediante JWT.',

  'Manejo de bases de datos relacionales utilizando MySQL y Entity Framework.',

  'Uso de Git y GitHub para el control de versiones y la gestión de proyectos.',

  'Capacidad de aprendizaje continuo, resolución de problemas y adaptación a nuevas tecnologías.'
];

const experiencias = [
  {
    periodo: '2026 – Actualidad',
    empresa: 'Proyecto Personal · NBank Credit',
    items: [
      'Desarrollé una aplicación web para la simulación y gestión de solicitudes de crédito utilizando C#, ASP.NET Web API, Angular y MySQL.',
      'Implementé una API REST con autenticación mediante JWT y control de acceso basado en roles.',
      'Desarrollé la interfaz de usuario con Angular y TypeScript, implementando componentes reutilizables y consumo de servicios HTTP.',
      'Diseñé y administré la base de datos utilizando Entity Framework Code First y MySQL.'
    ],
  },
  {
    periodo: '2025',
    empresa: 'Proyecto Personal · Sistema de Inventario',
    items: [
      'Desarrollé una aplicación de consola en C# para la gestión de inventario de productos.',
      'Implementé funcionalidades para registrar, actualizar, consultar y eliminar productos.',
      'Apliqué Programación Orientada a Objetos mediante el uso de clases, encapsulación y colecciones.',
      'Diseñé la lógica del sistema siguiendo el análisis de requerimientos y una estructura modular para facilitar el mantenimiento del código.',
      'Validé la entrada de datos y optimicé el flujo de trabajo para mejorar la experiencia del usuario en la consola.'
    ],
  },
  {
    periodo: '2025',
    empresa: 'Proyecto Personal · Aplicación de Ahorro e Inversión',
    items: [
      'Desarrollé una aplicación utilizando Python para la administración de ahorros e inversiones.',
      'Implementé persistencia de datos mediante SQLite para almacenar la información financiera.',
      'Diseñé módulos para la gestión de monedas, CDT, usuarios y consultas.',
      'Apliqué principios de programación orientada a objetos y organización modular del código para facilitar su escalabilidad.'
    ],
  },
];

const formacionAcademica = [
  {
    periodo: 'Finalizado el 30 de noviembre de 2013',
    titulo: 'Bachiller Académico',
    institucion: 'Liceo Moderno Celestin Freinet',
  },
  {
    periodo: '2025 – Actualidad',
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    institucion: 'SENA',
  },
];

const competencias = [
  'C#',
  'ASP.NET Web API',
  'Angular',
  'TypeScript',
  'Python',
  'MySQL',
  'SQL',
  'Entity Framework',
  'Git',
  'GitHub',
  'REST API',
  'JWT',
  'Programación Orientada a Objetos (POO)',
  'Análisis de Requerimientos',
  'Modelado UML',
  'HTML5',
  'CSS3',
  'Visual Studio',
  'Visual Studio Code',
  'Swagger'
];

export default function PerfilPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} id="contacto">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.heroRole}>Desarrollador de Software Junior</p>
            <h1 className={styles.heroName}>Jonh Alejadro Lamus Garcia</h1>
            <p className={styles.heroTagline}>C# · ASP.NET Web API · Angular · Python · MySQL</p>
            <div className={styles.contactList}>
              <a href="tel:+573028216323" className={styles.contactItem}>
                <IconPhone size={15} /> +57 3028216323
              </a>
              <a href="mailto:jonhlamus@gmail.com" className={styles.contactItem}>
                <IconMail size={15} /> jonhlamus@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jonh-lamus/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <IconLinkedIn size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/Alejolamus"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <IconGitHub size={15} /> GitHub
              </a>
              <span className={styles.contactItem}>
                <IconLocation size={15} /> Bogotá D.C., Colombia
              </span>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}cv-jonh-lamus.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              Descargar CV <IconExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <div className={styles.grid}>
      <div className={styles.left}>
        {/* Perfil profesional */}
        <section className={styles.section} id="perfil">
          <h2 className={styles.sectionTitle}>Perfil Profesional</h2>

          <div className={styles.perfilText}>
            {perfilProfesional.map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
            ))}
          </div>
        </section>

          {/* Fortalezas */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Fortalezas</h2>
            <ul className={styles.plainList}>
              {fortalezas.map((fortaleza, i) => (
                <li key={i}>{fortaleza}</li>
              ))}
            </ul>
          </section>

          {/* Experiencia profesional */}
          <section className={styles.section} id="experiencia">
            <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
            <div className={styles.timeline}>
              {experiencias.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.periodo}>{exp.periodo}</span>
                    <h3 className={styles.empresa}>{exp.empresa}</h3>
                    <ul className={styles.timelineList}>
                      {exp.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.aside}>
          {/* Formación académica y complementaria */}
          <section className={styles.section} id="formacion">
            <h2 className={styles.sectionTitle}>Formación académica</h2>
            <div className={styles.timeline}>
              {formacionAcademica.map((edu, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.periodo}>{edu.periodo}</span>
                    <h3 className={styles.empresa}>{edu.titulo}</h3>
                    <p className={styles.cargo}>{edu.institucion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competencias */}
          <section className={styles.section} id="competencias">
            <h2 className={styles.sectionTitle}>Competencias</h2>
            <div className={styles.tags}>
              {competencias.map((c) => (
                <span key={c} className={styles.tag}>{c}</span>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Idiomas</h2>
            <div className={styles.tags}>
              <span className={styles.tag}>Español Nativo</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
