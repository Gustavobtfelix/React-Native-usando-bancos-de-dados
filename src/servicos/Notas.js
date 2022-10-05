import { db } from "./SQLite"

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
         "Notas " +
         "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categotia TEXT, texto TEXT;)")
    })
}

export async function adicionaNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?, ?, ?);",
            [nota.titulo, nota.categoria, nota.texto],
            () => {resolve("Nota adicionada com sucesso!")})
        })
    })
}