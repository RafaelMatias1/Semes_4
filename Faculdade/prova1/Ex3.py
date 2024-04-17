jogador1 = input('jogador 1 escolha pedra, papel ou tesoura: ').lower()
jogador2 = input('jogador 2 escolha pedra, papel ou tesoura: ').lower()


pedra = 'pedra'
tesoura = 'tesoura'
papel = 'papel'


if jogador1 == jogador2:
    print("Empate!")
elif (jogador1 == pedra and jogador2 == tesoura) or \
     (jogador1 == papel and jogador2 == pedra) or \
     (jogador1 == tesoura and jogador2 == papel):
    print("jogador 1 vence!")
else:
    print("jogador 2 vence!")