import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import adicionarRotas from "./rotas.js"

const PORTA = process.env.PORTA
const servidor = express()

servidor.use(cors())
servidor.use(express.json())

adicionarRotas(servidor)

servidor.listen(PORTA, () => console.log(`Ta subindo na porta ${PORTA}`))