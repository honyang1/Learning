/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: 'login'
      }
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: 'main'
      }
    }
  ]