import colors from '../designs/index.js'

/**
 * @type {import('../types/Git').default}
 */
const gitDecoration = {
  ['gitDecoration.addedResourceForeground']: colors.grayColors400,
  ['gitDecoration.modifiedResourceForeground']: colors.volcanoColors300,
  ['gitDecoration.deletedResourceForeground']: colors.grayColors900,
  ['gitDecoration.renamedResourceForeground']: colors.blueColors400,
  ['gitDecoration.stageModifiedResourceForeground']: colors.blueColors500,
  ['gitDecoration.stageDeletedResourceForeground']: colors.greenColors1000,
  ['gitDecoration.untrackedResourceForeground']: colors.greenColors700,
  ['gitDecoration.ignoredResourceForeground']: colors.greenColors8000,
  ['gitDecoration.conflictingResourceForeground']: colors.yellowColors600,
  ['gitDecoration.submoduleResourceForeground']: colors.cyanColors600
}

export default { ...gitDecoration }
