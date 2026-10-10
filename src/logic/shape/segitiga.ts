export function hitungLuasSegitiga(alas: number, tinggi: number) {
    return {
        hasil: 0.5 * alas * tinggi,
        penyelesaian: `L = 1/2 × ${alas} × ${tinggi}`
    };
}

export function hitungKelilingSegitiga(s1: number, s2: number, s3: number) {
    return {
        hasil: s1 + s2 + s3,
        penyelesaian: `K = ${s1} + ${s2} + ${s3}`
    };
}