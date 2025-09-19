'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const AppGallery = () => {
    const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null);

    const playStoreImages = [
        { id: 1, src: '/images/play-store-images/play-store-1.jpg', alt: 'App Screenshot 1' },
        { id: 2, src: '/images/play-store-images/play-store-2.jpg', alt: 'App Screenshot 2' },
        { id: 3, src: '/images/play-store-images/play-store-3.jpg', alt: 'App Screenshot 3' },
        { id: 4, src: '/images/play-store-images/play-store-4.jpg', alt: 'App Screenshot 4' },
        { id: 5, src: '/images/play-store-images/play-store-5.jpg', alt: 'App Screenshot 5' }
    ];

    const openModal = (image: { id: number; src: string; alt: string }) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-2">App Gallery</h2>
                    <p className="text-gray-600">See Last Bite Eats in action - just like in the Play Store</p>
                </div>

                {/* Horizontal Scrolling Gallery */}
                <div className="relative">
                    {/* Scroll container */}
                    <div className="flex gap-6 overflow-x-auto lg:justify-center scrollbar-hide pb-4 snap-x snap-mandatory">
                        {playStoreImages.map((image) => (
                            <div 
                                key={image.id}
                                className="flex-shrink-0 snap-center cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                <div className="relative w-48 h-96 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={1024}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 192px, 192px"
                                    />
                                    {/* Subtle overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                                    {/* Click indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                                        <div className="bg-black/50 rounded-full p-2">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Scroll indicators (optional) */}
                    <div className="flex justify-center mt-4 gap-2">
                        {playStoreImages.map((_, index) => (
                            <div 
                                key={index}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Additional info */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        Swipe to explore more screenshots • Available on Google Play Store
                    </p>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative flex items-center justify-center">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 -right-12 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal image - same dimensions as gallery cards */}
                        <div 
                            className="relative w-48 h-96 bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-cover"
                                sizes="192px"
                                priority
                            />
                            {/* Subtle overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Image counter */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {selectedImage.id} / {playStoreImages.length}
                        </div>
                    </div>
                </div>
            )}

            {/* Custom scrollbar styles */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default AppGallery;