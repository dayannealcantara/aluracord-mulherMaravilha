function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}

function Titulo(){
    return(
        <h1>Boas vindas de volta!</h1>
    )
}


function HomePage() {
    return (
    <div>
        <Titulo>Boas vindas de volta!</Titulo>
        <h2>Discord- Alura Matrix</h2>
    </div>
    )
}

export default HomePage