const http = require("http");
const alunos = [
{ id: 1, nome: "Ana", idade: 17 },
{ id: 2, nome: "Carlos", idade: 18 },
{ id: 3, nome: "Maria", idade: 17 },///
{ id: 4, nome: "João", idade: 19 },
{ id: 5, nome: "Beatriz", idade: 16 },
{ id: 6, nome: "lucas", idade: 20 },
];
const servidor = http.createServer((req, res) => {
if (req.url === "/") {
res.writeHead(200, {
"Content-Type": "text/plain; charset=utf-8"
});
res.end("API da Escola");
}
else if (req.url === "/alunos") {
res.writeHead(200, {
"Content-Type": "application/json; charset=utf-8"
});
res.end(JSON.stringify(alunos));
}
else if (req.url === "/aluno") {
const aluno = alunos[0];
res.writeHead(200, {
"Content-Type": "application/json; charset=utf-8"
});
res.end(JSON.stringify(aluno));
}
else if (req.url === "/sobre") {

res.writeHead(200, {
"Content-Type": "text/plain; charset=utf-8"
});
res.end("API desenvolvida pelos estudantes");
}
else if (req.url === "/alunos/maiores") {
const maiores = alunos.filter(aluno => aluno.idade >= 18);
res.writeHead(200, {
"Content-Type": "application/json; charset=utf-8"
});
res.end(JSON.stringify(maiores));
}
else {
res.writeHead(404, {
"Content-Type": "text/plain; charset=utf-8"
});
res.end("Rota não encontrada");
}
});
servidor.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000");

});