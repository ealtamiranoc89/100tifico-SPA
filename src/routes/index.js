import Header from '../template/Header';
import home from '../page/home';
import character from '../page/character';
import error404 from '../page/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes [route] ? routes [route] : error404;
    content.innerHTML = await render();
};

export default router;