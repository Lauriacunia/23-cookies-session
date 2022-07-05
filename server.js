import express  from "express";
import cookieParser from "cookie-parser";
import cookiesRoutes from "./src/routes/cookies.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use("/", cookiesRoutes);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);