import { useState } from "react";
import "./cardStats.css";

//this  component receives total as data
//tracks how many cards the student has studied and how many they got correct
function CardStats({total}) {

    //useState to track the number of cards studied
    const [studied, setStudied] = useState(0);

    //useState to track the number of cards answered correctly
    const [correct, setCorrect] = useState(0);

    //useState to track whether the stats panel is expanded or collapsed
    const [isOpen, setIsOpen] = useState(true);


    //handlers

    // onClick handler - increment studied count

    const handleStudied = () => {
        if (studied < total) {
            setStudied(studied + 1);
        }
    };

    //onClick handler - increment correct count

    const handleCorrect = () => {
        if (correct < studied) {
            setCorrect(correct + 1);
        }
    };

    //onClick handler - resets all counts back to zero

    const handleReset = () => {
        setStudied(0);
        setCorrect(0);
    };

     // onClick handler — toggles the stats panel
     const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    //render
    return (
        <div className="stats- wrapper">

            </div>
    );
}





