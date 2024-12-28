'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('nama').notNullable()
      table.text('deskripsi').notNullable()
      table.integer('harga').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
