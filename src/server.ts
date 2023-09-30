import app, { init } from "./app";

const PORT = process.env.PORT || 3000;

init().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})