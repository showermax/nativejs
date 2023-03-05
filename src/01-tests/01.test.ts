import {splitwords, sum} from "./01";

// test('correct sum', ()=> {
//     const a=10;
//     const b=6;
//     const c=12;
//
//     const result1 = sum(a,b);
//     const result2 = sum(a,c);
//     const result3 = sum(b,c);
//
//     expect(result1).toBe(16);
//     expect(result2).toBe(22);
//     expect(result3).toBe(18);
// })

test('correct splitting', ()=> {
    const sent1="hello my friend";
    const sent2="nothing more but love";

    const result1 = splitwords(sent1);
    const result2 = splitwords(sent2);

    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");
    // expect(result2).toBe(["nothing", "more", "but", "love"]);

})