import ListViewIcon from '@material-design-icons/svg/outlined/format_list_bulleted.svg'
import GridViewIcon from '@material-design-icons/svg/outlined/grid_view.svg'
import classNames from 'classnames'
import { atom, useAtom } from 'jotai'

import { withDebugLayer } from '@dev/debug-layer/debug-layer'
import { Button } from '@ui/button/button'
import { Icon } from '@ui/icon/icon'

export type ViewMode = 'grid' | 'list'

export const viewModeAtom = atom<ViewMode>('grid')

function ViewModesComponent() {
  const [viewMode, setViewMode] = useAtom(viewModeAtom)

  return (
    <div className="flex items-center gap-1">
      <div className="laptop:small-bold">Display</div>

      <Button
        title="View products as a grid"
        disabled={viewMode === 'grid'}
        className={classNames('p-3 laptop:p-0', {
          '!text-brand-nebula': viewMode === 'grid',
        })}
        onClick={() => setViewMode('grid')}
      >
        <Icon icon={GridViewIcon} />
      </Button>
      <Button
        title="View products as a list"
        disabled={viewMode === 'list'}
        className={classNames('p-3 laptop:p-0', {
          '!text-brand-nebula': viewMode === 'list',
        })}
        onClick={() => setViewMode('list')}
      >
        <Icon icon={ListViewIcon} />
      </Button>
    </div>
  )
}

export const ViewModes = withDebugLayer(ViewModesComponent, 'ViewModesWidget')
