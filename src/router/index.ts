import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {isAuthenticated} from "@/authService";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/my-account',
            name: 'my-account',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    try {
        // Call the isAuthenticated function to check if the user is authenticated
        const authenticated = await isAuthenticated();
        if (to.meta.requiresAuth && !authenticated) {
            window.location.href = '/auth/login';
        } else if (to.name === 'home' && authenticated) {
            next({path: '/my-account'});
        } else {
            next();
        }
    } catch
        (error) {
        // Handle any errors that occur during the authentication check
        console.error('Error checking authentication status:', error);
        // Assuming you have some fallback behavior, such as redirecting to an error page
        next('/error');
    }
})

export default router
