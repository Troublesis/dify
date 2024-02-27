'use client'
import type { FC } from 'react'
import React from 'react'
import { useBoolean, useClickAway } from 'ahooks'
import cn from 'classnames'
import { ChevronSelectorVertical } from '@/app/components/base/icons/src/vender/line/arrows'
import { Check } from '@/app/components/base/icons/src/vender/line/general'
type Item = {
  value: string
  label: string
}
type Props = {
  trigger?: JSX.Element
  options: Item[]
  value: string
  onChange: (value: any) => void
  uppercase?: boolean
  popupClassName?: string
  readonly?: boolean
  showChecked?: boolean
}

const TypeSelector: FC<Props> = ({
  trigger,
  options: list,
  value,
  onChange,
  uppercase,
  popupClassName,
  readonly,
  showChecked,
}) => {
  const item = list.find(item => item.value === value)
  const [showOption, { setFalse: setHide, toggle: toggleShow }] = useBoolean(false)
  const ref = React.useRef(null)
  useClickAway(() => {
    setHide()
  }, ref)
  return (
    <div className={cn(!trigger && 'left-[-8px]', 'relative')} ref={ref}>
      {trigger
        ? (
          <div
            onClick={toggleShow}
          >
            {trigger}
          </div>
        )
        : (
          <div
            onClick={toggleShow}
            className={cn(showOption && 'bg-black/5', 'flex items-center h-5 pl-1 pr-0.5 rounded-md text-xs font-semibold text-gray-700 cursor-pointer hover:bg-black/5')}>
            <div className={cn('text-sm font-semibold', uppercase && 'uppercase')}>{item?.label}</div>
            <ChevronSelectorVertical className='w-3 h-3 ' />
          </div>
        )}

      {(showOption && !readonly) && (
        <div className={cn(popupClassName, 'absolute z-10 top-[24px] w-[120px]  p-1 border border-gray-200 shadow-lg rounded-lg bg-white')}>
          {list.map(item => (
            <div
              key={item.value}
              onClick={() => {
                setHide()
                onChange(item.value)
              }}
              className={cn(uppercase && 'uppercase', 'flex items-center h-[30px] justify-between min-w-[44px] px-3 rounded-lg cursor-pointer text-[13px] font-medium text-gray-700 hover:bg-gray-50')}
            >
              <div>{item.label}</div>
              {showChecked && item.value === value && <Check className='text-primary-600 w-4 h-4' />}
            </div>
          ))
          }
        </div>
      )
      }
    </div>
  )
}
export default React.memo(TypeSelector)
