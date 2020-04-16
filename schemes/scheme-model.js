const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add, 
  addStep,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id });
}

function findSteps(id) {
  return db('steps')
    .where({ scheme_id : id });
}

function add(schemeData) {
  return db('schemes')
    .insert(schemeData);
}

function addStep(step, scheme_id) {
  return db('steps')
    .insert({ ...step, scheme_id });
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update( changes );
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del()
}