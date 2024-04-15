"""
    Exercicio 1

    Escreva um programa que pergunte a velocidade do carro de um usuário. Caso ultrapasse 80
    km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa,
    cobrando R$ 5 por km acima de 80 km/h.
"""

carro = int(input("Digite a velocidade do carro:"))
if(carro >= 80):

    print("Voce recebera uma multa no  valor de R$5 por esta a cima de 80Km/h")

else:

    print("voce estava a baixo de 80KM/h fique tranquilo nao recebera multa")


"""
    Exercicio 2

    Escreva um programa que leia três números e que imprima o maior e o menor.
"""

numeroUm = float(input("digite o primeiro numero:"))
numeroDois = float(input("digite o primeiro segundo:"))
numeroTres = float(input("digite o primeiro terceiro:"))

numero_maior = max(numeroTres,numeroDois,numeroUm)

print("o maior numero é:", numero_maior)


"""
    Exercicio 3

     Escreva um programa que pergunte o salário do funcionário e calcule o valor do aumento. Para
    salários superiores a R$ 1.250,00, calcule um aumento de 10%. Para os inferiores ou iguais, de
    15%.
"""
salario = float(input("Digite o seu salario recebido nesse mes"))

if salario > 1250:
    print("salario teve um aumento de 10%")
elif salario <= 1250:
    print("O seu salario deve diminuiu 15%")
else:
    print("Seu salario nao teve alteração")

"""
    Exercicio 4

    Escreva um programa que pergunte a distância que um passageiro deseja percorrer em km.
    Calcule o preço da passagem, cobrando R$ 0,50 por km para viagens de até de 200 km, e R$ 0,45
    para viagens mais longas.
"""
distância = float(input("Digite a distância da viagem que percorrerá em KM: "))

if distância <= 200:

    viagem = distância * 0.45
    print("O preço da viagem é:", viagem)

else:

    viagem = distância * 0.50
    print("O preço da viagem é:", viagem)

"""
    Exercicio 5

    Escreva um programa que leia dois números e que pergunte qual operação você deseja realizar.
    Você deve poder calcular soma (+), subtração (-), multiplicação (*) e divisão (/). Exiba o resultado
    da operação solicitada.
"""

numeroUm = float(input("Digite o primeiro numero para o calculo"))
numeroDois = float(input("Digite o segundo numero para o calculo"))

calculoUm = numeroUm + numeroDois

calculoDois = numeroUm - numeroDois

calculoTres = numeroUm * numeroDois

calculoQuatro = numeroUm / numeroDois

print("O peimeiro calculo deu:", calculoUm, "\nO segundo calculo deu:", calculoDois, "\n O terceiro calculo deu:", calculoTres, "\n O quarto calculo deu:", calculoQuatro)


"""
    Exercicio 6

    Escreva um programa para aprovar o empréstimo bancário para compra de uma casa. O
    programa deve perguntar o valor da casa a comprar, o salário e a quantidade de anos a pagar. O
    valor da prestação mensal não pode ser superior a 30% do salário. Calcule o valor da prestação
    como sendo o valor da casa a comprar dividido pelo número de meses a pagar.
"""
