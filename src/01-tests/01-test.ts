import {sum} from "./01";

test('correct sum', ()=> {
    const a=10;
    const b=6;
    const c=12;

    const result1 = sum(a,b);
    const result2 = sum(a,c);
    const result3 = sum(b,c);

    expect(result1).toBe(16);
    expect(result2).toBe(22);
    expect(result3).toBe(18);
})