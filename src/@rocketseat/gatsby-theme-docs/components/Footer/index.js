import React from "react";
import { Container } from "../Layout/styles";
import { FooterStyled } from "./styles";

const h2Style = { color: "#FFF" };
const h3Style = { color: "#FFF" };

export default function Footer({}) {
  return (
    <FooterStyled>
      <div style={{ margin: "0 auto", maxWidth: "1400px" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
          <a href="https://www.linkedin.com/in/piemontez/" target="_blank">
            <h2 style={h2Style}>
                By Piemontez
            </h2>
            </a>
            <p>OpenCV-Flow possui código livre</p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <h3 style={h3Style}>Documentação</h3>
                <p>
                  <a href="/pt/installation">Instalação</a>
                </p>
                <p>
                  <a href="/pt/components">Componentes</a>
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={h3Style}>Visão Computacional</h3>
                <p>
                  <a href="https://visaocomputacional.com.br/">Blog</a>
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={h3Style}>Thalamus</h3>
                <p>
                  <a href="http://thalamus.digital/">About</a>
                </p>
                <p>
                  <a href="https://thalamus.digital/team/">Team</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
