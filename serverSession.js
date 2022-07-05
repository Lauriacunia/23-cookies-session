import express  from "express";
import session from "express-session";
import sessionRoutes from "./src/routes/session.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(
    {
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    }
));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use("/", sessionRoutes);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);