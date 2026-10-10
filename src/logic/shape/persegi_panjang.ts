export function hitungKelilingPersegiPanjang(panjang:number, lebar:number) {
    return {
        hasil: 2 * (panjang + lebar),
        penyelesaian: `K = 2 × (${panjang} + ${lebar}) = 2 × ${panjang + lebar}`
    };
}

export function hitungLuasPersegiPanjang(panjang:number, lebar:number) {
    return {
        hasil: panjang * lebar,
        penyelesaian: `L = ${panjang} × ${lebar}`
    };
}