const{test,expect}= require('@playwright/test')
test("my first test",async function ({page}) {
    expect(12).toBe(12)
})

test.skip("my second test",async function ({page}) {
    expect(100).toBe(101)
})

test("my third test",async function ({page}) {
    expect(20).toBe(20)
})

test("my fourth test",async function ({page}) {
    expect("santosh singh").toContain("singh")
    expect(true).toBeTruthy()
})

test("my fifth test",async function ({page}) {
    expect("santosh singh".includes("singhs")).toBeFalsy()
})