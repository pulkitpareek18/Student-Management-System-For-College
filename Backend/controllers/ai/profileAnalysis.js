import axios from 'axios';

export const profileAnalysis = async (req, res) => {
    let promptBody = `You're given data of a student and you have to analyse the profile of the student based on given details: `;

    console.log(req.body);

    try {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDHEEONh4x5XGxjb-lCKnzD1ygWHFZPoN8`,
            method: "post",
            data: {
                contents: [{ parts: [{ text: promptBody + JSON.stringify(req.body) }] }],
            }
        });

        console.log(promptBody + JSON.stringify(req.body));
        const newAnswer = response.data.candidates[0].content.parts[0].text;
        res.json(newAnswer);
    } catch (error) {
        console.log(error);
        res.json("Error");
    }
};