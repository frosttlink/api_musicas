import { deletarMusica } from "../repository/musicaRepository.js";

export default async function deletarMusicaService(id) {
  let linhasAfetadas = await deletarMusica(id)

  if(linhasAfetadas == 0) 
    throw new Error("Num foi afetado naum")
}
