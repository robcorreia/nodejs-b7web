import express, { Request, Response} from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})

app.get('/noticia/:slug', (req: Request, res: Response) => {
  const slug:string = req.params.slug;
  res.send(`Notícia: ${slug}`)
})

app.get('/voo/:origem-:destino', (req: Request, res: Response) => {
  const origem = req.params.origem;
  const destino = req.params.destino
  res.send(`Voo de ${origem.toUpperCase()} para ${destino.toUpperCase()}`)
})

// site.com/voo/gru-rec

app.listen(3000)

