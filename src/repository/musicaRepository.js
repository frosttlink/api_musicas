import con from "./connection.js";

export async function adicionarMusica(musica) {
  let comando = `
    insert into tb_musica (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma)
    values (?, ?, ?, ?, ?, ?, ?, ?);
  `

  let registro = await
    con.query(comando,
      [musica.nome,
      musica.artista,
      musica.link,
      musica.lancamento,
      musica.visualizacoes,
      musica.tempo,
      musica.destaque,
      musica.idioma])

  let info = registro[0]
  let idGerado = info.insertId

  return idGerado;
};

export async function alterarMusica(id, musica) {
  let comando = `
    update tb_musica
    set nm_musica = ?, 
      ds_artista = ?, 
      url_musica = ?, 
      dt_lancamento = ?, 
      qtd_visualizacoes = ?, 
      hr_duracao = ?,
      bt_destaque = ?, 
      ds_idioma = ?
    where id_musica = ?
  `

  let resposta =
    await con.query(
      comando, [id, musica.nome,
      musica.artista,
      musica.link,
      musica.lancamento,
      musica.visualizacoes,
      musica.tempo,
      musica.destaque,
      musica.idioma])

  let linhasAfetadas = resposta[0].affectedRows

  return linhasAfetadas;
}

export async function deletarMusica(id) {
  let comando = ` 
    delete 
    from tb_musica
    where id_musica  = ?;
  `
  let resposta = con.query(comando, [id])
  let linhasAfetadas = resposta[0].affectedRows
  
  return linhasAfetadas;
}