

function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive)
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return(
        <div>
            <h2>Implied Return</h2>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(4, 5)} <br />
            <h2>Parentheses and Parameters</h2>
            twoSquared = {twoSquared}<br />
            square(2) = {square(2)}<br />
            threePlusOne = {threePlusOne}<br />
            plusOne(3) = {plusOne(3)}<br />
        </div>
    )
}

export default ImpliedReturn;