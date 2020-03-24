import express, { Request, Response } from 'express'
import fetch from 'node-fetch'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ 'index': 'index' })
});

export default router