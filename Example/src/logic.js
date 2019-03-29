const If = f => a => b => f(a)(b);

const True = a => () => a;
const False = () => b => b;

const ConditionFunction = If(True);
console.log(ConditionFunction("one")("two")); // one

const ConditionFunction1 = If(False);
console.log(ConditionFunction1("one")("two")); // one
