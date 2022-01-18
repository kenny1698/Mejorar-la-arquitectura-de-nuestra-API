class ContenedorMemoria {
  constructor() {
    this.elementos = []
  }

  listar(id) {
    const elem = this.elementos.find(elem => elem.id == id)
    if (!elem) {
      throw new Error('Error al listar por id: no encontrado')
    } else {
      return elem
    }
  }

  listarAll() {
    return [...this.elementos]
  }

  guardar(newElem) {
    this.elementos.push(newElem)
    return newElem
  }

  actualizar(newElem) {
    const index = this.elementos.findIndex(p => p.id == elem.id)
    if (index == -1) {
      throw new Error(`Error al actualizar: no se encontró el id ${elem.id}`)
    } else {
      this.elementos[index] = newElem
      return newElem
    }
  }

  borrar(id) {
    const index = this.elementos.findIndex(elem => elem.id == id)
    if (index == -1) {
      throw new Error(`Error al borrar: no se encontró el id ${id}`)
    } else {
      return this.elementos.splice(index, 1)
    }
  }

  borrarAll() {
    this.elementos = []
  }
}

export default ContenedorMemoria
