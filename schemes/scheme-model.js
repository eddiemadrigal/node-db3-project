const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add
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

function add(newScheme) {
  return db('schemes')
    .insert(newScheme)
}