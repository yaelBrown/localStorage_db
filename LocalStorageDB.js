class LocalStorage {
    constructor(name, ) {
        _n = name
        if (!Boolean(localStorage.getItem(_n))) {
            localStorage.setItem(_n, JSON.stringify({}))
        } else {
            console.warn("Database: " + _n + " , may already exist in local storage. Run drop() if you want remove the database.")
        }
    }

    save(e) {
        let db = this._pullFromLS()
        const idx = Object.keys(db).length
        db[idx] = e
        return this._pushToLS(db)
    }

    get_all() {
        let db = this._pullFromLS()
        return db
    }

    get(e) {
        let out = null
        let db = this._pullFromLS()
        if (typeof e === 'number') {
            out = db[e]
        }
    }

    update(){}
    delete(){}
    drop(){}
    export(){}
    import()
    
    _pullFromLS() {
        return localStorage.get(_n)
    }
    
    _pushToLS(e){
        return localStorage.set(_n, e)
    }
}