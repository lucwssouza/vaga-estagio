function Fibonacci(num) {
    if (num < 0) return false; // se o numero for menor q 0 ta fora da sequencia
    let x = 0;
    let z = 1;

    if (num === x || num === z) return true; // se for 0 ou 1 ta na sequencia

    let next = x + z;

    while (next <= num) {
        if (next === num) return true;

        x = z;
        z = next;
        next = x + z;
    }
    return false;
}

const result = 13;
if (Fibonacci(result)) {
    console.log(result + " pertence à sequência");
} else {
    console.log(result + " não pertence à sequência");
}
