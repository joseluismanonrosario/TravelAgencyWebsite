import { Router } from "express";
const router = Router()

const pages = ['index', 'package', 'about', 'booking','contact', 'destination', 'service', 'team', 'testimonial']

pages.forEach(page =>{
    router.get(page === 'index'? '/': `/${page}`, (req, res) =>{
        res.render(page)
    })
})

router.use((req, res)=>{
    res.status(400).render('404')
})

export default router