import React from 'react'

export const CustomLoder = () => {
    return (
        <div>
            <div class="loading fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-30 text-red-900">
                <div class="loader animate-bounce">
                    <div className="flex justify-center items-center">
                        <i class="fa-solid fa-droplet"></i>
                        <i class="fa-solid fa-droplet"></i>
                        <i class="fa-solid fa-droplet"></i>
                    </div>
                    <div className="flex justify-center items-center">
                        <i class="fa-solid fa-droplet"></i>
                        <i class="fa-solid fa-droplet"></i>
                    </div>
                    <div className="flex justify-center items-center">
                        <i class="fa-solid fa-droplet"></i>
                    </div>    
                </div>
            </div>
        </div>
    )
}
