'use client';

import Image from 'next/image';
import { MovieDbConfig, getConfig } from '@/lib/movieDb';
import { useState, useCallback, useMemo } from 'react';

interface Props {
  imagePath: string;
  size: string;
  cardType: 'big' | 'small';
};


const Card = (props: Props) => {

  const [config, setConfig] = useState<MovieDbConfig>();

  useMemo(() => {
    getConfig().then((response) => {
      setConfig(response);
    }).catch(e => {
      console.log(e);
    });
  }, [setConfig]);


  const {imagePath, size = 'w500', cardType} = props;

  let imageBaseURL;
  if (config){
    imageBaseURL = config?.images.base_url;
  }
  
  let fullImageUrl = `${imageBaseURL}w${size}${imagePath}`;

  if (!config) {
    return <></>;
  }

  if (!imagePath) {
    return <></>;
  }


  return(
    <div className="hover:opacity-30">
      {cardType === 'big' && 
      <div className="relative w-[388px] h-[217px]">
        <Image 
          src={fullImageUrl} 
          alt='Poster' 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      }
      {cardType === 'small' && 
        <div className="relative w-44 h-72">
          <Image 
            src={fullImageUrl} 
            alt='Poster' 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      }
    </div>
  );
};

export default Card;
