import React from 'react';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string; // This prop is kept to match the data structure, but it won't be used directly for the link's href anymore.
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description }) => {
  return (
    <div className='card-glass'>
      <h3 className='text-2xl font-bold mb-4'>{title}</h3>
      <p className='flex-grow'>{description}</p>
      <Link href='/portfolio/coming-soon' className='btn-secondary mt-6 self-center'>
        View Project
      </Link>
    </div>
  );
};

export default PortfolioCard;
