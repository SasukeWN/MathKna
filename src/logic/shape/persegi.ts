export function hitungLuasPersegi(sisi: number) {
    return {
        hasil: sisi * sisi,
        penyelesaian: `L = ${sisi} × ${sisi}`
    };
}

export function hitungKelilingPersegi(sisi: number) {
    return {
        hasil: 4 * sisi,
        penyelesaian: `K = 4 × ${sisi}`
    };
}