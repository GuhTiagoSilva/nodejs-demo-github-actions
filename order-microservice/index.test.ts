const index = require('./index');

test("Get Hello Message", () => {
    const helloMessage = index.helloOrder();
    expect(helloMessage).toBe("Hello Order!");
});

test("Get Goodbye Message", () => {
    const goodbyeMessage = index.goodbyeOrder();
    expect(goodbyeMessage).toBe("Goodbye Order!");
});