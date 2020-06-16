
import Knex from 'knex';

export async function seed(knex:Knex){
   await knex('items').insert([
        
           {title: 'Lâmpadas',              image: 'lampadas.svg'},
           {title: 'Pilhas / Baterias',     image: 'baterias.svg'},
           {title: 'Papeis / Papelão',      image: 'papeis-papelao.svg'},
           {title: 'Resíduos Eletrônicos',  image: 'eletronicos.svg'},
           {title: 'Resíduos Orgânicos',    image: 'organicos.svg'},
           {title: 'Óleos',                 image: 'oleo.svg'},
    ]);
}