
import LoadableUtils from "../utils/LoadableUtils";
/**
 * 根据数组生成路由数组，主要是根据routeArys中组件的路径动态的导入组件
 * @param {后端返回的路由数组} routeArys 
 */
const createRoutesByReactLoadable = (routeArys) => {
   
    return routeArys.map(routeObj => {

            if (routeObj.children) {
                return ({
                    ...routeObj,
                    component: routeObj.component?LoadableUtils(() => import(`../pages/${routeObj.component}`)):'', // 此处不要在import中全部传入变量，需要拼接
                    children: createRoutesByReactLoadable(routeObj.children)
                })
            }else {
                return ({
                    ...routeObj,
                    component: LoadableUtils(() => import(`../pages/${routeObj.component}`)) // 此处不要在import中全部传入变量，需要拼接
                })
            }
            
        });
    
}


/**
 * 根据数组生成路由数组，主要是根据routeArys中组件的路径动态的导入组件
 * @param {后端返回的路由数组} routeArys 
 */
const createRoutesByRequire = (routeArys) => {
   
    return routeArys.map(routeObj => {

            if (routeObj.children) {
                return ({
                    ...routeObj,
                    component: routeObj.component?require(`../pages/${routeObj.component}`).default:'', // 注意不要在require中全部写变量，需要拼接
                    children: createRoutesByRequire(routeObj.children)
                })
            }else {
                return ({
                    ...routeObj,
                    component: require(`../pages/${routeObj.component}`).default // 注意不要在require中全部写变量，需要拼接
                })
            }
            
        });
    
}



const mainRoutesAry = [{
    path: '/login',
    component: 'Login'
}];

const adminRoutesAry = [{
    path: '/admin/dashboard',
    title: '图表',
    icon: 'AreaChartOutlined',
    component: "admin/dashboard"
},{
    path: '/admin/products',
    exact: true,
    title: '商品管理',
    icon: 'ShopOutlined',
    children:[
        {
            path: '/admin/products/List',
            component: "admin/products/List",
            exact: true,
            title: '商品列表',
        },
        {
            path: '/admin/products/edit/:id',
            component: "admin/products/Edit",
            title: '商品编辑',
        }
    ]
}];

/**
 * 导出路由数组
 */
export const mainRoutes = createRoutesByReactLoadable(mainRoutesAry)
/**
 * 导出路由数组
 */
export const adminRoutes = adminRoutesAry
