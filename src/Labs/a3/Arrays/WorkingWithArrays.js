
const WorkingWithArrays = () => {

    const add_and_remove = () => {
        numberArray1.push(6);         // adding new items
        stringArray1.push('string3');
        numberArray1.splice(2, 1);  // remove 1 item starting at 2
        stringArray1.splice(1, 1);

        return (
            <div>
                <h2>Add and remove data to arrays</h2>
                numberArray1 = {numberArray1} <br />
                stringArray1 = {stringArray1} <br />
            </div>
        )
    }

    const forLoop = () => {
        let stringArray1 = ['string1', 'string3'];
        let stringArray2 = [];
        for (let i = 0;
            i < stringArray1.length;
            i++) {
            const string1 = stringArray1[i];
            stringArray2.push(
                string1.toUpperCase());
        }

        return (
            <div>
                <h2>Looping through arrays</h2>
                stringArray2 = {stringArray2}
            </div>
        )
    }

    const map = () => {
        let numberArray1 = [1, 2, 3, 4, 5, 6];
        const square = a => a * a;

        const squares = numberArray1.map(square);
        const cubes = numberArray1.map(a => a * a * a);


        return (
            <div>
                <h2>Map</h2>
                squares = {squares}<br />
                cubes = {cubes}<br />
                <h2>JSON Stringify</h2>
                squares = {JSON.stringify(squares)}
            </div>
        )
    }

    const find = () => {
        let numberArray1 = [1, 2, 3, 4, 5];
        let stringArray1 = ['string1', 'string2', 'string3'];

        const four = numberArray1.find(a => a === 4);
        const string3 = stringArray1.find(a => a === 'string3');

        const fourIndex = numberArray1.findIndex(a => a === 4);
        const string3Index = stringArray1.findIndex(a => a === 'string3');

        return (
            <div>
                <h2>Find</h2>
                four = {four}<br />
                string3 = {string3}<br />
                <h2>Find Index</h2>
                fourIndex = {fourIndex}<br />
                string3Index = {string3Index}<br />
            </div>
        )
    }

    const filter = () => {
        let numberArray1 = [1, 2, 4, 5, 6];

        const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
        const evenNumbers = numberArray1.filter(a => a % 2 === 0);
        const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

        return (
            <div>
                <h2>Filter</h2>
                numbersGreaterThan2 = {numbersGreaterThan2}<br/>
                evenNumbers = {evenNumbers}<br/>
                oddNumbers = {oddNumbers}<br/>
            </div>
        )
    }



    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];

    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <div>
            <h2>WorkingWithArrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <h2>Array Index and Length</h2>
            length1 = {length1} <br></br>
            index1 = {index1} <br />
            {add_and_remove()}
            {forLoop()}
            {map()}
            {find()}
            {filter()}
        </div>
    )
}

export default WorkingWithArrays