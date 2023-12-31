"use client";

import { MovieDbConfig, MovieList, getConfig } from "@/lib/movieDb";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

interface Props {
  content: any;
  variant: 'big' | 'small';
};

interface Content {
  results: [MovieList];
}

const Block = (props: Props) => {

  const { content, variant = null } = props;
  const [currentContent, setCurrentContent] = useState<Content | null>(null);

  useEffect(() => {
    setCurrentContent(content);
  }, [content]);

  if (!currentContent) {
    return <></>;
  }

  console.log(currentContent);

  return(
    <>
      {currentContent.results.map((item: MovieList, index: number) => {
        if(variant === 'big' && index >= 2) {
          return;
        }
        if(index >= 5 ) {
          return;
        }
        return(
          <div key={index} className="relative">
            <label 
              className="flex bg-slate-500 text-white absolute w-full h-full text-center items-center justify-center"
            >
              {item.title}
            </label>
            <Card
              imagePath={variant === 'small' ? item.poster_path : item.backdrop_path} 
              size='500' 
              cardType={variant || 'small'}
            />
          </div>
        );
      })}
    </>
  );
};

export default Block;
