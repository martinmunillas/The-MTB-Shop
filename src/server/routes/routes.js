import Home from '../../frontend/pages/Public/Home';
import Cart from '../../frontend/pages/Public/Cart';
import ProductPage from '../../frontend/pages/Public/ProductPage';
import NotFound from '../../frontend/pages/Public/NotFound';
import AdminHome from '../../frontend/pages/Admin/AdminHome';
import AdminCreateProduct from '../../frontend/pages/Admin/AdminCreateProduct';
import AdminProductsList from '../../frontend/pages/Admin/AdminProductsList';
import AdminEditProduct from '../../frontend/pages/Admin/AdminEditProduct';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/cart', component: Cart },
  { exact: true, path: '/product/:productId', component: ProductPage },
  { exact: true, path: '/admin', component: AdminHome, adminRoute: true },
  {
    exact: true,
    path: '/admin/create-product',
    component: AdminCreateProduct,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/product/:productId',
    component: AdminEditProduct,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/products',
    component: AdminProductsList,
    adminRoute: true,
  },
  { component: NotFound },
];

export default routes;
