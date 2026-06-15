import { useState } from "react";

import "./MyComponent.css";





const cardSet = {
    title: " Learning Python",
    description: "10 cards to help you learn Python",
    cards: [
        { question: "What function do you use to display output in Python?", answer: "print()"},
        { question: "What are the 3 basic numeric data types in Python?", answer: "int (whole numbers), float (decimals), and complex."},
        { question: "How do you create a variable in Python?", answer: "Assign a value: name = 'Alice', age = 25. "},
        { question: "What is the difference between a list and a tuple?", answer: "Lists are mutable (changeable): [1, 2, 3]. Tuples are immutable (unable to be changed): (1, 2, 3)."},
        { question: "How do you write a comment in Python?",answer: "Use the # symbol at the beginning." },
        { question: "What keyword starts a conditional statement in Python?", answer: "if — followed by a condition and a ':'. Use elif and else for additional branches."},
        { question: "How do you write a for loop in Python?", answer: "for i in range(5): print(i) - i being the loop variable and range(5) generating numbers from 0 to 4."},
        { question: "How do you define a function in Python?", answer: "Use the def 'keyword': def greet(name)"},
        { question: "What is a dictionary in Python?", answer: "a built-in data structure that stores data in mutable, ordered collections of key-value pairs, where each unique key maps directly to a specific value.{'name': Damaris, 'age': 25}"},
        { question: "How do you get input from the user in Python?", answer: "Use input() ex. -- > input(Enter your name:)"},
    ]
};



function MyComponent() {
    //tracks current card shown
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    //tracks whether card is flipped
    const [isFlipped, setIsFlipped] = useState(false);

    //current card based on index
    const currentCard = cardSet.cards[currentCardIndex];

    //toggles the card between question and answer
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handlePrevious = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setIsFlipped(false);
        }
    };
    
    const handleNext = () => {
        if (currentCardIndex < cardSet.cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setIsFlipped(false);
        }
    };

    return (
        <div className="container">

            <h1 className="title">{cardSet.title}</h1>
            <p className="description">{cardSet.description}</p>
            <p className="count">Total cards: {cardSet.cards.length}</p>

            <div className="card" onClick={handleFlip}>
                {isFlipped ? (
                    <div>
                        <p className="card-label">Answer</p>
                        <p className="card-text">{currentCard.answer}</p>
            </div>
                ) : (
                    <div>
                        <p className="card-label">Question</p>
                        <p className="card-text">{currentCard.question}</p>
                    </div>
                )}
                <p className="hint">Click to flip</p>
            </div>


<div className="button-group">
    <button className="button" onClick={handlePrevious}>
        Previous Card
    </button>

    <button className="button" onClick={handleNext}>
        Next Card
    </button>
</div>
        </div>
    );
}

export default MyComponent;