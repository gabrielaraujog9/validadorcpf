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

    let digito =
      11 -
      (cpf.reduce((a, valor) => {
        a += parseInt(valor) * M;
        M--;
        return a;
      }, 0) %
        11);
    digito = digito > 9 ? 0 : digito;
    cpf.push(digito);

    M = cpf.length + 1;

    digito =
      11 -
      (cpf.reduce((a, valor) => {
        a += parseInt(valor) * M;
        M--;
        return a;
      }, 0) %
        11);
    digito = digito > 9 ? 0 : digito;

    cpf.push(digito);

    return cpf.join('');
  }

  validation() {
    let cpfReceived = this.format();
    let cpfCalculed = this.calculation();

    return cpfCalculed === cpfReceived ? 'CPF Válido!' : 'CPF Inválido!';
  }
}

const v = new ValidationCpf('123.345.546-780');

console.log(v.validation());
