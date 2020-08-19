import { Request, Response } from 'express'
import fetch from 'node-fetch'

import keys from '@/config/keys'

export const getServices = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/services?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}