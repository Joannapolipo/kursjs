function searchInDb(query) {
    if(!query) {
        // zwrócenie null mogłoby oznaczać, że nie ma wyników dla tej frazy
        throw new Error("Podaj frazę wyszukiwania");
    }

    return `Wyniki wyszukiwania dla frazy: ${query}`;
}

try {
    const results = searchInDb("laptop");

    console.log(results);
} catch(e) {
    console.log(`Wystąpił błąd: ${e.message}`);
}

