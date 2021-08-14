import http from 'http';
import express, {Express} from 'express';
import morgan from 'morgan';
import routes from './routes/posts';

const router: Express = express();

router.use(morgan('dev'));
router.use(express.urlencoded({extended:false}));
router.use(express.json());

// reglas
router.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
})

// rutas
router.use('/', routes);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 8080;

if (process.env.NODE_ENV !== 'test') {
    httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
}


export default router;