import axios from "axios";

export default async function Login (user, pass){
  const preFilteredResponse = axios.post(
    'https://api.tst2.escolaapp.com/api/v1/Acesso/login',
    {
      login: user,
      senha: pass,
      nomeApp: "br.com.eem.teste",
      versaoApp: "10",
      versaoSO: "10",
      idDispositivo: "teste-mobile"
    },
    { withCredentials: true }
  );
  return preFilteredResponse;
}