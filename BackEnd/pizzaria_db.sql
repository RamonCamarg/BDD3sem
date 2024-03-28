CREATE DATABASE pizzaria_db;

CREATE TABLE cadfun (
    CODFUN INT NOT NULL PRIMARY KEY,
    NOME VARCHAR (30) NOT NULL,
    DEPTO CHAR (2),
    FUNCAO CHAR(20),
    SALARIO NUMERIC (10,2)
);

--INSERÇÃO DE DADOS

INSERT INTO cadfun (CODFUN, NOME, DEPTO, FUNCAO, SALARIO)
VALUES (23, 'RAMON CAMARGO', '2', 'VENDEDOR', 2030.00 );

SELECT NOME FROM cadfun

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50)
);

INSERT INTO pedidos (cliente_id, produto_id, quantidade, preco_unitario, status)
VALUES (1, 1, 2, 80.00, 'Em andamento');


-- Consultar todos os pedidos
SELECT * FROM pedidos;

-- Consultar um pedido específico pelo ID
SELECT * FROM pedidos WHERE id = 1;


-- Atualizar o status de um pedido pelo ID
UPDATE pedidos SET status = 'Concluído' WHERE id = 1;

--Consultar todos os produtos
SELECT * FROM produtos;

--Consultar um produto especifico pelo id
SELECT * FROM produtos WHERE id = 1;

-- Atualizar o status de um produto
SELECT * FROM produtos WHERE id = 1;


--excluir tabelas
--cadfun
DROP TABLE cadfun;
--pedidos
DROP TABLE pedidos;