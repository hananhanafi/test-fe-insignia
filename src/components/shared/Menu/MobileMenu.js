import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'

const MobileMenu = ({show = false, onClose}) => {
  const [open, setOpen] = useState(show)
  
  useEffect(() => {
    setOpen(show)
  
    return () => {
      setOpen(false)
    }
  }, [show])

  const cancelButtonRef = useRef(null)
  const menuList = ['Videos','People','Documents','Events','Communities','Favorites','Channels']

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 sm:hidden" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-main bg-opacity-75 text-main text-left h-screen w-screen transition-all flex flex-col justify-center">
                
                <div className="bg-main-light text-main pb-4 mx-4 rounded-lg">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-center">
                        Main Menu
                      </Dialog.Title>
                      <hr className='text-main opacity-10 my-2'/>
                      <div className="text-left text-main">
                        {
                          menuList.map((menu) => {
                            return (
                              <button key={menu} className='block mb-2 font-medium hover:bg-main hover:bg-opacity-10 px-4 py-2 w-full text-left'>
                                  {menu}
                              </button>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 flex w-full items-center justify-center text-center">
                  <button
                    type="button"
                    className="bg-transparent text-3xl font-semibold text-white hover:active:focus:bg-transparent"
                    onClick={() => onClose()}
                  >
                    <FaTimes onClick={() => onClose()}/>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileMenu;
