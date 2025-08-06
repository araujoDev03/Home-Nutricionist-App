import { useEffect, useState } from "react";
import './Calculator.css';

function Calculator() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(""); // agora é string
    const [cal, setCal] = useState(0);

    function setHeightOn(e) {
        setHeight(Number(e.target.value));
    }

    function setWeightOn(e) {
        setWeight(Number(e.target.value));
    }

    function setGenderOn(e) {
        setGender(e.target.value);
    }

    function setAgeOn(e) {
        setAge(Number(e.target.value));
    }

    function setBonusOn(e) {
        setBonus(Number(e.target.value));
    }

    useEffect(() => {
        if (height > 0 && weight > 0 && age > 0 && gender) {
            if (gender === "male") {
                setCal(10 * weight + 6.25 * height - 5 * age + 5 );
            } else {
                setCal(10 * weight + 6.25 * height - 5 * age - 161 );
            }
        }
    }, [height, weight, age, gender]);

    return (
        <div id="calculator-container">
            <h1 id="calculator-title">Calories Calculator</h1>

            <h3 id="height-label">Height (cm)</h3>
            <input id="height-input" type="number" onChange={setHeightOn} />

            <h3 id="weight-label">Weight (kg)</h3>
            <input id="weight-input" type="number" onChange={setWeightOn} />

            <h3 id="age-label">Age</h3>
            <input id="age-input" type="number" onChange={setAgeOn} />

            <h3 id="gender-label">Gender</h3>
            <div id="gender-options">
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={setGenderOn}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={setGenderOn}
                    />
                    Female
                </label>
            </div>

            <h2 id="bmr-output">Your BMR is = {cal.toFixed(2)} cal</h2>
        </div>
    );
}

export default Calculator;
