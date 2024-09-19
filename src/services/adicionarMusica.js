import { adicionarMusica } from "../repository/musicaRepository.js";

export default async function adicionarMusicaService(musicaObj) {
  let idGerado = await adicionarMusica(musicaObj)
  return idGerado;
}