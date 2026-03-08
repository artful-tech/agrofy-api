import dotenv from 'dotenv';

dotenv.config();
 
const PORT = parseInt(`${process.env.PORT || 8080}`);
 
import app from './app';

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}.`));