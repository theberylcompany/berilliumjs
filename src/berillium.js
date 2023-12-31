import {createState, getState} from '../global/statemate.js';
import {Router} from '../spa/router/router.js';
import HomeController from '../spa/controllers/home-controller.js';
import AboutController from '../spa/controllers/about-controller.js';

const router = new Router();
console.log(router.viewRoutes());
console.log(router.viewControllers());
router.addController('/', HomeController);
router.addRoute('about', '/about');
router.addController('/about', AboutController);
router.init();
