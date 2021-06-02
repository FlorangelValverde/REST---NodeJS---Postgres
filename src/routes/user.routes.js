import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

router.get('/', userCtr.readAllProducto);
router.get('/:id', userCtr.readProducto);
router.delete('/:id', userCtr.delProducto);
router.put('/:id', userCtr.updateProducto);
router.post('/', userCtr.createProducto);

export default router;