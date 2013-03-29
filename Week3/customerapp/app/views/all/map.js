function (doc) {
        emit(doc._id, {id: doc._id, rev: doc._rev, age: doc.age, type: doc.type, name: doc.name, converted: doc.converted, company: doc.company});
}