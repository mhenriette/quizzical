import React, { useState, useEffect } from "react";
import Question from "../ui/Question";
import { nanoid } from "nanoid";
import Button from "../ui/Button";
const Quiz = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const [quiz, setquiz] = useState(true)

    useEffect(() => {
        setLoad(true)
        async function getdata() {
            const resp = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
            const info = await resp.json()
            let questions = info.results.map(element => ({
                ...element, answers: [element['correct_answer'], ...element['incorrect_answers']], id: nanoid(), selected: null, correct: null
            }))
            setData(questions)
            setLoad(false)
        }
        getdata()
    }, [])

    function selectAnswer(index, id) {
        const updateInfo = data.map((question) => {
            return question.id === id ?
                { ...question, selected: index } :
                { ...question }
        })
        setData(updateInfo)
    }

    function checkAnswers() {
        let correction = data.map((element, index) => {
            let answer = element.answers[element.selected]
            let incorrectAnswer = element.incorrect_answers
            let correct = !incorrectAnswer.includes(answer)
            return { ...element, correct }
        })
        setData(correction)
        setquiz(false)


    }
    return <div className="text-start">
        {
            load ?
                <div className="h-screen flex justify-center items-center">loading...</div>
                :
                <>
                    <div className="mb-5"> {data.map(element => <Question {...element} key={element.id} selectAnswer={selectAnswer} quiz={quiz} />)}</div>
                    <Button text='Check answers' className='bg-[#4D5B9E] text-white' link={checkAnswers} />
                </>


        }
    </div>

};
export default Quiz;
