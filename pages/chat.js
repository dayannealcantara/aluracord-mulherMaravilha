import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDg2OTA3MywiZXhwIjoxOTU2NDQ1MDczfQ.343ibq7UYFPDdyfsfGmEqUma01RW7P7KC9U2MDAGSkI';

const SUPABASE_URL = 'https://kysxypdmtxjlkdysdlas.supabase.co';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default function PaginaChat() {
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  React.useEffect(() =>{
      supabaseClient
      .from('mensagem')
      .select('*')
      .order('id', {ascending:false})
      .then(({data}) =>{
          console.log('Dados da consulta:', data);
          setListaDeMensagens(data);
      });
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: "Wellington Nascimento",
      texto: novaMensagem,
    };
    setListaDeMensagens([mensagem, ...listaDeMensagens]);
    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage:
          "url(https://miro.medium.com/focal/1200/675/49/29/1*rI8SRQ5rPrx9TVVb5zVerQ.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundImage:
            "url(https://miro.medium.com/focal/1200/675/49/29/1*rI8SRQ5rPrx9TVVb5zVerQ.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          maxWidth: "95%",
          maxHeight: "200vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 100%)",
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}
function MessageList(props) {
  console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",

        display: "flex",

        flexDirection: "column-reverse",

        flex: 1,

        color: appConfig.theme.colors.neutrals["000"],

        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",

              padding: "6px",

              marginBottom: "12px",

              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",

                  height: "20px",

                  borderRadius: "50%",

                  display: "inline-block",

                  marginRight: "8px",
                }}
                src={`https://github.com/wellingtonnascimento.png`}
              />

              <Text tag="strong">{mensagem.de}</Text>

              <Text
                styleSheet={{
                  fontSize: "10px",

                  marginLeft: "8px",

                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>

            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
