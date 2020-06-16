import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//Inicialização
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//fetch , show, create, update, delete

//Rotas
routes.get('/items', itemsController.fetch);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;
