const getTestData = async (req, res) => {
    const data = "Tai sao con khoc";
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
};

export default {
    getTestData
};
