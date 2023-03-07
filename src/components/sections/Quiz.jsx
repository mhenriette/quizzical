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
            const data = await resp.json()
            let questions = data.results.map(el => ({
                ...el, answers: [el['correct_answer'], ...el['incorrect_answers']], id: nanoid(), selected: null, correct: null
            }))
            setData(questions)
            setLoad(false)
        }
        getdata()
    }, [])

    function selectAnswer(index, id) {
        const updateInfo = data.map((el) => {
            return el.id === id ?
                { ...el, selected: index } :
                { ...el }
        })
        setData(updateInfo)
        console.log(`selected button is ${index}`)
    }

    function checkAnswers() {
        let correction = data.map((el, index) => {
            let answer = el.answers[el.selected]
            let arr = el.incorrect_answers
            let correct = !arr.includes(answer)
            return { ...el, correct }
        })
        setData(correction)
        console.log(correction)
        setquiz(false)


    }
    return <div className="text-start">
        {
            load ?
                <div className="h-screen flex justify-center items-center">loading...</div>
                :
                <>
                    <div className="mb-5"> {data.map(el => <Question {...el} key={el.id} selectAnswer={selectAnswer} quiz={quiz} />)}</div>
                    <Button text='Check answers' className='bg-[#4D5B9E] text-white' link={checkAnswers} />
                </>


        }
    </div>

};
export default Quiz;
