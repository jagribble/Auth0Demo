import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Jules Gribble - Auth0 Demo'});
})

export default router;