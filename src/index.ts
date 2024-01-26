import "./config/environment";
import express, { Request, Response } from "express";
import "./config/db";
import Contact from "./schema/Contact";
import cors,{ CorsOptions } from "cors";
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const corsOptions: CorsOptions = {
    origin: "https://akash-padampalle-portfolio.vercel.app",
    methods: "POST",
}

const app = express();

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', async (_: Request, res: Response) => {
    const responses = await Contact.find({});
    return res.status(200).json(responses);
})

app.post('/', async (req: Request, res: Response) => {

    try {

        const { name, contact, email, details }: { name: string, contact: string, email: string, details: string } = req.body;

        // validation
        if (
            !name || typeof name !== 'string' ||
            (contact && typeof contact !== 'string') ||
            (email && typeof email !== 'string') ||
            (details && typeof details !== 'string')
        ) {
            return res.status(400).json({ message: 'Invalide data recieved. please check required data and their type.' })
        }

        const response = await Contact.create({ name, contact, email, details });
        return res.status(201).json(response);

    } catch (error) {
        return res.status(500).json({message: 'Internal server error.'})
    }

});


app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})