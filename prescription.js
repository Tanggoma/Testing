const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// Function to find the initial cost of all refills.
function totalCost(pricePerRefill, refills) {
    return pricePerRefill * refills;
}

// Apply the subscription discount of 25% to the total cost of the refills.
function withDiscount(totalCostWithoutDiscounts, subscription) {
    if (subscription) {
        return totalCostWithoutDiscounts * 0.75;
    } else {
        return totalCostWithoutDiscounts;
    }
}

// Apply the $10 coupon to the cost after the subscription discount.
function withCoupon(costAfterSubscription, coupon) {
    if (coupon) {
        return costAfterSubscription - 10;
    } else {
        return costAfterSubscription;
    }
}

module.exports = { timmy, rocky, sarah, totalCost, withDiscount, withCoupon };