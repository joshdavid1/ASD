function (doc) {
    if (doc.type === "business") {
        emit(doc._id.substr(7), {id: doc._id, rev: doc._rev, type: doc.type, name: doc.name, converted: doc.converted, companies: doc.companies});
    }
}