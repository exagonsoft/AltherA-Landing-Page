import React, { useState } from 'react';
import "./style.css"

const AccordionItem = (props) => {
  const { title, content, isActive, onClick } = props;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-2 px-4 bg-cyan-600 rounded-xl mb-2 cursor-pointer transition-all hover:shadow-glow" onClick={onClick}>
        <span>{title}</span>
        <svg className={`h-6 w-6 transform ${isActive ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
          <path fill="currentColor" d="M9 16.2426L12 13.2426L15 16.2426L16.2426 15L12 10.7574L7.75736 15L9 16.2426Z" />
        </svg>
      </div>
      <div className={`overflow-hidden flex justify-center ${isActive ? 'max-h-full transition-max-h duration-300 ease-out' : 'max-h-0 transition-max-h duration-500 ease-in'}`}>
        <div className={`px-4 w-[98%] py-2 bg-gradient-to-tr from-blue-600 to-violet-700 rounded-xl mb-2 GlowingShadow `}>{content}</div>
      </div>
    </div>
  );
};


const ExAccordion = (props) => {
  const { textList, titleKey, contentKey } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='flex flex-col w-full'>
      {textList.map((section, index) => (
        <AccordionItem
          key={index}
          title={section[titleKey]}
          content={section[contentKey]}
          isActive={activeIndex === index}
          onClick={() => handleTitleClick(index)}
        />
      ))}
    </div>
  );
};

ExAccordion.defaultProps = {
  titleKey: 'title',
  contentKey: 'content',
};

export default ExAccordion;