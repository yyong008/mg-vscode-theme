import colors from '../designs/index.js'

/**
 * @type {import('../types/Git').default}
 */
const gitDecoration = {
  ['gitDecoration.addedResourceForeground']: '',
  ['gitDecoration.modifiedResourceForeground']: '',
  ['gitDecoration.deletedResourceForeground']: '',
  ['gitDecoration.renamedResourceForeground']: '',
  ['gitDecoration.stageModifiedResourceForeground']: '',
  ['gitDecoration.stageDeletedResourceForeground']: '',
  ['gitDecoration.untrackedResourceForeground']: colors.volcanoColors900,
  ['gitDecoration.ignoredResourceForeground']: '',
  ['gitDecoration.conflictingResourceForeground']: '',
  ['gitDecoration.submoduleResourceForeground']: ''
}

export default { ...gitDecoration }
