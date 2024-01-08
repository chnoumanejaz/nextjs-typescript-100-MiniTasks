'use client';
import { solutionsType } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

interface SolutionCardProps {
  solution: solutionsType;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const { description, icon, path, serial, title, type } = solution;
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -3 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: serial * 0.05 }}
      className="w-[16rem] h-[10rem] py-4 px-4 relative bg-gradient-to-br from-violet-50 hover:from-violet-100 to-white border rounded-md cursor-pointer hover:shadow-md hover:border-violet-300 group transition-all duration-300"
      onClick={() => router.push(path)}>
      <div className="flex items-center justify-between gap-3">
        <small className="w-[1.5rem] h-[1.5rem] bg-violet-200 rounded-full border border-violet-600 p-1 flex items-center justify-center">
          {serial > 9 ? serial : `0${serial}`}
        </small>
        <Icon
          icon="line-md:arrow-up"
          width={22}
          height={22}
          className="group-hover:translate-x-2 rotate-90 md:opacity-0 md:group-hover:opacity-100  transition-all duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <small className="text-white py-0 tracking-wide bg-violet-400 border group-hover:border-violet-600 border-transparent transition rounded-md px-1 w-fit">
            {type}
          </small>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <Icon
        icon={icon}
        width={70}
        height={70}
        className="absolute right-0 bottom-1 opacity-10 -rotate-12 group-hover:-rotate-0 transition-transform duration-300 "
      />
    </motion.div>
  );
};

export default SolutionCard;
