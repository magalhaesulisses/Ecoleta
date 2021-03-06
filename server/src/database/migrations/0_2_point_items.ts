import Knex from 'knex'; //K maiusculo para TIPO

export async function up(knex:Knex) {
    return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary;
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        table.string('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    });

}; //Commit
export async function down(knex:Knex) {
    return knex.schema.dropTable('point_items');

}; //Rollback