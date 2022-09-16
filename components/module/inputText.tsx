import React from 'react'

interface Props {
  onChangeHandle: (e: any) => void
  value?: string
  type: string
  icon: React.ReactElement
}

const InputText = ({ onChangeHandle, value, type, icon }: Props) => {
  return (
    <div className='bg-[#E8E7E8] p-2 rounded md:max-w-md'>
      <div className='flex items-center gap-3'>
        {icon}
        <input className='w-[100%] bg-[#E8E7E8] outline-none' type={type} value={value} onChange={(e) => onChangeHandle(e.target.value)} />
      </div>
    </div>
  )
}

export default InputText
