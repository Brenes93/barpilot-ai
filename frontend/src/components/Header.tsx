type HeaderProps = {
            titulo: string;
            subtitulo?: string;
            descripcion?: string;
          };
          
function Header(props: HeaderProps) {

  return (
      
      <section id="center">
        <div>
          <h1>{props.titulo}</h1>
          {props.subtitulo && <p>{props.subtitulo}</p>}
          {props.descripcion && <p>{props.descripcion}</p>}
        </div>
      </section>
  )
}

export default Header
