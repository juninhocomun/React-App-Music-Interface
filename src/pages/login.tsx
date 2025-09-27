import "./index.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../layout/login";
import LandingPreview from "../layout/landingPreview";
export default function Login() {
  const navigate = useNavigate();
  function redirection() {
    navigate("/");
  }
  return (
    <div className="login_container generic_wrapper">
      <LandingPreview />
      <LoginLayout
        title="Como podemos lhe chamar?"
        placeholder="Seu nome/apelido aqui"
        description="muito legal, não acha? isso aqui deveria servir para ouvir musica e reproduzir midias e esse campo deveria ter informação relevante, mas sabe como é né, em fase de desenvolvimento, o melhor que pode fazer é pedir seu nome"
        anyFunctionEnter={redirection}
      />
    </div>
  );
}
