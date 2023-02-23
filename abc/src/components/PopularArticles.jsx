import React from 'react'
import RetroPic from '../assets/images/image-retro-pcs.jpg'
import LaptopPic from '../assets/images/image-top-laptops.jpg'
import GamingPic from '../assets/images/image-gaming-growth.jpg'

const PopularArticles = () => {
  const popularArticles = [
    {
      id: 1,
      image: RetroPic,
      title: 'Reviving Retro PCs',
      value: '01',
      desc: 'What happens when old PCs are given modern upgrades?',
    },
    {
      id: 2,
      image: LaptopPic,
      title: 'Top 10 Laptops of 2022',
      value: '02',
      desc: 'Our best picks for various needs and budgets.',
    },
    {
      id: 3,
      image: GamingPic,
      title: 'The Growth of Gaming',
      value: '03',
      desc: 'How the pandemic has sparked fresh opportunities.',
    },
  ]
  return (
    <section className='w-full'>
      <div className='flex justify-between items-center w-full mt-14'>
        <div className='lg:flex justify-between items-center mx-auto lg:w-4/6 w-[90%]'>
          {popularArticles.map((article) => (
            <div key={article.id} className='flex justify-start lg:mb-20 mb-10'>
              <img
                alt={article.title}
                src={article.image}
                className='w-[100px] h-[150px] object-cover'
              />

              <div className='grid grid-flow-row pl-5'>
                <div className='col-span-12 text-3xl text-[#C5C6CE] font-extrabold'>
                  {article.value}
                </div>
                <div className='col-span-12 font-extrabold text-lg hover:cursor-pointer hover:text-hoverRed'>
                  {article.title}
                </div>
                <div className='col-span-12 text-[#5D5F79]'>{article.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

{
  /* <div className='flex flex-col h-[150px]'>
                                <p className='text-3xl text-[#C5C6CE] font-extrabold'>
                                    {article.value}
                                </p>
                                <h1 className='font-extrabold text-lg hover:cursor-pointer hover:text-hoverRed'>
                                    {article.title}
                                </h1>
                                <p className='text-[#5D5F79]'>
                                    {article.desc}
                                </p>
                            </div> */
}

export default PopularArticles
