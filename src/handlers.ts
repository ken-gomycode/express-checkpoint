import { Request, Response } from 'express'

const renderHomePage = (_: Request, res: Response) => res.render("home");
const renderServicesPage = (_: Request, res: Response) =>  res.render("services");
const renderContactPage = (_: Request, res: Response) => res.render("contact");

export default { renderHomePage, renderContactPage, renderServicesPage };