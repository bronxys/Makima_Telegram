/*
ℹ️ CASO QUEIRA EDITAR OS MENUS MANTENHA A ORGANIZAÇÃO BÁSICA, NÃO MECHENDO NO QUE ESTIVER DENTRO DO ${}

✅ VERIFIQUE SE O CONST TEM A TAG QUE VOCÊ DESEJA USAR 

EM TODOS QUE CONTIVER O MYCONTA DENTRO DOS PARENTES, E POSSÍVEL USAR TODAS AS TAGS DE PERFIL 

PFX = PREFIXO

⚠️ SE NÃO SOUBER COMO MECHER NOS ${} PEÇA AJUDA AO CHAT GPT , OU COPIE E COLE OS QUE JA ESTÃO DENTRO DO CONTS QUE FOR MECHER


🔰 CASO PRECISE DE AJUDA: t.me/Titannickbub
🔰 MEU GRUPO: t.me/titannickbub_chat

NOS LUGARES ONDE ESTIVER ALGO TIPO ${func ? "✅" : "❌"}
VOCÊ PODE EDITAR O TEXTO SE ELE ESTIVER ENTRE ASPAS

*/

///////////////// MENUS \\\\\\\\\\\\\\\\\\

//. MENSAGEM PARA IR FAZER LOGIN NO PV
const msg_notpv = (pfx, myconta) => {
return `
Envie uma mensagem no meu pv para que eu te registre e assim você possa usar as funções
`
}

/// TEXTO DA FUNÇÃO DE LOGIN automático
const login = (pfx, novaConta) => {
return `
✅ Você foi registrado ao meu sistema 

🙃Peço desculpas pelas constantes mensagens fe logins, infelizmente o bot enfrentou problemas relacionados a forma com que as contas são salvas , mas estamos trabalhando para resolver Isso

ℹ️Isso é um processo automático para que eu possa responder a todos os seus comandos sem grandes problemas

Caso queira ver e editar as informações do seu perfil use o comando abaixo:

${pfx}Perfil
`
}

// COMANDO DE PERFIL 
const perfil = (pfx, myconta, tempo2) => {
return `
******************************
ℹ️INFORMAÇÕES: 

👓Nick: ${myconta.nome2}
💰Saldo: ${myconta.saldo} ∆
⭐Vip: ${myconta.typevip}
⏲️Tempo restante: 
${tempo2.Y}Anos ${tempo2.D}Dias ${tempo2.H}:${tempo2.M}:⁰⁰

🆔ID: ${myconta.id}
📖Biografia: ${myconta.descricao}
🔟Idade: ${myconta.idade}
♀️Genero: ${myconta.genero}
⚧️Orientação sexual: ${myconta.orientacaoSexual}
******************************

❓ Para ver os comandos de edição de perfil use ${pfx}editar_perfil
`
}

//COMO EDITAR PERFIL
const edit_pf = (pfx) => {
return `
******************************
🔧 Editar Perfil:

👓Para editar o nick use:
${pfx}Edit_name SeuNick

📖Para editar a biografia use:
${pfx}Edit_Mydesc Biografia 

🔟Para editar a idade use:
${pfx}Edit_Myidd 19

♀️Para editar o gênero use:
${pfx}Edit_MyGen Masculino

⚧️Para editar a orientação sexual use:
${pfx}Edit_Mysx Hetero

As opções que não possuem um comando para editar são alteradas automaticamente quando você edita seus dados no telegram

******************************
`
}

const pesquisas = (pfx, myconta) => {
  return `
Aqui está o menu de pesquisas ${myconta.nome2}
******************************
🔎 PESQUISAS 

${pfx}Celular Note 13
${pfx}LetraMusic WTF 2
******************************
`
}

//Contador de mensagens
const contador_msgs = (pfx, myconta, user_contador_px, user_contador_index, grupo_contador, totalMessages2) => {
  return `
******************************
🥇Rank: ${user_contador_index + 1}º

📄Nome: ${user_contador_px.nome}
🆔Id: ${user_contador_px.id}

Grupo: ${grupo_contador.nome}

Total: ${totalMessages2} Mensagens
******************************
◻️ Botões: ${user_contador_px.bts}
🔤 Texto: ${user_contador_px.texto}
🖼️Imagens: ${user_contador_px.foto}
📼Videos: ${user_contador_px.video}
💟Figurinhas: ${user_contador_px.figurinha}
🔊Audios: ${user_contador_px.audio}
📁 Documentos: ${user_contador_px.documento}
******************************
`
}
// EDITOR DE IMAGEM
const efeitosimg = (pfx, myconta) => {
  return `
******************************
🖼️ Edição de Imagem
******************************
ℹ️Marque uma imagem com o comando, ou coloque o comando na legenda da imagem

${pfx}Legenda Texto cima/texto baixo
${pfx}Lixo
${pfx}Procurado
${pfx}Lgbt
${pfx}Morto
${pfx}DeleteM
${pfx}Preso
${pfx}Hitler
${pfx}Borrar
${pfx}Merda
******************************
`
}
// DOWLOADS
const donwloads_ft = (pfx, myconta) => {
return `
Essa é a lista de ferramentas de download, ${myconta.nome2}

ℹ️ Downloads automáticos estão disponíveis no pv , basta enviar o link das seguintes redes sociais para baixar automaticamente:

YouTube, Instagram, Facebook, TikTok, Spotify
******************************
📥VIDEO E MÚSICA

${pfx}Play Nome do vídeo no YouTube

${pfx}Play_Video nome ou link do YouTube

${pfx}Play_Audio nome ou link do YouTube

${pfx}Instagram reels, post, story

${pfx}Twitter link

${pfx}Facebook link

${pfx}Tiktok link

${pfx}spotify link

******************************
`
}
//JOGOS
const jogos_txr = (pfx, myconta) => {
  return `
******************************
🎮Jogos

${pfx}JogoDaVelha
${pfx}ResetarVelha
******************************
%

${pfx}Chance de algo acontecer
******************************
`
}

//MENU DO USUÁRIO
const menu_user = (pfx, myconta) => {
  return `
******************************
👤Menu do user

${pfx}Perfil
${pfx}Transferir id saldo
${pfx}Saldo
******************************
🎧FEEDBACK

${pfx}Sugestao sua sugestão
${pfx}Bug seu report
${pfx}Feedback sua opinião

******************************
`
}

// Saldo
const txt_saldo = (pfx, myconta) => {
  return `
******************************
👓Nick: ${myconta.nome2}
🆔ID: ${myconta.id}

💰Saldo: ${myconta.saldo} ∆

ℹ️Use ${pfx}Resgatar para reinvindicar seu presente diário
******************************
`
}
// 🔰 MENU DO DONO 
const menu_dono = (pfx, myconta) =>{
  return `
Essas são as configurações específicas do bot

******************************
⚙️ CONFIGURAÇÕES DO BOT

${pfx}SetPrefix novo prefixo
${pfx}SetApiKey nova key
******************************
🏦MAKIMA BANK

${pfx}Add_Saldo id saldo
${pfx}Del_Saldo id saldo
******************************
`
}
//🛡️ MENU DE ADMINISTRAÇÃO
const menu_adm = (
  pfx, myconta, SBemVindo, SFotoNoBv, LegendaDoBv, Santilink, Sdelete_link, tag_punir_atlk,
AntiNomeMod) => {
return `
Bem vindo ao menu de administração, ${myconta.nome2}

******************************
🛋️Bem Vindo

${pfx}LegendaBv nova legenda
${pfx}Img_Bv novo link da imagem
******************************
🚫BAN & MESSAGE

${pfx}Banir <Marcar mensagem ou id>
${pfx}Kick <Marcar mensagem ou id>
${pfx}Reviver <Marcar mensagem ou id>

${pfx}Mutar <Marcar mensagem ou id>
${pfx}Desmutar <Marcar mensagem ou id>

${pfx}Delete <Marcar mensagem>
******************************
`
//punição do anti link ** 0=nada
//punição do anti link ** 1=advertência // 2=mutar 
//punição do anti link ** 3=banir // 4=banir & lista negra
}

// PUNIÇÕES DO AntiLink
const punir_antilink = (pfx, myconta, Punicao_attlk) => {
  return `
******************************
⛓️ PUNIÇÕES DO ANTI LINK

${tag_punir_anttlk(Punicao_attlk)}

******************************
`
}

const punir_antinomemod = (pfx, myconta, Punicao_attlk) => {
  return `
******************************
⛓️ PUNIÇÕES DO ANTI-NOMES-MOD

${tag_punir_anttlk(Punicao_attlk)}

******************************
`
}

const msg_ping = (pfx, myconta, ping, tempo, Hora_Msg, Data_Msg, count_msg) => {
S_t = tempo.S
S = S_t
.replaceAll("0","⁰")
.replaceAll("1","¹")
.replaceAll("2","²")
.replaceAll("3","³")
.replaceAll("4","⁴")
.replaceAll("5","⁵")
.replaceAll("6","⁶")
.replaceAll("7","⁷")
.replaceAll("8","⁸")
.replaceAll("9","⁹")
  return `
******************************
🗓️ DATA: ${Data_Msg}
📟 HORA: ${Hora_Msg}
⏱️ Ping : ${ping}
⏳Tempo ativo: ${tempo.D} Dias, ${tempo.H}:${tempo.M}:${S}
📨 Mensagens: ${count_msg}
******************************
`
}

// 📄📄📄📄📄 TEXTOS DE MENU COM IMAGEM (MÁXIMO DE 1024 CARACTERES)

// texto do menu
const menu_ft = (pfx, myconta ) => {
return `
Esse é o menu principal, ${myconta.nome2}

De sua opinião através dos comandos ${pfx}Bug, ${pfx}Sugetao, ${pfx}Feedback
`
}

//. TEXTO DO COMANDO START
const start_ft = (pfx, myconta ) => {
return `
Ola ${myconta.nome2}, eu sou a Makima, tudo bem?

Caso queira ver os comandos use ${pfx}Menu ou clique no botão abaixo
`
}

//. TEXTO DO MENU DE INFORMAÇÕES
const menu_infos = (pfx, myconta) => {
return `
Essa é a lista de tutoriais e informações importantes sobre os comandos, e sobre mim

Leia com calma e atenção ${myconta.nome2}
`
}

//MENU LOJAS (LISTA DE LOJAS)

const lista_lojas = (pfx, myconta) => {
  return `
🛍️Lista de lojas
`
}

const loja1 = (pfx, myconta) => {
  return `
🪙 Loja para saldo (∆)
`
}
//. TEXTO DO COMANDO PLAY & PLAYMP4
const leg_play = (search_yt, msg_n_e, pfx) => {
return `
******************************
🏷️ Título: ${search_yt[0].titulo || msg_n_e}

⏳ Duração: ${search_yt[0].tempo || msg_n_e}

📅 Postado: ${search_yt[0].postado || msg_n_e}
******************************
`
}

//EXTRAIR O NOME PARA COLOCAR NO ARQUIVO
function extrairTitulo(texto) {
  const regex = /🏷️ Título: (.*?)\s*⏳ Duração:/;
  const resultado = texto.match(regex);
  if (resultado && resultado[1]) {
    return resultado[1].trim();
  }
  return "Play_music";
}

//COMANDO DE LOGOS
const leg_logos = (pfx, myconta) => {
  return `
Essas são as logos ${myconta.nome2}

Você também pode digita-las como um comando 

Por exemplo ${pfx}Neon makima
`
}
///////////////// PESQUISAS \\\\\\\\\\\\\
//PESQUISA DE CELULAR
const celular = (pfx, myconta, celula, infocelula) => {
  return `
******************************
📱Celular : ${celula}
******************************
❓Informações:
${infocelula}
******************************
`
}

//LETRA DE MÚSICA 
const letramusic = (pfx, myconta, titulo, compositor, letram) => {
  return `
******************************
🎼Letra da música
******************************
🎵 Música: ${titulo}

👨🏻‍🎤Artista: ${compositor}
******************************
🎶Letra:

${letram}
******************************
`
}
///////////////// INFOS \\\\\\\\\\\\\\\\\\
// INFORMAÇÕES DO ANTI-NOMES-MOD
const info_antinomemod = (pfx, myconta) => {
  return `
Vou te ensinar a usar o ANTI-NOMES-MOD , ${myconta.nome2}

******************************
🔠 ANTI-NOMES-MOD

ℹ️Esse recurso remove usuários que possuem símbolos no nome

🔛Para ativar/desativar use o seguinte comando:
${pfx}AntiNomeMod

Ou use o botão que esta no menu de adms

******************************
📨 MENSAGENS

ℹ️Caso não queira que a função fique mandando mensagem a cada usuário removido, clique no botão ao lado do ANTI-NOMES-MOD
******************************
🚫 PUNIÇÕES

⚠️ É nescessário configurar a punição desse recurso, caso contrário ele não irá fazer nada mesmo ativo

ℹ️Para configurar a punição, use o botão que esta abaixo do  botão de AntiNomeMod
******************************
`
}
// INFORMAÇÕES DO BEM VINDO
const info_bv = (pfx, myconta) => {
return `
Vou te ensinar como usar o bemvindo ${myconta.nome2}...

******************************
🛋️BEM VINDO

ℹ️ O bem-vindo é um recurso que da as boas vindas a novos integrantes do grupo quando eles entrarem

🔛 Para ativar e desativar use o seguinte comando
${pfx}BemVindo

Ou use o botão "🛋️BV" 

******************************
📸FOTO NO BEM VINDO

ℹ️ É possível adicionar uma foto na recepção

🔛 Para ativar e desativar a foto use o comando 

${pfx}FotoNoBv

Ou use o botão "📸FT"

⚙️Para alterar a imagem do bemvindo , existem 3 formas 

1- Escreva o comando ${pfx}Img_Bv na legenda de uma imagem

2- Marque uma imagem com o comando ${pfx}Img_Bv

3- Use um link direto de imagem do xatimg com o seguinte comando

${pfx}Img_Bv novo-link

******************************
📃LEGENDA DO BEM VINDO

ℹ️ A legenda é o texto ou legenda que será enviado quando um usuário novo entrar no grupo 

⚠️Aviso: quando o bem-vindo com imagem estiver ativo , o limite de caracteres cai para 1024 , isso ja somando com o nome do usuário que é adicionado a legenda.

⚙️Para alterar a legenda da recepção do seu grupo use o seguinte comando

${pfx}LegendaBv Seja bem vindo ao grupo da Makima, #nome#"

❓ é possível adicionar algumas tags na legenda para serem substituídas por informações, abaixo estão todas

<prefixo> = prefixo do bot
<nome> = nome do usuário
<username> = @ do usuário
<id_usu> = id do usuário
<hora> = Hora atual
<data> = Data
<nome_chat> = Nome do Grupo
<b_dia> = Bom dia/tarde/noite
******************************
`
}

//🛡️🛡️ INFORMAÇÕES DO ANTILINK
const info_antilink = (pfx, myconta) => {
return `
Vou te ensinar como usar o antilink ${myconta.nome2}...
******************************
🔗ANTILINK

ℹ️Essa função serve para identificar links em mensagens e punir quem os enviou.

⚠️ É PRECISO CONFIGURAR AS PUNIÇÕES PARA QUE O COMANDO FUNCIONE CORRETAMENTE

✅Para Ativar/Desativar use o comando:

${pfx}AntiLink

Ou use o Botão 🔗AntiLink
******************************
🗑️DELETE-LINK

ℹ️Isso serve para que o bot apague as mensagens com links identificados.

✅Para ativar/desativar essa função use o seguinte comando:

${pfx}Delete_Link

Ou use o botão 🗑️Deletar que vai estar ao lado do 🔗AntiLink
******************************
⛓️ PUNIÇÃO DO ANTILINK 

ℹ️As punições do antilink são penalidades que seram aplicadas ao usuário de ele enviar um link,  veja a info das penalidades no menu de informações.

******************************
`
}

// INFO SOBRE AS PUNIÇÕES
const info_punicoes = (pfx, myconta) => {
  return `
Varias funções possuem penalidades configuraveis como o anti-link, aqui está a explicação sobre cada punição, ${myconta.nome2}...

******************************
${tag_punir_anttlk(0)}

Não faz absolutamente nada quando o usuário fizer algo que tenha essa punição definida
******************************
${tag_punir_anttlk(1)}

⚠️AINDA NÃO ESTA FUNCIONANDO

Aplica uma advertência ao usuário, quando chegar ao limite de advertências do grupo ele será removido automaticamente.
******************************
${tag_punir_anttlk(2)}

Remove a permissão de enviar mensagens durante um tempo determinado nas configurações de mutar.
******************************
${tag_punir_anttlk(3)}

Remove o usuário temporariamente, dando a possibilidade dele voltar quando desejar.
******************************
${tag_punir_anttlk(4)}

Remove o usuário permanente, porem é possível usar o reviver para remover o bloqueio.
******************************
`
}
//. TEXTO DO COMANDO SPOTIFY CASO NÃO INFORME O LINK DA MÚSICA
const leg_spotify = (pfx, myconta) => {
return `
Cade o link do Spotify? 

ℹ️Caso não tenha o app , use o botão abaixo para pesquisar e copoiar o link da música 

⚠️Eu NÃO faço download de playlist

Exemplo de uso: 

${pfx}Spotify https://open.spotify.com/intl-pt/track/6BF3nZQkAg9qvE0DLVSfyH
`
}

// Erro no Spotify
const error_sptfy = (pfx, myconta) => {
  return `
⚠️Ocorreu um erro durante o download, tente mudar a música, ou tente usar um link do Youtube com o comando ${pfx}Play_audio

ℹ️Se o erro persistir consulte o criador do bot
`
}

//TEXTO DO COMANDO PLAY QUANDO NÃO INFORMA A MÚSICA
const nleg_play = (pfx, myconta) => {
return `
Cade o nome do vídeo/música?
Exemplo:
${pfx}Play Wtf 2
`
}

// Erro ao encontrar música em todos os plays
const error_play = (pfx, q, comando, myconta, error) => {
  return `
⚠️Ocorreu um erro durante o processo... Tente usar uma música diferente, ou use o comando ${pfx}Spotify

ℹ️ Esse erro pode ocorrer ao baixar um vídeo ou música maior que 50 mbs , ou que possua restrição de idade

o link deve ser no formato youtu.be

Motivo do erro: ${error}

ℹ️Se o erro persistir consute o criador do bot.
`
}

//TEXTO DOS COMANDOS PLAY_VIDEO && PLAY_AUDIO QUANDO NÃO INFORMA O LINK OU NOME
const nleg_playvd = (pfx, myconta) => {
return `
Cade o nome ou link da música no YouTube?

ℹ️Caso não queira abrir o app use o botão abaixo para abrir o site do YouTube

⚠️Eu não faço download de playlists.

Exemplo de uso:

${pfx}play_audio wtf 2 

${pfx}play_video https://youtu.be/amYS7o4nNJA
`
}

//TEXTO PARA QUANDO NÃO INFORMAR O LINK DO INSTAGRAM 
const leg_insta = (pfx, myconta) => {
return `
Cade o link do vídeo no Instagram?

ℹ️Serve para baixar reels,  storyes, postagens

⚠️ não funciona bem com destaques

Exemplo de uso: 

${pfx}Instagram https://www.instagram.com/reel/C48yoE2v9uy/
`
}

// Erro no Instagram 
const error_insta = (pfx, myconta) => {
  return `
⚠️Ocorreu um erro durante o download, talvez a postagem seja privada 

ℹ️Se o erro persistir consulte o criador do bot
`
}

// TEXTO PARA QUANDO NÃO INFORMAREM O LINK DO TIKTOK
const leg_tktk = (pfx, myconta) => {
return `
Cade o link do vídeo no Tik Tok?

⚠️ Talvez não funcione com videos privados

exemplo de uso:
${pfx}Tiktok https://vm.tiktok.com/ZMMW7LvCQ/
`
}

// TEXTO PARA QUANDO NÃO INFORMAR O LINK DO TWITTER// X
const leg_twt = (pfx, myconta) => {
return `
Cade o link do video no  Twitter?
`
}

// TEXTO PARA QUANDO NÃO INFORMAR O LINK FO FACEBOOK
const leg_facebk = (pfx, myconta) => {
return `
Cadê o link do vídeo no Facebook?

Exemplo de uso:
${pfx}facebook https://www.facebook.com/groups/1182639135484952/permalink/1944968845918640/?mibextid=rS40aB7S9Ucbxw6v
`
}
//SUGESTÃO
const tx_sugest = (pfx, myconta, q, comando) => {
  return `
${comando} do usuário ${myconta.nome2} ${myconta.id} :

${q}
`
}
//NÃO INFORMAR A SUGESTÃO
const notq_sugest = (pfx, myconta) => {
  return `
ℹ️As sugestões, bugs, e feedbacks encaminham mensagens diretamente para o dono do bot

Você pode enviar uma mensagem de texto com sua sugestão, exemplo:

${pfx}Sugestao Faça um comando que faça tal coisa, que sera útil para tal coisa 

${pfx}Bug os comandos tranferir e saldo apresentam falhas

${pfx}Feedback Achei o bot incrível!!!

Esse comando você também pode colocar na legenda de alguma midia , o que fara com que essa mídia seja enviada juntamente com a legenda
`
}

// TEXTO PARA QUANDO NÃO INFORMAR O TEXTO NO LOGOS DE 1 TEXTO
const leg_logo1 = (pfx, myconta) => {
return `
Cadê o texto da Logo? 

Exemplo de uso: 

${pfx}Neon ${myconta.nome2}

Ou caso queira todos os botões ja com um mesmo nome configurado use:

${pfx}Logos1 ${myconta.nome2}
`
}

//mesma coisa mas da logos2
const leg_logo2 = (pfx, myconta) => {
  return `
Cadê o texto da Logo? 

Exemplo de uso: 

${pfx}Marvel ${myconta.nome2}|User

Ou caso queira todos os botões ja configurado use:

${pfx}Logos2 ${myconta.nome2}|User

⚠️ Não se esqueça de separar usando  |
`
}

//texto para quando não informar o novo prefixo
const txt_notQ_pfx = (pfx, myconta) => {
  return `
Cade o novo prefixo?

⚠️Devem ser apenas 1 caractere

exemplo de uso:

${pfx}SetPrefix !
`
}

//TEXTO PARA QUANDO NÃO INFORMAR A APIKEY
const txt_notQ_key = (pfx, myconta) => {
  return `
Cade a apikey? 

exemplo de uso: 

${pfx}SetApiKey novakey

Ainda não comprou uma key? compre no site abaixo:
`
}

// RESGATOU MONEY ✅
const resgate = (pfx, myconta, valor) => {
  return `✅Resgate diário concluido, ganhou +${valor} ∆`
}

const jaResgatou = (pfx, myconta, tempo) => {
S_t = tempo.S
S = S_t
.replaceAll("0","⁰")
.replaceAll("1","¹")
.replaceAll("2","²")
.replaceAll("3","³")
.replaceAll("4","⁴")
.replaceAll("5","⁵")
.replaceAll("6","⁶")
.replaceAll("7","⁷")
.replaceAll("8","⁸")
.replaceAll("9","⁹")
return `
❌Você ja resgatou hoje , espere ate a 00:00 para poder resgatar novamente

⏲️Tempo restante: ${tempo.H}:${tempo.M}:${S}`
}

// USUÁRIO NÃO EXISTE NO SISTEMA 
const user_notfound = (pfx, myconta) => {
  return `❌ Esse id não possui conta no sistema`
}
//Faltou dados para transferir, ou tem letras no meio
const error_trans = (pfx, myconta, comando) => {
  return `
⚠️ Você deve marcar a mensagem do destinatário da transferência e escrever o valor após o comando
Exemplo:

${pfx+ comando} Valor
${pfx+ comando} 100

Ou Escrever o id do destinatário e o valor apos o comando 
Exemplo:

${pfx+ comando} id Valor
${pfx+ comando} 0000000 100

❗ Não é possível pegar reembolso caso faça uma transferência por engano, então preste bastante atenção
`
}

//DINHEIRO INSUFICIENTE 
const pocomoney = (pfx, myconta) => {
  return `⚠️ Dinheiro insuficiente`
}

//ADD SALDO
const add_saldo = (pfx, myconta, contadele, dinheiro, Data_Msg, Hora_Msg) => {
  return `
******************************
🏦 MAKIMA BANK

📄 COMPROVANTE DE RECARGA
${Data_Msg} - ${Hora_Msg}


🪙Valor: ${dinheiro}∆

🏦Tipo de transferência: Recarga

******************************
📥 DESTINO


👤Nome: ${contadele.nome2}

🆔ID: ${contadele.id}

******************************
`
}

//remove saldo
const del_saldo = (pfx, myconta, contadele, dinheiro, Data_Msg, Hora_Msg) => {
  return `
******************************
🏦 MAKIMA BANK

📄 COMPROVANTE MULTA
${Data_Msg} - ${Hora_Msg}


💸Valor Removido: ${dinheiro}∆

🏦Tipo de transferência: Multa❗

******************************
📥 DESTINO


👤Nome: ${contadele.nome2}

🆔ID: ${contadele.id}

******************************
`
}
//COMPROVANTE DE TRANSFERÊNCIA
const transferir = (pfx, myconta, contadele, dinheiro, Data_Msg, Hora_Msg) => {
  return `
******************************
🏦 MAKIMA BANK

📄 COMPROVANTE DE TRANSFERÊNCIA
${Data_Msg} - ${Hora_Msg}


🪙Valor: ${dinheiro}∆

🏦Tipo de transferência: Interna

******************************
📥 DESTINO


👤Nome: ${contadele.nome2}

🆔ID: ${contadele.id}

******************************
📤 ORIGEM

👤Nome: ${myconta.nome2}

🆔ID: ${myconta.id}

******************************
`
}

// JOGO DA VELHA 

const chatMove = (pfx, myconta, boardnow) => {
  return `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n${boardnow.X} VS ${boardnow.O}
     
❌ : ${boardnow.X_name}
⭕ : ${boardnow.O_name}
     
 Sua vez : ${boardnow.turn == "X" ? boardnow.X_name : boardnow.O_name}
     
caso queira resetar o jogo, mande um adm ou os jogadores que estão jogando utilizar o comando ${pfx}rv
`
}
//mensagem quando o prefixo for configurado
const msg_prefix_set = (pfx, myconta) => {
  return `✅ O prefixo foi alterado para ${pfx}`
}

//mensagem de dono resetado
const reset_dono = (pfx, myconta) => {
  return `✅O dono do bot foi resetado com sucesso, para configurá-lo novamente reinicie o bot e olhe o código no terminal`
}

//mensagem de token resetado
const reset_token = (pfx, myconta) => {
  return `✅O token do bot foi resetado com sucesso , agora você deve reiniciar manualmente o bot pelo terminal para configurar um novo token`
}

// configurar SetApiKey
const new_apikey = (pfx, myconta) => {
  return `✅ Api key configurada com sucesso`
}
////////📨📨📨📨 MENSAGENS REDUNDANTES\\\\\\\\\\\\\\
//TAGS DE INFORMAÇÕES , DONO , ADM , ETC
//. MENSAGEM DE NÃO ADMINISTRADOR DE GRUPO
const msg_notadm = (pfx, myconta) => {
  return `⚠️Somente administradores de grupo podem usar esse comando.`
}

const msg_bot_noadm = (pfx, myconta) => {
  return `⚠️O bot precisa ser um admin do grupo`
}
//AVISO QUE O COMANDO É APENAS PARA GRUPOS
const msg_notGP = (pfx, myconta) => {
  return `⚠️Esse comando é específico para Grupos`
}

//AVISO DE COMANDO Q SO O DONO PODE USAR
const msg_sodono = (pfx, myconta) => {
  return `⚠️Esse comando é específico para o Dono do bot`
}

//. MENSAGEM DE AGUARDE
const msg_aguarde = (pfx, myconta) => {
  return `Aguarde um momento ${myconta.nome2} ...`
}

//PUNIÇÃO

//QUANDO TIVER UM ERRO NOS BOTÕES DAS PUNIÇÕES
const msg_punir_error = (pfx, myconta, comando) => {
  return `⚠️Erro, tente usar o comando de texto ${pfx+ comando}`
}
///////////CONFIGURAÇÕES DO BOT E GRUPOS\\\\\\\\
//NÃO INFORMAR LINK DE IMAGEM NO BV
const bv_N_lk_Img = (pfx, myconta) => {
  return `⚠️O link precisa ser de uma imagem, veja como usar nas informações do bem vindo`
}

///////////TEXTOS DOS BANS \\\\\\\\\\\\\\\
//Mute ANTILINK
const txt_mute_Antilink = (pfx, nome_usu, id_usu) => {
  return `
🔗 ${nome_usu} ${id_usu} Foi Mutado🔇 do grupo por envio de links
`
}

//MUTE NOMEMOD
const txt_mute_nomemod = (pfx, nome_usu, id_usu) => {
  return `
🔠 ${nome_usu} ${id_usu} Foi Mutado🔇 do grupo por ter caracteres especiais no nome
`
}

//kick ANTILINK
const txt_kick_Antilink = (pfx, nome_usu, id_usu) =>{
  return `
🔗 ${nome_usu} ${id_usu} Foi Kickado✖️ do grupo por envio de links`
}

//KICK NOMEMOD
const txt_kick_nomemod = (pfx, nome_usu, id_usu) =>{
  return `
🔠 ${nome_usu} ${id_usu} Foi Kickado✖️ do grupo por ter caracteres especiais no nome`
}

//Ban ANTILINK
const txt_ban_Antilink = (pfx, nome_usu, id_usu) => {
  return `
🔗 ${nome_usu} ${id_usu} Foi Banido🚫 do grupo por envio de links
`
}

//BAN NOMEMOD
const txt_ban_nomemod = (pfx, nome_usu, id_usu) => {
  return `
🔠 ${nome_usu} ${id_usu} Foi Banido🚫 do grupo por ter caracteres especiais no nome
`
}


//Remove mute
const txt_remove_mute = (pfx, id) => {
  return `🔊 O usuário ${id} Foi desmutado por um admin`
}

//DESBANIDO DO GRUPO
const txt_remove_ban = (pfx, id) => {
  return `✅ O usuário ${id} Foi Desbanido por um admin`
}

//BANIDO DO GRUPO
const txt_banido = (pfx, id) => {
  return `🚫O usuário ${id} Foi banido do grupo por um admin`
}

//Kikado DO GRUPO
const txt_kick = (pfx, id) => {
  return `✖️O usuário ${id} Foi Kikado do grupo por um admin`
}

//MUTADO NO GRUPO
const txt_mutado = (pfx, id) => {
  return `🔇O usuário ${id} Foi mutado no grupo por um admin`
}

// info ban, mute , desban, desmute
const txt_noQ_bmdt = (pfx, myconta, comando) => {
  return `
Marque a mensagem da pessoa com esse comando ou digite o id dela apos o comando, exemplo:

${pfx+comando} 0000
`
}

// TEXTOS DOS COMANDOS DE EDITAR PERFIL
// nao informou o nome de exibiçao
const txt_notQ_name = (pfx, myconta) => {
  return `Digite seu nick apos o comando , exemplo: \n${pfx}Edit_name ${myconta.nome2}`
}

// nao informou a biografia 
const txt_notQ_bio = (pfx, myconta) => {
  return `Digite sua Biografia apos o comando , exemplo: \n${pfx}Edit_Mydesc Criador da makima telegram`
}

//ERRO NA IDADE
const error_idd = (pfx, myconta) => {
  return `
Digite sua idade apos o comando, e a idade precisa ser um número

exemplo: ${pfx}Edit_Myidd 20
`
}

//Não informou o genero
const txt_error_gen = (pfx, myconta) => {
  return `
Digite seu gênero apos o comando , exemplo: 
${pfx}Edit_MyGen Masculino
`
}

//Erro na orientação sexual
const txt_error_sx = (pfx, myconta) => {
  return `
Digite sua orientação sexual apos o comando , exemplo: 
${pfx}Edit_Mysx Hetero
`
}

//Nome editado com sucesso
const txt_nome_edited = (pfx, myconta) => {
  return `✅O nome de exibição foi editado com sucesso`
}


//Biografia editado com sucesso
const txt_bio_edited = (pfx, myconta) => {
  return `✅A biografia foi editada com sucesso`
}

//Idade editado com sucesso
const txt_idd_edited = (pfx, myconta) => {
  return `✅A Idade foi editada com sucesso`
}

//Genero editado com sucesso
const txt_gen_edited = (pfx, myconta) => {
  return `✅Genero editado com sucesso`
}

// orientação sexual editada com sucesso
const txt_sx_edited = (pfx, myconta) => {
  return `✅Orientação Sexual editada com sucesso`
}

/////// Bem vindo \\\\\\
//erro na imagem do bem vindo && Efeitos img
const notquote_imgbv = (pfx, myconta) =>{
  return `
Você deve enviar uma imagem com esse comando na legenda , ou marcar uma imagem com esse comando`
}
// Erro no comando de legenda
const notquote_legenda = (pfx, myconta) => {
  return `
Você deve enviar uma imagem com esse comando na legenda, ou marcar a imagem com esse comando 

exemplo:
${pfx}Legenda Makima Reborn/O melhor Bot
`
}

//Imagem setada
const New_img_bv = (pfx, myconta) => {
  return `✅Imagem do bem vindo atualizada`
}


//TAGS DAS PUNIÇÕES DO ANTILINK
const tag_punir_anttlk = (fuc) => {
if(fuc == 0) return "Nada🤷🏻‍♀️"
if(fuc == 1) return "Em Breve😳" //Advertência❗
if(fuc == 2) return "Mutar🔇"
if(fuc == 3) return "Kick✖️"
if(fuc == 4) return "Ban❌"

if(fuc < 0 && fuc > 4)return "não identificado"
}

//////////// CONSOLE \\\\\\\\\\\\\\
//Texto de token não configurado
const no_token = () => {
  return `⚠️Seu token não foi configurado, envie ele aqui para configurar automaticamente`
}

//token configurado
const y_token = (token) => {
  return `✅Token configurado para ${token}`
}

////////////// BOTÕES \\\\\\\\\\\\\
//BOTÕES DO MENU PRINCIPAL
const BT_MENUP = [
  [{
    text: `📚Grupo oficial da Makima`,
    url: 'https://t.me/titannickbub_chat'
  }],
  [{
    text: `ℹ️Infos e tutoriais`,
    callback_data: `infos`
  }, {
    text: `🤖Info Do Bot`,
    callback_data: `infobot`
  }],
  [{
    text: `🛡️Admin de grupo`,
    callback_data: "menu_adm"
  }],
  [ {
    text: `🔰Menu do Dono`,
    callback_data: "menu_dono"
  }],
  [{
    text: `👤Menu do User`,
    callback_data: `menu_user`
  }],
  [{
    text: `🎮Jogos`,
    callback_data: 'jogos'
  }],
  [{
    text: `📥Downloads`,
    callback_data: 'donwloads'
  }], 
  [{
    text: `🔎Pesquisas`,
    callback_data: 'pesquisas'
  }],
  [{
    text: `🎨Logos 1 texto`,
    callback_data: 'logos1'
  }, {
    text: "🎨Logos 2 texto",
    callback_data: "logos2"
  }], 
  [{
    text: "🖼️Efeitos Imagem",
    callback_data: 'efeitosimg'
  }]
]

//BOTOES DO MENU DE ADMS
const BT_MENU_ADM = (pfx, myconta, SBemVindo, SFotoNoBv, Santilink, Sdelete_link, AntiNomeMod, Block_Msg_Nome_Mod, SsoAdm, Smobobn) => {
  return [
    [{
      text: `🛋️Bem-Vimdo? ${SBemVindo ? "✅" : "❌"}`,
      callback_data: "bemvindo"
    }],
    [{
      text: `📸Com Foto? ${SFotoNoBv ? "✅" : "❌"}`,
      callback_data: "fotonobv"
    }],
    [{
      text: `🔗AntiLink? ${Santilink ? "✅" : "❌"}`,
      callback_data: "antilink"
    }],
    [{
      text: `🗑️Deletar Links? ${Sdelete_link ? "✅" : "❌"}`,
      callback_data: "delete_link"
    }],
    [{
      text: `🔠Anti-Nomes-Mod? ${AntiNomeMod ? "✅" : "❌"}`,
      callback_data: "antinomemod"
    }],
    [{
      text: `📨Mensagens do antinome? ${!Block_Msg_Nome_Mod ? "✅" : "❌"}`,
      callback_data: "blockmsgnomemod"
    }],
    [{
      text: `🛡️So Adm? ${SsoAdm ? "✅" : "❌"}`,
      callback_data: 'soadm'
    }],
    [{
      text: `🪀Brincadeiras? ${Smobobn? "✅" : "❌"}`,
      callback_data: 'modobn'
    }],
    [{
      text: "🚫Punição do AntiLink",
      callback_data: "punir_antilink"
    }],
    [{
      text: "🚫Punição do Anti-Nomes-Mod",
      callback_data: "punir_nomemod"
    }],
    [{
      text:"🥇Rank de Mensagens",
      callback_data: "rankativo"
    }]
  ];
}


//. MENU ANTIGO, NÃO REMOVI POR PREGUIÇA
const menu = (prefixo, usu, id) => {
return `
menu original, ignore
`;
}

// EXPORTS DOS TEXTOS, SE NÃO SOUBER O QUE ESTÁ FAZENDO, NÃO MECHA AQUI
module.exports = {
menu , login, perfil, menu_ft, donwloads_ft, edit_pf,
leg_play, menu_infos, start_ft , msg_aguarde, leg_spotify,
msg_notadm, msg_notpv, menu_adm, info_bv, msg_notGP,
tag_punir_anttlk, nleg_play, nleg_playvd, leg_insta, leg_tktk,
leg_twt, leg_facebk , leg_logo1, leg_logo2, leg_logos, info_antilink, punir_antilink,
 msg_punir_error, info_punicoes, bv_N_lk_Img,
txt_kick_Antilink, txt_ban_Antilink, txt_mute_Antilink, txt_remove_mute,
txt_remove_ban, txt_notQ_name, txt_nome_edited, txt_notQ_bio, txt_bio_edited,
error_idd, txt_idd_edited, txt_error_gen, txt_gen_edited, txt_error_sx, txt_sx_edited,
txt_banido, txt_noQ_bmdt, txt_mutado, y_token, no_token, error_play,
error_sptfy, error_insta, txt_mute_nomemod, txt_kick_nomemod, txt_ban_nomemod, punir_antinomemod,
msg_bot_noadm, msg_ping, msg_sodono, menu_dono, txt_notQ_pfx, msg_prefix_set, reset_token, reset_dono,
new_apikey, txt_notQ_key, info_antinomemod, pesquisas, celular,
extrairTitulo, letramusic, txt_kick, notquote_imgbv, New_img_bv, efeitosimg, BT_MENUP, BT_MENU_ADM, notquote_legenda,
menu_user, txt_saldo, resgate, jaResgatou, error_trans, pocomoney, transferir, add_saldo, del_saldo,
user_notfound, tx_sugest, notq_sugest, contador_msgs, lista_lojas, loja1, chatMove, jogos_txr
};
