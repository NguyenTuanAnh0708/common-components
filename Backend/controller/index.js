import axios from "axios";

const getTestData = async (req, res) => {
    const data = "Tai sao con khoc";
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
};
const recaptcha = async (req, res) => {
    const { token } = req.body
    try {
        const response = await axios.post(`
        https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`)
        if (response.data.success) {
            res.send("Human <3");
        } else {
            res.send("Robot <^.^>")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Error verifying reCAPCHA")
    }
}

export default {
    getTestData,
    recaptcha
};
