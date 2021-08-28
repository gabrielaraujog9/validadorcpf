class ValidationCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }
  format() {
    const cpfFormated = this.cpf
      .replace('.', '')
      .replace('.', '')
      .replace('-', '');
    return cpfFormated;
  }
  calculation() {
    let cpf = this.format();

    cpf = cpf.split('').slice(0, -2);

    let M = cpf.length + 1;

    let total = cpf.reduce((a, valor) => {
      a += parseInt(valor) * M;
      M--;
      return a;
    }, 0);
    let digit = 11 - (total % 11);
    digit = digit > 9 ? 0 : digit;

    cpf.push(digit);

    M = cpf.length + 1;

    digit =
      11 -
      (cpf.reduce((a, valor) => {
        a += parseInt(valor) * M;
        M--;
        return a;
      }, 0) %
        11);
    digit = digit > 9 ? 0 : digit;

    cpf.push(digit);

    return cpf.join('');
  }

  validation() {
    let cpfReceived = this.format();
    let cpfCalculed = this.calculation();

    return cpfCalculed === cpfReceived ? 'CPF Válido!' : 'CPF Inválido!';
  }
}

const v = new ValidationCpf('748.836.390-61');

console.log(v.validation());
