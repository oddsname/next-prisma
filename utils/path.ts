import path from "path"

export const PUBLIC_PATH = () => {
    return path.join(process.cwd(), 'public')
}

export const IMAGE_PATH = () => {
    return path.join(PUBLIC_PATH(), 'images')
}

export const GENERATE_IMAGE_PATH = (fileName: string) => {
    return path.join(IMAGE_PATH(), fileName);
}

export const GENERATE_IMAGE_URL = (imagePath: string) => {
    return "/" + imagePath.substring(imagePath.indexOf('images')).replaceAll('\\', '/');
}