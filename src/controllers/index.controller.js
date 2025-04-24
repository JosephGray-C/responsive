export const getIndex = (req, res) => {
    try {

        return res.render("index", 
            {
                title: "Home",
                message: "Welcome to the home page"
            }
        );

    } catch (error) {
        res.status(400).send(error.message); 
    }
}