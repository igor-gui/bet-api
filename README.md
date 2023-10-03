# BetBall API

<p>O projeto consiste em uma API que cria usuários, jogos e apostas dos usuários nos determinados jogos</p>

## Instalando as dependencies e rodando:

```
npm i
npm run dev
```

## Rotas:

### Post /participants:

<p>Espera um corpo no formato:<br>

```
{
    name: string,
    balance: number,
}
```

<p>E retorna o participante no seguinte formato

```
{
	id: number;
	createdAt: string;
	updatedAt: string;
	name: string;
	balance: number; // representado em centavos
}
```

</p>

<p>Lembrando que o "balance" precisa ser maior que 1000</p>


## Deploy:
https://bet-api-l240.onrender.com