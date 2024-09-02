const asyncHandler = require("../middlewares/asyncHandler");

const QuestionsWindoaw = asyncHandler((req,res)=>{
    res.render('QuestionsPortal');
})

const addQuestion = asyncHandler((req, res)=>{
    // Add a form to add questions
})

const deleteQuestion = asyncHandler((req, res)=>{
    // Add a form to delete questions
})



module.exports={
    QuestionsWindoaw,
    addQuestion,
    deleteQuestion
}