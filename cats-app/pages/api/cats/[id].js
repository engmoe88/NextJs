import { cats } from '../../../data'

export default function handler(req, res) {
    const { id } =  req.query
    const cat = cats.find(cat => cat.id === Number(id))

    if (cat) {
        return res.status(200).json(cat)
    } else {
        res.status(400).json({message: 'No cat found'})
    }
}
