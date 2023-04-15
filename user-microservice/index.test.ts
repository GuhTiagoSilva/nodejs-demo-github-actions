const indexUser = require('./index');

test("Get Hello Message", () => {
    const helloMessage = indexUser.helloUser();
    expect(helloMessage).toBe("Hello User!");
});

test("Get Goodbye Message", () => {
    const goodbyeMessage = indexUser.goodbyeUser();
    expect(goodbyeMessage).toBe("Goodbye User!");
});