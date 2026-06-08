type HeaderProps = {
            titulo: string
          };
          
function Header(props: HeaderProps) {

  return (
      
      <section id="center">
        <div>
          <h1>{props.titulo}</h1>
          <p>Mi primer proyecto Full Stack para aprender programación.</p>
        </div>
      </section>
  )
}

export default Header
