import envYaml from 'env-yaml'
import { makeApp } from './main/AppFactory'

envYaml.config({ path: 'env.dev.yml' })

const PORT = process.env.PORT
const app = makeApp().app

const server = app.listen(PORT, () => {
  console.log(
    '  Application is running at http://localhost:%d in %s mode',
    PORT,
    app.get('env')
  )
})

export default server
