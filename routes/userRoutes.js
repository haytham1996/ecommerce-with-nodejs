import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController'
import { authorize } from '../middlewares/auth'
import { AUTH_ROLES } from '../models/Enum'


const router = express.Router()

router.put('/update', updateUser)
router.delete('/delete/:id',authorize(AUTH_ROLES.ADMIN), deleteUser)
router.get('/all', authorize(AUTH_ROLES.ADMIN), getAllUsers)
router.get('/:id', getUser)

export default router