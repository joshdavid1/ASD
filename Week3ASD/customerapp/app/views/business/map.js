function (doc) {
    if (doc.type === "business") {
        emit(doc._id.substr(7), {name: doc.name, converted: doc.converted, company: doc.company});
    }
}