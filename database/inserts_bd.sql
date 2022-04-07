use receitas;

INSERT INTO receitas.categoria VALUES 
(1,'Cakes and Pies','https://storage.alboom.ninja/sites/10640/albuns/395110/torta_macarron.jpg?t=1551373469'),
(2,'Meat','https://www.charbroil.com/media/ctm//a/p/apple_butter_bbq_ribs.jpg.jpeg'),
(3,'Roast','https://www.valeriebertinelli.com/wp-content/uploads/2019/07/Barbeque-Chicken-with-Spicy-BBQ-Sauce-e1563389324414.jpg'),
(4,'Seafood','https://static.onecms.io/wp-content/uploads/sites/19/2013/06/06/firecracker-grilled-salmon-sl-4x3-1-2000.jpg'),
(5,'Salads and Sauces','https://img.taste.com.au/eda2xEj2/taste/2018/08/17-minute-caesar-salad_1980x1320-140424-1.jpg'),
(6,'Soups','https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/hot-and-sour-soup.jpg?quality=82&strip=all'),
(7,'Dough/Pasta','https://renata.com.br/images/receitas/43/renata-imagem-receitas-macarrao-alla-norma-1-xl.jpg'),
(8,'Drinks/Beverages','https://churrascariameinhaus.com.br/blog/wp-content/uploads/2020/04/cinco-drinks-que-casam-perfeitamente-com-churrasco.jpg'),
(9,'Sweets and Desserts','https://images.aws.nestle.recipes/resized/3eb2579cdb04726a58431318ac293569_brigadeiro-receitas-nestle_1200_600.jpg'),
(10,'Snacks','https://s2.glbimg.com/epsRFVba8TkIbLdVyR6LfCus5ms=/0x0:950x401/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b3309463db95468aa275bd532137e960/internal_photos/bs/2021/S/A/BT5YakR22608UgXICZvg/wessel.png'),
(11,'Healthy','https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg');

INSERT INTO receitas.usuario VALUES 
(1,'glenioanderson@gmail.com','123456','glenio'),
(2,'maria@gmail.com','1245','maria'),
(3,'eddie@gmail.com','789','eddie'),
(4,'lilian@gmail.com','34232','lilian'),
(5,'hector@hotmail.com','4444','hector'),
(6,'joselio@gmail.com','234','joselio'),
(7,'patrick@gmail.com','234','patrick'),
(8,'tarsila@gmail.com','234','tarsila');

INSERT INTO receitas.receita VALUES 
(1,'Bolinho de mandioca recheado',90,15,'1 quilo de mandioca; 2 gemas; 1 colher (sopa) de margarina; cheiro-verde a gosto picadinho bem pequeno; sal e pimenta-do-reino; Recheio: 200 g de carne moída; ','1- Cozinhe a mandioca até quase desmanchar, escorra e retire aquelas fibras grossas e amasse com a ajuda de um garfo (não use o processador, pois essa massa é bastante pesada); 2-Coloque a massa em uma tigela grande e espere esfriar um pouco. 3- Acrescente as 2 gemas, a margarina, cheiro verde e temperos, amasse bem e reserve. Para o recheio faça um refogado com a carne moída e deixe que fique bem sequinho, depois de frio acrescente a mussarela ralada. 4- Montagem: 5- Molhe as mãos na água e forme os bolinhos, coloque o recheio, feche e empane. 6- Frite em óleo quente. Pode ser congelado, antes de fritar.','Quer dar uma olhada em outra típica receita de bolinho brasileira? Confira a nossa receita de bolinho de chuva e aproveite essa delícia mais tarde!','https://i.ytimg.com/vi/8Q275rlYuGI/maxresdefault.jpg',3,10,'2022-03-27','https://www.youtube.com/embed/8Q275rlYuGI'),
(2,'Café cremoso',15,5,'50 g de café solúvel; 2 xícaras de açúcar refinado; 1 xícara de água. ','1- Junte todos os ingredientes e bata na batedeira durante 15 minutos até ficar um creme; 2- Guarde no congelador em pote fechado; 3- Este creme é para ser servido do seguinte modo: 1 colher de sobremesa em 1 xícara de café quente (já pronto) ou 2 colheres de sobremesa em 1 xícara de leite fervendo; 4- Está pronta uma deliciosa bebida cremosa para aquecer as noites frias de inverno.','Acompanhe seu café cremoso com um bolinho. ','https://img.cybercook.com.br/receitas/814/cafe-cremoso-de-batedeira-1-840x480.jpeg?q=75',7,8,'2022-03-10','https://www.youtube.com/embed/YIqFmJ6QPAg'),
(3,'Carne de panela de pressão',25,15,'1 kg de carne (acém, patinho ou lombo de porco); 8 cebolas grandes cortadas em rodelas; 3 ou 4 cubos de caldo de carne.','1- Forre o fundo de uma panela de pressão com metade das cebolas; 2- Esfarele um cubo de caldo de carne por cima das cebolas, adicione a carne, adicione outro cubo de caldo de carne e cubra com o restante das cebolas; 3- Feche a panela de pressão, sem adicionar água, e deixe cozinhar por 25 minutos; 4- Se preferir, adicione batatas em rodelas e deixe cozinhar por mais 10 minutos.','','https://vovopalmirinha.com.br/wp-content/uploads/2016/05/carne-de-panela-005.png',4,2,'2022-02-17','https://www.youtube.com/embed/4JAn2zSS05Y'),
(4,'Pão de aveia de frigideira',2,1,'1 ovo; 1 fio de azeite; 1 pitada de sal (ou pode substituir por uma colher de mel caso queira doce); 2 colheres (sopa) de água. ','1- Misture os ingredientes em uma tigelinha; 2- A massa não pode ficar seca; 3- Caso fique, acrescente mais 1 colher de água; 4- Unte uma frigideira com um fio de azeite e frite o pão dos dois lados; 5- Deixe dourar bem.','Ótimo para pré e pós treinos. Tem poucas calorias e é uma delícia.','https://amorpelacomida.com.br/wp-content/uploads/2020/08/pao-de-aveia-na-frigideira-com-ovo.jpg',1,11,'2022-01-20','https://www.youtube.com/embed/wdN-dvxZFxc');

