import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export interface MediaItem {
  type: "video" | "article";
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface MediaCardsSectionProps {
  mediaData: MediaItem[];
}

const MediaCardsSection: React.FC<MediaCardsSectionProps> = ({ mediaData }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink to-blue bg-clip-text text-transparent">
          Latest Insights & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaData.map((item, index) => (
            <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <Link href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors duration-300">
                      <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                </div>
              </Link>
              <CardContent>
                <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline mt-4 inline-flex items-center">
                  {item.type === "video" ? "Watch Video" : "Read More"}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCardsSection;
