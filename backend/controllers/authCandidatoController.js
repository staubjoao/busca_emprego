const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.header('authorization-token')

  if (!token)
    return res.status(400).send({
      error: true,
      message: 'Você precisa estar logado para acessar está página!'
    })

  try {
    const usuarioVerificado = jwt.verify(
      token,
      process.env.TOKEN_SECRET_CANDIDATO
    )
    req.user = usuarioVerificado
    next()
  } catch {
    res.status(400).send({
      error: true,
      message: 'Acesso negado...'
    })
  }
}
