import React from "react";
import Button from "./Button";
import { nanoid } from "nanoid";
import { Heading2 } from "./Typography";
import classNames from "classnames";
const Question = ({ question, answers, selectAnswer, id, selected, correct, incorrect_answers, quiz }) => {


    return <div className="flex flex-col gap-y-4 border-b-2 border-b-[#DBDEF0] items-start mt-5">
        <Heading2 children={question} />
        <div className="flex gap-x-5 mb-4 flex-wrap lg:flex-row gap-y-5">
            {answers.sort().map((answer, index) => {
                let check = selected === index
                let text = answers[index];
                let right = !incorrect_answers.includes(text)
                const style = classNames({
                    'hover:bg-indigo-300': correct == null,
                    'bg-yellow-100 ': check && quiz,
                    'bg-green-400': (check && correct && !quiz) || (!check && !quiz && right),
                    'bg-red-500': check && !correct && correct != null && !quiz,

                })
                return <Button
                    text={answer}
                    key={index}
                    index={index}
                    link={() => selectAnswer(index, id)}
                    id={id}
                    className={style}
                    disable={!quiz}
                />
            }
            )
            }
            {(!quiz && selected === null) && <p className="text-red-500 font-bold">Not Answered!!!</p>}
        </div>
    </div>;
};

export default Question;
