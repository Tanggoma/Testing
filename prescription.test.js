const { timmy, rocky, sarah, withCoupon, withDiscount, totalCost } = require('./prescription');

// Testing the pricePerRefill properties
describe('Testing the pricePerRefill properties', () => {
    test('if rocky has pricePerRefill property with value 30', () => {
        expect(rocky).toHaveProperty('pricePerRefill', 30);
    })
});

// Testing the refills properties

describe('Testing the refills properties', () => {
    test('if sarah has refills property with value 1', () =>
        expect(sarah).toHaveProperty('refills', 1))

    test('if timmy has refills property with value 3', () =>
        expect(timmy).toHaveProperty('refills', 3))

    test('if rocky has refills property with value 5', () =>
        expect(rocky).toHaveProperty('refills', 5))
});


// Testing the totalCost() function
describe("totalCost()", () => {

    test('total cost sarah', () =>
        expect(totalCost(sarah.pricePerRefill, sarah.refills)).toBe(50)
    )
    test('total cost rocky', () =>
        expect(totalCost(rocky.pricePerRefill, rocky.refills)).toBe(150)
    )
    test('total cost timmy', () =>
        expect(totalCost(timmy.pricePerRefill, timmy.refills)).toBe(75)
    )
});

// Testing the withDiscount() function
describe("withDiscount()", () => {

    test("returns the correct total cost with subscription discount for sarah", () => {
        expect(withDiscount(totalCost(sarah.pricePerRefill, sarah.refills), sarah.subscription)).toBe(37.5);
    })
    test("returns the correct total cost with subscription discount for rocky", () => {
        expect(withDiscount(totalCost(rocky.pricePerRefill, rocky.refills), rocky.subscription)).toBe(112.5);
    })
    test("returns the correct total cost with subscription discount for timmy", () => {
        expect(withDiscount(totalCost(timmy.pricePerRefill, timmy.refills), timmy.subscription)).toBe(75);
    })
});

// Testing withCoupon

test('return correct total after subscription and coupon for rocky', () => {
    const totalCosts = totalCost(rocky.pricePerRefill, rocky.refills)
    const withDiscounts = withDiscount(totalCosts, rocky.subscription)
    const withCoupons = withCoupon(withDiscounts, rocky.coupon)

    expect(withCoupons).toBe(102.5)
});

// Testing the prescription properties
describe("Prescription Tests", () => {

    test('if rocky has precription property with value phenylephrine', () =>
        expect(rocky).toHaveProperty('prescription', 'phenylephrine'))
    test('if timmy has precription property with value acetaminophen', () =>
        expect(timmy).toHaveProperty('prescription', 'acetaminophen'))
    test('if sarah has precription property with value diphenhydramine', () =>
        expect(sarah).toHaveProperty('prescription', 'diphenhydramine'))

});

// Testing the coupon properties
describe("Coupon Test", () => {
    test('if timmy has coupon', () => {
        expect(timmy).toHaveProperty('coupon');
    })
});

// Testing the subscription properties
describe("Subscription Tests", () => {
    test('if timmy has subscription property with value false', () => {
        expect(timmy).toHaveProperty('subscription', false)
    })
});


