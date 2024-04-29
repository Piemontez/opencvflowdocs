import React from "react";
import { FooterStyled, FooterGridStyled, A, P } from "./styles";

const h2Style = { color: "#FFF", cursor: 'pointer' };
const h3Style = { color: "#FFF" };

export default function Footer() {
  return (
    <FooterStyled>
      <div style={{ margin: "0 auto", maxWidth: "1400px" }}>
        <FooterGridStyled>
          <div style={{ flex: 1 }}>
            <h2
              style={h2Style}
              onClick={() =>
                window.open("https://www.linkedin.com/in/piemontez/")
              }
            >
              By Piemontez
            </h2>
            <P>OpenCV-Flow possui código livre</P>
          </div>
          <div style={{ flex: 2 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <h3 style={h3Style}>Documentação</h3>
                <p>
                  <A href="/pt/installation">Instalação</A>
                </p>
                <p>
                  <A href="/pt/components">Componentes</A>
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={h3Style}>Visão Computacional</h3>
                <p>
                  <A href="https://visaocomputacional.com.br/">Blog</A>
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={h3Style}>Thalamus</h3>
                <p>
                  <A href="http://thalamus.digital/">About</A>
                </p>
                <p>
                  <A href="https://thalamus.digital/team/">Team</A>
                </p>
              </div>
            </div>
          </div>
        </FooterGridStyled>
      </div>
    </FooterStyled>
  );
}
