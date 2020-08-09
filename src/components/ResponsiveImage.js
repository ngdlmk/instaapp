import React from "react"
import { Image } from "react-native"

const ResponsiveImage = ({imgSource, imgWidth, opacity}) => {
    const { width, height } = Image.resolveAssetSource(imgSource)
    const ratioWH = width / height

    return (
        <Image 
            source={imgSource}
            style={{
                width: imgWidth,
                height: imgWidth / ratioWH,
                opacity: opacity
            }}
        />
    )
}

export default ResponsiveImage