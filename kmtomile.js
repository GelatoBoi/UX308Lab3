//The function
function convertKilometersToMiles(kilometers){
    let miles = kilometers/1.609;
    return miles;
}

describe("test convertKilometersToMiles", function() {
    it("tests 150 km", function() {
        let miles = 150;
        let miles = convertKilometersToMiles(kilometers);
        expect(miles.toFixed(2)).toBe("93.23")
    }

    it("tests 70 km", function() {
        let miles = 70;
        let miles = convertKilometersToMiles(kilometers);
        expect(miles.toFixed(2)).toBe("43.51")
    }
}

//Therefore statement
console.log(`${kilometers} km converted into miles is ${miles}`);