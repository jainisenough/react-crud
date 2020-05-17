// custom-queries.js
import { queryHelpers, buildQueries } from '@testing-library/react';

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByName = (...args) => queryHelpers.queryAllByAttribute('name', ...args);
const queryAllByType = (...args) => queryHelpers.queryAllByAttribute('type', ...args);

const getMultipleError = (c, value) => `Found multiple elements with the ${c} attribute of: ${value}`;
const getMissingError = (c, value) => `Unable to find an element with the ${c} attribute of: ${value}`;

const [queryByName, getAllByName, getByName, findAllByName, findByName] = buildQueries(
  queryAllByName,
  getMultipleError,
  getMissingError
);

const [queryByType, getAllByType, getByType, findAllByType, findByType] = buildQueries(
  queryAllByType,
  getMultipleError,
  getMissingError
);

export {
  queryByName,
  getAllByName,
  getByName,
  findAllByName,
  findByName,
  queryAllByName,
  queryByType,
  getAllByType,
  getByType,
  findAllByType,
  findByType,
  queryAllByType
};
