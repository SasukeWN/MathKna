export function hitungLuasLingkaran(jari: number) {
    return {
        hasil: Math.PI * jari * jari,
        penyelesaian: `L = π × ${jari} × ${jari}`
    };
}

export function hitungKelilingLingkaran(jari: number) {
    return {
        hasil: 2 * Math.PI * jari,
        penyelesaian: `K = 2 × π × ${jari}`
    };
}

