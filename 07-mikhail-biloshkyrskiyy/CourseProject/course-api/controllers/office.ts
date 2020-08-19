import { Request, Response } from 'express'
import fetch from 'node-fetch'

import keys from '@/config/keys'

export const getAllOffice = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/branches?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getOffice = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/branches/${req.params.id}?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getOfficeLocality = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/branches?locality=${encodeURI(req.body.locality)}&output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getOfficeLocator = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/branches_locator/${encodeURI(req.body.locator)}`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getOfficeTypes = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/branch_types?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}