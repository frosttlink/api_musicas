import { Router } from "express";
import adicionarMusicaService from "../services/adicionarMusica.js";
import alterarMusicaService from "../services/alterarMusica.js";
import deletarMusicaService from "../services/deletarMusica.js";

const endpoints = Router();

endpoints.post('/musica', async (req, resp) => {
  try {
    let musicaObj = req.body
    let idGerado = await adicionarMusicaService(musicaObj)

    resp.send({
      novoId: idGerado
    })
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

export default endpoints;

endpoints.put('/musica/:id', async (req, resp) => {
  try {
    let id = req.params.id
    let musicaObj = req.body

    await alterarMusicaService(id, musicaObj)

    resp.status(204).send()
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('musica/:id', async (req, resp) => {
  try {
    let id = req.params.id

    await deletarMusicaService(id)
    resp.status(204).message
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})