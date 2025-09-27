type LoginProps = {
  title: string;
  description: string;
  placeholder: string;
  anyFunctionEnter: () => void;
};
import "./index.css";
import { useState } from "react";
export default function LoginLayout({
  title,
  description,
  placeholder,
  anyFunctionEnter,
}: LoginProps) {
  const [sizeAlert, setSizeAlert] = useState(false);
  function sizeNotify(show: boolean) {
    console.log("aa");
    setSizeAlert(show);
    setTimeout(() => {
      setSizeAlert(false);
    }, 10000);
  }
  function enterVerifyByPress(
    event: React.KeyboardEvent<HTMLInputElement>,
    callback: () => void
  ) {
    if (event.key === "Enter") {
      if (event.currentTarget.value) {
        callback();
      } else if (!event.currentTarget.value) {
        sizeNotify(true);
      }
    }
  }
  function enterVerifyContinuos(e: React.ChangeEvent<HTMLInputElement>){
    if(e.currentTarget.value){
      sizeNotify(false);
    }
  }
  return (
    <div className="login">
      <h1>{title}</h1>
      <input
        type="text"
        placeholder={placeholder}
        onKeyDown={(e) => enterVerifyByPress(e, anyFunctionEnter)}
        onChange={(e) => enterVerifyContinuos(e)}
      />
      {sizeAlert ? (
        <span className="size_alert">muito curto, igual minha dignidade</span>
      ) : undefined}
      <span className="info truncate">{description}</span>
    </div>
  );
}
