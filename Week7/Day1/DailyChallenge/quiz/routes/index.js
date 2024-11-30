const express = require('express')
const router = express.Router();
router.use(express.json())

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let idx = 0;
let total = 0;

router.get('/', (req, res, next) => {
    if(idx > 2){
        res.status(303).json({message: "end of quiz, see results"})
    }
    else {
        res.status(200).json({message: triviaQuestions[idx].question});
        next();
    }
})

router.get('/score', (req, res, next) => {
    if(idx < 3){
        res.status(404);
    }
    else {
        res.status(200).json({message: `result: ${total} / 3`});
        next();
    }
});

router.post('/', (req, res, next) => {
    if(idx > 2){
        res.status(303).json({message: "end of quiz, see results"});
    }
    else {
        const {answer} = req.body;
        if(answer == triviaQuestions[idx].answer){
            total++;
        }
        idx++;
        res.status(200).json({message: total});
        next();
    }
})



module.exports = router;