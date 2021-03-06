import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";




function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["000"]};
            font-size: 30px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

export default function PaginaInicial() {
  // const username = "dayannealcantara";
  const [username, setUsername] = React.useState('dayannealcantara');
  const roteamento = useRouter();

  return (
    <>
     
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://miro.medium.com/focal/1200/675/49/29/1*rI8SRQ5rPrx9TVVb5zVerQ.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "10px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 100%)",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event){
              event.preventDefault();
             roteamento.push('/chat');
              
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "40px",
                color: appConfig.theme.colors.neutrals["000"],
              }}
            >
             
            </Text>
            
            {/* <input type="text"
            value={username}
            onChange={function handler(event) {
              console.log('usuario digitou', event.target.value);
              const valor= event.target.value;
              setUsername(valor);            

            }}
            /> */}
            <TextField
            value={username}
            onChange={function handler(event) {
              console.log('usuario digitou', event.target.value);
              const valor= event.target.value;
              setUsername(valor); 
            }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                // contrastColor: appConfig.theme.colors.neutrals["000"],
                // mainColor: appConfig.theme.colors.primary[500],
                // mainColorLight: appConfig.theme.colors.primary[300],
                mainColorStrong: appConfig.theme.colors.neutrals[500],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
