"""3) Faça um programa para escrever a contagem regressiva do lançamento de um foguete. O
programa deve imprimir 10, 9, 8, …, 1, 0 e Fogo! na tela."""

n = 10
while n >= 0:  
    print(n)
    if n == 0:
        print('Fogo!')
    n = n - 1