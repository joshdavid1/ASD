function (doc) {
    if (doc.type === "business") {
        emit(doc._id.substr(7), {id: doc._id, rev: doc._rev, name: doc.name, converted: doc.converted, company: doc.company});
    }
}