import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        per_page: 12,
        key: '32251889-012bd425bd22f22695bb0cdce',
    }
})

 const searchImages = async (q, page=1) => {
    const { data } = await instanse.get('/', {
        params: {
            q,
            page,
            image_type: 'photo',
            orientation: 'horizontal',
        }
    });
    console.log(data);
    return data;
}
export default searchImages;