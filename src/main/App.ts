import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import connectPgSimple from 'connect-pg-simple'
import { Logs } from '../util/Logs'

// const PGSession = connectPgSimple(session)

export class App {
  public app: express.Application
  public port: number

  constructor (controllers) {
    this.app = express()
    this.port = parseInt(process.env.PORT, 10)

    this.setupExpress()
    this.setupMiddlewaresStart()
    this.setupLocals()
    // this.setupPassport()
    this.setupMiddlewaresEnd()
    this.setupControllers(controllers)
  }

  private setupExpress (): void {
    this.app.set('port', process.env.PORT)
  }

  private setupLocals (): void {

  }

  private setupControllers (controllers): void {
    controllers.forEach(controller => {
      this.app.use(controller.router)
    })
  }

  private setupMiddlewaresStart (): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cookieParser())

    // this.app.use(`${process.env.BASE_PATH}/static`,
    //   express.static(path.join(__dirname, '../static'), {
    //     maxAge: '7 days',
    //     cacheControl: true
    //   })
    // )

    this.app.use((req: any, res, next) => {
      const log: any = {
        headers: req.headers,
        body: req.body,
        query: req.query,
        url: req.url,
        method: req.method,
        originalUrl: req.originalUrl,
        user: req.user,
        cookies: req.cookies
      }

      Logs.log(JSON.stringify(log, null, 2))

      res.setHeader('X-Powered-By', 'arqsys-api')
      next()
    })

    // this.app.use(session({
    //   name: 'foregon_session',
    //   cookie: {
    //     maxAge: 31536000000,
    //     secure: process.env.ENV.toLowerCase().startsWith('prod'),
    //     httpOnly: true
    //   },
    //   resave: true,
    //   saveUninitialized: true,
    //   secret: process.env.SESSION_SECRET,
    //   store: new PGSession({
    //     pool: undefined,
    //     tableName: 'sessions'
    //   })
    // }))
  }

  private setupMiddlewaresEnd (): void {
    this.app.use(`${process.env.BASE_PATH}/error`,
      (req, res, next) => {
        next(new Error('Test error'))
      }
    )
  }

  // private setupPassport (): void {
  //   this.app.use(passport.initialize())
  //   this.app.use(passport.session())

  //   passport.serializeUser((user: any, done) => {
  //     done(null, user._id)
  //   })

  //   passport.deserializeUser(async (id, done) => {
  //     const usersColl = await MongoHelper.getCollection<IUser>('users')
  //     const user = await usersColl.findOne({ _id: id })
  //     done(null, user)
  //   })
  // }

  listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port.toString()}`)
    })
  }
}
