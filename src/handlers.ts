import { Request, Response } from 'express'

const renderHomePage = (_: Request, res: Response) => res.render("home", { title: "Ulexo - Home" });
const renderContactPage = (_: Request, res: Response) => res.render("contact", { title: "Ulexo - Contact Us" });

const renderServicesPage = (_: Request, res: Response) => {
    const services = [
        { name: "Web Development", description: "Building responsive and scalable web applications." },
        { name: "Mobile App Development", description: "Creating cross-platform mobile applications." },
        { name: "UI/UX Design", description: "Designing user-friendly and visually appealing interfaces." },
        { name: "SEO Optimization", description: "Improving website ranking and search visibility." },
    ];

    res.render("services", { title: "Ulexo - Our Services", services });
};
export default { renderHomePage, renderContactPage, renderServicesPage };