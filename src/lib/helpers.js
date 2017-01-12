// @flow

import Immutable from 'immutable'

export const find = (list: string[], item: string): boolean => list.some(k => k === item)

/**
 * get index from Immutable.List by path name
 */
export const getAndFindIndex = (state: Immutable.Map, firstPath: string, secondPath: string, value: any) =>
  state.get(firstPath).findIndex(i => i.get(secondPath) === value)

/**
 * keyToUpdate: to select what field will be updated
 *    -> fieldToUpdate: gets the new value
 * keyForComparison: what field to compare
 *    -> fieldForComparison: the value that will be compared when iterating over the list
 * list: path to list, ie Map({ list: Immutable.List([...]) })
 */
const updateMapInListInMapByKey = (
  map: Immutable.Map,
  list: string,
  keyForComparison: string,
  valueForComparison: string,
  keyToUpdate: string,
  fieldToUpdate: string
) => map.setIn([
      list,
      getAndFindIndex(map, list, keyForComparison, valueForComparison),
      keyToUpdate],
    fieldToUpdate)
