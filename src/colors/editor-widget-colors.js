import editorWidgetJson from './json/editorWidget.json'
import editorSuggestWidgetJson from './json/editorSuggestWidget.json'
import editorSuggestWidgetStatusJson from './json/editorSuggestWidgetStatus.json'
import editorHoverWidgetJson from './json/editorHoverWidget.json'
import editorGhostTextJson from './json/editorGhostText.json'
import editorStickyScrollJson from './json/editorStickyScroll.json'
import editorStickyScrollHoverJson from './json/editorStickyScrollHover.json'
import debugExceptionWidgetJson from './json/debugExceptionWidget.json'
import editorMarkerNavigationJson from './json/editorMarkerNavigation.json'
import editorMarkerNavigationErrorJson from './json/editorMarkerNavigationError.json'
import editorMarkerNavigationWarningJson from './json/editorMarkerNavigationWarning.json'
import editorMarkerNavigationInfoJson from './json/editorMarkerNavigationInfo.json'

export default function editorWidget() {
  return {
    ...editorWidgetJson,
    ...editorSuggestWidgetJson,
    ...editorSuggestWidgetStatusJson,
    ...editorHoverWidgetJson,
    ...editorGhostTextJson,
    ...editorStickyScrollJson,
    ...editorStickyScrollHoverJson,
    ...debugExceptionWidgetJson,
    ...editorMarkerNavigationJson,
    ...editorMarkerNavigationErrorJson,
    ...editorMarkerNavigationWarningJson,
    ...editorMarkerNavigationInfoJson
  }
}
