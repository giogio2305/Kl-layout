import React from 'react'
import Link from 'next/link'
import { BriefcaseIcon, CashIcon, CloudUploadIcon, CreditCardIcon, DocumentReportIcon, GiftIcon, PresentationChartLineIcon, ShoppingBagIcon, SpeakerphoneIcon } from '@heroicons/react/outline'
function MyKlapeers() {
    const Fit = [
        {
            icon: <ShoppingBagIcon className="h-9 w-9 text-white "/>,
            title: 'Mes Commandes',
            des: "Suivez, annulez, confirmez vos commandes sur l'ensemble de la plateforme Klapeers",
            disabled: false,
            path: '_shopping/shopping-list-command-buyer/'
        },
        {
            icon: <CashIcon className="h-9 w-9 text-white "/>,
            title: 'Mes Moyens de payements',
            des: "Consultez, Activez ou désactivez vos modes de payement sur la plateforme Klapeers",
            disabled: true,
            path: '#'
        },
        {
            icon: <DocumentReportIcon className="h-9 w-9 text-white "/>,
            title: 'Mes factures et Dévis',
            des: "Consultez, Annulez, confirmez vos factures et dévis sur l'ensembles des services et solutions Klapeers",
            disabled: true,
            path: '#'
        },
        {
            icon: <SpeakerphoneIcon className="h-9 w-9 text-white "/>,
            title: 'Klapeers Advertising',
            des: "Lancez des campagnes publicitaires pour vos produits afin de vendre plus et de booster votre chiffre d'affaire",
            disabled: true,
            path: '#'
        },
    ]

    const Sit = [
        {
            icon: <CloudUploadIcon className="h-9 w-9 text-white "/>,
            title: 'Klapeers Cloud',
            des: "Sauvegardez vos données et accedez à vos informations à tout temps",
            disabled: true,
            path: '#'
        },
        {
            icon: <GiftIcon className="h-9 w-9 text-white "/>,
            title: "Mes Points d'Experience(XP)",
            des: "Obtenez des points d'experience et bénéficier des produits/services GRATUITS",
            disabled: true,
            path: '#'
        },
        {
            icon: <BriefcaseIcon className="h-9 w-9 text-white "/>,
            title: 'Klapeers Business',
            des: "Béneficiez de l'ensemble de nos solutions business pour booster votre chiffre d'affaire",
            disabled: true,
            path: '#'
        },
        {
            icon: <PresentationChartLineIcon className="h-9 w-9 text-white "/>,
            title: 'Mes Statistiques',
            des: "Consultez vos statistiques",
            disabled: true,
            path: '#'
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center w-[100%] h-[88vh] md:my-28  mx-auto'>
                <div className='flex items-center justify-center  w-[70%] h-84 '>
                {
                    Fit.map((item, index)=>{
                        return(
                            <Link href={item.path}>
                            <div key={index} class={`rounded-lg ml-6 shadow-lg bg-white h-80 w-64 flex flex-col items-center justify-start text-white px-3 pt-6 ${item.disabled == true ? 'cursor-not-allowed':'cursor-pointer'} border-2 border-transparent ring-0 hover:opacity-60 hover:border-orange-500`}>
                                        <div className='h-20 w-20 rounded-full bg-[#005b82] flex items-center justify-center mt-2 mb-4'>
                                        {item.icon}
                                        </div>

                                        <div className='text-xl text-[#005b82] font-semibold text-center'>{item.title}</div>
                                        <div className='text-sm text-gray-500 font-medium break-words text-center my-3'>{item.des}</div>
                            </div>
                            </Link>
                        )
                    })
                }

                </div>

                <div className='flex items-center justify-center w-[70%] h-84 mt-12'>
                {
                    Sit.map((item, index)=>{
                        return(
                            <Link href={item.path}>
                            <div key={index} class={`rounded-lg ml-6 shadow-lg bg-white h-80 w-64 flex flex-col items-center justify-start text-white px-3 pt-6 ${item.disabled == true ? 'cursor-not-allowed':'cursor-pointer'} border-2 border-transparent ring-0 hover:opacity-60 hover:border-orange-500`}>
                                        <div className='h-20 w-20 rounded-full bg-[#005b82] flex items-center justify-center mt-2 mb-4'>
                                        {item.icon}
                                        </div>

                                        <div className='text-xl text-[#005b82] font-semibold text-center'>{item.title}</div>
                                        <div className='text-sm text-gray-500 font-medium break-words text-center my-3'>{item.des}</div>
                            </div>
                            </Link>
                        )
                    })
                }

                </div>
    </div>
  )
}

export default MyKlapeers