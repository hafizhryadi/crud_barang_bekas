'use strict'

const Item = use('App/Models/Item')

class ItemController {
  async index ({ response }) {
    const items = await Item.all()
    return response.json(items)
  }

  async store ({ request, response }) {
    const { nama, deskripsi, harga } = request.post()
    const item = new Item()
    item.nama = nama
    item.deskripsi = deskripsi
    item.harga = harga
    await item.save()
    return response.status(201).json(item)
  }

  async show ({ params, response }) {
    const item = await Item.find(params.id)
    if (!item) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    return response.json(item)
  }

  async update ({ params, request, response }) {
    const item = await Item.find(params.id)
    if (!item) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    item.nama = request.input('nama')
    item.deskripsi = request.input('deskripsi')
    item.harga = request.input('harga')
    await item.save()
    return response.status(200).json(item)
  }

  async destroy ({ params, response }) {
    const item = await Item.find(params.id)
    if (!item) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await item.delete()
    return response.status(204).json(null)
  }
}

module.exports = ItemController