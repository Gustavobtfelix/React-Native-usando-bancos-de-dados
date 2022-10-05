import { db } from "./SQLite"

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
         "Notas " +
         "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categotia TEXT, texto TEXT;)")
    })
}